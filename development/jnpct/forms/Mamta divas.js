{
  "name": "Mamta divas",
  "uuid": "6a7592f2-418f-410b-a82a-0447f50f5041",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "05257bbf-96ff-4b3a-8150-989555e97068",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Does mamta divas held this month ?",
          "uuid": "f0e7d8de-f91e-45e3-a6c5-b3c704b74530",
          "keyValues": [],
          "concept": {
            "name": "Does mamta divas held this month",
            "uuid": "212eb717-b0d5-4d75-967a-88288c4b64e6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "How many ANC come ?",
          "uuid": "ee7f30f8-dfb3-49ce-8213-63f2ef0f42de",
          "keyValues": [],
          "concept": {
            "name": "How many ANC come",
            "uuid": "df6b1bdc-ec64-4e19-bdd5-05b9f65346f7",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  //read the value of form element using encounter.getObservationValue(CONCEPT_NAME);
  statusBuilder.show().when.valueInEncounter('Does mamta divas held this month').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "How many PNC come ?",
          "uuid": "487ba771-edd1-4e35-b9c2-a2d4c013a159",
          "keyValues": [],
          "concept": {
            "name": "How many PNC come",
            "uuid": "2d5b3f2c-645c-4999-85cf-032b3373b584",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  //read the value of form element using encounter.getObservationValue(CONCEPT_NAME);
  statusBuilder.show().when.valueInEncounter('Does mamta divas held this month').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "How many ANC  get T.D. vaccine ?",
          "uuid": "ffe1c280-8024-455f-b698-6a6c525741ff",
          "keyValues": [],
          "concept": {
            "name": "How many ANC  get T.D. vaccine",
            "uuid": "1300f6cf-fecd-4654-b5e5-3b6dae68fb94",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  //read the value of form element using encounter.getObservationValue(CONCEPT_NAME);
  statusBuilder.show().when.valueInEncounter('Does mamta divas held this month').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "How may mothers get Matrushakti packet ?",
          "uuid": "1c4dd722-69f1-4859-b4ee-c86337fb6743",
          "keyValues": [],
          "concept": {
            "name": "How may mothers get Matrushakti packet",
            "uuid": "8a1400cb-28de-4ace-963d-1c93aea41fc8",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  //read the value of form element using encounter.getObservationValue(CONCEPT_NAME);
  statusBuilder.show().when.valueInEncounter('Does mamta divas held this month').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "How many children comes ?",
          "uuid": "d7dd613a-7a13-4755-8a85-5b46d9bb91e7",
          "keyValues": [],
          "concept": {
            "name": "How many children comes",
            "uuid": "eed8786e-2b1a-43d7-a453-f321cea1874f",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  //read the value of form element using encounter.getObservationValue(CONCEPT_NAME);
  statusBuilder.show().when.valueInEncounter('Does mamta divas held this month').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "How many children get vaccinated ?",
          "uuid": "ff934738-b308-44fa-b9bd-e0667c16b12a",
          "keyValues": [],
          "concept": {
            "name": "How many children get vaccinated",
            "uuid": "fff53faa-fdf5-499b-b50c-bed357ed3145",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  //read the value of form element using encounter.getObservationValue(CONCEPT_NAME);
  statusBuilder.show().when.valueInEncounter('Does mamta divas held this month').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "How many children get Balshakti packet ?",
          "uuid": "5b22328e-cc6a-4e84-a04b-6b4b7d4d23f5",
          "keyValues": [],
          "concept": {
            "name": "How many children get Balshakti packet",
            "uuid": "f87d568c-68a9-4ecf-abeb-5550ed111787",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  //read the value of form element using encounter.getObservationValue(CONCEPT_NAME);
  statusBuilder.show().when.valueInEncounter('Does mamta divas held this month').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "
"use strict";
({ params, imports }) => {
  const encounter = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    encounter
  });
  //add new visit schedule object to scheduleBuilder
  
  
    const monthlyDate = imports.moment(encounter.earliestVisitDateTime).add(1,'months').endOf('month').startOf('day').toDate();
   
  const monthName= imports.moment(monthlyDate).format('MMMM');

    if (monthlyDate) {
        scheduleBuilder.add({
            name: `Mamta divas- ${monthName}`,
            encounterType: 'Mamta divas',
            earliestDate: monthlyDate,
            maxDate: imports.moment(monthlyDate).add(7, 'days').toDate()
        });
    }
    
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}