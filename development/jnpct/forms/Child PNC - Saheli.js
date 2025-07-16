{
  "name": "Child PNC - Saheli",
  "uuid": "03ccb2ae-5db7-4e0f-b907-f8049184bc1c",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "bcd5b588-10b2-40cc-bd48-5838545ac61f",
      "name": "First examination",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Whether child breathing regularly?",
          "uuid": "1b3bab97-8113-47dd-a470-1d6d93db0ae7",
          "keyValues": [],
          "concept": {
            "name": "Whether child breathing regularly?",
            "uuid": "6c3250f8-8380-4f72-97e7-d5ce9e41338a",
            "dataType": "Coded",
            "answers": [
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
                "abnormal": true,
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
 
 const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters('Whether child breathing regularly?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is the child pinkish in colour?",
          "uuid": "9af444a2-7149-4e80-a6cd-19935d8adb57",
          "keyValues": [],
          "concept": {
            "name": "Is the child pinkish in colour?",
            "uuid": "e401ebe8-07e0-4f34-bcf8-8a8c3eaf3b9d",
            "dataType": "Coded",
            "answers": [
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
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters('Is the child pinkish in colour?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is body temprature warm?",
          "uuid": "9ce705da-7a09-4e46-97f3-849d7fe62b6d",
          "keyValues": [],
          "concept": {
            "name": "Is body temprature warm?",
            "uuid": "7ee92cf1-1661-420f-8eaf-9b7249779058",
            "dataType": "Coded",
            "answers": [
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
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters('Is body temprature warm?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is there active movement of hands and legs?",
          "uuid": "850cd4e9-ab11-4018-ab05-0d532d851501",
          "keyValues": [],
          "concept": {
            "name": "Is there active movement of hands and legs?",
            "uuid": "bb279686-d296-4378-858a-f88532454430",
            "dataType": "Coded",
            "answers": [
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
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters('Is there active movement of hands and legs?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is there any life threatening abnormality?",
          "uuid": "88b3285d-2b14-470c-bb31-c399c25c068f",
          "keyValues": [],
          "concept": {
            "name": "Is there any life threatening abnormality?",
            "uuid": "186e42dc-515f-4415-8a48-e7709123c060",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters('Is there any life threatening abnormality?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Examine for cleft palate/lips in child's mouth?",
          "uuid": "77bbde61-6e16-459c-9c01-6f66717c1325",
          "keyValues": [],
          "concept": {
            "name": "Examine for cleft palate/lips in child's mouth?",
            "uuid": "0277a00d-20d5-436e-8070-205d29a458d2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters("Examine for cleft palate/lips in child's mouth?", programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Does foam coming out from child's mouth?",
          "uuid": "a149d381-9ea7-44ad-b7a7-3d96bb56dd35",
          "keyValues": [],
          "concept": {
            "name": "Does foam coming out from child's mouth?",
            "uuid": "23456b1a-29bb-4a16-952c-9476f7751dd0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
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
  const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters("Does foam coming out from child's mouth?", programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does child paases stool and urine within 24  hour",
          "uuid": "6bf7f6b0-a8e4-41fb-94fb-f39d8453e1ab",
          "keyValues": [],
          "concept": {
            "name": "Does child paases stool and urine within 24  hour",
            "uuid": "b6930840-0515-4805-8ade-30431f95122e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters('Does child paases stool and urine within 24  hour', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is there anal opening present?",
          "uuid": "ec160098-6629-46c5-bdbc-9c4a900bd6fa",
          "keyValues": [],
          "concept": {
            "name": "Is there anal opening present?",
            "uuid": "f51ec371-e402-4ce6-b680-7d82002f1717",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters('Is there anal opening present?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does any kind of cyst or tumor present on neck, back and on lower back?",
          "uuid": "cfde8f50-8383-477f-8a65-41c1137cf95e",
          "keyValues": [],
          "concept": {
            "name": "Does any kind of cyst or tumor present on neck, back and on lower back?",
            "uuid": "972d4847-b8d4-49cc-b0ae-b3fbe4125283",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters('Does any kind of cyst or tumor present on neck, back and on lower back?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does umbelical cord of newborn tied properly?",
          "uuid": "5851b265-7717-4edd-9358-7ebdaa1176b5",
          "keyValues": [],
          "concept": {
            "name": "Does umbelical cord of newborn tied properly?",
            "uuid": "714fc100-13c3-418c-aa76-e2ca24e0d6f3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters('Does umbelical cord of newborn tied properly?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is blood coming out from any part of body ( cord ,head ,mouth, anus )?",
          "uuid": "48fd0b6c-1e48-4d59-86a5-f5801af5a708",
          "keyValues": [],
          "concept": {
            "name": "Is blood coming out from any part of body?",
            "uuid": "09573558-edb4-41c6-a2a7-55484158c96e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Is blood coming out from any part of body ( cord ,head ,mouth, anus )",
          "uuid": "021c9bcd-d6e2-427b-b18d-4ee6b327bd7e",
          "keyValues": [],
          "concept": {
            "name": "Is blood coming out from any part of body ( cord ,head ,mouth, anus )?",
            "uuid": "60746eac-8f88-4c59-b107-bb8f64406f1f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters('Is blood coming out from any part of body ( cord ,head ,mouth, anus )?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is there visible jaundice?",
          "uuid": "a0c00896-b2ea-48a9-ba35-78ba019581f6",
          "keyValues": [],
          "concept": {
            "name": "Is there visible jaundice?",
            "uuid": "648faf63-17f1-4ec6-a9b9-78d1edb4061a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  const birthPlace = programEncounter.programEnrolment
 .findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.
 findLatestObservationFromPreviousEncounters('Is there visible jaundice?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "First examination",
      "timed": false
    },
    {
      "uuid": "e13c7709-c9a3-47a4-a100-757a9fbc8aff",
      "name": "Physical Examination",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Ask the Mother: Does infant has any problem now?",
          "uuid": "5c3e3066-c308-433d-95f9-3d1bf553b182",
          "keyValues": [],
          "concept": {
            "name": "Does infant has any problem now?",
            "uuid": "d48fca1d-8344-499c-bcf7-86ce64606f74",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
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
   statusBuilder.show().when.valueInEncounter('Does infant has any problem now?').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Count the breaths in one minute",
          "uuid": "4a321073-61b6-47a4-9032-252b80f756a0",
          "keyValues": [],
          "concept": {
            "name": "Child Respiratory Rate",
            "uuid": "20401dea-a7ee-480a-8980-6cb419f732fe",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 30,
            "highNormal": 59.9,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  //read the value of form element using programEncounter.getObservationValue(CONCEPT_NAME);
 statusBuilder.show().when.ageInMonths.lessThanOrEqualTo(2);
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Count the breaths in one minute",
          "uuid": "adbe96d6-83b2-46cc-b284-95d3f32af9cf",
          "keyValues": [],
          "concept": {
            "name": "Child respiratory rate 2 month to 1 year",
            "uuid": "ae0f201b-9edc-4b72-bd8f-51c85bb59ea1",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 30,
            "highNormal": 49,
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  //read the value of form element using programEncounter.getObservationValue(CONCEPT_NAME);
  statusBuilder.show().when.ageInMonths.lessThanOrEqualTo(12).and.when.ageInMonths.greaterThan(2);
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Count the breaths in one minute",
          "uuid": "d798bf26-b34a-4d47-8618-149d0505645d",
          "keyValues": [],
          "concept": {
            "name": "Child respiratory 1 year and above",
            "uuid": "e86a65e3-0055-4f53-97ca-ccfce1481b7a",
            "dataType": "Numeric",
            "answers": [],
            "highNormal": 39,
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  //read the value of form element using programEncounter.getObservationValue(CONCEPT_NAME);
  statusBuilder.show().when.ageInMonths.greaterThan(12);
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Look and listen: Is there any grunting sound",
          "uuid": "a24e987b-b33d-4e17-873f-07572efe7726",
          "keyValues": [],
          "concept": {
            "name": "Is there any grunting sound?",
            "uuid": "58d017ed-56e3-426c-add1-e06f2af19e01",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is there chest indrawing?",
          "uuid": "ebc3b509-282b-4c4d-9bff-0646205c48e1",
          "keyValues": [],
          "concept": {
            "name": "Is there chest indrawing?",
            "uuid": "3f8b75b0-41aa-4f38-82bd-459ac8b8fa37",
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
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is there nasal flaring?",
          "uuid": "15f2818e-7587-4627-870c-01b1b5751908",
          "keyValues": [],
          "concept": {
            "name": "Is there nasal flaring?",
            "uuid": "bc9c3023-5d55-4172-a883-f83ab449deff",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "How is the colour of infant",
          "uuid": "2559118c-c86a-4b9d-b2f3-f1790a2a1fc8",
          "keyValues": [],
          "concept": {
            "name": "How is the colour of infant",
            "uuid": "56aec7ea-d2aa-4439-a531-59d0acc402dd",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Whitish",
                "uuid": "76d88d95-b025-4872-aa0c-319df25d0e00",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Pinkish",
                "uuid": "6e48319b-4729-48ad-bab0-90a11ee057c0",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Yellowish",
                "uuid": "93e9481e-d0fd-4535-92dc-991dfec2a1f8",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Bluish",
                "uuid": "0397b6af-4249-4a70-a3cd-8b79972edff9",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Look at the infants movement",
          "uuid": "90c1d49d-f47c-4853-8f3a-bf1c23513469",
          "keyValues": [],
          "concept": {
            "name": "Look at the infants movement",
            "uuid": "db74f827-c052-4c0a-9df3-9d34dcddea6f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Less than normal",
                "uuid": "7797f702-06a8-4352-bb17-ad4030ab5704",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Normal",
                "uuid": "eae1e6a3-b8ad-4716-9a52-a5677fb1f4ca",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is anything applied on umbelicus?",
          "uuid": "980ccde8-c5b9-44c8-aa5c-25e55fc120e3",
          "keyValues": [],
          "concept": {
            "name": "Is anything applied on umbelicus?",
            "uuid": "e58035a6-32f4-4728-8ebb-7a8ab3e1b082",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Any home substace applied (Kunku, Oil, Sindur, Raakh)",
                "uuid": "734501f8-a137-4384-9b29-a39adc391bc3",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "White medicine or white powder",
                "uuid": "fb293475-f5c2-4e94-bcd6-65c74874e290",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Nothing applied",
                "uuid": "dd41b242-ac0b-4ca4-b20c-18eb7a9a4e59",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is infant coverred with 3-4 folded cloth?",
          "uuid": "0bae50ee-09a9-49f3-8580-0d9529ad732e",
          "keyValues": [],
          "concept": {
            "name": "Is infant coverred with 3-4 folded cloth?",
            "uuid": "90c1f569-76e9-433c-a0fe-096d179ef8de",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Infant is kept open",
                "uuid": "878ce4a1-1852-4a7d-b0dc-046237ac39d1",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Properly covered and head also covered",
                "uuid": "d18300a1-30b6-430b-89a0-4036ae843d75",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Poorly covered",
                "uuid": "ab3b4d93-1095-46cd-9806-565c89255d66",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Properly covered but head is opened",
                "uuid": "548ad96f-9b2a-492c-989d-334e840eefec",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Physical Examination",
      "timed": false
    },
    {
      "uuid": "392e3c39-94e0-42b9-84bc-13eae1f591c9",
      "name": "Temperature",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Is temperature recorded?",
          "uuid": "66cafa2f-e5ca-4844-ab81-7b1197078966",
          "keyValues": [],
          "concept": {
            "name": "Is temperature recorded?",
            "uuid": "cdf5f2b6-ec61-4dc3-8260-61960d1239ce",
            "dataType": "Coded",
            "answers": [
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Measure the auxillary temprature of infant",
          "uuid": "d57afee0-194c-4679-9f29-6c9d5d1785ff",
          "keyValues": [],
          "concept": {
            "name": "Temperature of infant",
            "uuid": "b0b2e912-5433-4594-8d86-2098c57d671a",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 35.5,
            "highNormal": 37.5,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter('Is temperature recorded?').containsAnswerConceptName('Yes');
return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Reason for not recording temperature",
          "uuid": "9c385446-74eb-4fc2-9f5f-53f2fe528def",
          "keyValues": [],
          "concept": {
            "name": "Reason for not recording temperature",
            "uuid": "9a5019fa-cd87-441c-8b8c-f2373987178f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Not carried",
                "uuid": "8bb8a9f3-796c-44ab-b0ec-9ceb7732a783",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Batteries down",
                "uuid": "94910035-3c9a-4507-95c4-e4d6636a3399",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Thermometer not functioning",
                "uuid": "38a9a14e-fb8a-4252-bb5b-c71b910b98ac",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter('Is temperature recorded?').containsAnswerConceptName('No');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "How you feel infants temprature on touch?",
          "uuid": "141a705a-d258-4ff8-b5b2-df3c1e8742bc",
          "keyValues": [],
          "concept": {
            "name": "How you feel infants temprature on touch?",
            "uuid": "cadf0874-1446-411a-9e97-cf8a67a234e1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Abdomen and limbs all feel hot on touch",
                "uuid": "a5759399-0eb9-47b6-8612-a94de6f74f4e",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Abdomen and limbs feel cold on touch",
                "uuid": "28ece283-3fd1-4acd-9117-6f3f73b4b303",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Abdomen and limbs feel normal",
                "uuid": "a2c03a08-7a09-492d-a879-1c2013634478",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "How is the condition of umbelicus",
          "uuid": "826097a4-2044-4291-b49f-f6a81212293c",
          "keyValues": [],
          "concept": {
            "name": "Condition of umbelicus",
            "uuid": "df75e2e6-4d5f-4ed8-a24e-14ce72da1e10",
            "dataType": "Coded",
            "answers": [
              {
                "name": "blood coming out",
                "uuid": "16eb131c-d8ea-4030-929e-f4dc07931c2d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Looks red",
                "uuid": "57b4123a-dc82-4287-b64d-f0ed72b517bf",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Draining pus or any discharge",
                "uuid": "e87d4409-a6ce-4940-a8ec-ca041ef98b12",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Normal",
                "uuid": "eae1e6a3-b8ad-4716-9a52-a5677fb1f4ca",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Temperature",
      "timed": false
    },
    {
      "uuid": "ece9506c-fc44-44a3-be00-2ef5dff927a0",
      "name": "Observe infant for 4-5 minutes while breastfeeding to check whether infant sucking well .",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "When was first breastfeed given to child?",
          "uuid": "8c1adb52-2ac9-4d12-9508-9a4e87b16331",
          "keyValues": [],
          "concept": {
            "name": "When was first breastfeed given to child?",
            "uuid": "bc203ffc-00bf-42ed-988c-97cc954d1061",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
statusBuilder.show().when.valueInEncounter("When was first breastfeed given to child?").is.defined.or.when.valueInEntireEnrolment("When was first breastfeed given to child?").is.notDefined;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "How is the infant attachment while sucking?",
          "uuid": "ad791f4e-d4ec-40ea-b89b-d35e5ac2afc2",
          "keyValues": [],
          "concept": {
            "name": "How is the infant attachment while sucking?",
            "uuid": "60baea86-df95-443c-bac4-852482d2b2a8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Loose and not attached well",
                "uuid": "adc25383-1e47-438a-b2f1-360f7502f737",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Good - Normal",
                "uuid": "9890a88c-3ed0-4f67-b97d-ed2031c999f2",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No attachment at all",
                "uuid": "58a29a8f-6fb1-452e-a813-c9d33ffd2f11",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is mouth wide open",
          "uuid": "74e397a7-3ba3-4aa3-a890-6b90a8b4c4fd",
          "keyValues": [],
          "concept": {
            "name": "Is mouth wide open",
            "uuid": "5e309ac3-1b96-4965-a94a-2341f834a7c0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is lower lip turned outword",
          "uuid": "5f2cbd0b-bb0d-490d-a268-8b3b356d3dc0",
          "keyValues": [],
          "concept": {
            "name": "Is lower lip turned outword",
            "uuid": "80144e66-99dc-4404-bacc-f33554ea97fb",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is chin attached to breast?",
          "uuid": "b2f07bba-8126-4141-a0bf-7408bacac4be",
          "keyValues": [],
          "concept": {
            "name": "Is chin attached to breast?",
            "uuid": "dc5da243-4e23-48b7-b5e5-e2cc18a7680e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
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
            "active": true,
            "keyValues": []
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is more areola visible above than below the mouth",
          "uuid": "a3171c22-8e9d-4c4f-a8bf-52354b7422a9",
          "keyValues": [],
          "concept": {
            "name": "Is more areola visible above than below the mouth",
            "uuid": "144796e8-cfcd-47dd-befc-bf62a3f87056",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
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
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Not suckling at all?",
          "uuid": "6cd84ce4-8db2-4aee-9db4-38710f09c5ce",
          "keyValues": [],
          "concept": {
            "name": "Not suckling at all?",
            "uuid": "93ad1180-08dc-4717-b722-fa672bfed796",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Not suckling effectively",
          "uuid": "cc0b81d2-74ee-41e6-8fe8-a3de907a4896",
          "keyValues": [],
          "concept": {
            "name": "Not suckling effectively",
            "uuid": "df81c4bf-7d9a-411a-8a66-4796e0116043",
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
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Suckling effectively",
          "uuid": "3970d8fc-a11d-428a-8ccf-7dbeb2cbce2d",
          "keyValues": [],
          "concept": {
            "name": "Suckling effectively",
            "uuid": "7d9656d9-e872-47ff-ba34-131d0602e7d8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Is there anything given other than breastfeeding for infant",
          "uuid": "3e583ed1-7c3e-4093-bf89-b31eee625828",
          "keyValues": [],
          "concept": {
            "name": "Is there anything given other than breastfeeding for infant",
            "uuid": "26d47b4e-9b2f-45bd-9044-41596b330183",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Things given other than bresatfeeding",
          "uuid": "9fb2dd44-8c3e-4cc3-a89a-3d25675f085e",
          "keyValues": [],
          "concept": {
            "name": "Things given other than bresatfeeding",
            "uuid": "8c96d4e2-efd5-4886-acc6-e9438522a25b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Jaggery syrup",
                "uuid": "218941d6-7078-437a-9255-ab237c852f04",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Ghee",
                "uuid": "341ea2c1-970b-468d-a34d-576f02b5ce91",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Somvaa 34",
                "uuid": "358dc7b9-a0f5-484a-b4b1-da780e17cfb9",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Sugar",
                "uuid": "e7e6f4cd-5a08-45e9-a51b-5ffa7e825002",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Kathvaat",
                "uuid": "4a8c3947-2d49-45d7-b49c-e5fea11b09e0",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Honey",
                "uuid": "ebc63756-9eed-456c-b3d9-a83f1054fc84",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Jaggery",
                "uuid": "7a6bcd2a-3340-4c6e-bea6-9be0a9d8d7cb",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Gripe water",
                "uuid": "49dd2b88-782f-4959-9f4e-908a5c110109",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Ghuti",
                "uuid": "ec694351-b1cc-42ff-b7fa-4f4aa2461da4",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "External milk",
                "uuid": "823b4fb5-01b1-467d-a605-02ea8770ed1a",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
    statusBuilder.show().when.valueInEncounter('Is there anything given other than breastfeeding for infant').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does infant has any difficulty in breastfeeding?",
          "uuid": "8d0bac74-b851-45b5-a79b-e970a7e78a07",
          "keyValues": [],
          "concept": {
            "name": "Does infant has any difficulty in breastfeeding?",
            "uuid": "d5993485-2b05-4ef8-a980-0f62a9e2b3e4",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is breastfeed given to infant in last 24 hours?",
          "uuid": "0b06c5ca-afbb-45bf-a56b-cb1932e8f54d",
          "keyValues": [],
          "concept": {
            "name": "Is breastfeed given to infant in last 24 hours?",
            "uuid": "4f440c38-c2f8-4489-9b98-53e7faebb9f5",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "How many times breastfeeding given to child in last 24 hours",
          "uuid": "37a31cf3-b0a3-4b02-bfb6-31ccf6444a88",
          "keyValues": [],
          "concept": {
            "name": "How many times breastfeeding given to child in last 24 hours",
            "uuid": "6ca3c61e-2dda-49ad-a9b4-7eb719874c27",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
   statusBuilder.show().when.valueInEncounter('Is breastfeed given to infant in last 24 hours?').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "In last 24 hours, for how many times infant passes urine?",
          "uuid": "2e544c0e-8a05-4235-a5e4-a9de0fe533bb",
          "keyValues": [],
          "concept": {
            "name": "In last 24 hours, for how many times infant passes urine?",
            "uuid": "fff940b1-7cfc-40b1-8145-1fa3794ebdcd",
            "dataType": "Coded",
            "answers": [
              {
                "name": "More than 5 times",
                "uuid": "a0c0bb56-2995-4b39-a03d-5b5207093ae4",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Less than 5 times",
                "uuid": "51b91c37-c65b-4777-bcf5-aabf5b8735f3",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "When to start bathing for infant?",
          "uuid": "34d976bf-343b-47ae-983f-ddb14fc18704",
          "keyValues": [],
          "concept": {
            "name": "When to start bathing for infant?",
            "uuid": "8c18e07c-ca8f-4f62-823d-1618fac5912c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "After 7 days of birth",
                "uuid": "9526a9d1-2ef5-490b-8df6-1e7c1799b168",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "On first day",
                "uuid": "1be4f4fe-8abb-4afc-ae81-7c9ece00ee74",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "In first week",
                "uuid": "6f6ac611-ff9c-4142-b6bc-b54184247722",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter("When to start bathing for infant?").is.defined.or.when.valueInEntireEnrolment("When to start bathing for infant?").is.notDefined;
  return statusBuilder.build();
},
          "mandatory": false
        }
      ],
      "display": "Observe infant for 4-5 minutes while breastfeeding to check whether infant sucking well .",
      "timed": false
    },
    {
      "uuid": "7a2631cf-571d-4647-bca9-0feb495eab93",
      "name": "Examine the infant for other danger sign of morbidity",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Is there bleeding from any part of infant's body?",
          "uuid": "fc0086f3-52b1-4de4-a27e-2eb0e04141e3",
          "keyValues": [],
          "concept": {
            "name": "Is there bleeding from any part of infant's body?",
            "uuid": "f4d9696d-9075-4b32-bc6a-3f33fd19ef40",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
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
          "mandatory": true
        },
        {
          "name": "Is infant vomiting?",
          "uuid": "b9f9fc22-8315-4565-8afb-7d797319e388",
          "keyValues": [],
          "concept": {
            "name": "Is infant vomiting?",
            "uuid": "09b4ee52-8d80-48f5-84dd-e375e16bbda9",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Does infant's abdomen look gasious?",
          "uuid": "04d34c59-4534-4f02-b6a5-8e0466f39b94",
          "keyValues": [],
          "concept": {
            "name": "Does infant's abdomen look gasious?",
            "uuid": "57bf7e17-a75d-4141-ae61-5f9a10b67527",
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
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Does infant looks icteric?",
          "uuid": "6fa4fb3f-4804-4576-9a9d-204d52f613bc",
          "keyValues": [],
          "concept": {
            "name": "Does infant looks icteric?",
            "uuid": "bbf0e17f-769e-4389-82e5-01eccb0c745c",
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
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Does infant looks cynosed?",
          "uuid": "dcc79b98-51d6-4ac6-8e91-703075a438e8",
          "keyValues": [],
          "concept": {
            "name": "Does infant looks cynosed?",
            "uuid": "cfba52eb-6f92-4db8-a42c-8a3623e15bde",
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
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Does infant looks abnormal?",
          "uuid": "09e8bd79-164c-4743-b28d-3524b4177590",
          "keyValues": [],
          "concept": {
            "name": "Does infant looks abnormal?",
            "uuid": "d350f4e7-0d54-44d3-aeb0-e47b898b2e8d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
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
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is the infant's mouth cleft pallet seen?",
          "uuid": "3f0d3c47-5fa4-4296-b8fb-334fb4d18a52",
          "keyValues": [],
          "concept": {
            "name": "Is the infant's mouth cleft pallet seen?",
            "uuid": "b2097167-c02d-4d2d-a9ec-49614027a5ea",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Is there visible tumor on back or on head of infant?",
          "uuid": "3e6d9ce6-75de-4d16-966b-edf35004d009",
          "keyValues": [],
          "concept": {
            "name": "Is there visible tumor on back or on head of infant?",
            "uuid": "4b225831-3670-4537-b663-90c87c417f98",
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
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Is foam coming from infant's mouth continuously?",
          "uuid": "030158f3-a300-4506-9394-96700e0339f7",
          "keyValues": [],
          "concept": {
            "name": "Is foam coming from infant's mouth continuously?",
            "uuid": "ee670016-5517-4c10-a27a-998bbd94247e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Does infant has watery diarrhoea?",
          "uuid": "a574ff68-cbf4-4a2e-aa94-9820930c834d",
          "keyValues": [],
          "concept": {
            "name": "Does infant has watery diarrhoea?",
            "uuid": "477207cd-61ef-46ed-b28d-1c2be3eb6415",
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
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "If yes, then since how many days does infant has watery diarrhoea?",
          "uuid": "79fdef02-4c23-4b2e-a2eb-7ecc23dee064",
          "keyValues": [],
          "concept": {
            "name": "If yes, then since how many days does infant has watery diarrhoea",
            "uuid": "4c7b1f17-380f-422b-85b7-a85f95e040d3",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter('Does infant has watery diarrhoea?').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is oral ulcer or thrush seen in infant's mouth",
          "uuid": "058c6d4e-20e3-4be6-804a-7c5babba3768",
          "keyValues": [],
          "concept": {
            "name": "Is oral ulcer or thrush seen in infant's mouth",
            "uuid": "f0bdf6d9-a8f8-439c-88fc-7be3c00e8de1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is there visible pustules on body of infant?",
          "uuid": "91e28d16-4ff0-4006-815d-ba881f06db2d",
          "keyValues": [],
          "concept": {
            "name": "Is there visible pustules on body of infant?",
            "uuid": "c9468105-56fa-4e41-8ed0-943d106c040e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "If yes, then since how many does infant has visible pustules on body?",
          "uuid": "bfde4d02-e51c-4e94-9863-c360374290c4",
          "keyValues": [],
          "concept": {
            "name": "If yes, then since how many does infant has visible pustules on body",
            "uuid": "e1b8fe96-c5a1-41c3-b25b-be5ffc9a960a",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "If yes, then how many visible pustules are on the body",
          "uuid": "d80db4e2-7719-4561-bb0d-2adfa99601f6",
          "keyValues": [],
          "concept": {
            "name": "If yes, then how many visible pustules are on the body",
            "uuid": "6b66b89e-e7f6-470c-be4e-1f236d15af90",
            "dataType": "Coded",
            "answers": [
              {
                "name": "10 or more than 10",
                "uuid": "e6b4e1db-dd9e-4153-9ec9-0c60892d0e96",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Less than 10",
                "uuid": "19f773b7-103a-4b3d-aefb-7e3444ebca5f",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('Is there visible pustules on body of infant?').containsAnswerConceptName('Yes');
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Current Weight",
          "uuid": "75de0566-5924-4f9d-afc7-dd2a1d5b396b",
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
          "displayOrder": 16,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Weight Grade of Child",
          "uuid": "76a0dd90-59e8-45b6-b654-43383782a2b3",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Nutritional status of child",
            "uuid": "3fb85722-fd53-43db-9e8b-d34767af9f7e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  
  let weight = programEncounter.getObservationValue("Weight");
  const height = 0;
  const asOnDate = programEncounter.encounterDateTime;
  const individual = programEncounter.programEnrolment.individual;
       
  const zScoreGradeStatusMappingWeightForAge = {
    '1': 'Normal',
    '2': 'Moderately Underweight',
    '3': 'Severely Underweight'
};

const getGradeforZscore = (zScore) => {
    let grade;
    if (zScore <= -3) {
        grade = 3;
    } else if (zScore > -3 && zScore < -2) {
        grade = 2;
    } else if (zScore >= -2) {
        grade = 1;
    }
    return grade;
};
  
 const zScoresForChild = imports.common
 .getZScore(individual, asOnDate, weight, height);
 
  const wfaGrade = getGradeforZscore(zScoresForChild.wfa);
  const wfaStatus = zScoreGradeStatusMappingWeightForAge[wfaGrade];

   return new imports.rulesConfig.FormElementStatus(formElement.uuid, true, wfaStatus); 
},
          "mandatory": true
        },
        {
          "name": "If infant's weight is less than 2.5kg then did KMC?",
          "uuid": "37d05ede-a27e-4be1-bd2a-5c7a4c85e118",
          "keyValues": [],
          "concept": {
            "name": "If infant's weight is less than 2.5kg then did KMC?",
            "uuid": "d21d1844-362b-426c-a5d4-c45ab5fc1690",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 18,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('Weight').is.lessThan(2.5);
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Weight at the time of KMC started to do",
          "uuid": "50067583-706c-4969-beda-5d0f595bcdc9",
          "keyValues": [],
          "concept": {
            "name": "Weight at the time of KMC started to do",
            "uuid": "81d81392-d0e6-40ce-84bd-4fd0eba04719",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 19,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter("Weight").is.lessThan(2.5)
  .and.when.latestValueInPreviousEncounters("Weight at the time of KMC started to do").is.notDefined;
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "In last 24 hours for how many times did KMC?",
          "uuid": "01c70bc8-63ba-4fc5-b9e3-6a0e8dcc4429",
          "keyValues": [],
          "concept": {
            "name": "In last 24 hours for how many times did KMC?",
            "uuid": "4f2cae52-9923-44f3-baf5-b03a62423acb",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 20,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('Weight').is.lessThan(2.5);
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "In one time for how many minutes did KMC?",
          "uuid": "accc7c81-9724-48f8-9779-0dbd2515b54d",
          "keyValues": [],
          "concept": {
            "name": "In one time for how many minutes did KMC?",
            "uuid": "29d4737c-15b3-42f2-b296-632fee9f5fe7",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 21,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('Weight').is.lessThan(2.5);
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Weight of infant at time to stoped to do KMC",
          "uuid": "dd6a19f2-ec0b-464e-a9e0-acedaaa5a2f1",
          "keyValues": [],
          "concept": {
            "name": "Weight of infant at time to stoped to do KMC",
            "uuid": "78511bef-1c10-47a0-98cb-a91aff6f1c3c",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 22,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('Weight').is.lessThan(2.5);
 return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Does child require to refer if morbidity found",
          "uuid": "36657ec2-e1cd-43d0-ab6d-f11ba9c01697",
          "keyValues": [],
          "concept": {
            "name": "Does child require to refer if morbidity found",
            "uuid": "e8a74be5-e817-4992-87df-abab41753f38",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 23,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "If yes, then refered?",
          "uuid": "0f849ed7-2ad0-45b1-b15a-c5444a05ada4",
          "keyValues": [],
          "concept": {
            "name": "If yes then refered?",
            "uuid": "61be533a-98a6-4a73-919f-79c1f4fd4cfc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 24,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('Does child require to refer if morbidity found').containsAnswerConceptName('Yes');
 return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Date of refer",
          "uuid": "8892587c-5989-464b-9424-5654928e03d5",
          "keyValues": [],
          "concept": {
            "name": "Date of refer",
            "uuid": "ca103da5-3221-487c-b687-4f43bc434c0c",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 25,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
   statusBuilder.show().when.valueInEncounter('If yes then refered?').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Who refered?",
          "uuid": "74568c4c-db8c-418f-9b1d-080f34df61f0",
          "keyValues": [],
          "concept": {
            "name": "Who refered?",
            "uuid": "1aa46e35-6256-40cd-a026-8c825565a98f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "AASHA",
                "uuid": "2085df38-3f49-4dc7-93c0-ddbb89a5b512",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Self",
                "uuid": "a5ea10fe-146f-4f37-9975-6c8e1294291d",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "CI",
                "uuid": "c4500d32-b826-4d83-9389-0bbe76bbad32",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "A.S",
                "uuid": "12835d9b-7c4d-4c7a-9a27-c5d9f597c986",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Supervisor",
                "uuid": "ee608e7d-2354-4bb9-beb2-de29fcd40764",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Doctor",
                "uuid": "6d86cca8-6525-47dd-9045-8509fe0ad4eb",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Nurse",
                "uuid": "49435918-b799-4b6d-a9fb-4e9158c3b091",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 26,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('If yes then refered?').containsAnswerConceptName('Yes');
 return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Place of refer",
          "uuid": "28375723-d5bf-4789-bc76-b5850e5116e7",
          "keyValues": [],
          "concept": {
            "name": "Place of refer",
            "uuid": "38fa0a7d-7bb6-4e84-a5d8-2b1b9c463f6b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "SRH",
                "uuid": "55520393-af5d-406b-b734-8810e2164d15",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "State hospital",
                "uuid": "0097d74d-c046-4504-9efe-e9811f6363af",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "CHC PINDVAL",
                "uuid": "f85a0321-e224-4829-8d4d-074c75cf4028",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "CHC NANAPONDHA",
                "uuid": "3eacbba3-32aa-489e-844f-6600950f5fa6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "CHC KAPRADA",
                "uuid": "29f824b6-e09e-429a-b261-90d062d19afa",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Private Hospital",
                "uuid": "5ab46f09-23a8-439b-9e8e-484b56220753",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "PHC",
                "uuid": "23bf2ac6-4abc-4bd4-9a3e-52c5c6e3f9e1",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 27,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('If yes then refered?').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Examine the infant for other danger sign of morbidity",
      "timed": false
    },
    {
      "uuid": "a3c71cca-981e-4ac9-9a2c-3678a1603cde",
      "name": "Baby warming Counselling",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Child PNC - Baby warming - Dos",
          "uuid": "bfd8bd69-5840-47fa-9ef8-8c6c69f16c57",
          "keyValues": [],
          "concept": {
            "name": "Baby Warming Dos",
            "uuid": "f006c0b1-d6ad-44b4-b347-0f8ba148048d",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Baby Warming Donts",
          "uuid": "4781b8a4-814f-471f-8082-13a8bf67b629",
          "keyValues": [],
          "concept": {
            "name": "Baby Warming Donts",
            "uuid": "7113c221-0113-4593-b23a-b7f9495da255",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Child PNC - Baby warming - Donts",
          "uuid": "cfb8a8e9-2c36-44ad-af84-2a8ff06848c6",
          "keyValues": [],
          "concept": {
            "name": "Baby Warming Donts",
            "uuid": "7113c221-0113-4593-b23a-b7f9495da255",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Child PNC - Baby warming - Donts",
          "uuid": "ebc2c605-18f7-455c-85fc-980e4b0078d5",
          "keyValues": [],
          "concept": {
            "name": "Breast Feeding - Do's",
            "uuid": "3657a1ae-83cb-4204-82b0-0745d29541c2",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Child PNC - Hygiene - Dos",
          "uuid": "8696c222-8b43-4368-99ab-ca5a83fffd70",
          "keyValues": [],
          "concept": {
            "name": "Hygiene",
            "uuid": "73187abb-c46f-4b07-ae8f-8832850f911c",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Child PNC - Weight - Dos",
          "uuid": "336988c6-c89e-497e-9676-a5c896368219",
          "keyValues": [],
          "concept": {
            "name": "Child PNC Weight -Do's",
            "uuid": "063fd686-1070-405b-89a6-cbf5e3c79f0f",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Child PNC - Registration Immunisation - Dos",
          "uuid": "0d785936-3046-47ff-afd0-6ba23e02de5b",
          "keyValues": [],
          "concept": {
            "name": "Registration Immunisation - Do's",
            "uuid": "c13e5e72-2c93-4462-be0b-010263bb2e02",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Baby warming Counselling",
      "timed": false
    },
    {
      "uuid": "acf494bd-7063-4921-8ce4-1c83ff22c9fe",
      "name": "Breastfeeding Counselling",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "Child PNC - Breastfeeding - Dos",
          "uuid": "fbc4859d-8ddd-4ad6-a895-31d6f1edebc6",
          "keyValues": [],
          "concept": {
            "name": "Breast Feeding - Do's",
            "uuid": "3657a1ae-83cb-4204-82b0-0745d29541c2",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Breastfeeding Counselling",
      "timed": false
    },
    {
      "uuid": "5daf2832-49e2-4e12-a1fc-dbda8d98e8ff",
      "name": "Hygiene  Counselling",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Child PNC - Hygiene - Dos",
          "uuid": "9e6fbe0d-92e2-4501-be37-0d85c4edb8d9",
          "keyValues": [],
          "concept": {
            "name": "Hygiene advice",
            "uuid": "cddc0438-74a1-4bcb-843c-34a47da7c1e4",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Hygiene  Counselling",
      "timed": false
    },
    {
      "uuid": "0b8cf30e-71ea-4de7-852d-04ba6f20b81b",
      "name": "Weigth Counselling",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Child PNC - Weight - Dos",
          "uuid": "849d5dc2-7195-4b35-89a2-2dccfa431b6b",
          "keyValues": [],
          "concept": {
            "name": "Child PNC Weight -Do's",
            "uuid": "063fd686-1070-405b-89a6-cbf5e3c79f0f",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Weigth Counselling",
      "timed": false
    },
    {
      "uuid": "1692b73a-99c4-4aad-9380-ef86b24bebb0",
      "name": "Registration Immunisation Counselling",
      "displayOrder": 10,
      "formElements": [
        {
          "name": "Child PNC - Registration Immunisation - Dos",
          "uuid": "b5d73537-39ea-4763-b4af-79e409c395b1",
          "keyValues": [],
          "concept": {
            "name": "Registration Immunisation - Do's",
            "uuid": "c13e5e72-2c93-4462-be0b-010263bb2e02",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Registration Immunisation Counselling",
      "timed": false
    },
    {
      "uuid": "6b67132e-4cc7-43c2-94e5-426c64bf9831",
      "name": "KMC Point",
      "displayOrder": 11,
      "formElements": [
        {
          "name": "KMC Counselling Point (0-2 months)",
          "uuid": "36f760f8-8cb2-4de7-b8fc-2f1deee35f0b",
          "keyValues": [],
          "concept": {
            "name": "KMC Counselling Point (0-2 months)",
            "uuid": "f3a524bc-8426-4f41-96ad-58093e4e88c0",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.ageInMonths.lessThanOrEqualTo(2).matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "ageInMonths"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 2
                        },
                        "operator": "lessThanOrEqualTo"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": false
        },
        {
          "name": "KMC Counselling Point (0-6 months)",
          "uuid": "4ed29635-1be2-4243-88f1-ba6c1e291872",
          "keyValues": [],
          "concept": {
            "name": "KMC Counselling Point (0-6 months)",
            "uuid": "936e54b2-34c7-412e-83ab-cea207abb518",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.ageInMonths.lessThanOrEqualTo(6).matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "ageInMonths"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 6
                        },
                        "operator": "lessThanOrEqualTo"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": false
        }
      ],
      "rule" : 
({params, imports}) => {
    const programEncounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.ageInMonths.lessThanOrEqualTo(6).matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "showFormElementGroup"
            },
            {}
          ],
          "conditions": [
            {
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "ageInMonths"
                    },
                    "rhs": {
                      "type": "value",
                      "value": 6
                    },
                    "operator": "lessThanOrEqualTo"
                  }
                ]
              }
            }
          ]
        }
      ],
      "display": "KMC Point",
      "timed": false
    },
    {
      "uuid": "8490424b-269d-48b7-ae20-c081b0c01f32",
      "name": "High risk",
      "displayOrder": 12,
      "formElements": [
        {
          "name": "Is the child at high risk?",
          "uuid": "af2d7f81-2aa2-477e-953e-4c63535155d2",
          "keyValues": [],
          "concept": {
            "name": "Is the child at high risk",
            "uuid": "56d4f921-e3f0-4a07-9180-1e1c3eb33aee",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
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
          "mandatory": true
        }
      ],
      "display": "High risk",
      "timed": false
    }
  ],
  "decisionRule": ""use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const decisions = params.decisions;
    const age = programEncounter.programEnrolment.individual.getAgeInMonths();
        
    
    const decisionBuilder = new imports.rulesConfig.complicationsBuilder({
        programEncounter: programEncounter,
        complicationsConcept: "Counsel mother"
    });
    
     decisionBuilder.addComplication("Keep child warm in cloths")
            .when.valueInEncounter("Is there active movement of hands and legs?")
            .is.no;

        decisionBuilder.addComplication("Keep child warm in cloths")
            .when.valueInEncounter("Is there any life threatening abnormality?")
            .is.no;

        decisionBuilder.addComplication("Keep child in 3-4 folded cloths")
            .when.valueInEncounter("Is infant coverred with 3-4 folded cloth?")
            .containsAnswerConceptNameOtherThan("Properly covered and head also covered");

        decisionBuilder.addComplication("Give PCM")
            .when.valueInEncounter("Temperature of infant")
            .is.greaterThan(37.5);

        decisionBuilder.addComplication("Keep child warm in cloths")
            .when.valueInEncounter("Temperature of infant")
            .is.lessThanOrEqualTo(35.5);

        decisionBuilder.addComplication("Give PCM")
            .when.valueInEncounter("How you feel infants temprature on touch?")
            .containsAnswerConceptName("Abdomen and limbs all feel hot on touch");

        decisionBuilder.addComplication("Keep child warm in cloths")
            .when.valueInEncounter("How you feel infants temprature on touch?")
            .containsAnswerConceptName("Abdomen and limbs feel cold on touch");

        decisionBuilder.addComplication("apply 0.25%GV lotion, give first dose of cotri")
            .when.valueInEncounter("Condition of umbelicus")
            .containsAnswerConceptNameOtherThan("Normal");

          decisionBuilder.addComplication("Expain mother for exclusive breastfeeding")
            .when.valueInEncounter("Is there anything given other than breastfeeding for infant")
            .is.yes;

        decisionBuilder.addComplication("Expain mother for breastfeeding more than 10 times")
            .when.valueInEncounter("How many times breastfeeding given to child in last 24 hours")
            .is.lessThan(8);

        decisionBuilder.addComplication("Expain mother to increase frequency of breastfeeding")
            .when.valueInEncounter("In last 24 hours, for how many times infant passes urine?")
            .containsAnswerConceptName("Less than 5 times");

        decisionBuilder.addComplication("Give primary treatment")
            .when.valueInEncounter("Is there bleeding from any part of infant's body?")
            .is.yes;

        decisionBuilder.addComplication("Give primary treatment")
            .when.valueInEncounter("Is infant vomiting?")
            .is.yes;

        decisionBuilder.addComplication("Give primary treatment")
            .when.valueInEncounter("Does infant's abdomen look gasious?")
            .is.yes;

        decisionBuilder.addComplication("Give primary treatment")
            .when.valueInEncounter("Does infant looks icteric?")
            .is.yes;

        decisionBuilder.addComplication("Give primary treatment")
            .when.valueInEncounter("Does infant looks cynosed?")
            .is.yes;

        decisionBuilder.addComplication("Give primary treatment")
            .when.valueInEncounter("Does infant looks abnormal?")
            .is.yes;

        decisionBuilder.addComplication("Give primary treatment")
            .when.valueInEncounter("Is the infant's mouth cleft pallet seen?")
            .is.yes;

        decisionBuilder.addComplication("Give primary treatment")
            .when.valueInEncounter("Is there visible tumor on back or on head of infant?")
            .is.yes;

        decisionBuilder.addComplication("Give primary treatment")
            .when.valueInEncounter("Is foam coming from infant's mouth continuously?")
            .is.yes;

        decisionBuilder.addComplication("Give primary treatment")
            .when.valueInEncounter("Does infant has watery diarrhoea?")
            .is.yes;

        decisionBuilder.addComplication("Apply 0.25 % GV lotion  two times a day")
            .when.valueInEncounter("Is oral ulcer or thrush seen in infant's mouth")
            .is.yes;

        decisionBuilder
        .addComplication("If 10 or above pustules are present then give primary treatment and refer")
        .when.valueInEncounter("If yes, then how many visible pustules are on the body")
        .containsAnswerConceptName("10 or more than 10");


        decisionBuilder
        .addComplication("If less than 10 pustule then apply 0.5% GV lotion and give cotri syrup two times for 5 days").when.valueInEncounter("If yes, then how many visible pustules are on the body")
        .containsAnswerConceptName("Less than 10");
      
      
      decisions.encounterDecisions.push(decisionBuilder.getComplications());
      
       const complicationsBuilder = new imports.rulesConfig.complicationsBuilder({
        programEncounter: programEncounter,
        complicationsConcept: "Refer to the hospital for"
    });

        
        complicationsBuilder.addComplication("Not breathing properly")
            .when.valueInEncounter("Whether child breathing regularly?")
            .is.no;

        complicationsBuilder.addComplication("No Active Movement of hands and legs")
            .when.valueInEncounter("Is there active movement of hands and legs?")
            .is.no;

        complicationsBuilder.addComplication("Not paases stool and urine within 24  hour")
            .when.valueInEncounter("Does child paases stool and urine within 24  hour")
            .is.no;

        complicationsBuilder.addComplication("Life threatening abnormality")
            .when.valueInEncounter("Is there any life threatening abnormality?")
            .is.yes;

        complicationsBuilder.addComplication("palate/lips in child's mouth")
            .when.valueInEncounter("Examine for cleft palate/lips in child's mouth?")
            .is.yes;

        complicationsBuilder.addComplication("Blood coming out from part of body")
            .when.valueInEncounter("Is blood coming out from any part of body?")
            .is.yes;

        complicationsBuilder.addComplication("There is visible jaundice")
            .when.valueInEncounter("Is there visible jaundice?")
            .is.yes;

        complicationsBuilder.addComplication("High respiratory rate")
            .when.valueInEncounter("Child Respiratory Rate")
            .is.greaterThan(50).and.whenItem(age < 13).is.truthy
            .and.whenItem(age > 2).is.truthy;

        complicationsBuilder.addComplication("High respiratory rate")
            .when.valueInEncounter("Child Respiratory Rate")
            .is.greaterThan(40).and.whenItem(age > 12).is.truthy;

        complicationsBuilder.addComplication("High respiratory rate")
            .when.valueInEncounter("Child Respiratory Rate")
            .is.greaterThan(60).and.whenItem(age < 2).is.truthy;

        complicationsBuilder.addComplication("There is grunting sound")
            .when.valueInEncounter("Is there any grunting sound?")
            .is.yes;

        complicationsBuilder.addComplication("Abnormal Color")
            .when.valueInEncounter("How is the colour of infant")
            .containsAnswerConceptNameOtherThan("Pinkish");

        complicationsBuilder.addComplication("Less Infants Movement")
            .when.valueInEncounter("Look at the infants movement")
            .containsAnswerConceptNameOtherThan("Normal");

        complicationsBuilder.addComplication("High Fever")
            .when.valueInEncounter("Temperature of infant")
            .is.greaterThan(37.5);

        complicationsBuilder.addComplication("Low Temperature of infant")
            .when.valueInEncounter("Temperature of infant")
            .is.lessThanOrEqualTo(35.5);

        complicationsBuilder.addComplication("High Temperature of infant")
            .when.valueInEncounter("How you feel infants temprature on touch?")
            .containsAnswerConceptName("Abdomen and limbs all feel hot on touch");

        complicationsBuilder.addComplication("Low Temperature of infant")
            .when.valueInEncounter("How you feel infants temprature on touch?")
            .containsAnswerConceptName("Abdomen and limbs feel cold on touch");

        complicationsBuilder.addComplication("Abnormal Condition of umbelicus")
            .when.valueInEncounter("Condition of umbelicus")
            .containsAnswerConceptNameOtherThan("Normal");

        complicationsBuilder.addComplication("Abnormal attachment while sucking")
            .when.valueInEncounter("How is the infant attachment while sucking?")
            .containsAnswerConceptNameOtherThan("Good - Normal");

       
        complicationsBuilder.addComplication("Difficulty in breastfeeding")
            .when.valueInEncounter("Does infant has any difficulty in breastfeeding?")
            .is.yes;

        complicationsBuilder.addComplication("Bleeding from part of body")
            .when.valueInEncounter("Is there bleeding from any part of infant's body?")
            .is.yes;

        complicationsBuilder.addComplication("Infant vomiting")
            .when.valueInEncounter("Is infant vomiting?")
            .is.yes;

        complicationsBuilder.addComplication("infant's abdomen look gasious")
            .when.valueInEncounter("Does infant's abdomen look gasious?")
            .is.yes;

        complicationsBuilder.addComplication("infant looks icteric")
            .when.valueInEncounter("Does infant looks icteric?")
            .is.yes;

        complicationsBuilder.addComplication("infant looks cynosed")
            .when.valueInEncounter("Does infant looks cynosed?")
            .is.yes;

        complicationsBuilder.addComplication("infant looks abnormal")
            .when.valueInEncounter("Does infant looks abnormal?")
            .is.yes;

        complicationsBuilder.addComplication("cleft pallet seen in infant's mouth")
            .when.valueInEncounter("Is the infant's mouth cleft pallet seen?")
            .is.yes;

        complicationsBuilder.addComplication("there is visible tumor")
            .when.valueInEncounter("Is there visible tumor on back or on head of infant?")
            .is.yes;

        complicationsBuilder.addComplication("Continuously foam is coming from mouth")
            .when.valueInEncounter("Is foam coming from infant's mouth continuously?")
            .is.yes;

        complicationsBuilder.addComplication("infant has watery diarrhoea")
            .when.valueInEncounter("Does infant has watery diarrhoea?")
            .is.yes;

        const medicinedecisionBuilder = new imports.rulesConfig.complicationsBuilder({
            programEncounter: programEncounter,
            complicationsConcept: "medicine recommendations"
        });
            
            
        medicinedecisionBuilder
        .addComplication("If less than 10 pustule then give Cotrimoxazole with 1.5 ml of dosage")
        .when.valueInEncounter("If yes, then how many visible pustules are on the body")
        .containsAnswerConceptName("Less than 10").and.whenItem(age < 1).is.truthy;
        
        medicinedecisionBuilder
        .addComplication("If less than 10 pustule then give Cotrimoxazole with 2.5 ml of dosage")
        .when.valueInEncounter("If yes, then how many visible pustules are on the body")
        .containsAnswerConceptName("Less than 10").and.whenItem(age < 2).is.truthy
            .and.whenItem(age >= 1).is.truthy;

       decisions.encounterDecisions.push(complicationsBuilder.getComplications());
       decisions.encounterDecisions.push(medicinedecisionBuilder.getComplications());
    
       return decisions;
},
  "visitScheduleRule": ""use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
        programEncounter
    });
    const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;


    const birthWeight = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Birth Weight') || programEncounter.getObservationReadableValue('Birth Weight');

    const currentWeight = programEncounter.getObservationReadableValue('Weight') || programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Weight');


    const birthDate = programEncounter.programEnrolment.individual.dateOfBirth;
    let visitDate = programEncounter.earliestVisitDateTime;

    const encounterScheduleChildPNC = [

        {"name": "Child PNC - Saheli 2", "earliest": 3, "max": 4},
        {"name": "Child PNC - Saheli 3", "earliest": 5, "max": 6},
        {"name": "Child PNC - Saheli 4", "earliest": 7, "max": 8},
        {"name": "Child PNC - Saheli 5", "earliest": 10, "max": 11},
        {"name": "Child PNC - Saheli 6", "earliest": 14, "max": 15},
        {"name": "Child PNC - Saheli 7", "earliest": 21, "max": 22},
        {"name": "Child PNC - Saheli 8", "earliest": 28, "max": 29},
        {"name": "Child PNC - Saheli 9", "earliest": 35, "max": 36},
        {"name": "Child PNC - Saheli 10", "earliest": 42, "max": 43},
        {"name": "Child PNC - Saheli 11", "earliest": 49, "max": 50},
        {"name": "Child PNC - Saheli 12", "earliest": 60, "max": 61}
    ];


    if (!hasExitedProgram(programEncounter)) {

        if (currentWeight >= 3 || birthWeight >= 2.5) {
            console.log('normal------->');
            var schedule = _.chain(encounterScheduleChildPNC)
                .filter(e => imports.moment(visitDate)
                    .isSameOrBefore(imports.moment(birthDate).add(e.earliest, 'days').toDate(), 'date') === true)
                .filter(e => (programEncounter.programEnrolment.hasEncounter('Child PNC - Saheli', e.name)) === false)
                .first()
                .value();

            if (!_.isEmpty(schedule)) {
                console.log('schedule', schedule);
                const followupDate = imports.moment(birthDate).add(schedule.earliest, 'days').toDate();
                const followupOverdueDate = imports.moment(birthDate).add(schedule.max, 'days').toDate();

                scheduleBuilder.add({
                    name: schedule.name,
                    encounterType: 'Child PNC - Saheli',
                    earliestDate: followupDate,
                    maxDate: followupOverdueDate
                });
            }
        } else if (birthWeight < 2.5 && currentWeight < 3) {

            console.log('low birth');

            const followupDate = imports.moment(programEncounter.earliestVisitDateTime).add(3, 'days').toDate();
            const followupOverdueDate = imports.moment(followupDate).add(1, 'days').toDate();

            scheduleBuilder.add({
                name: 'Child PNC low birth - Saheli ',
                encounterType: 'Child PNC - Saheli',
                earliestDate: followupDate,
                maxDate: followupOverdueDate
            });

        }
        
        
          var encName = programEncounter.name;
        if (_.isEqual(encName, 'Child PNC - Saheli 12') || (birthWeight < 2.5 && currentWeight > 3)) {
            let followupDate = imports.moment(birthDate).add(2, 'months').toDate();
            let followupOverdueDate = imports.moment(followupDate).add(7, 'days').toDate();

            scheduleBuilder.add({
                name: 'Child followup -Saheli',
                encounterType: 'Child followup - Saheli',
                earliestDate: followupDate,
                maxDate: followupOverdueDate
            });

        }

    }


    return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}