{
  "name": "Child PNC Form",
  "uuid": "62b5b7ae-f0b3-49c0-b7cb-eb2b616bc89b",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "e16ab373-4a44-405e-90fd-342c51522d0e",
      "name": "First examination",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Whether child breathing regularly?",
          "uuid": "8a551b6e-c02c-40c2-b370-121b873a0ed6",
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
 
 const birthPlace = programEncounter.programEnrolment.findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.findLatestObservationFromPreviousEncounters('Whether child breathing regularly?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is the child pinkish in colour?",
          "uuid": "b3c777e1-fa00-4242-9308-b76000dd5f85",
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
  const birthPlace = programEncounter.programEnrolment.findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.findLatestObservationFromPreviousEncounters('Is the child pinkish in colour?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is body temprature warm?",
          "uuid": "45fbb928-74ce-4867-b480-2621a24804bb",
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
  const birthPlace = programEncounter.programEnrolment.findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.findLatestObservationFromPreviousEncounters('Is body temprature warm?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is there active movement of hands and legs?",
          "uuid": "ee2b2e6e-e3ac-4a36-82a6-208093a41566",
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
  const birthPlace = programEncounter.programEnrolment.findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.findLatestObservationFromPreviousEncounters('Is there active movement of hands and legs?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is there any life threatening abnormality?",
          "uuid": "684cf48f-43e9-4f84-8295-8a6e73d38367",
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
  const birthPlace = programEncounter.programEnrolment.findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.findLatestObservationFromPreviousEncounters('Is there any life threatening abnormality?', programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Examine for cleft palate/lips in child's mouth?",
          "uuid": "e6267e66-c9b5-49dc-8caf-a49e861d7009",
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
  const birthPlace = programEncounter.programEnrolment.findLatestObservationInEntireEnrolment("Place of Birth");
 const condition1 = birthPlace && birthPlace.getReadableValue() === 'Home';
 const formPreviouslyFilled = programEncounter.programEnrolment.findLatestObservationFromPreviousEncounters("Examine for cleft palate/lips in child's mouth?", programEncounter);
 
  const condition2 = _.isEmpty(formPreviouslyFilled) || _.isEmpty(formPreviouslyFilled.getReadableValue());

   statusBuilder.show().whenItem(condition1 && condition2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does foam coming out from child's mouth?",
          "uuid": "5bc8b18e-3878-4ab9-b9b4-3e4f85333702",
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
          "uuid": "01e95368-a48c-45d0-a8d8-650610a22009",
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
          "uuid": "665cf018-f9bc-4623-891e-d9b797700694",
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
          "uuid": "c58d90a7-051f-4ecf-a950-a6fbe8210bdd",
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
          "uuid": "d4903487-3bda-45f7-bbb8-c68ce2931628",
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
          "uuid": "c030f86e-9e67-42d6-b072-0931fe293a39",
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
          "uuid": "d7808fc1-47ad-416d-9707-3d9a1ec954b6",
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
          "uuid": "99a23986-6e20-4599-b151-f81b2ae5c496",
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
      "uuid": "d9ff7c3f-7192-4bc3-94eb-707a8749e398",
      "name": "Physical Examination",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Ask the Mother: Does infant has any problem now?",
          "uuid": "3efa3378-fee6-4cf1-8d0f-a564683fec3a",
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
          "uuid": "4d0034c1-d25c-4238-b263-f4fcd4c44cc6",
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
          "uuid": "7c53e4cd-33dc-449f-8eae-7b5fb570388f",
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
          "uuid": "1f50c855-685e-436b-a999-5aeda17160e3",
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
          "uuid": "e7296e29-c005-4418-ad97-20166d01dae1",
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
          "uuid": "35420f08-a015-46f5-9bf0-017faff882a0",
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
          "uuid": "4b2ef587-f5f0-4ec6-89ae-2e3d0feb5e81",
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
          "uuid": "c9d5a653-1624-4b60-a658-62c71e66774f",
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
          "uuid": "7deed285-1512-4abd-a225-4b746f9b76f0",
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
      "uuid": "07f91e8b-bbdb-45c0-a2df-31276fad9a47",
      "name": "Temperature",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Is temperature recorded?",
          "uuid": "92a0428c-8ab8-4709-bfcc-b56abb3bdddd",
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
          "uuid": "203a7f35-c2bb-425c-86e6-07dadcd77567",
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
          "uuid": "78dacf7c-79b4-40c1-b1e2-5041d188cc78",
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
          "uuid": "9ebcd5b3-34af-49f4-aed4-d424b369587b",
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
          "uuid": "638489d6-24d4-4a4a-b2b5-00da16b4d3a5",
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
      "uuid": "f34ff772-94fa-42d5-8a74-68706e07c790",
      "name": "Observe infant for 4-5 minutes while breastfeeding to check whether infant sucking well .",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "When was first breastfeed given to child?",
          "uuid": "170b9079-0f43-4b63-8bf7-7caa7a9afbf4",
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
          "uuid": "bf187997-3bd2-401c-8c67-7e3a85e242a5",
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
          "uuid": "df793a5a-aa24-4839-864c-2e32386ca458",
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
          "uuid": "1a3a5c4b-8d5c-4172-ae3e-eea51d317476",
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
          "uuid": "47af3eaf-02a0-419d-b272-521363a97d7b",
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
          "uuid": "9425a952-f6c4-4e01-b98d-a9e485117b5e",
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
          "uuid": "62086778-fff3-4632-a546-2d7b11b4626b",
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
          "uuid": "233db56b-08cc-4330-a6d3-3536e82eb79f",
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
          "uuid": "959f05a4-1147-4dac-8cbe-0875e8e01e6a",
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
          "uuid": "0bdbad6a-9c3e-4d7e-8c9d-03baa9c27661",
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
          "uuid": "22a53602-4f6a-40d0-a13f-a5d6428f2f51",
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
          "uuid": "f2a63b07-bbd3-421d-bb90-b251f0efedf8",
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
          "uuid": "78d64520-f7e9-4f42-bc20-793737990987",
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
          "uuid": "5c881c13-3657-4b9a-9cd9-65f7607cb09c",
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
          "uuid": "a10d6e96-4665-4042-9f31-67694f5e9189",
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
          "uuid": "9071933d-711e-470f-8299-7dd9f3559e51",
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
      "uuid": "9f653a37-af1b-43ad-bce8-cb0dd36aa0cc",
      "name": "Examine the infant for other danger sign of morbidity",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Is there bleeding from any part of infant's body?",
          "uuid": "85ddcc66-6691-4329-8881-b96af962326a",
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
          "uuid": "ed4c36f3-8f27-487b-b06f-c46693a047f5",
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
          "uuid": "62877240-0ab9-428f-9c00-3633f1f7866a",
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
          "uuid": "95a1fe24-f111-428f-b434-72c5036d11ab",
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
          "uuid": "18d2f56d-311b-458b-b7c6-3c165cbd55eb",
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
          "uuid": "d4a2d2b8-f1fa-4546-b520-52e57e4aca91",
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
          "uuid": "4df25726-234a-48f7-be3e-e0ef6cb3a1ea",
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
          "uuid": "919c5c57-64ef-42c3-9bc2-0ecef21bf93a",
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
          "uuid": "3b0224c0-4d7c-4b2f-8830-26848a36cd10",
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
          "uuid": "60ab511b-c43f-40ea-9ad9-187a425a5900",
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
          "uuid": "700343b4-a564-43f9-8148-eba8f34893b3",
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
          "uuid": "f2ed2fac-ce6a-4691-883a-bae52533261a",
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
          "uuid": "08f70f7b-93a9-4680-85a4-6e5d91708884",
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
          "uuid": "aeb8efd1-9648-4279-b0cd-742e43c4b46b",
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
          "uuid": "eb8ead91-244c-4040-b767-685c1842aea3",
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
          "uuid": "36dda6af-c6de-4fb6-a93f-d03508b09d55",
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
          "uuid": "0cb5ee51-30c6-42ef-8b5e-cec762f53eba",
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
          "uuid": "99437511-fc72-4b14-929e-54d3e0cf538e",
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
          "uuid": "a6b96e9b-4119-4c65-a849-183ab6b4fed4",
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
          "uuid": "24240f6f-3911-4d56-84cc-9cef11a1e25e",
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
          "uuid": "47274072-1ea4-496e-b479-f9438f960f5f",
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
          "uuid": "981d83aa-e8f0-4987-8a69-8ad0beef427e",
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
          "uuid": "d35edaa9-3077-41d5-b3ff-3ff7b858d746",
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
          "uuid": "b58e485f-9591-43ef-96cf-26905237101c",
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
          "uuid": "3566b691-d7c7-4ba0-984a-afa90ad797ec",
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
          "uuid": "99128624-b77e-49c8-af43-a5c996dd6b6a",
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
          "uuid": "8accb432-4057-474d-b100-aef8dae0bed0",
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
      "uuid": "74d14a57-af10-4dd7-994a-11b4421b88af",
      "name": "Baby warming Counselling",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Child PNC - Baby warming - Dos",
          "uuid": "9ffd5e46-8cac-4bb6-a95e-1a903d4f3b97",
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
          "uuid": "5fddd664-fcf5-4c35-b533-020fc6bac235",
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
          "uuid": "c21f0d48-917b-4be6-891b-4de455fd1252",
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
          "uuid": "8c73e0b7-6887-4283-9c86-3f84044ec9b8",
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
          "uuid": "8daa96de-df99-491c-9a11-144c72ef5fc4",
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
          "uuid": "d39d3772-bae1-4c51-8d92-c4459ee19aba",
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
          "uuid": "226f3464-3941-4fff-94e9-6f6c3e59e086",
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
      "uuid": "bc89f664-e88d-46c9-9e9d-b06ed2c48e57",
      "name": "Breastfeeding Counselling",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "Child PNC - Breastfeeding - Dos",
          "uuid": "1202aff5-78a2-4e87-9b97-99bd394f4734",
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
      "uuid": "98674c9f-259c-46e1-a01c-8972f2b175bb",
      "name": "Hygiene  Counselling",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Child PNC - Hygiene - Dos",
          "uuid": "be69c5d0-b979-492a-80d3-2261aad41a96",
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
      "uuid": "bb5de08d-1991-46bf-b8be-e574f3cf26c9",
      "name": "Weigth Counselling",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Child PNC - Weight - Dos",
          "uuid": "a292e525-9bfa-49a0-ae40-7f67566a07f9",
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
      "uuid": "716fa585-f52d-4681-b636-8701a5c49c44",
      "name": "Registration Immunisation Counselling",
      "displayOrder": 10,
      "formElements": [
        {
          "name": "Child PNC - Registration Immunisation - Dos",
          "uuid": "752db2e4-29e5-44e0-a8a4-91633ececd8f",
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
      "uuid": "f03d3c5b-c652-4d2e-8763-dc85c400f688",
      "name": "KMC Point",
      "displayOrder": 11,
      "formElements": [
        {
          "name": "Give skin-to-skin contact",
          "uuid": "213b0b30-bf71-4509-b61e-c033237bfa5b",
          "keyValues": [],
          "concept": {
            "name": "Give skin-to-skin contact (voided~238377)",
            "uuid": "8fd3b817-037f-4f10-ace7-daa879319118",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "KMC Counselling Point (0-2 months)",
          "uuid": "243b5270-858a-437b-929a-fd05d96020e8",
          "keyValues": [],
          "concept": {
            "name": "KMC Counselling Point (0-2 months)",
            "uuid": "f3a524bc-8426-4f41-96ad-58093e4e88c0",
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
          "uuid": "d6ee3226-1a35-4265-9bce-7de3cbe22ee7",
          "keyValues": [],
          "concept": {
            "name": "KMC Counselling Point (0-6 months)",
            "uuid": "936e54b2-34c7-412e-83ab-cea207abb518",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
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
        },
        {
          "name": "Give mother solitude",
          "uuid": "603419fe-b2a8-4a88-be01-b0eb4def715f",
          "keyValues": [],
          "concept": {
            "name": "Give mother solitude (voided~238378)",
            "uuid": "a47b7f43-1de9-4ea7-911a-d30a4b0b9eb9",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Ask the mother to sit comfortably",
          "uuid": "7ef135a6-6cc3-4a38-a5a4-bc41ccf5ae6b",
          "keyValues": [],
          "concept": {
            "name": "Ask the mother to sit comfortably (voided~238379)",
            "uuid": "ca048e58-3476-4f2d-aff6-afae300819da",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Remove all clothing",
          "uuid": "ac997b10-54d2-4986-be61-c94490804a60",
          "keyValues": [],
          "concept": {
            "name": "Remove all clothing (voided~238380)",
            "uuid": "5d2564ce-177f-40d6-aa9e-be3b9d840f23",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Place the baby on the mother's chest",
          "uuid": "9ef34804-9222-4589-b88c-498196fb4ca3",
          "keyValues": [],
          "concept": {
            "name": "Place the baby on the mother's chest (voided~238381)",
            "uuid": "e28fbbe4-7b1c-4b2f-a957-6bb99fc7c09e",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Cover the baby",
          "uuid": "ee9dcd5d-73d1-40f7-ab59-9c6a5b53e032",
          "keyValues": [],
          "concept": {
            "name": "Cover the baby (voided~238382)",
            "uuid": "5de1ffd0-92f3-4df8-9240-7d4a88a2066c",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Breastfeed frequently",
          "uuid": "e99c712a-da21-49ee-8d2b-b965cb6659ae",
          "keyValues": [],
          "concept": {
            "name": "Breastfeed frequently (voided~238383)",
            "uuid": "aa2ecc6a-5a0c-4704-8e66-3aad222d1b07",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "warm the room",
          "uuid": "ceca134e-2a28-4d6d-93d5-32759f47d7a6",
          "keyValues": [],
          "concept": {
            "name": "warm the room (voided~238384)",
            "uuid": "d6bc7ed2-8281-41d0-b8fc-a359dc2df5fa",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "contact can be provided by the father",
          "uuid": "327fe5b2-c604-4792-8481-9baa69d9fa58",
          "keyValues": [],
          "concept": {
            "name": "contact can be provided by the father (voided~238385)",
            "uuid": "d098c498-40a9-4256-82e8-658bb5655310",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "If skin-to-skin contact is not possible",
          "uuid": "8f6412f4-0851-4400-ba61-013507b092b2",
          "keyValues": [],
          "concept": {
            "name": "If skin-to-skin contact is not possible (voided~238386)",
            "uuid": "d7d7a88d-b101-4f2e-8ab9-feb922b09faf",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Warm the room with a heating device",
          "uuid": "7470474d-05fe-4e2d-9fab-1e2c24d9cb1e",
          "keyValues": [],
          "concept": {
            "name": "Warm the room with a heating device (voided~238387)",
            "uuid": "3a8da49c-0848-4c80-a0f3-bb7b1e7e88bf",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "If it is summer, dress the child in one or two layers of clothes",
          "uuid": "aea58116-3a68-4d4d-a25d-ed7fcabccd5e",
          "keyValues": [],
          "concept": {
            "name": "If it is summer, dress the child in one or two layers of clothes (voided~238388)",
            "uuid": "7b161275-fe82-4a5c-850a-17f337677143",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Dress the child in three-four clothes",
          "uuid": "a48a8b91-f86c-4729-b9f1-ec9e784a4035",
          "keyValues": [],
          "concept": {
            "name": "Dress the child in three-four clothes (voided~238389)",
            "uuid": "6115d33d-ee37-4dfc-a0b9-d889089a123f",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Place mother and baby side by side",
          "uuid": "76d35a4c-e39e-4f20-b19a-c0d2c4091070",
          "keyValues": [],
          "concept": {
            "name": "Place mother and baby side by side (voided~238390)",
            "uuid": "c571a196-d5fa-4cc4-8c86-dbc68ed9bde2",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "If it is cold, cover the mother and baby",
          "uuid": "00cbbd78-b103-46a3-a5b6-46cbeff5b4a9",
          "keyValues": [],
          "concept": {
            "name": "If it is cold, cover the mother and baby (voided~238391)",
            "uuid": "25058c1b-be10-4fc5-abcc-01b52dd04be8",
            "dataType": "Coded",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "voided": true,
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
\tconst programEncounter = params.entity;
\tconst scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
\t\tprogramEncounter
\t});
\tconst hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;

\tconst nutritionalStatus = programEncounter.getObservationReadableValue('Nutritional status of child') || programEncounter.getObservationReadableValue('Current nutritional status according to weight and age');

\tconst birthWeight = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Birth Weight') || programEncounter.getObservationReadableValue('Birth Weight');

\tconst currentWeight = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Weight')
\t\t|| programEncounter.getObservationReadableValue('Weight');

\tconst ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();
\tconst birthDate = programEncounter.programEnrolment.individual.dateOfBirth;
\tlet visitDate = programEncounter.encounterDateTime;

\tconst encounterScheduleChildPNC = [
\t\t{"name": "Child PNC 2", "earliest": 28, "max": 36},
\t\t{"name": "Child PNC 3", "earliest": 50, "max": 61}
\t];

\tconst encounterScheduleChildFollowupCluster = [
\t\t{"name": "Child Followup Cluster Incharge-1", "earliest": 99, "max": 113},
\t\t{"name": "Child Followup Cluster Incharge-2", "earliest": 155, "max": 169}
\t];

\tconst scheduleChildPNCVisitsNormal = () => {

\t\tvar schedule = _.chain(encounterScheduleChildPNC)
\t\t\t.filter(e => imports.moment(visitDate)
\t\t\t\t.isSameOrBefore(imports.moment(birthDate).add(e.earliest, 'days').toDate(), 'date') === true)
\t\t\t.filter(e => (programEncounter.programEnrolment.hasEncounter('Child PNC', e.name)) === false)
\t\t\t.first()
\t\t\t.value();

\t\tif (!_.isEmpty(schedule)) {
\t\t\t
\t\t\tconst followupDate = imports.moment(birthDate).add(schedule.earliest, 'days').toDate();
\t\t\tconst followupOverdueDate = imports.moment(followupDate).add(schedule.max, 'days').toDate();

\t\t\tscheduleBuilder.add({
\t\t\t\tname: schedule.name,
\t\t\t\tencounterType: 'Child PNC',
\t\t\t\tearliestDate: followupDate,
\t\t\t\tmaxDate: followupOverdueDate
\t\t\t});
\t\t}
\t};

\tconst scheduleChildPNCVisitsLowBirthWeight = () => {
\t\tif (programEncounter.programEnrolment.hasEncounter('Birth Form', 'Birth Form')) {
\t\t\tconst birthEncounterDate = programEncounter.programEnrolment.findEncounter('Birth Form', 'Birth Form').earliestVisitDateTime;

\t\t\tlet earliestOffset = 7;
\t\t\tlet visitCount = 0;
\t\t\tdo {
\t\t\t\tvisitCount++;
\t\t\t\tearliestOffset = 7 * visitCount;
\t\t\t} while (!(imports.moment(programEncounter.earliestVisitDateTime)
\t\t\t\t.isBefore(imports.moment(birthEncounterDate).add(earliestOffset, 'days').toDate(), 'date')));

\t\t\tconst followupDate = imports.moment(birthEncounterDate).add(earliestOffset, 'days').toDate();
\t\t\tconst followupOverdueDate = imports.moment(followupDate).add(4, 'days').toDate();
\t\t\t
\t\t\tscheduleBuilder.add({
\t\t\t\tname: 'Child PNC',
\t\t\t\tencounterType: 'Child PNC',
\t\t\t\tearliestDate: followupDate,
\t\t\t\tmaxDate: followupOverdueDate
\t\t\t});
\t\t}
\t};

\tconst scheduleChildFollowupClusterInchargeVisits = () => {
\t\tconst birthDate = programEncounter.programEnrolment.individual.dateOfBirth;
\t\tlet visitDate = programEncounter.encounterDateTime;

\t\tvar schedule = _.chain(encounterScheduleChildFollowupCluster)
\t\t\t.filter(e => imports.moment(visitDate)
\t\t\t\t.isSameOrBefore(imports.moment(birthDate).add(e.earliest, 'days').toDate(), 'date') === true)
\t\t\t.filter(e => (programEncounter.programEnrolment.hasEncounter('Child Followup Cluster Incharge', e.name)) === false)
\t\t\t.first()
\t\t\t.value();

\t\tif (!_.isEmpty(schedule)) {
\t\t\t
\t\t\tscheduleBuilder.add({
\t\t\t\tname: schedule.name,
\t\t\t\tencounterType: 'Child Followup Cluster Incharge',
\t\t\t\tearliestDate: imports.moment(birthDate).add(schedule.earliest, 'days').toDate(),
\t\t\t\tmaxDate: imports.moment(birthDate).add(schedule.max, 'days').toDate()
\t\t\t});
\t\t}
\t};

\tif (!hasExitedProgram(programEncounter)) {
\t
\t\tif (birthWeight >= 2 || currentWeight >= 2) {
\t\t\tscheduleChildPNCVisitsNormal();
\t\t} else if (birthWeight < 2 && ageOfChildInMonths < 2) {
\t\t
\t\t\tscheduleChildPNCVisitsLowBirthWeight();
\t\t}else if (currentWeight < 2 && ageOfChildInMonths >= 2) {

\t\t\tlet followupDate = imports.moment(programEncounter.earliestVisitDateTime).add(15, 'days').toDate();
\t\t\tlet followupOverdueDate = imports.moment(followupDate).add(3, 'days').toDate();
\t\t\tscheduleBuilder.add({
\t\t\t\tname: 'Child Followup-1',
\t\t\t\tencounterType: 'Child Followup',
\t\t\t\tearliestDate: followupDate,
\t\t\t\tmaxDate: followupOverdueDate
\t\t\t});
\t\t}

\t\tif (!_.isEqual(nutritionalStatus, 'Normal') && ageOfChildInMonths >= 2 && ageOfChildInMonths <= 6) {
\t\t\tscheduleChildFollowupClusterInchargeVisits();
\t\t}

\t\tvar encName = programEncounter.name;
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


\t}


\treturn scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}