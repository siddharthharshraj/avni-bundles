{
  "name": "Program Encounter Cancellation Form",
  "uuid": "406738d4-c96c-498c-99e7-4389cb454d5c",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "724168bb-0567-410a-8c53-0fcd3b5ff36a",
      "name": "Cancel Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Cancel reason",
          "uuid": "8a485cfe-9c24-467e-8a4b-158909953d4d",
          "keyValues": [],
          "concept": {
            "name": "Visit cancel reason",
            "uuid": "0066a0f7-c087-40f4-ae44-a3e931967767",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Field Worker is on Leave",
                "uuid": "378d582c-8da6-4ec4-a676-f05fae2f2f7b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Hospitalization",
                "uuid": "47a1cc61-cc0d-446c-b021-31207c16e572",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Child Death",
                "uuid": "cbb0969c-c7fe-4ce4-b8a2-670c4e3c5039",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Maternal Death",
                "uuid": "655722fa-5764-432b-8559-ec9948369178",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Temporary migration",
                "uuid": "5c8c4ffe-d818-4d9f-9341-fc6ffdf58f8a",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Out of Village",
                "uuid": "52e2c882-e44f-4915-b099-e4138207d84c",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Permanent Migration",
                "uuid": "edc26b08-3b8c-42f1-bc45-77b4649b3d86",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
          
  const program = programEncounter.programEnrolment.program.name;
  console.log('programName',programEncounter.programEnrolment.program.name);

  if(program == 'Child'){
     statusBuilder.skipAnswers("Maternal Death");
     }
  else if(program == 'Eligible couple' || program === 'Pregnancy'){
     statusBuilder.skipAnswers("Child Death");
     }
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Other reason",
          "uuid": "52b0c453-13c4-4ad9-a18a-06934be4c852",
          "keyValues": [],
          "concept": {
            "name": "Other reason for cancelling",
            "uuid": "fadd881a-beed-47ea-a4d6-700009a61a32",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule": ""use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const formElement = params.formElement;
    
const cancelReasonObs = programEncounter.findCancelEncounterObservation('Visit cancel reason');
const answer = _.isNil(cancelReasonObs) ? undefined : cancelReasonObs.getReadableValue();  

let isVisible = false;
if (answer == 'Other') 
  isVisible = true;
 
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, isVisible);
  },
          "mandatory": true
        },
        {
          "name": "Place of death",
          "uuid": "9e9612b0-74e5-40e8-9e8a-18196cced047",
          "keyValues": [],
          "concept": {
            "name": "Place of death",
            "uuid": "dde645f5-0f70-45e9-a670-b7190c86c981",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Home",
                "uuid": "8cfae1cd-3e75-40e9-9244-6d083c0d86f7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "On the way",
                "uuid": "0c773b70-4b20-4713-a45c-c0f3b39db87f",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Hospital",
                "uuid": "fcca20e2-f837-4b78-a52f-1d187bca389a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule": ""use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const formElement = params.formElement;
    
const cancelReasonObs = programEncounter.findCancelEncounterObservation('Visit cancel reason');
const answer = _.isNil(cancelReasonObs) ? undefined : cancelReasonObs.getReadableValue();  

let isVisible = false;
if (answer == 'Child Death' || answer == 'Maternal Death') 
  isVisible = true;
 
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, isVisible);
  },
          "mandatory": false
        },
        {
          "name": "Date of death",
          "uuid": "fc40eef6-2592-4a17-a806-9483fefd2ff7",
          "keyValues": [],
          "concept": {
            "name": "Date of death",
            "uuid": "3b269f11-ed0a-4636-8273-da0259783214",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule": ""use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const formElement = params.formElement;
    
const cancelReasonObs = programEncounter.findCancelEncounterObservation('Visit cancel reason');
const answer = _.isNil(cancelReasonObs) ? undefined : cancelReasonObs.getReadableValue();  

let isVisible = false;
if (answer == 'Child Death' || answer == 'Maternal Death') 
  isVisible = true;
 
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, isVisible);
  },
          "mandatory": false
        },
        {
          "name": "Reason of death",
          "uuid": "418b2074-2216-4150-8c05-13566b732862",
          "keyValues": [],
          "concept": {
            "name": "Reason of death",
            "uuid": "7c88aea6-dfed-451e-a086-881e2dcfd85f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Birth",
                "uuid": "09843fd1-7122-480a-8a46-613eaffb9fe5",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Preterm",
                "uuid": "7f9eac8f-5383-4def-b180-70e7221bcc91",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Malnutrition",
                "uuid": "1ec7fd82-07a9-4adb-89a4-f5a8c1fbebd5",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Prolong labour",
                "uuid": "7f736089-d245-4116-aa9d-70219a4e1e70",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Sepsis",
                "uuid": "a6a6df4b-b516-4467-a7a9-d3345dc768a2",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Unsafe abortion",
                "uuid": "11ff102f-5825-4593-9c79-bbb4015fbd15",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Asphyxia",
                "uuid": "68383d44-5205-40c3-8cbb-17f37d4ab92f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Socially neglected",
                "uuid": "b4f96ea7-0d97-49ab-893f-2d68ae4ce003",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Birth injury",
                "uuid": "eff57b87-cccb-48c2-9548-8e164a9e8fda",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Eclampsia",
                "uuid": "0453529c-fa0b-4e1b-b629-bc2d01a0d495",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "Malaria",
                "uuid": "59bbe194-20a5-484f-8fc8-7c29bf97aefb",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Maleria",
                "uuid": "39e916c8-214f-477b-b7c3-167403a92c4c",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Diarrhea",
                "uuid": "cca7b3c9-53e3-4c5e-840d-b30509d31e1f",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Delay",
                "uuid": "66228873-248d-4f80-a2f8-125b13ab5538",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Low birth weight",
                "uuid": "9b7e8550-7ad7-4a7a-b223-eec5a900c289",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Pnuemonia",
                "uuid": "416a71eb-fdc3-4ddc-b77b-32bf4b0f3228",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Congenital abnormalities",
                "uuid": "312ff540-e4f7-4c29-8529-f0c8f90714df",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Obstructed labour",
                "uuid": "8705af3c-6466-424b-964c-3017b3865dc0",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "APH",
                "uuid": "56331346-a084-4205-88e1-acc7fcb9faee",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "PPH",
                "uuid": "6308907f-0238-4916-bbda-d44e8b439b63",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              }
            ],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule": ""use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const formElement = params.formElement;
    
const cancelReasonObs = programEncounter.findCancelEncounterObservation('Visit cancel reason');
const answer = _.isNil(cancelReasonObs) ? undefined : cancelReasonObs.getReadableValue();  

let isVisible = false;
if (answer == 'Child Death' || answer == 'Maternal Death') 
  isVisible = true;
  
const status = new imports.rulesConfig.FormElementStatus(formElement.uuid, isVisible);
    
const programName = programEncounter.programEnrolment.program.name;
    
if(programName === 'Child')
    status.answersToSkip = [formElement.getAnswerWithConceptName("APH"),
    formElement.getAnswerWithConceptName("PPH")
    ,formElement.getAnswerWithConceptName("Sepsis")
    ,formElement.getAnswerWithConceptName("Unsafe abortion")
    ,formElement.getAnswerWithConceptName("Obstructed labour")
    ,formElement.getAnswerWithConceptName("Prolong labour")
    ,formElement.getAnswerWithConceptName("Eclampsia")
    ,formElement.getAnswerWithConceptName("Delay")];
else if(programName === 'Pregnancy' || programName === 'Eligible couple')
  status.answersToSkip = [formElement.getAnswerWithConceptName("Low birth weight"),
    formElement.getAnswerWithConceptName("Birth")
    ,formElement.getAnswerWithConceptName("Birth injury")
    ,formElement.getAnswerWithConceptName("Asphyxia")
    ,formElement.getAnswerWithConceptName("Preterm")
    ,formElement.getAnswerWithConceptName("Diarrhea")
    ,formElement.getAnswerWithConceptName("Pnuemonia")
    ,formElement.getAnswerWithConceptName("Malnutrition")
    ,formElement.getAnswerWithConceptName("Congenital abnormalities")
    ,formElement.getAnswerWithConceptName("Socially neglected")
    ,formElement.getAnswerWithConceptName("Malaria")];

       
 
  return status;
  },
          "mandatory": true
        }
      ],
      "display": "Cancel Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const programEncounter = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEncounter
  });
  
  const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;
  
  const getEarliestEncounterDate = (programEncounter) =>
    imports.moment(programEncounter.earliestVisitDateTime)
        .startOf("day")
        .toDate();
        
  let visitDate = programEncounter.encounterDateTime || getEarliestEncounterDate(programEncounter);
  
  const nutritionalStatus = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Nutritional status of child') || programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Current nutritional status according to weight and age');
  
let birthWeight = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Birth Weight');
  

const currentWeight = !_.isEqual(programEncounter.programEnrolment.findLatestObservationInEntireEnrolment('Weight'), undefined) ?
 programEncounter.programEnrolment.findLatestObservationInEntireEnrolment('Weight').getReadableValue() : 0;
 

    const ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();
    const birthDate = programEncounter.programEnrolment.individual.dateOfBirth;

  
  const encounterScheduleAbortionFollowup = [
    {"name": "Abortion Followup Visit-2", "earliest": 28, "max": 36},
    {"name": "Abortion Followup Visit-3", "earliest": 50, "max": 61}
];

const encounterScheduleANC = [
    {"name": "ANC 2", "earliest": 168, "max": 197},
    {"name": "ANC 3", "earliest": 203, "max": 253}
];

const encounterScheduleHighRiskANC = [
    {"name": "ANC 2", "earliest": 112, "max": 123},
    {"name": "ANC 3", "earliest": 168, "max": 179},
    {"name": "ANC 4", "earliest": 196, "max": 207},
    {"name": "ANC 5", "earliest": 224, "max": 235},
];

const encounterScheduleANCClusterIncharge = [
    {"name": "ANC Cluster Incharge-1", "earliest": 148, "max": 169},
    {"name": "ANC Cluster Incharge-2", "earliest": 204, "max": 225}
];

const encounterScheduleChildFollowup = [
    {"name": "Child Followup-1", "earliest": 110, "max": 10},
    {"name": "Child Followup-2", "earliest": 160, "max": 8}
];

const encounterScheduleChildFollowupCluster = [
    {"name": "Child Followup Cluster Incharge-1", "earliest": 99, "max": 113},
    {"name": "Child Followup Cluster Incharge-2", "earliest": 155, "max": 169}
];

 const encounterSchedulePNC = [
    {"name": "PNC 2", "earliest": 28, "max": 36},
    {"name": "PNC 3", "earliest": 50, "max": 61}
];

 const encounterScheduleChildPNC = [
    {"name": "Child PNC 1", "earliest": 0, "max": 8},
    {"name": "Child PNC 2", "earliest": 28, "max": 36},
    {"name": "Child PNC 3", "earliest": 50, "max": 61}
];

const scheduleVisitsDuringECFollowup = () => {
    const isPregnant = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Is She Pregnant?');
    if (!_.isEqual(isPregnant, 'Yes') && !hasExitedProgram(programEncounter)) {
    
    const followupDate = imports.moment(programEncounter.earliestVisitDateTime).add(2, 'months').toDate();
    const maxFollowupDate = imports.moment(followupDate).add(15, 'days').toDate();
    
        scheduleBuilder.add({
            name: 'Eligible Couple Followup',
            encounterType: 'Eligible Couple Followup',
            earliestDate: followupDate,
            maxDate: maxFollowupDate
        });
    }
};

const scheduleVisitsDuringAbortionFollowup = () => {
    const abortionDate = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Date of Abortion/MTP');   
     
    if (!hasExitedProgram(programEncounter)) {
      var schedule = _.chain(encounterScheduleAbortionFollowup)
        .filter(e => imports.moment(visitDate)
        .isSameOrBefore(imports.moment(abortionDate).add(e.max, 'days').toDate(), 'date') === true)
        .filter(e => (programEncounter.programEnrolment.hasEncounter('Abortion Followup', e.name)) === false)
        .first()
        .value();       

        if (!_.isEmpty(schedule)) {        
         const earliestVisitDate = imports.moment(abortionDate).add(schedule.earliest, 'days').toDate();
         const maxVisitDate = imports.moment(abortionDate).add(schedule.max, 'days').toDate();    
            
         scheduleBuilder.add({
                name: schedule.name,
                encounterType: 'Abortion Followup',
                earliestDate: earliestVisitDate,
                maxDate: maxVisitDate
            });
        }
    }
};

const scheduleVisitsDuringANCClusterIncharge = () => {
   const lmpDate = programEncounter.programEnrolment.getObservationValue('Last menstrual period');
   
    var schedule = _.chain(encounterScheduleANCClusterIncharge)
      .filter(e => imports.moment(visitDate)
      .isSameOrBefore(imports.moment(lmpDate).add(e.earliest, 'days').toDate(), 'date') === true)
      .filter(e => (programEncounter.programEnrolment.hasEncounter('ANC Cluster Incharge', e.name)) === false)
      .first()
      .value();      
        
    if (!_.isEmpty(schedule)) {
       const earliestVisitDate = imports.moment(lmpDate).add(schedule.earliest, 'days').toDate();
       const maxVisitDate = imports.moment(earliestVisitDate).add(21, 'days').toDate();
        
        scheduleBuilder.add({
            name: schedule.name,
            encounterType: 'ANC Cluster Incharge',
            earliestDate: earliestVisitDate,
            maxDate: maxVisitDate
        });
    }
}; 


const scheduleVisitsDuringANC = () => {
    const lmpDate = programEncounter.programEnrolment.getObservationValue('Last menstrual period');
    const highRiskANC = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('High Risk Conditions');
    
       if (!hasExitedProgram(programEncounter)) {
        var encounterSchedule = encounterScheduleANC;
        if (highRiskANC) {
         encounterSchedule = encounterScheduleHighRiskANC;
         scheduleVisitsDuringANCClusterIncharge();
        }
        var schedule = _.chain(encounterSchedule)
            .filter(e => imports.moment(visitDate)
            .isSameOrBefore(imports.moment(lmpDate).add(e.earliest, 'days').toDate(), 'date') === true)
            .filter(e => (programEncounter.programEnrolment.hasEncounter('ANC', e.name)) === false)
            .first()
            .value();

        if (!_.isEmpty(schedule)) {
            
       const earliestVisitDate = imports.moment(lmpDate).add(schedule.earliest, 'days').toDate();
       const maxVisitDate = imports.moment(earliestVisitDate).add(11, 'days').toDate();
        
        scheduleBuilder.add({
            name: schedule.name,
            encounterType: 'ANC',
            earliestDate: earliestVisitDate,
            maxDate: maxVisitDate
          });
        }
    }
};

const scheduleVisitsDuringPNC = () => {
    const deliveryDate = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Date of delivery');

    if (!hasExitedProgram(programEncounter)) {          
      var schedule = _.chain(encounterSchedulePNC)
            .filter(e => imports.moment(visitDate)
            .isSameOrBefore(imports.moment(deliveryDate).add(e.earliest, 'days').toDate(), 'date') === true)
            .filter(e => (programEncounter.programEnrolment.hasEncounter('PNC', e.name)) === false)
            .first()
            .value();
    
      if (!_.isEmpty(schedule)) {
      const earliestVisitDate = imports.moment(deliveryDate).add(schedule.earliest, 'days').toDate();
      const maxVisitDate = imports.moment(deliveryDate).add(schedule.max, 'days').toDate();
       
         scheduleBuilder.add({
                name: schedule.name,
                encounterType: 'PNC',
                earliestDate: earliestVisitDate,
                maxDate: maxVisitDate
            });
        }        
    }
};

const scheduleChildPNCVisitsNormal = () => {
    var schedule = _.chain(encounterScheduleChildPNC)
        .filter(e => imports.moment(visitDate)
        .isSameOrBefore(imports.moment(birthDate).add(e.earliest, 'days').toDate(), 'date') === true)
        .filter(e => (programEncounter.programEnrolment.findEncounter('Child PNC', e.name)) < 1)
        .first()
        .value();

    if (!_.isEmpty(schedule)) {
        const followupDate = imports.moment(birthDate).add(schedule.earliest, 'days').toDate();
        const followupOverdueDate = imports.moment(followupDate).add(schedule.max, 'days').toDate();

        scheduleBuilder.add({
            name: schedule.name,
            encounterType: 'Child PNC',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });
    }
};

const schedulePNCVisitsDuringBirth = () => {   
    if (!hasExitedProgram(programEncounter)) {
           scheduleChildPNCVisitsNormal();

        if (programEncounter.programEnrolment.hasEncounter('Child Followup', 'Child Followup-1')) return;
        else if (imports.moment(visitDate)
        .isSameOrBefore(imports.moment(birthDate).add(110, 'days').toDate(), 'date')){
        
             scheduleBuilder.add({
                name: 'Child Followup-1',
                encounterType: 'Child Followup',
                earliestDate: imports.moment(birthDate).add(110, 'days').toDate(),
                maxDate: imports.moment(visitDate).add(120, 'days').toDate()
            });
        }
    }
};


const scheduleVisitsDuringBirth = (programEncounter, scheduleBuilder) => {
         if (birthWeight < 2) {
        if (ageOfChildInMonths < 2) {
        
            scheduleBuilder.add({
                name: 'Child PNC',
                encounterType: 'Child PNC',
                earliestDate: visitDate,
                maxDate: imports.moment(visitDate).add(4, 'days').toDate()
            });
            
            scheduleBuilder.add({
                name: 'Child PNC Cluster Incharge-1',
                encounterType: 'Child PNC Cluster Incharge',
                earliestDate: visitDate,
                maxDate: imports.moment(visitDate).add(8, 'days').toDate()
            });
            
            scheduleBuilder.add({
                name: 'Child Followup',
                encounterType: 'Child Followup',
                earliestDate: imports.moment(visitDate).add(7, 'days').toDate(),
                maxDate: imports.moment(visitDate).add(10, 'days').toDate()
            });
        
        }
    } else {
        schedulePNCVisitsDuringBirth();
    }
};
const scheduleChildPNCVisitsLowBirthWeight = () => {
    if (programEncounter.programEnrolment.hasEncounter('Birth Form', 'Birth Form')) {
        const birthEncounterDate = programEncounter.programEnrolment.findEncounter('Birth Form', 'Birth Form').earliestVisitDateTime;
        
        let earliestOffset = 7;
        let visitCount = 0;
        do {
            visitCount++;
            earliestOffset = 7 * visitCount;
        } while (!(imports.moment(programEncounter.earliestVisitDateTime)
        .isBefore(imports.moment(birthEncounterDate).add(earliestOffset, 'days').toDate(), 'date')));
        //isSameOrBefore
        const followupDate = imports.moment(birthEncounterDate).add(earliestOffset, 'days').toDate();
        const followupOverdueDate = imports.moment(followupDate).add(4, 'days').toDate();

        scheduleBuilder.add({
                name: 'Child PNC',
                encounterType: 'Child PNC',
                earliestDate: followupDate,
                maxDate: followupOverdueDate
        });
    }
};

const scheduleChildFollowupClusterInchargeVisits = () => {
   
    var schedule = _.chain(encounterScheduleChildFollowupCluster)
      .filter(e => imports.moment(visitDate)
      .isSameOrBefore(imports.moment(birthDate).add(e.earliest, 'days').toDate(), 'date') === true)
      .filter(e => (programEncounter.programEnrolment
      .hasEncounter('Child Followup Cluster Incharge', e.name)) === false)
      .first()
      .value();

    if (!_.isEmpty(schedule)) {
          scheduleBuilder.add({
            name: schedule.name,
            encounterType: 'Child Followup Cluster Incharge',
            earliestDate: imports.moment(birthDate).add(schedule.earliest, 'days').toDate(),
            maxDate: imports.moment(birthDate).add(schedule.max, 'days').toDate()
        });
    }
};

const scheduleVisitsDuringChildPNC = () => {
   if (!hasExitedProgram(programEncounter)) {
      
    if (birthWeight >= 2 || currentWeight >= 2) {
            scheduleChildPNCVisitsNormal();
        } else if (birthWeight < 2 && ageOfChildInMonths < 2)
            scheduleChildPNCVisitsLowBirthWeight();

    if (!_.isEqual(nutritionalStatus, 'Normal') && ageOfChildInMonths >= 2 && ageOfChildInMonths <= 6)
            scheduleChildFollowupClusterInchargeVisits();
    }
    
    var encName = programEncounter.name;
\t\tif (_.isEqual(encName, 'Child PNC 3')) {
\t\t\tlet followupDate = imports.moment(birthDate).add(110, 'days').toDate();
\t\t\tlet followupOverdueDate = imports.moment(followupDate).add(10, 'days').toDate();

\t\t\tscheduleBuilder.add({
\t\t\t\tname: 'Child Followup-1',
\t\t\t\tencounterType: 'Child Followup',
\t\t\t\tearliestDate: followupDate,
\t\t\t\tmaxDate: followupOverdueDate
\t\t\t});

\t\t}

};

const scheduleVisitsDuringChildPNCClusterIncharge = () => {
    if (programEncounter.programEnrolment.hasEncounter('Child PNC Cluster Incharge',
  'Child PNC Cluster Incharge-1') && imports.moment(visitDate)
  .isSameOrBefore(imports.moment(birthDate).add(61, 'days').toDate(), 'date')) {
         
        const followupDate = imports.moment(birthDate).add(47, 'days').toDate();
        const followupOverdueDate = imports.moment(followupDate).add(14, 'days').toDate();

             scheduleBuilder.add({
                  name: 'Child Followup Cluster Incharge-2',
                  encounterType: 'Child Followup Cluster Incharge',
                  earliestDate: followupDate,
                  maxDate: followupOverdueDate
            });
        }
};

const scheduleVisitsDuringChildFollowupClusterIncharge = () => {
    if (!hasExitedProgram(programEncounter) && !_.isEqual(nutritionalStatus, 'Normal')) {
        if (ageOfChildInMonths > 2 && ageOfChildInMonths < 6 && !programEncounter.programEnrolment.hasEncounter('Child Followup Cluster Incharge', 'Child Followup Cluster Incharge-2')){               
             const followupDate = imports.moment(birthDate).add(155, 'days').toDate();
             const followupOverdueDate = imports.moment(followupDate).add(14, 'days').toDate();

             scheduleBuilder.add({
                  name: 'Child Followup Cluster Incharge-2',
                  encounterType: 'Child Followup Cluster Incharge',
                  earliestDate: followupDate,
                  maxDate: followupOverdueDate
            });
        }else if (ageOfChildInMonths <= 60) {
              if(_.isEqual(nutritionalStatus,'Severely Underweight') || 
                _.isEqual(nutritionalStatus,'SAM')){
                
             const followupDate = imports.moment(visitDate).add(1, 'months').toDate();
             const followupOverdueDate = imports.moment(followupDate).add(8, 'days').toDate();

             scheduleBuilder.add({
                  name: 'Child Followup Cluster Incharge',
                  encounterType: 'Child Followup Cluster Incharge',
                  earliestDate: followupDate,
                  maxDate: followupOverdueDate
              });
          }
              if(_.isEqual(nutritionalStatus,'Moderately Underweight') || 
                _.isEqual(nutritionalStatus,'MAM')){
                
             const followupDate = imports.moment(visitDate).add(4, 'months').toDate();
             const followupOverdueDate = imports.moment(followupDate).add(8, 'days').toDate();

             scheduleBuilder.add({
                  name: 'Child Followup Cluster Incharge',
                  encounterType: 'Child Followup Cluster Incharge',
                  earliestDate: followupDate,
                  maxDate: followupOverdueDate
              });
          }   
      }       
} 
};

const scheduleFollowupVisitsDuringFollowupForLowBirthWeight = () => {
    if (programEncounter.programEnrolment.hasEncounter('Birth Form', 'Birth Form')) {
        const birthEncounterDate = programEncounter.programEnrolment
        .findEncounter('Birth Form', 'Birth Form').earliestVisitDateTime;
        
        let earliestOffset = 7;
        let visitCount = 0;
        do {
            visitCount++;
            earliestOffset = 7 * visitCount;
        } while (!(imports.moment(programEncounter.earliestVisitDateTime)
        .isSameOrBefore(imports.moment(birthEncounterDate).add(earliestOffset, 'days').toDate(), 'date')));
        
     const followupDate = imports.moment(birthEncounterDate).add(earliestOffset, 'days').toDate();
     const followupOverdueDate = imports.moment(followupDate).add(4, 'days').toDate();

       scheduleBuilder.add({
                name: 'Child Followup',
                encounterType: 'Child Followup',
                earliestDate: followupDate,
                maxDate: followupOverdueDate
            });
    }
};

const scheduleFollowupVisitsDuringFollowup = () => {
    const birthDate = programEncounter.programEnrolment.individual.dateOfBirth;
    
    var schedule = _.chain(encounterScheduleChildFollowup)
        .filter(e => imports.moment(visitDate)
        .isSameOrBefore(imports.moment(birthDate).add(e.earliest, 'days').toDate(), 'date') === true)
        .filter(e => (programEncounter.programEnrolment.hasEncounter('Child Followup', e.name)) === false)
        .first()
        .value();

    if (!_.isEmpty(schedule)) {
         const followupDate = imports.moment(birthDate).add(schedule.earliest, 'days').toDate();
        const followupOverdueDate = imports.moment(followupDate).add(schedule.max, 'days').toDate();

        scheduleBuilder.add({
                name: schedule.name,
                encounterType: 'Child Followup',
                earliestDate: followupDate,
                maxDate: followupOverdueDate
            });
    }else{
            
      switch (nutritionalStatus) {
        case 'Normal':
            scheduleVisitsDuringChildFollowupNormal();
            break;
        case 'SAM' :
            scheduleVisitsDuringChildFollowupSAM();
            break;
        case 'Severely Underweight':
            scheduleVisitsDuringChildFollowupSAM();
            break;
        case 'MAM' :
            scheduleVisitsDuringChildFollowupMAM();
            break;
        case 'Moderately Underweight':
            scheduleVisitsDuringChildFollowupMAM();
            break;
        }
      }
};

const scheduleVisitsDuringChildFollowupNormal = () => {

const birthDate = programEncounter.programEnrolment.individual.dateOfBirth;


    var schedule = _.chain(encounterScheduleChildFollowup)
        .filter(e => imports.moment(visitDate)
        .isBefore(imports.moment(birthDate).add(e.earliest, 'days').toDate(), 'date') === true)
        .filter(e => (programEncounter.programEnrolment.hasEncounter('Child Followup', e.name)) === false)
        .first()
        .value();
        
        
    if (!_.isUndefined(schedule)) {        
        const followupDate = imports.moment(birthDate).add(schedule.earliest, 'days').toDate();
        const followupOverdueDate = imports.moment(followupDate).add(schedule.max, 'days').toDate();
                     
        scheduleBuilder.add({
                name: schedule.name,
                encounterType: 'Child Followup',
                earliestDate: followupDate,
                maxDate: followupOverdueDate
            });
    }else {
            
            const earliest = [225, 315, 405, 495, 585, 705];

                let earliestOffset = _.chain(earliest)
                    .filter(e => (imports.moment(visitDate)
                    .isBefore(imports.moment(birthDate).add(e, 'days').toDate(), 'date') === true)
                    && (imports.moment(programEncounter.earliestVisitDateTime)
                    .isSame(imports.moment(birthDate).add(e, 'days').toDate(), 'date') === false))
                    .first()
                    .value();
                 
           if(!_.isEqual(earliestOffset,undefined)){         
                const followupVisitDate = imports.moment(birthDate).add(earliestOffset, 'days').toDate();
        
                scheduleBuilder.add({
                    name: 'Child Followup',
                    encounterType: 'Child Followup',
                    earliestDate: followupVisitDate,
                    maxDate: imports.moment(followupVisitDate).add(15, 'days').toDate()
                  }); 
             }else {
                const followupDate = imports.moment(visitDate).add(4, 'months').toDate();
                scheduleBuilder.add({
                        name: 'Child Followup',
                        encounterType: 'Child Followup',
                        earliestDate: followupDate,
                        maxDate: imports.moment(followupDate).add(15, 'days').toDate()
                });
             }    
         }
};

const scheduleVisitsDuringChildFollowupSAM = () => {
    const ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();
   
    if (!hasExitedProgram(programEncounter)) {
        if (ageOfChildInMonths <= 24) { 
            if(ageOfChildInMonths < 2){
           
          const followupDate = imports.moment(visitDate).add(7, 'days').toDate();
          const followupOverdueDate = imports.moment(followupDate).add(4, 'days').toDate();
          
          scheduleBuilder.add({
                name: 'Child Followup',
                encounterType: 'Child Followup',
                earliestDate: followupDate,
                maxDate: followupOverdueDate
            });
            } else {
                        
             const followupDate = imports.moment(visitDate).add(15, 'days').toDate();
             const followupOverdueDate = imports.moment(followupDate).add(15, 'days').toDate();
             
             scheduleBuilder.add({
                  name: 'Child Followup',
                  encounterType: 'Child Followup',
                  earliestDate: followupDate,
                  maxDate: followupOverdueDate
            });
          }           
        } else if (ageOfChildInMonths <= 60) { 
           
             const followupDate = imports.moment(visitDate).add(1, 'months').toDate();
             const followupOverdueDate = imports.moment(followupDate).add(15, 'days').toDate();
             
             scheduleBuilder.add({
                  name: 'Child Followup',
                  encounterType: 'Child Followup',
                  earliestDate: followupDate,
                  maxDate: followupOverdueDate
            });
        }

        if (!programEncounter.programEnrolment
        .hasEncounter('Child Followup Cluster Incharge', 'Child Followup Cluster Incharge-1')
            && ageOfChildInMonths >= 7 && ageOfChildInMonths <= 60){
             const followupDate = imports.moment(visitDate).add(1, 'months').toDate();
             const followupOverdueDate = imports.moment(followupDate).add(8, 'days').toDate();

             scheduleBuilder.add({
                  name: 'Child Followup Cluster Incharge-1',
                  encounterType: 'Child Followup Cluster Incharge',
                  earliestDate: followupDate,
                  maxDate: followupOverdueDate
            });
                
          }
    }

};

const scheduleVisitsDuringChildFollowupMAM = () => {
    const ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();
    
    if (!hasExitedProgram(programEncounter)) {
        if (ageOfChildInMonths <= 24) { 
            if(ageOfChildInMonths < 2){
            const followupDate = imports.moment(visitDate).add(7, 'days').toDate();
            const followupOverdueDate = imports.moment(followupDate).add(4, 'days').toDate();

          scheduleBuilder.add({
                name: 'Child Followup',
                encounterType: 'Child Followup',
                earliestDate: followupDate,
                maxDate: followupOverdueDate
            }); 
        }else{
            const followupDate = imports.moment(visitDate).add(1, 'months').toDate();
            const followupOverdueDate = imports.moment(followupDate).add(15, 'days').toDate();

             scheduleBuilder.add({
                  name: 'Child Followup',
                  encounterType: 'Child Followup',
                  earliestDate: followupDate,
                  maxDate: followupOverdueDate
            });
        }
        } else if (ageOfChildInMonths <= 60) {
             const followupDate = imports.moment(visitDate).add(2, 'months').toDate();
             const followupOverdueDate = imports.moment(followupDate).add(15, 'days').toDate();

             scheduleBuilder.add({
                  name: 'Child Followup',
                  encounterType: 'Child Followup',
                  earliestDate: followupDate,
                  maxDate: followupOverdueDate
            });
        }

        if (!programEncounter.programEnrolment
        .hasEncounter('Child Followup Cluster Incharge', 'Child Followup Cluster Incharge-1')
            && ageOfChildInMonths >= 7 && ageOfChildInMonths <= 60){
            
             const followupDate = imports.moment(visitDate).add(4, 'months').toDate();
             const followupOverdueDate = imports.moment(followupDate).add(8, 'days').toDate();

             scheduleBuilder.add({
                  name: 'Child Followup Cluster Incharge-1',
                  encounterType: 'Child Followup Cluster Incharge',
                  earliestDate: followupDate,
                  maxDate: followupOverdueDate
            });
        }
    }

};



const scheduleVisitsDuringChildFollowup = () => {
   if (ageOfChildInMonths < 6) {
            const birthWeight = programEncounter.programEnrolment
            .getObservationReadableValueInEntireEnrolment('Birth Weight');
                         
            if(birthWeight && birthWeight < 2 && ageOfChildInMonths < 2)
              scheduleFollowupVisitsDuringFollowupForLowBirthWeight();
            else 
              scheduleFollowupVisitsDuringFollowup();
            if (!_.isEqual(nutritionalStatus, 'Normal') && !_.isEqual(nutritionalStatus, undefined))
              scheduleChildFollowupClusterInchargeVisits();
              
        }else{
            
      switch (nutritionalStatus) {
        case 'Normal':
            scheduleVisitsDuringChildFollowupNormal();
            break;
        case 'SAM' :
            scheduleVisitsDuringChildFollowupSAM();
            break;
        case 'Severely Underweight':
            scheduleVisitsDuringChildFollowupSAM();
            break;
        case 'MAM' :
            scheduleVisitsDuringChildFollowupMAM();
            break;
        case 'Moderately Underweight':
            scheduleVisitsDuringChildFollowupMAM();
            break;
        }
      }
};


    const cancelReason = programEncounter.findCancelEncounterObservationReadableValue("Visit cancel reason");
    
   if (!hasExitedProgram(programEncounter) && cancelReason != 'Permanent Migration') {
            switch (programEncounter.encounterType.name) {
                case 'Eligible Couple Followup':
                    scheduleVisitsDuringECFollowup();
                    break;
                case 'Abortion Followup':
                    scheduleVisitsDuringAbortionFollowup();
                    break;
                case 'ANC':
                    scheduleVisitsDuringANC();
                    break;
                case 'ANC Cluster Incharge':
                    scheduleVisitsDuringANCClusterIncharge();
                    break;
                case 'PNC':
                    scheduleVisitsDuringPNC();
                    break;
                case 'Birth Form':
                   scheduleVisitsDuringBirth();
                    break;
                case 'Child PNC':
                    scheduleVisitsDuringChildPNC();
                    break;
                case 'Child PNC Cluster Incharge':
                    scheduleVisitsDuringChildPNCClusterIncharge();
                    break;
                case 'Child Followup':
                    scheduleVisitsDuringChildFollowup();
                    break;
                case 'Child Followup Cluster Incharge':
                    scheduleVisitsDuringChildFollowupClusterIncharge();
                    break;
            }
        }

  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}