{
  "name": "Child PNC Cluster Incahrge",
  "uuid": "cd1c6c33-1f90-41dc-aa97-dc2ba3ae65b7",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "34d06929-a099-4b77-bd9b-9569e6733d85",
      "name": "First examination",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Whether child breathing regularly?",
          "uuid": "e245c9da-68fd-412f-91b5-a87e7aa90367",
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
          "uuid": "59c2682f-4520-4cdb-b824-9d3f4f32f233",
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
          "uuid": "960cf5d2-6d9a-4cdf-be32-d687ffeb74f5",
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
          "uuid": "0bc4cf5a-0691-451e-b344-e155128b5500",
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
          "uuid": "0f2b39a3-80de-4b29-972d-28a61c2344ee",
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
          "uuid": "be1e7c21-a3b5-4dca-bd37-1687def99cab",
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
          "mandatory": true
        },
        {
          "name": "Does foam coming out from child's mouth?",
          "uuid": "a695a6dd-ede8-41dc-9476-78b2231d3486",
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
          "uuid": "70035f62-cc46-45a3-a387-4ab281656c67",
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
          "uuid": "52e84cd3-7777-45fb-b19f-0427798f2995",
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
          "uuid": "77a0a76c-63f8-4ac9-a23c-f450080f9a7a",
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
          "uuid": "4186c541-778e-484e-a4fd-0e8e6ba775ea",
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
          "uuid": "95470866-94fc-4a42-a639-6365c4d87a10",
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
          "uuid": "4bc998fd-14b8-4c1a-b831-08b685a1d8d5",
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
          "uuid": "5b919ce0-fc98-4f07-af86-7d22eb922d18",
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
      "uuid": "b4149ed0-9365-4af2-889f-f03a64faac11",
      "name": "Physical Examination",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Ask the Mother: Does infant has any problem now?",
          "uuid": "06b6b7b5-31de-4a51-9919-883044253bdf",
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
          "mandatory": true
        },
        {
          "name": "Specify the problem",
          "uuid": "3520ddee-a1df-408e-bbea-2e9d6b460b64",
          "keyValues": [],
          "concept": {
            "name": "Problem with infant",
            "uuid": "96ded0c5-3937-40b7-ab27-7a82126bd60c",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
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
          "uuid": "4d28b905-8ad8-4005-8b6a-db54f92e58b4",
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
          "mandatory": true
        },
        {
          "name": "Look and listen: Is there any grunting sound",
          "uuid": "4245dcb1-b5ac-4227-9d01-c0abfaf55407",
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is there chest indrawing?",
          "uuid": "0f58a1ea-126f-46c8-a4d7-acde3cd9c405",
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is there nasal flaring?",
          "uuid": "4023c9cf-8aad-4764-b034-fcfcd419a80b",
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
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "How is the colour of infant",
          "uuid": "255f5b1b-37e5-4476-8266-42d71d89403b",
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
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Look at the infants movement",
          "uuid": "958de89d-9504-420e-b44e-5358d6a5afc1",
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
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is anything applied on umbelicus?",
          "uuid": "c7e8ab34-c162-4ec4-8254-cd9c08d5a670",
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
          "displayOrder": 9,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is infant coverred with 3-4 folded cloth?",
          "uuid": "b53d5972-ebde-4a91-8184-9b7a4aabeaa2",
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
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Physical Examination",
      "timed": false
    },
    {
      "uuid": "58ff8bf1-623e-4b43-882e-5919a1b9f8bf",
      "name": "Temperature",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Is temperature recorded?",
          "uuid": "fadc7cd5-e556-4221-a9b5-9e5c781232a7",
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
          "uuid": "8bd6154d-dd3a-41e9-a8fc-cbc081660b91",
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
          "uuid": "c5ee4677-7dc4-4ada-89d5-9b997ec3b9c5",
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
          "uuid": "06177058-985e-4022-b4e9-448540e603db",
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
          "uuid": "ef5e3dce-a7e1-4aca-b48a-deed2d25de01",
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
      "uuid": "6bfc5fbd-6ebb-4b4b-99e4-e8af7877b3a2",
      "name": "Observe infant for 4-5 minutes while breastfeeding to check whether infant sucking well .",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "When was first breastfeed given to child?",
          "uuid": "596f5a9f-ce9e-4cd0-8f00-f7804b490a00",
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
          "uuid": "97677d93-b89d-424b-b090-a4cf771fad98",
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
          "uuid": "a5f485ce-1012-44a1-890e-7bcfc2495174",
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
          "name": "Is chin attached to breast?",
          "uuid": "c329c665-3a10-4765-abac-e73b3d1cd5a6",
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is lower lip turned outword",
          "uuid": "69bdee04-df1f-4303-92c0-596eb5c3d363",
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is more areola visible above than below the mouth",
          "uuid": "5826e3e7-7fb4-44e5-b24b-f5e58caabd04",
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
          "uuid": "2fa9d687-3bd3-485a-a2a4-2b0188fd477e",
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
          "uuid": "a0eb3f84-8fe7-43a3-a478-39befb80ce6b",
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
          "uuid": "a5b31859-0649-4f65-ac71-90c040e80a39",
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
          "uuid": "29f31852-b0db-49cd-bdae-2e8da6f8bece",
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
          "uuid": "f9bb5791-ee35-4fc7-aa42-a349a2e5188f",
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
          "uuid": "da8efccb-3b39-462d-91e4-2880493ecd80",
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
          "uuid": "c14c7b2b-88a3-4119-b4f5-041e4900978b",
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
          "uuid": "4d6e53fb-8b3e-4a3c-a7a9-11a2825e5848",
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
          "mandatory": true
        },
        {
          "name": "In last 24 hours, for how many times infant passes urine?",
          "uuid": "9c829857-7cf2-4485-968d-64b95d12626a",
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
          "uuid": "d4e1356c-7539-42d4-a581-e641f71234be",
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
          "mandatory": true
        }
      ],
      "display": "Observe infant for 4-5 minutes while breastfeeding to check whether infant sucking well .",
      "timed": false
    },
    {
      "uuid": "f745808d-8a53-4463-a4e9-0269a1b000ad",
      "name": "Examine the infant for other danger sign of morbidity",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Is there bleeding from any part of infant's body?",
          "uuid": "9a2dbea6-d221-4c56-aa4e-32284b793d91",
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
          "uuid": "4dbffa83-f7ae-4b3b-9efd-2c0753d554ce",
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
          "uuid": "ecdbd434-919d-4b87-9fba-9a2272725d06",
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
          "uuid": "44496d49-817e-4e38-a4aa-0fd68432dd32",
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
          "uuid": "6eb4c265-401f-496d-be0d-16dd137c1357",
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
          "uuid": "fcfec9bb-62a9-4053-a818-fbd4427d2a9e",
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
          "uuid": "4f1bcfb9-821d-4146-b8c8-861046c2b394",
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
          "mandatory": true
        },
        {
          "name": "Is there visible tumor on back or on head of infant?",
          "uuid": "88d7c88e-891d-4102-b8b3-983145e8879f",
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
          "mandatory": true
        },
        {
          "name": "Is foam coming from infant's mouth continuously?",
          "uuid": "ec1c240e-9d18-4487-a251-91c6500b0f76",
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
          "uuid": "bc4225c7-6b3d-4ba5-bc70-ee85f71c973f",
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
          "uuid": "6233555e-b493-4b3f-a556-7f338d85c814",
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
          "uuid": "fc604f29-1f57-470b-afc9-220992d211fa",
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
          "uuid": "47ec5fb6-0be3-4869-a6e4-340e940cca3b",
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
          "uuid": "f6dec46f-f9c5-48b8-a832-50f10910f0e7",
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
          "uuid": "789006d5-a16f-4147-b28a-da34f8028ee8",
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
          "uuid": "db494de9-a5c0-47c7-8307-1c250c9ab93e",
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
          "uuid": "dd773918-cc8c-4a6f-9c79-ac79f5124202",
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
          "uuid": "e289b48f-7d3e-4b3f-b488-31e5b2c6987e",
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
          "uuid": "22d56049-52f0-4537-83f1-254e3297e9de",
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
          "mandatory": true
        },
        {
          "name": "In last 24 hours for how many times did KMC?",
          "uuid": "9d95733d-9acf-43ab-8768-f772103a12b1",
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
          "mandatory": true
        },
        {
          "name": "In one time for how many minutes did KMC?",
          "uuid": "96092a14-3769-4d99-95de-8843ebd11599",
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
          "mandatory": true
        },
        {
          "name": "Weight of infant at time to stoped to do KMC",
          "uuid": "90165f45-9f59-409e-846b-156eae1068a7",
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
          "uuid": "b7382516-022d-4c74-a150-eb543b1b1f23",
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
          "uuid": "5278f01e-4ab1-4f5b-8f0d-f68255b96578",
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
          "uuid": "c1599a05-27b6-4483-82a2-f1e0d1577307",
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
  statusBuilder.show().when.valueInEncounter('Does child require to refer if morbidity found').containsAnswerConceptName('Yes');
 return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Who refered?",
          "uuid": "4bb9538a-dd7c-4bdf-b388-dbf3235ebb7f",
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
  statusBuilder.show().when.valueInEncounter('Does child require to refer if morbidity found').containsAnswerConceptName('Yes');
 return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Place of refer",
          "uuid": "362e0a21-dc42-48dc-af62-a98fc7e377eb",
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
  statusBuilder.show().when.valueInEncounter('Does child require to refer if morbidity found').containsAnswerConceptName('Yes');
 return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Examine the infant for other danger sign of morbidity",
      "timed": false
    },
    {
      "uuid": "25369bf2-cb49-4966-a913-2d11756db5f7",
      "name": "Baby warming Counselling",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Child PNC - Baby warming - Dos",
          "uuid": "b16aa6b7-b920-441f-8583-9a1c48219c5e",
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
          "uuid": "785240ee-373c-4386-a32d-1da8704ae175",
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
          "uuid": "9dbf67b9-3251-4bbf-8ff6-f0072e26c675",
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
          "uuid": "1cf25b49-0ba5-4edf-921d-876b41b833ac",
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
          "uuid": "34a043b2-9414-4b7c-bacd-689f361bcfcd",
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
          "uuid": "0445febf-925a-49c6-bb1d-fdd21d9a556f",
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
          "uuid": "b5330ec6-5a01-44bd-85a3-0b02bf5f7fbf",
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
      "uuid": "1806526f-c646-4524-ba44-f43444c1f786",
      "name": "Breastfeeding Counselling",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "Child PNC - Breastfeeding - Dos",
          "uuid": "b75a29e5-8ed4-4361-ab80-556d9b92373b",
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
      "uuid": "b54cff56-51ba-4ca2-a072-82220014c9b0",
      "name": "Hygiene  Counselling",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Child PNC - Hygiene - Dos",
          "uuid": "9d1339fb-37dd-4386-a40f-3bf587e41e39",
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
      "uuid": "009189c1-5342-4f8f-b1b0-fd64d47ae6a9",
      "name": "Weigth Counselling",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Child PNC - Weight - Dos",
          "uuid": "bcbf907c-7281-4b94-88ed-fa62cb46ff45",
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
      "uuid": "04b39aef-2400-471b-a207-6d8ce77d624e",
      "name": "KMC Point",
      "displayOrder": 10,
      "formElements": [
        {
          "name": "KMC Counselling Point (0-2 months)",
          "uuid": "39442a7a-88bd-4175-b20a-1a7968eca78e",
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
          "uuid": "abaf791b-a66d-434a-9905-6f4125f77182",
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
      "uuid": "945e9966-7751-43f1-b657-c7353addbadf",
      "name": "Registration Immunisation Counselling",
      "displayOrder": 11,
      "formElements": [
        {
          "name": "Child PNC - Registration Immunisation - Dos",
          "uuid": "3759a5f6-7bd8-4e9e-baf6-3cbe4d516fd6",
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
({ params, imports }) => {
  const programEncounter = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEncounter
  });

 const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;
 const birthDate = programEncounter.programEnrolment.individual.dateOfBirth;
 let visitDate = programEncounter.encounterDateTime;
 
 if (programEncounter.programEnrolment.hasEncounter('Child PNC Cluster Incharge','Child PNC Cluster Incharge-1') && imports.moment(visitDate)
  .isSameOrBefore(imports.moment(birthDate).add(61, 'days').toDate(), 'date') && !programEncounter.programEnrolment.hasEncounter('Child PNC Cluster Incharge','Child PNC Cluster Incharge-2')) {
         
        const followupDate = imports.moment(birthDate).add(47, 'days').toDate();
        const followupOverdueDate = imports.moment(followupDate).add(14, 'days').toDate();

             scheduleBuilder.add({
                  name: 'Child PNC Cluster Incharge-2',
                  encounterType: 'Child PNC Cluster Incharge',
                  earliestDate: followupDate,
                  maxDate: followupOverdueDate
            });
           console.log("Child PNC Cluster Incharge-2=====>",programEncounter.programEnrolment.hasEncounter('Child PNC Cluster Incharge','Child PNC Cluster Incharge-2'));
}

const encounterScheduleChildFollowupCluster = [
    {"name": "Child Followup Cluster Incharge-1", "earliest": 99, "max": 113},
    {"name": "Child Followup Cluster Incharge-2", "earliest": 155, "max": 169}
];

const nutritionalStatus = programEncounter.getObservationReadableValue('Nutritional status of child');

const scheduleChildFollowupClusterInchargeVisits = (programEncounter, scheduleBuilder) => {    
    var schedule = _.chain(encounterScheduleChildFollowupCluster)
      .filter(e => imports.moment(visitDate)
      .isSameOrBefore(imports.moment(birthDate).add(e.earliest, 'days').toDate(), 'date') === true)
      .filter(e => (programEncounter.programEnrolment
      .hasEncounter('Child Followup Cluster Incharge', e.name)) === false)
      .first()
      .value();

    if (!_.isEqual(schedule, undefined)) {        
        scheduleBuilder.add({
            name: schedule.name,
            encounterType: 'Child Followup Cluster Incharge',
            earliestDate: imports.moment(birthDate).add(schedule.earliest, 'days').toDate(),
            maxDate: imports.moment(birthDate).add(schedule.max, 'days').toDate()
        });
    }
};


if (!_.isEqual(nutritionalStatus, 'Normal') && !_.isEqual(nutritionalStatus, undefined)){
              scheduleChildFollowupClusterInchargeVisits(programEncounter, scheduleBuilder);
    }
              
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}