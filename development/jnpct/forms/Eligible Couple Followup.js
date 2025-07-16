{
  "name": "Eligible Couple Followup",
  "uuid": "1c8bd246-f46e-4250-88bc-1ca567ba03ce",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "780cf5c8-ba46-41b2-93ea-829a87d832c3",
      "name": "General Information",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Weight",
          "uuid": "ba193023-fdcf-45ca-8831-3d6ffcd9dd2d",
          "keyValues": [],
          "concept": {
            "name": "Weight",
            "uuid": "bab98eac-14a5-43c4-80ff-ccdb8c3ddf1b",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 300,
            "lowNormal": 1,
            "highNormal": 100,
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Height",
          "uuid": "eae703df-616b-48c9-a7e0-35cdc8c5253f",
          "keyValues": [],
          "concept": {
            "name": "Height",
            "uuid": "7d9af174-9e58-4e96-a77c-8351a5a4152d",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 20,
            "highAbsolute": 300,
            "lowNormal": 30,
            "highNormal": 200,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
   statusBuilder.show().when.valueInEncounter("Height").is.defined
    .or.when.latestValueInPreviousEncounters("Height").is.notDefined
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "MUAC (in cms)",
          "uuid": "4f5b5b1a-628c-4247-a557-6522dc4b782e",
          "keyValues": [],
          "concept": {
            "name": "MUAC (in cms)",
            "uuid": "915a4d71-6267-4190-af9f-882bbd07629e",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "BMI",
          "uuid": "aca35dab-46d0-46e8-8c51-1f85963058a0",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "BMI",
            "uuid": "27803190-b702-4223-b9b4-64c75fdcf588",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
    statusBuilder.show().when.valueInEncounter("Does she missed period").is.yes;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is she pregnant?",
          "uuid": "77c6bc40-ad90-42ce-ad16-5a321f4c52ba",
          "keyValues": [],
          "concept": {
            "name": "Is She Pregnant?",
            "uuid": "40df8c81-7a7c-434e-a13f-ee2e68b128c5",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Don't Know",
                "uuid": "18fc80be-129b-4346-9a25-9e99bccc7ec6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
    statusBuilder.show().when.valueInEncounter("Does she missed period").is.yes;
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "General Information",
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


const isPregnant = programEncounter.getObservationReadableValue('Is She Pregnant?');
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
    
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}