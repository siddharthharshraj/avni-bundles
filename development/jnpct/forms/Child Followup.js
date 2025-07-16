{
  "name": "Child Followup",
  "uuid": "4548364c-ff22-447b-baec-3c63935a7e00",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "f8ad8d1b-04ef-4db4-a56a-767c38e25fa2",
      "name": "Problems",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Ask the mother now: Child has any problem",
          "uuid": "d1e9c85b-1a44-4c77-a210-e410652dc765",
          "keyValues": [],
          "concept": {
            "name": "Ask the mother now: Child has any problem",
            "uuid": "2c450841-582e-4612-ad9c-8fdcaa0ce969",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Then write the problem",
          "uuid": "7016022f-395e-4ab1-ac45-a5f27c541095",
          "keyValues": [],
          "concept": {
            "name": "Then write the problem",
            "uuid": "5847a83b-84e7-4119-abfc-bf2a0354c7e9",
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
  statusBuilder.show().when.valueInEncounter('Ask the mother now: Child has any problem').containsAnswerConceptName('Yes')
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Problems",
      "timed": false
    },
    {
      "uuid": "1f103af0-b01d-4cd3-a692-6079f1f354cf",
      "name": "Check for general danger signs",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Is the child able to drink or breastfeed",
          "uuid": "bffd9074-467a-4327-8f5d-59e03eee29e4",
          "keyValues": [],
          "concept": {
            "name": "Is the child able to drink or breastfeed",
            "uuid": "8de443e5-60ab-458c-b7d6-961dff4e2635",
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
          "mandatory": true
        },
        {
          "name": "Does the child vomits everything",
          "uuid": "aa62b3c4-e2d8-4ab9-abf1-43272c555a55",
          "keyValues": [],
          "concept": {
            "name": "Does the child vomits everything",
            "uuid": "7f5d6e16-2e84-40cd-b459-0cde857f2b49",
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
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Has the child had convulsion",
          "uuid": "b6f2d70f-2237-49e9-95db-7bb21b5f2851",
          "keyValues": [],
          "concept": {
            "name": "Has the child had convulsion",
            "uuid": "fbf27f7e-ddd8-4c8f-ad93-70cd0114bd7c",
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
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "See the child is lethargic or unconsious",
          "uuid": "c7b21109-78e1-414f-a375-6541d3ec9b0d",
          "keyValues": [],
          "concept": {
            "name": "See the child is lethargic or unconsious",
            "uuid": "cc36f402-2fff-48ef-8643-a017955b731e",
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is there general danger sign",
          "uuid": "885937e3-a5be-40df-a9f7-6ec9488c8173",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Is there general danger sign",
            "uuid": "591b7d38-343f-436f-a695-7679b27b3d24",
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
  
 statusBuilder.show().when.valueInEncounter('Is the child able to drink or breastfeed').containsAnswerConceptName('No')
.or.when.valueInEncounter('Does the child vomits everything')
.containsAnswerConceptName('Yes').or.when.valueInEncounter('Has the child had convulsion').containsAnswerConceptName('Yes').or.when
.valueInEncounter('See the child is lethargic or unconsious')
.containsAnswerConceptName('Yes').or.when.valueInEncounter('Is there general danger sign').containsAnswerConceptName('Yes');

  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Check for general danger signs",
      "timed": false
    },
    {
      "uuid": "4a03637f-f689-4f2f-99be-9756f3775011",
      "name": "Ask about main symptoms",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Does the child have cough or difficult breathing",
          "uuid": "6a5bc5f3-5f80-4d23-9e33-79c900cd2d66",
          "keyValues": [],
          "concept": {
            "name": "Does the child have cough or difficult breathing",
            "uuid": "35f5c273-5abe-4bb6-838c-52e844040a57",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Since how many days",
          "uuid": "3824afaa-4ce1-482a-8db3-7f5882723967",
          "keyValues": [],
          "concept": {
            "name": "Since how many days",
            "uuid": "93d6cded-aea1-42ce-8833-be70340d0df9",
            "dataType": "Numeric",
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
  statusBuilder.show().when.valueInEncounter('Does the child have cough or difficult breathing').containsAnswerConceptName('Yes'); 
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "count breaths in one minute",
          "uuid": "37a3f7a9-c7df-4635-971b-fd78379a4bb8",
          "keyValues": [],
          "concept": {
            "name": "count breaths in one minute",
            "uuid": "ae985bb7-1bdb-432a-99ec-613c183293d4",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Count breaths in one minute",
          "uuid": "3c93e696-5849-40e2-83ed-422a46754764",
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('Does the child have cough or difficult breathing').containsAnswerConceptName('Yes'); 
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does the child has fast breathing",
          "uuid": "2bfd0515-35ff-485b-bbf8-0421a3d8251c",
          "keyValues": [],
          "concept": {
            "name": "Does the child has fast breathing",
            "uuid": "47643574-084a-4060-8bb9-46d8910e5dfa",
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('Does the child have cough or difficult breathing').containsAnswerConceptName('Yes'); 
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Look for chest indrwaning",
          "uuid": "535d8ada-e917-45c1-880e-783f39d29f09",
          "keyValues": [],
          "concept": {
            "name": "look for chest indrwaning",
            "uuid": "e992edc8-5886-4b20-8a76-4597e94bfa78",
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
  statusBuilder.show().when.valueInEncounter('Does the child have cough or difficult breathing').containsAnswerConceptName('Yes'); 
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Ask about main symptoms",
      "timed": false
    },
    {
      "uuid": "278a9e93-0c47-43ae-8802-286b98c38047",
      "name": "Check for Diarrhoea",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Does child has diorrhea",
          "uuid": "93455ec8-292f-4379-91e1-2697c18dd5ee",
          "keyValues": [],
          "concept": {
            "name": "does child has diorrhea",
            "uuid": "3432fca6-bd23-41aa-9f99-f6851c11609d",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "For how long days",
          "uuid": "350d44d8-0c45-4c8d-9791-d882b1598b81",
          "keyValues": [],
          "concept": {
            "name": "for how long days",
            "uuid": "12b6251b-024d-42db-a87b-95043c0c18bb",
            "dataType": "Numeric",
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
 statusBuilder.show().when.valueInEncounter('does child has diorrhea')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is there any blood in the stool",
          "uuid": "6b073d6e-1c0a-480f-a809-567f29dc277c",
          "keyValues": [],
          "concept": {
            "name": "is there any blood in the stool",
            "uuid": "8e95a585-dc1c-4e1d-bf3e-3d759e62005a",
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
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter('does child has diorrhea')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Check the child's general condition,is the child lethargic or unconsious ?",
          "uuid": "ac2d6a4d-a469-4989-b70e-2bdecabec1b5",
          "keyValues": [],
          "concept": {
            "name": "check the childs general condition,is the child lethargic or unconsious ?",
            "uuid": "47e11aab-6c94-401e-aaad-961d822cc862",
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter('does child has diorrhea')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Restless or irritable",
          "uuid": "01429182-feaf-4f17-980b-3d14438b3ec1",
          "keyValues": [],
          "concept": {
            "name": "restless or irritable",
            "uuid": "faa4ef73-b5ef-4b24-a261-ca3f15e40ed8",
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
 statusBuilder.show().when.valueInEncounter('does child has diorrhea')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Look for sunken eyes",
          "uuid": "248b6ae5-ba21-4760-99ad-c3c8215b3e99",
          "keyValues": [],
          "concept": {
            "name": "look for sunken eyes",
            "uuid": "407d008c-c3d2-44f6-a0bb-456e9629b05b",
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
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter('does child has diorrhea')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Offer the child fluid , is the child unable to drink or drinking poorly",
          "uuid": "e8bde2fb-3d6d-41de-904a-ed45e729a903",
          "keyValues": [],
          "concept": {
            "name": "offer the child fluid , is the child unable to drink or drinking poorly",
            "uuid": "b0de3dce-e5a1-45d1-a319-cc7eceecb6a4",
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
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter('does child has diorrhea')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Drinking eagerly",
          "uuid": "9d4663f2-c969-44da-bf7c-99d4a657da3d",
          "keyValues": [],
          "concept": {
            "name": "drinking eagerly",
            "uuid": "bbc76bec-18ea-430e-a16d-d1121344ab25",
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
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter('does child has diorrhea')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is the child thirsty",
          "uuid": "8888da40-e423-4b79-aeeb-e08904517cc8",
          "keyValues": [],
          "concept": {
            "name": "Is the child thirsty",
            "uuid": "a929909f-6bc2-4e0e-b1db-957123d67a23",
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
 statusBuilder.show().when.valueInEncounter('does child has diorrhea')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Pinch the skin of the abdomen . Does it go back very slowly (Longer than 2 seconds )",
          "uuid": "8182ee28-4d9e-4589-bc93-1c41c92014e0",
          "keyValues": [],
          "concept": {
            "name": "Pinch the skin of the abdomen . Does it go back very slowly (Longer than 2 seconds )",
            "uuid": "6e71b1e1-e5a1-49f5-9943-53ee837b4d8e",
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
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter('does child has diorrhea')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does it go back slowly(less than 2 second)",
          "uuid": "034210cc-d50c-4534-b10d-20a85b771088",
          "keyValues": [],
          "concept": {
            "name": "does it go back slowly(less than 2 second)",
            "uuid": "803fb63a-7121-4c9d-8060-c850eaeb866e",
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
 statusBuilder.show().when.valueInEncounter('does child has diorrhea')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Check for Diarrhoea",
      "timed": false
    },
    {
      "uuid": "c97da1f6-b2df-475a-9ecd-00d520b2719f",
      "name": "Check for Fever",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Does child has history of fever",
          "uuid": "e6e99c26-c67a-4928-8e93-83cb49d5756a",
          "keyValues": [],
          "concept": {
            "name": "does child has history of fever",
            "uuid": "3059b1cf-b935-4d90-95bd-d6c5b4cf838e",
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
          "name": "Does child feels hot by touch",
          "uuid": "0c4032f6-6084-4de9-b32f-5c1b17e3a5d9",
          "keyValues": [],
          "concept": {
            "name": "does child feels hot by touch",
            "uuid": "71a59c4e-b468-4de8-be98-24eeb1031e01",
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
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
statusBuilder.show().when.valueInEncounter('does child has history of fever')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is temperature recorded?",
          "uuid": "0b3f868d-032f-4a52-940e-5fb31fc14256",
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
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
statusBuilder.show().when.valueInEncounter('does child has history of fever')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "What is the auxiliary temperature",
          "uuid": "acab11ee-19ed-48d6-b62c-24ce979d2ca3",
          "keyValues": [],
          "concept": {
            "name": "what is the axillary temprature",
            "uuid": "22a24aab-b2f1-4fbd-9835-30b8d9843cf4",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 35.5,
            "highNormal": 37.5,
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter('Is temperature recorded?')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Reason for not recording temperature",
          "uuid": "605053ce-3164-445a-98dd-fb575b10942e",
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('Is temperature recorded?')
            .containsAnswerConceptName('No');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Fever since how many days",
          "uuid": "04e1b202-ba74-4b6f-949a-c20bfad284d4",
          "keyValues": [],
          "concept": {
            "name": "fever since how many days",
            "uuid": "273dbfab-b4a8-4842-9272-2dc0e3aeaa93",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
statusBuilder.show().when.valueInEncounter('does child has history of fever')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "If fever since more than 7 days then look for stiff neck",
          "uuid": "66fbe7d5-b3e9-4977-ada5-611cb4f948b0",
          "keyValues": [],
          "concept": {
            "name": "if fever since more than 7 days then look for stiff neck",
            "uuid": "067b543f-27ba-4156-aa69-f9d268e5ab0f",
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
statusBuilder.show().when.valueInEncounter('does child has history of fever')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does child has daily fever",
          "uuid": "8eff8aa1-31ba-45d4-9209-f25014d7c3f8",
          "keyValues": [],
          "concept": {
            "name": "does child has daily fever",
            "uuid": "d96d63c9-36c7-4039-b5c6-aba9e83b539e",
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
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
statusBuilder.show().when.valueInEncounter('does child has history of fever')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Check for Fever",
      "timed": false
    },
    {
      "uuid": "e4f5d6d3-0c22-4fff-8b4b-70a6b74b4efd",
      "name": "Check for Malnutrition",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "weight of child",
          "uuid": "b721ca92-0734-477a-a577-fff4ae81d5ee",
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "if child age is 2-6 month then according to age and weight in which grade",
          "uuid": "660f7014-1d18-4bab-9d2d-28ea06c356de",
          "keyValues": [],
          "concept": {
            "name": "if child age is 2-6 month then according to age and weight in which grade",
            "uuid": "39d7a2e3-94e6-48e3-8307-6705c521ba7e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Underweight",
                "uuid": "d1fef660-c8c0-449a-a34c-45cb32322d92",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Moderate",
                "uuid": "31bc8ca1-1c52-421b-be6e-05874c97e6bb",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Does child have visible severe wasting",
          "uuid": "fb7b0d07-6b1e-415d-aa51-a68cdf474064",
          "keyValues": [],
          "concept": {
            "name": "does child have visible severe wasting",
            "uuid": "7f76de32-8a63-4dc0-bfc0-897ac15a4674",
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
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 const age = programEncounter.programEnrolment.individual.getAgeInMonths();
 statusBuilder.show().whenItem(age > 6).is.truthy;
 return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Is there oedema on both feet",
          "uuid": "cfe732b4-7364-491d-87c2-6e8d73a32db3",
          "keyValues": [],
          "concept": {
            "name": "Is there oedema on both feet",
            "uuid": "c749befc-bc3e-4495-92db-5d2ffa5cd8c9",
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 const age = programEncounter.programEnrolment.individual.getAgeInMonths();
 statusBuilder.show().whenItem(age > 6).is.truthy;
 return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "ACOORDING TO OEDEMA ON BOTH FEET CHILD IS IN WHICH GRADE",
          "uuid": "dcd574d6-51ec-42df-8e96-206146c5c28e",
          "keyValues": [],
          "concept": {
            "name": "ACOORDING TO OEDEMA ON BOTH FEET CHILD IS IN WHICH GRADE",
            "uuid": "52453b5e-6755-4abf-a967-2026fc0d4837",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Underweight",
                "uuid": "d1fef660-c8c0-449a-a34c-45cb32322d92",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Normal",
                "uuid": "eae1e6a3-b8ad-4716-9a52-a5677fb1f4ca",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Moderate",
                "uuid": "31bc8ca1-1c52-421b-be6e-05874c97e6bb",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Height",
          "uuid": "f49df10b-62b7-4a5d-82f2-1df6dee91b1f",
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
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 const age = programEncounter.programEnrolment.individual.getAgeInMonths();
 statusBuilder.show().whenItem(age > 6).is.truthy;
 return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Weight",
          "uuid": "92b50a33-a86a-4adb-95e2-677e5f0ac7e1",
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
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Current nutritional status according to weight and age",
          "uuid": "ed644c60-4417-46ed-a93d-075622f6dbc7",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Current nutritional status according to weight and age",
            "uuid": "68a6a336-4a91-468b-9b7d-ff37e637f5b7",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
 
  const height = programEncounter.getObservationValue("Height");
  const weight = programEncounter.getObservationValue("Weight");
  const asOnDate = programEncounter.encounterDateTime;
  const individual = programEncounter.programEnrolment.individual;
  const age = programEncounter.programEnrolment.individual.getAgeInMonths();
  
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

const zScoreGradeStatusMappingWeightForAge = {
    '1': 'Normal',
    '2': 'Moderately Underweight',
    '3': 'Severely Underweight'
};

const zScoreGradeStatusMappingWeightForHeight = [
    ["SAM", -3],
    ["MAM", -2],
    ["Normal", 1],
    ["Normal", 2],
    ["Normal", 3],
    ["Normal", Infinity],
];

const weightForHeightStatus = function (zScore) {
 let found = _.find(zScoreGradeStatusMappingWeightForHeight, function (currentStatus) {
        return zScore <= currentStatus[1];
    });
    return found && found[0];
}

  const zScoresForChild = imports.common.getZScore(individual, asOnDate, weight, height);
    console.log('zScoresForChild', zScoresForChild);
    const wfaGrade = getGradeforZscore(zScoresForChild.wfa);
    const wfaStatus = zScoreGradeStatusMappingWeightForAge[wfaGrade];
   
 return new imports.rulesConfig.FormElementStatus(formElement.uuid, age<= 60, wfaStatus); 
 },
          "mandatory": false
        },
        {
          "name": "Current nutritional status according to weight and height",
          "uuid": "15344342-6cfc-4c9f-9426-9ad3e6b1216b",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Current nutritional status according to weight and height",
            "uuid": "4f0378c2-834d-47d1-8000-06d9048828e9",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
 
  const height = programEncounter.getObservationValue("Height");
  const weight = programEncounter.getObservationValue("Weight");
  const asOnDate = programEncounter.encounterDateTime;
  const individual = programEncounter.programEnrolment.individual;
  const age = programEncounter.programEnrolment.individual.getAgeInMonths();
  
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

const zScoreGradeStatusMappingWeightForAge = {
    '1': 'Normal',
    '2': 'Moderately Underweight',
    '3': 'Severely Underweight'
};

const zScoreGradeStatusMappingWeightForHeight = [
    ["SAM", -3],
    ["MAM", -2],
    ["Normal", 1],
    ["Normal", 2],
    ["Normal", 3],
    ["Normal", Infinity],
];

const weightForHeightStatus = function (zScore) {
 let found = _.find(zScoreGradeStatusMappingWeightForHeight, function (currentStatus) {
        return zScore <= currentStatus[1];
    });
    return found && found[0];
}

  const zScoresForChild = imports.common.getZScore(individual, asOnDate, weight, height);
    console.log('zScoresForChild', zScoresForChild);
    const wfh = zScoresForChild.wfh; 
    const wfhStatus = weightForHeightStatus(zScoresForChild.wfh);

 return new imports.rulesConfig.FormElementStatus(formElement.uuid, age > 6, wfhStatus); 
 },
          "mandatory": false
        },
        {
          "name": "MUAC of child",
          "uuid": "fecd8d0d-66de-4d6d-977f-9f60640e1e8c",
          "keyValues": [],
          "concept": {
            "name": "MUAC of child",
            "uuid": "59e44308-2884-477a-96ef-701a4de23352",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 const age = programEncounter.programEnrolment.individual.getAgeInMonths();
 statusBuilder.show().whenItem(age > 6).is.truthy;
 return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Nutritional status of Child",
          "uuid": "c90096eb-db43-4701-9664-4933fd1ec170",
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
          "displayOrder": 11,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
 
  const height = programEncounter.getObservationValue("Height");
  const weight = programEncounter.getObservationValue("Weight");
  const asOnDate = programEncounter.encounterDateTime;
  const individual = programEncounter.programEnrolment.individual;
  const age = programEncounter.programEnrolment.individual.getAgeInMonths();
  
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

const zScoreGradeStatusMappingWeightForAge = {
    '1': 'Normal',
    '2': 'Moderately Underweight',
    '3': 'Severely Underweight'
};

const zScoreGradeStatusMappingWeightForHeight = [
    ["SAM", -3],
    ["MAM", -2],
    ["Normal", 1],
    ["Normal", 2],
    ["Normal", 3],
    ["Normal", Infinity],
];

const weightForHeightStatus = function (zScore) {
 let found = _.find(zScoreGradeStatusMappingWeightForHeight, function (currentStatus) {
        return zScore <= currentStatus[1];
    });
    return found && found[0];
}

  const zScoresForChild = imports.common.getZScore(individual, asOnDate, weight, height);
    console.log('zScoresForChild', zScoresForChild);
    const wfaGrade = getGradeforZscore(zScoresForChild.wfa);
    const wfaStatus = zScoreGradeStatusMappingWeightForAge[wfaGrade];
    const wfh = zScoresForChild.wfh; 
    const wfhStatus = weightForHeightStatus(zScoresForChild.wfh);

var value = '';
const muac = programEncounter.getObservationValue("MUAC of child");
const isOedema = programEncounter.getObservationReadableValue("Is there oedema on both feet");

if (muac <= 11.5 || _.isEqual(isOedema, 'Yes') || wfh < -3)
    value = 'SAM';
else if(_.inRange(muac, 11.6, 12.6 ) || _.inRange(wfh, -1.9 , -3.1 ))
    value = 'MAM';
else value = 'Normal';

 return new imports.rulesConfig.FormElementStatus(formElement.uuid, age > 6, value); 
 },
          "mandatory": false
        },
        {
          "name": "If child is in SAM then refered to CMTC?",
          "uuid": "e3530c64-ef7f-4fd2-8bbf-aa25a740cb46",
          "keyValues": [],
          "concept": {
            "name": "If child is in SAM then refered to CMTC?",
            "uuid": "6df74fa2-036c-45c6-a6c2-de4c25d89695",
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
          "displayOrder": 12,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "refer date",
          "uuid": "f48961f7-396c-46e1-8a26-645f47180d88",
          "keyValues": [],
          "concept": {
            "name": "refer date",
            "uuid": "827cc521-0a39-442b-b044-a6d9d87be708",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Check for Malnutrition",
      "timed": false
    },
    {
      "uuid": "cdd5ef4c-1385-4520-bb24-e91fb2071dd3",
      "name": "Referral details",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "If child is in SAM then refered to CMTC?",
          "uuid": "64b83f0e-c3d3-4274-b902-fbc1242952f1",
          "keyValues": [],
          "concept": {
            "name": "If child is in SAM then refered to CMTC?",
            "uuid": "6df74fa2-036c-45c6-a6c2-de4c25d89695",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  const nutritionalStatus = programEncounter.getObservationValue("Nutritional status of child");  
 const age = programEncounter.programEnrolment.individual.getAgeInMonths();
  statusBuilder.show().whenItem(age > 6).is.truthy        
  .and.whenItem(_.isEqual(nutritionalStatus,'SAM')).is.truthy;   
       return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Refer date",
          "uuid": "0bf50c57-6842-4237-99cf-6f9dfcce31cb",
          "keyValues": [],
          "concept": {
            "name": "refer date",
            "uuid": "827cc521-0a39-442b-b044-a6d9d87be708",
            "dataType": "Date",
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
  statusBuilder.show().when.valueInEncounter('If child is in SAM then refered to CMTC?')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Referral details",
      "timed": false
    },
    {
      "uuid": "Check for Anemia",
      "name": "Check for Anemia",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Look for palmer pallor",
          "uuid": "4a355f1a-cb20-46a0-b6bb-cf0e113cf425",
          "keyValues": [],
          "concept": {
            "name": "Look for palmer pallor",
            "uuid": "761eb3e1-df93-42f8-83a8-acb9b65cb834",
            "dataType": "Coded",
            "answers": [
              {
                "name": "some palmer pallor",
                "uuid": "6354ef85-9ce1-473a-8656-b68aff12d4d6",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "severe palmer pallor",
                "uuid": "d0f7fb2d-c611-4655-9d71-a1de701ce850",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "no palmer pallor",
                "uuid": "02848e59-38aa-467f-b0aa-90052ddf9091",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
          "name": "If child is very weak or very anemic then check for his food",
          "uuid": "a711d347-64db-4ff3-884a-a3a4570a319f",
          "keyValues": [],
          "concept": {
            "name": "If child is very weak or very anemic then check for his food",
            "uuid": "b540fc79-93cb-4f65-a802-a34281437a63",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Whether child still get breastfeed",
          "uuid": "a5d0cb0d-d687-4580-abba-476360906b1e",
          "keyValues": [],
          "concept": {
            "name": "Whether child still get breastfeed",
            "uuid": "da385e88-b879-482c-bdf2-1081a9ef1aed",
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
   const age = programEncounter.programEnrolment.individual.getAgeInYears();
        statusBuilder.show().whenItem(age < 2).is.truthy;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "If yes then how many times in 24 hour",
          "uuid": "b7dbbbed-d51d-44da-85b8-78eb1a036e70",
          "keyValues": [],
          "concept": {
            "name": "if yes then how many times in 24 hour",
            "uuid": "db32e8a8-14d7-4bab-9f66-83f898111944",
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
  statusBuilder.show().when.valueInEncounter('Whether child still get breastfeed')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Breast feed given in night also",
          "uuid": "4dac258f-e4d3-44f3-826d-dbd8db337081",
          "keyValues": [],
          "concept": {
            "name": "breast feed given in night also",
            "uuid": "2d7134a0-ad59-45a7-aa71-2adc43b0248c",
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('Whether child still get breastfeed')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does child recived any kind of liquid or solid food",
          "uuid": "fb4fec9b-4310-4bb2-91c4-08c4973eea13",
          "keyValues": [],
          "concept": {
            "name": "does child recived any kind of liquid or solid food",
            "uuid": "66bb9495-25de-4bc4-80ec-5d1a19a9b317",
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
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "How many times in 24 hours",
          "uuid": "61a8168c-07e7-4eaf-8250-6e7cc7779a4e",
          "keyValues": [],
          "concept": {
            "name": "how many times in 24 hours",
            "uuid": "7676a057-aac1-468d-800d-751ac01d7122",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter('does child recived any kind of liquid or solid food').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "How much food is given",
          "uuid": "918fe172-592e-46f2-b4bb-2d89ade17280",
          "keyValues": [],
          "concept": {
            "name": "how much food is given",
            "uuid": "507bcc95-6f59-4814-85a2-fbd3ab623917",
            "dataType": "Coded",
            "answers": [
              {
                "name": "half katori",
                "uuid": "d7431a6a-00b2-4f1f-b16f-b281f5b6963e",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "two katori",
                "uuid": "69facb3b-e479-4542-a57e-eb430a17804c",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "one and half katori",
                "uuid": "c8321b16-5709-43d5-9741-1c0872f69fef",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "one katori",
                "uuid": "f9e74154-9f2a-4a05-8cf7-129f71093f7d",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
 statusBuilder.show().when.valueInEncounter('does child recived any kind of liquid or solid food').containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Check for Anemia",
      "timed": false
    },
    {
      "uuid": "c6481c90-9b2f-4367-a175-944a8637593b",
      "name": "Ask for other complaints",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Does child has any other complaint",
          "uuid": "6b4c4f38-f2a9-4729-8f92-95348fc7008a",
          "keyValues": [],
          "concept": {
            "name": "does child has any other complaint",
            "uuid": "3d2ba75b-a3ba-4ff7-8dbd-86fa6d260155",
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
          "name": "Write the complaint",
          "uuid": "c2015860-f2a5-41ad-b0de-d5188170b6ce",
          "keyValues": [],
          "concept": {
            "name": "write the complaint",
            "uuid": "f1606c37-7f5c-411f-8fb2-0c2313b103da",
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
  statusBuilder.show().when.valueInEncounter('does child has any other complaint')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Ask for other complaints",
      "timed": false
    },
    {
      "uuid": "feebfdda-1228-4e42-94d4-2b4f9639243d",
      "name": "Facility",
      "displayOrder": 10,
      "formElements": [
        {
          "name": "Does child is going to anganwadi",
          "uuid": "3c461b09-73c4-44cd-a388-c9ff78dfd40e",
          "keyValues": [],
          "concept": {
            "name": "Does child is going to anganwadi",
            "uuid": "524de7d6-80e2-4821-b1c7-6e05c03da259",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Received food packets from anganwadi",
          "uuid": "64bc341c-2678-49ae-9798-0be02cc8ac74",
          "keyValues": [],
          "concept": {
            "name": "recived food packets from anganwadi",
            "uuid": "0575356d-d857-457a-ac16-3cdd1867ae2c",
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
  statusBuilder.show().when.valueInEncounter('Does child is going to anganwadi')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does child went to VHND",
          "uuid": "ed3c86dc-7f19-449d-b4bb-af6c27bd5550",
          "keyValues": [],
          "concept": {
            "name": "does child went to VHND",
            "uuid": "a10a0ab4-3a46-4709-92f5-43cdb81146c8",
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
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Does child require to refer",
          "uuid": "12cb3d02-9805-4585-98f5-05ebbbfb70e0",
          "keyValues": [],
          "concept": {
            "name": "does child require to refer",
            "uuid": "cb644b9e-d43a-4829-9f3e-9f4750ffbaa4",
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Child Referred ?",
          "uuid": "38ad372d-6380-4fd5-8519-eb763b955ca1",
          "keyValues": [],
          "concept": {
            "name": "Child Referred ?",
            "uuid": "ef729085-d135-4e6d-8072-3b2e6bf5b6e0",
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
   statusBuilder.show().when.valueInEncounter('does child require to refer')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Who refered ?",
          "uuid": "25668684-13c8-44b5-9148-63488bc4c626",
          "keyValues": [],
          "concept": {
            "name": "who refered ?",
            "uuid": "e6fdc0e0-e1bd-4a0f-8fd0-efc733418274",
            "dataType": "Coded",
            "answers": [
              {
                "name": "NURSE",
                "uuid": "51acec86-e972-40e4-be51-6d9fe349a89a",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "SUPERVISOR",
                "uuid": "39967f0a-93d3-4f69-8ec8-d13d8e720016",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
                "name": "SELF",
                "uuid": "33754456-a5ff-4335-b759-3033e3886555",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Aarogya Saheli",
                "uuid": "e1e21294-73be-4d7c-b524-306b6bd369c7",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "DOCTOR",
                "uuid": "ab51ba5e-bcdf-4969-9411-c527102c9d9d",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "AASHA",
                "uuid": "2085df38-3f49-4dc7-93c0-ddbb89a5b512",
                "dataType": "NA",
                "answers": [],
                "order": 7,
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
   statusBuilder.show().when.valueInEncounter('Child Referred ?')
            .containsAnswerConceptName('Yes');
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Place of referral",
          "uuid": "8af80895-a598-4ba5-8b7a-7840808ffc93",
          "keyValues": [],
          "concept": {
            "name": "Place of referral",
            "uuid": "db23114a-899f-4904-b43f-0c8356960a25",
            "dataType": "Coded",
            "answers": [
              {
                "name": "CHC KAPRADA",
                "uuid": "29f824b6-e09e-429a-b261-90d062d19afa",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "CHC",
                "uuid": "f2cfc6dd-c898-4d7d-acbf-db3acb433136",
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
                "name": "CHC NANAPONDHA",
                "uuid": "3eacbba3-32aa-489e-844f-6600950f5fa6",
                "dataType": "NA",
                "answers": [],
                "order": 8,
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
                "name": "NANA PONDHA",
                "uuid": "7f25eda5-e22b-4f2f-bb6a-b400c22eba3a",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "PHC",
                "uuid": "23bf2ac6-4abc-4bd4-9a3e-52c5c6e3f9e1",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "SRH",
                "uuid": "55520393-af5d-406b-b734-8810e2164d15",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "State hospital",
                "uuid": "0097d74d-c046-4504-9efe-e9811f6363af",
                "dataType": "NA",
                "answers": [],
                "order": 0,
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
   statusBuilder.show().when.valueInEncounter('Child Referred ?')
            .containsAnswerConceptName('Yes');
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Facility",
      "timed": false
    },
    {
      "uuid": "376a89a3-2fc1-45b5-8263-1aee4f407bfa",
      "name": "Counselling Points",
      "displayOrder": 11,
      "formElements": [
        {
          "name": "Child followup counselling point (0-6 months)",
          "uuid": "71554ca8-83f4-4405-9f29-463a311e8464",
          "keyValues": [],
          "concept": {
            "name": "Child followup counselling point (0-6 months)",
            "uuid": "e59b4bad-4726-46d1-bf5f-aaf813d6bdf1",
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
          "name": "Child followup counselling point (7-12 months)",
          "uuid": "927adcbc-3852-472f-9868-669f9c799994",
          "keyValues": [],
          "concept": {
            "name": "Child followup counselling point (7-12 months)",
            "uuid": "ebfae430-e545-4074-918d-8a6d106f7b68",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.ageInMonths.greaterThanOrEqualTo(7).and.when.ageInMonths.lessThanOrEqualTo(12).matches();
  
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
                          "value": 7
                        },
                        "operator": "greaterThanOrEqualTo"
                      },
                      {
                        "lhs": {
                          "type": "ageInMonths"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 12
                        },
                        "operator": "lessThanOrEqualTo"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": false
        },
        {
          "name": "Child followup counselling point (2 years and more)",
          "uuid": "51276448-d8a8-4124-8427-487ee32a848d",
          "keyValues": [],
          "concept": {
            "name": "Child followup counselling point (2 years and more)",
            "uuid": "e24a3931-6de8-4f8f-aa1b-979ed9c7ee91",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.ageInYears.greaterThanOrEqualTo(2).matches();
  
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
                          "type": "ageInYears"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 2
                        },
                        "operator": "greaterThanOrEqualTo"
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
      "display": "Counselling Points",
      "timed": false
    }
  ],
  "decisionRule": "  "use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const decisions = params.decisions;
    const moment = imports.moment;
    const weight = programEncounter.getObservationValue("Weight");
    const height = programEncounter.getObservationValue("Height");
    const asOnDate = programEncounter.encounterDateTime; 
    const individual = programEncounter.programEnrolment.individual;

   const zScoreGradeStatusMappingWeightForAge = {
    '1': 'Normal',
    '2': 'Moderately Underweight',
    '3': 'Severely Underweight'
};

const zScoreGradeStatusMappingHeightForAge = {
    '1': 'Normal',
    '2': 'Stunted',
    '3': 'Severely stunted'
};

const zScoreGradeStatusMappingWeightForHeight = [
    ["SAM", -3],
    ["MAM", -2],
    ["Normal", 1],
    ["Normal", 2],
    ["Normal", 3],
    ["Normal", Infinity],
];

const weightForHeightStatus = function (zScore) {
    let found = _.find(zScoreGradeStatusMappingWeightForHeight, function (currentStatus) {
        return zScore <= currentStatus[1];
    });
    return found && found[0];
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

const addIfRequired = (decisions, name, value) => {
    if (value === -0) value = 0;
    if (value !== undefined) decisions.push({name: name, value: value});
};

const zScoresForChild = imports.common.getZScore(individual, asOnDate, weight, height);

  const wfaGrade = getGradeforZscore(zScoresForChild.wfa);
  const wfaStatus = zScoreGradeStatusMappingWeightForAge[wfaGrade];
  const hfaGrade = getGradeforZscore(zScoresForChild.hfa);
  const hfaStatus = zScoreGradeStatusMappingHeightForAge[hfaGrade];
  const wfhStatus = weightForHeightStatus(zScoresForChild.wfh);

addIfRequired(decisions.encounterDecisions, "Weight for age z-score", zScoresForChild.wfa);
addIfRequired(decisions.encounterDecisions, "Weight for age Grade", wfaGrade);
addIfRequired(decisions.encounterDecisions, "Weight for age Status", wfaStatus ? [wfaStatus] : []);

addIfRequired(decisions.encounterDecisions, "Weight for height z-score", zScoresForChild.wfh);
addIfRequired(decisions.encounterDecisions, "Weight for Height Status", wfhStatus ? [wfhStatus] : []);

const decisionBuilder = new imports.rulesConfig.complicationsBuilder({
        programEncounter: programEncounter,
        complicationsConcept: "Refer to the hospital for"
    });
 
 const age = programEncounter.programEnrolment.individual.getAgeInMonths();


        decisionBuilder.addComplication("Not able to drink or breastfeed")
            .when.valueInEncounter("Is the child able to drink or breastfeed").is.no;
        decisionBuilder.addComplication("Child Vomiting everything")
            .when.valueInEncounter("Does the child vomits everything").is.yes;
        decisionBuilder.addComplication("child had convulsion")
            .when.valueInEncounter("Has the child had convulsion").is.yes;
        decisionBuilder.addComplication("child is lethargic or unconsious")
            .when.valueInEncounter("See the child is lethargic or unconsious").is.yes;
        decisionBuilder.addComplication("there is general danger sign")
            .when.valueInEncounter("Is there general danger sign").is.yes;
        decisionBuilder.addComplication("Fast breathing")
            .when.valueInEncounter("Does the child has fast breathing").is.yes;
        decisionBuilder.addComplication("chest indrwaning")
            .when.valueInEncounter("look for chest indrwaning").is.yes;
        decisionBuilder.addComplication("child has complaint")
            .when.valueInEncounter("does child has any other complaint").is.yes;

        
        decisionBuilder.addComplication("High respiratory rate")
            .when.valueInEncounter("Child Respiratory Rate")
            .is.greaterThan(50).and.whenItem(age < 13).is.truthy
            .and.whenItem(age > 2).is.truthy;

        decisionBuilder.addComplication("High respiratory rate")
            .when.valueInEncounter("Child Respiratory Rate")
            .is.greaterThan(40).and.whenItem(age > 12).is.truthy;

        decisionBuilder.addComplication("High respiratory rate")
            .when.valueInEncounter("Child Respiratory Rate")
            .is.greaterThan(60).and.whenItem(age < 2).is.truthy;
 
 decisions.encounterDecisions.push(decisionBuilder.getComplications());
      

     
    const medicision = [];
    const encounterDecisions = [];
    
    const isIndrwaning = programEncounter.getObservationReadableValue("look for chest indrwaning") == "Yes";
    const isFastBreathing = programEncounter.getObservationReadableValue("Does the child has fast breathing") == "Yes";
    const ageInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();
    const ageInYears = programEncounter.programEnrolment.individual.getAgeInYears();
    const isFeelHotByTouch = programEncounter.getObservationReadableValue("does child feels hot by touch") == "Yes";
    const isTemparatureRecorded = programEncounter.getObservationReadableValue("Is temperature recorded?") == "Yes";
       
        
    if(isIndrwaning || isFastBreathing){
          if(ageInMonths >= 2 && ageInMonths <= 12){
             medicision.push("If look for chest indrwaning or fast breathing is yes then give Cotrimoxazole with 2.5 ml of dosage");
          }
          if(ageInMonths > 12 && ageInYears <= 5){
            medicision.push("If look for chest indrwaning or fast breathing is yes then give Cotrimoxazole with 5.0 ml of dosage");
          }             
    }
    
    if(isFeelHotByTouch && isTemparatureRecorded){
        if(ageInMonths>=2 && ageInYears <= 3){
          medicision.push("If child feels hot by touch and temperature recorded are yes then give Paracetamol with 5.0 ml of dosage");
        }
        if(ageInYears > 3 && ageInYears<= 5){
        medicision.push("If child feels hot by touch and temperature recorded are yes then give Paracetamol with 10.0 ml of dosage");
        }
    }
    
    
    
    
    if(medicision.length > 0){
      encounterDecisions.push({name:"medicine recommendations",value:medicision});
      decisions.encounterDecisions.push(...encounterDecisions);    
    }
         
     
       return decisions;
},
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const programEncounter = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEncounter
  });
  
const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;

 const nutritionalStatus = programEncounter
            .getObservationReadableValue('Nutritional status of child') || programEncounter
            .getObservationReadableValue('Current nutritional status according to weight and age');
      
const encounterScheduleChildFollowup = [
    {"name": "Child Followup-1", "earliest": 110, "max": 10},
    {"name": "Child Followup-2", "earliest": 160, "max": 8}
];

const encounterScheduleChildFollowupCluster = [
    {"name": "Child Followup Cluster Incharge-1", "earliest": 99, "max": 113},
    {"name": "Child Followup Cluster Incharge-2", "earliest": 155, "max": 169}
];

const ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();


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
    let visitDate = programEncounter.earliestVisitDateTime || programEncounter.encounterDateTime ;

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
    }else {
            
            const earliest = [225, 315, 405, 495, 585, 705];

                let earliestOffset = _.chain(earliest)
                    .filter(e => (imports.moment(visitDate)
                    .isBefore(imports.moment(birthDate).add(e, 'days').toDate(), 'date') === true)
                    && (imports.moment(programEncounter.earliestVisitDateTime)
                    .isSame(imports.moment(birthDate).add(e, 'days').toDate(), 'date') === false))
                    .first()
                    .value();
                    
                const followupVisitDate = imports.moment(birthDate).add(earliestOffset, 'days').toDate();
        
                scheduleBuilder.add({
                    name: 'Child Followup',
                    encounterType: 'Child Followup',
                    earliestDate: followupVisitDate,
                    maxDate: imports.moment(followupVisitDate).add(15, 'days').toDate()
                  }); 
               }  
};

const scheduleChildFollowupClusterInchargeVisits = () => {
    const birthDate = programEncounter.programEnrolment.individual.dateOfBirth;
    let visitDate = programEncounter.earliestVisitDateTime || programEncounter.encounterDateTime;

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

const scheduleVisitsDuringChildFollowupNormal = () => {
    const birthDate = programEncounter.programEnrolment.individual.dateOfBirth;
    const ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();
    let visitDate = programEncounter.earliestVisitDateTime || programEncounter.encounterDateTime;

    if (!hasExitedProgram(programEncounter)) {
       if (ageOfChildInMonths <= 60) { 
                    
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
     }
};
    
    
const scheduleVisitsDuringChildFollowupSAM = () => {
    const ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();
    let visitDate = programEncounter.earliestVisitDateTime || programEncounter.encounterDateTime;

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

        if (programEncounter.programEnrolment
        .scheduledEncountersOfType('Child Followup Cluster Incharge').length < 1
            && ageOfChildInMonths >= 7 && ageOfChildInMonths <= 60){
             const followupDate = imports.moment(visitDate).add(1, 'months').toDate();
             const followupOverdueDate = imports.moment(followupDate).add(8, 'days').toDate();

             scheduleBuilder.add({
                  name: 'Child Followup Cluster Incharge',
                  encounterType: 'Child Followup Cluster Incharge',
                  earliestDate: followupDate,
                  maxDate: followupOverdueDate
            });
                
          }
    }

};

const scheduleVisitsDuringChildFollowupMAM = () => {
    const ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();
    let visitDate = programEncounter.earliestVisitDateTime || programEncounter.encounterDateTime;

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

        if (programEncounter.programEnrolment
        .scheduledEncountersOfType('Child Followup Cluster Incharge').length < 1
            && ageOfChildInMonths >= 7 && ageOfChildInMonths <= 60){
            
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

};

          
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
        case 'Severely Underweight':
            scheduleVisitsDuringChildFollowupSAM();
            break;
        case 'MAM' :
        case 'Moderately Underweight':
            scheduleVisitsDuringChildFollowupMAM();
            break;
        }
      }
        
  
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}