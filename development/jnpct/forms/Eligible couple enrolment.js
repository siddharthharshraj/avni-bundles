{
  "name": "Eligible couple enrolment",
  "uuid": "0b37b679-a33f-42b3-a455-a84eaea7b5d8",
  "formType": "ProgramEnrolment",
  "formElementGroups": [
    {
      "uuid": "570a47a5-fcff-4866-8382-4f0ac200de67",
      "name": "Enrolment Information",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Enrolment Date",
          "uuid": "625d17cb-1329-426a-9df2-35e9bba46d95",
          "keyValues": [],
          "concept": {
            "name": "Enrolment Date",
            "uuid": "cd2d1485-65fd-43d0-9de8-9c27a3c25b8d",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Enrolment Information",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const programEnrolment = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEnrolment
  });
  
 const getEarliestECFollowupDate = (eventDate) => {
    return imports.moment(eventDate).toDate();
};

const getMaxECFollowupDate = (eventDate) => {
    const earliestVisitDate = imports.moment(eventDate).toDate();
    return imports.moment(earliestVisitDate).add(15, 'days').toDate();
};
 
  scheduleBuilder.add({
            name: 'Eligible Couple Followup',
            encounterType: 'Eligible Couple Followup',
            earliestDate: getEarliestECFollowupDate(programEnrolment.enrolmentDateTime),
            maxDate: getMaxECFollowupDate(programEnrolment.enrolmentDateTime)
   });
 
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}