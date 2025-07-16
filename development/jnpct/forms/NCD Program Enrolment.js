{
  "name": "NCD Program Enrolment",
  "uuid": "2a41f32b-b9b3-4482-b4fa-895909046920",
  "formType": "ProgramEnrolment",
  "formElementGroups": [
    {
      "uuid": "3459e706-82b0-4772-b94f-d629e9793fee",
      "name": "Program Details",
      "displayOrder": 1,
      "formElements": [],
      "display": "Program Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const HYPERTENSION_CONCEPT = '08a08802-97b2-43d3-8757-16a3b4ecf3c8';
  const BLOOD_SUGAR_CONCEPT = '5666b393-d450-4865-8127-205559a6b1be';
  const SEVERE_HYPERTENSION_GRADES = ['Grade Two', 'Grade Three', 'Grade Four', 'Grade Five', 'Grade Six'];
  const ENCOUNTER_TYPE = 'NCD Followup';
  
  const programEnrolment = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEnrolment
  });
  const moment = imports.moment;
  
  function getObsValue(observations, conceptUuid) {
    if (!observations || !Array.isArray(observations)) return null;
    for (var i = 0; i < observations.length; i++) {
      var obs = observations[i];
      if (obs && obs.concept && obs.concept.uuid === conceptUuid) {
        try {
          var valueData = JSON.parse(obs.valueJSON || '{}');
          return valueData.value !== undefined ? valueData.value : 
                 valueData.answer !== undefined ? valueData.answer : null;
        } catch (e) {
          return null;
        }
      }
    }
    return null;
  }

  const latestScreening = programEnrolment.individual.encounters
    .filter(function(e) { 
      return e.encounterType && e.encounterType.name === 'Screening Form'; 
    })
    .sort(function(a, b) { 
      return moment(b.encounterDateTime).diff(moment(a.encounterDateTime)); 
    })[0];

  if (!latestScreening) return [];
  
  const screeningDateTime = latestScreening.encounterDateTime;
  const hypertensionGrade = getObsValue(latestScreening.observations, HYPERTENSION_CONCEPT);
  const randomBloodSugar = parseFloat(getObsValue(latestScreening.observations, BLOOD_SUGAR_CONCEPT));
  
  const getHypertensionConfig = (grade) => ({
    'Grade Two': { minDays: 180, maxDays: 210 },
    'Grade Three': { minDays: 60, maxDays: 75 },
    'Grade Four': { minDays: 30, maxDays: 45 },
    'Grade Five': { minDays: 7, maxDays: 15 },
    'Grade Six': { minDays: 3, maxDays: 7 }
  }[grade] || { minDays: 365, maxDays: 395 });
  
  const getDiabetesConfig = (sugarLevel) => 
    sugarLevel > 200 ? { minDays: 15, maxDays: 30 } : { minDays: 60, maxDays: 75 };
  
  const scheduleFollowUp = (name, config, isYearly = false) => {
    const days = isYearly ? 365 : config.minDays;
    const maxDays = isYearly ? 395 : config.maxDays;
    
    scheduleBuilder.add({
      name,
      encounterType: ENCOUNTER_TYPE,
      earliestDate: moment(screeningDateTime).add(days, 'days').startOf('day').toDate(),
      maxDate: moment(screeningDateTime).add(maxDays, 'days').endOf('day').toDate()
    });
  };
  
  const hasHighSugar = !isNaN(randomBloodSugar) && randomBloodSugar >= 150;
  const isSevereHypertension = hypertensionGrade && SEVERE_HYPERTENSION_GRADES.includes(hypertensionGrade);
  
  // Only schedule one type of follow-up
  if (hasHighSugar && isSevereHypertension) {
    // Combined follow-up - take the more urgent of the two conditions
    const diabetesConfig = getDiabetesConfig(randomBloodSugar);
    const hypertensionConfig = getHypertensionConfig(hypertensionGrade);
    const combinedConfig = hypertensionConfig.minDays <= diabetesConfig.minDays 
      ? hypertensionConfig 
      : diabetesConfig;
    
    scheduleFollowUp('FollowUp-Combined', combinedConfig);
  } 
  else if (hasHighSugar) {
    // Diabetes only follow-up
    const diabetesConfig = getDiabetesConfig(randomBloodSugar);
    scheduleFollowUp('FollowUp-Diabetes', diabetesConfig);
  }
  else if (hypertensionGrade === 'Grade One' && (!hasHighSugar || randomBloodSugar < 150)) {
    // Yearly checkup for Grade One hypertension with normal blood sugar
    scheduleFollowUp('Yearly-Combined', {}, true);
  }
  else if (hypertensionGrade) {
    // Other hypertension grades follow-up
    const config = getHypertensionConfig(hypertensionGrade);
    scheduleFollowUp('FollowUp-Hypertension', config);
  }
  
  return scheduleBuilder.getAll();
}
,
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}