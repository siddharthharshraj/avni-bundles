{
  "name": "Child Followup Cluster Incharge",
  "uuid": "80f09382-c97b-4850-9c9e-b834e0a6f501",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "3dd9d48c-8551-4d21-8b9e-3ad7ae6f18e2",
      "name": "Problems",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Ask the mother now: Child has any problem",
          "uuid": "185155c6-686d-4785-a19a-d2bb4c03d1d2",
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
          "uuid": "ab3ae934-9806-45a6-a81b-5d4a8eb1466a",
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
      "uuid": "77c238ed-669e-46c5-a395-aa2d4db9a95f",
      "name": "Check for general Danger signs",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Is the child able to drink or breastfeed",
          "uuid": "3fb9b986-273c-4dad-8733-50e876e604ea",
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
          "uuid": "d2e4c7d7-8cb7-42d8-b90f-66075bbad7c7",
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
          "uuid": "0d896295-3505-4dea-aac2-529dc51a0688",
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
          "uuid": "0c8ad0f4-16b1-4f20-b4b7-cbae7719fac2",
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
          "uuid": "10015b37-503a-42e9-8671-659d3d5efe4e",
          "keyValues": [],
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
          "mandatory": true
        },
        {
          "name": "Child is referred?",
          "uuid": "96631d2b-52a2-4fb9-8bd3-05db498ad61d",
          "keyValues": [],
          "concept": {
            "name": "child is referred?",
            "uuid": "23db49c5-072f-4df9-bb74-9d07da2bb4d3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
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
          "displayOrder": 6,
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
      "display": "Check for general Danger signs",
      "timed": false
    },
    {
      "uuid": "3c8ca3d6-fbe7-477e-bc16-bfd5621ab6f0",
      "name": "Ask about main symptoms",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Does the child have cough or difficult breathing",
          "uuid": "e02957cd-7b20-4bde-974a-7319381c1bfb",
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
          "uuid": "2977e695-bbd8-435f-aa5b-836baa48eab4",
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
          "uuid": "2242e884-44ac-417f-a253-8f5b5b9d0c47",
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
          "uuid": "894ea669-92ec-49b6-b2cb-5fa9906f2609",
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
          "uuid": "58787306-9984-4e56-b85f-1a72826dcb77",
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
          "uuid": "26f7e4e9-d864-440c-b302-a3573191fdbe",
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
      "uuid": "559539e3-33bc-48a4-997a-e8490829f56e",
      "name": "Check for Diarrhoea",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Does child has diorrhea",
          "uuid": "700af8d2-60ee-44e2-84e4-3e36c2f81e20",
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
          "uuid": "5d36103a-df81-40e0-8ade-037827022168",
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
          "uuid": "c50564ad-1215-4358-8eb1-d74215f8ee2a",
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
          "name": "Check the child's general condition,is the child lethargic or unconscious ?",
          "uuid": "43f1bd17-bd20-447a-88b7-cfad6b01b6e5",
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
          "uuid": "ea83dc9a-9b52-4543-adfb-90825172d54d",
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
          "uuid": "cad3afe7-18ba-43e1-b219-f81eaf2da3ca",
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
          "uuid": "cf90189e-d2df-4fe1-b9d0-c7e0875d2669",
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
          "uuid": "027e7341-6818-4d49-828e-b0ee6db86002",
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
          "uuid": "10ca993a-08c5-4d85-96e6-868d8c57094e",
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
          "uuid": "97257c24-47b0-4b1d-a37d-499a4981cb69",
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
          "uuid": "9f4a0210-08cb-4058-8ad0-32d699660eb7",
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
      "uuid": "23ff549e-e92c-460a-9da4-f09ec58392f7",
      "name": "Check for Fever",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Does child has history of fever",
          "uuid": "5630b49d-b13a-42f2-b383-5d6b53aa2dfc",
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
          "uuid": "2b27f879-46e0-412f-8a8a-165169166541",
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
          "uuid": "97d4adb4-d199-4749-9718-476df73177af",
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
          "name": "What is the axillary temprature",
          "uuid": "4694689f-095e-4c39-86a2-b05dbed61529",
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
          "uuid": "2813433e-d686-466d-bbc1-b0827a2af7ac",
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
          "uuid": "a9f27981-58b0-4973-96bd-0eadb5d12e8f",
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
          "uuid": "ee92b200-bbfe-4246-881a-9fa7268204fa",
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
          "uuid": "fc6e4349-671b-47ec-b620-33ee0f4e188e",
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
      "uuid": "0ad9a423-5f78-4ab8-bfb8-0cce583c7c09",
      "name": "Check for Malnutrition",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "weight of child",
          "uuid": "e6695a27-9c8c-43e4-a4a7-aea005c97589",
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
          "uuid": "5e26c914-91de-40d5-ae03-97016ed20c2f",
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
          "uuid": "d1a3cd44-0865-48b4-b5e5-43cba7035d8c",
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
          "uuid": "758dbb93-cfc1-4006-8c4a-cb0c0406ee5a",
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
          "uuid": "5cd58eb9-5f35-45f4-8317-89ce11d14558",
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
          "uuid": "7c77924e-fb93-4c80-af63-2a404778b0fc",
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
          "uuid": "9c32d06d-fe9e-4d8b-9295-8646100f4381",
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
          "uuid": "43e50e83-b6b6-4dc2-8983-490a7c4859d6",
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
          "uuid": "9e61d920-4465-42a0-b3ef-da0b0746e26a",
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
          "uuid": "e95cf2d7-88ea-490d-9010-b138cc14ccba",
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
          "uuid": "a25eff31-27d8-41e1-ab5d-27a0c65c0c5b",
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
          "uuid": "638d9f98-9571-444e-bcf5-9ed114c46832",
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
          "uuid": "8e1871b7-2ab8-4627-b9bf-70427ff68890",
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
      "uuid": "b8d3beb0-0e0d-4b77-8306-584483da34c8",
      "name": "Referral details",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "If child is in SAM then refered to CMTC?",
          "uuid": "5c26409d-567c-4d92-8b59-8b7ab9c062d5",
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
          "uuid": "78b99552-2899-4d8e-8798-a1ff82151eb6",
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
      "uuid": "89ecfb95-511e-4f5d-a335-f488e14d8ab9",
      "name": "Check for Anemia",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Look for palmer pallor",
          "uuid": "10999276-a7db-47e9-a8eb-e5e8daec306b",
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
          "uuid": "229f9810-6697-4a3c-806a-e31502b8dcee",
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
          "uuid": "e4371f1e-bd54-4c9a-b270-045a63082932",
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
          "uuid": "1b433f5f-202b-4136-bd99-03d5e88a352d",
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
          "uuid": "8403e8d4-7e4a-4b14-8b55-52b2f05bf75f",
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
          "uuid": "6c3d6827-3268-46fd-bd12-fdf3d916883a",
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
          "uuid": "206482ed-5f29-4731-b91a-6f6bddfa75a4",
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
          "uuid": "90554573-fb98-42cc-a29e-b071db3df1c9",
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
      "uuid": "644a46e9-f1e4-4f36-9d8c-12fc41829fa2",
      "name": "Ask for other complaints",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Does child has any other complaint",
          "uuid": "454b019c-28bc-480c-b52b-ea6b13b94e39",
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
          "uuid": "06e5ab85-a613-487e-9231-c6c74ad680b7",
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
      "uuid": "e18ae94d-919f-430c-a7a8-7fffa2e6e5e6",
      "name": "Facility",
      "displayOrder": 10,
      "formElements": [
        {
          "name": "Does child is going to anganwadi",
          "uuid": "eeccd7d3-9935-4b65-ba4f-a4c4b6f3831f",
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
          "name": "Recived food packets from anganwadi",
          "uuid": "8ff9860a-b0f2-4157-8348-0363ad3ed7d4",
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
          "mandatory": true
        },
        {
          "name": "Does child went to VHND",
          "uuid": "72ab2c21-ce44-44cc-bcb0-3ff12a569a4f",
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
          "uuid": "bdf41a4b-90e0-47ba-ab66-c8a306da3853",
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
          "uuid": "ed439266-098a-4ccd-952c-462c536433c7",
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
          "uuid": "22588961-beb0-4bb5-be64-ddf656334582",
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
          "uuid": "895857de-f1e1-4308-b8b4-03fb15bcb58b",
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
      "uuid": "80dfefc0-c306-4e08-b295-cf7359b2b6b4",
      "name": "Counselling Points",
      "displayOrder": 11,
      "formElements": [
        {
          "name": "Child followup counselling point (0-6 months)",
          "uuid": "42d1e72c-f103-48ab-be5a-fe0940439bd3",
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
          "uuid": "82b1575a-a524-4b0e-bbc3-8c819d489871",
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
          "uuid": "55420626-3691-4bbe-a249-23f1c3866254",
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
  
var nutritionalStatus = programEncounter.getObservationReadableValue('Nutritional status of child')
  || programEncounter.getObservationReadableValue('Current nutritional status according to weight and age');

let visitDate = programEncounter.earliestVisitDateTime || programEncounter.encounterDateTime;
const birthDate = programEncounter.programEnrolment.individual.dateOfBirth;
const ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();

if (!hasExitedProgram(programEncounter) && !_.isEqual(nutritionalStatus, 'Normal')) {
        if (ageOfChildInMonths > 2 && ageOfChildInMonths < 6 
        && !programEncounter.programEnrolment.hasEncounter('Child Followup Cluster Incharge', 'Child Followup Cluster Incharge-2')){               
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
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}