{
  "name": "Child followup - Saheli",
  "uuid": "541817af-5718-4631-98ee-aa790d696621",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "65586266-0345-4351-bc89-04a25bac9b0a",
      "name": "Problems",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Ask the mother now: Child has any problem",
          "uuid": "fad4f8fc-a5b3-4d70-b6d8-8a19550ddc90",
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
          "mandatory": false
        },
        {
          "name": "Then write the problem",
          "uuid": "04f1dd8b-3ef7-4388-90e5-6416d7e51ca0",
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
          "mandatory": false
        }
      ],
      "display": "Problems",
      "timed": false
    },
    {
      "uuid": "50946778-0fba-41a4-b9c9-32f2fb9c2a4b",
      "name": "Check for general danger signs",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Is the child able to drink or breastfeed",
          "uuid": "4a4dd780-1e15-4508-8352-acbf2a5e8eac",
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
          "uuid": "d85eab4f-58c5-4049-bffd-0dc140cb5c19",
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
          "uuid": "d4912f1f-f430-4dfb-ac00-39daffdd53c5",
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
          "uuid": "6f1427a2-0d18-4dc5-802f-7e11ec9fadf7",
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
          "uuid": "0f7b20c8-aa94-4da5-b0b4-6211d98db44b",
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
      "uuid": "2eaddc29-e78a-4e60-a22a-6733d921640c",
      "name": "Ask about main symptoms",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Does the child have cough or difficult breathing",
          "uuid": "f43dbe58-eead-4c15-a48f-62fb7b417424",
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
          "uuid": "5d417fd9-d549-4c93-b669-65045a989acd",
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
          "uuid": "9ea690a7-2ad2-4ed4-a3b8-855cacde168d",
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
          "uuid": "30c74a64-ab6d-442b-817a-3b2b5d79251a",
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
  statusBuilder.show().when.valueInEncounter('Does the child have cough or difficult breathing').containsAnswerConceptName('Yes').and.when.ageInMonths.lessThanOrEqualTo(2); 
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Count the breaths in one minute",
          "uuid": "fc81e166-89e4-435d-925b-d0b6716edc45",
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('Does the child have cough or difficult breathing').containsAnswerConceptName('Yes').and.when.ageInMonths.lessThanOrEqualTo(12).and.when.ageInMonths.greaterThan(2);
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Count the breaths in one minute",
          "uuid": "584a9611-34cd-4c11-b64c-5b97efbc492b",
          "keyValues": [],
          "concept": {
            "name": "Child respiratory 1 year and above",
            "uuid": "e86a65e3-0055-4f53-97ca-ccfce1481b7a",
            "dataType": "Numeric",
            "answers": [],
            "highNormal": 39,
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter('Does the child have cough or difficult breathing').containsAnswerConceptName('Yes').and.when.ageInMonths.greaterThan(12); 
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does the child has fast breathing",
          "uuid": "2aa74c9d-857d-4e37-bb85-69b5f9b1a10d",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
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
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const programEncounter = params.entity;
    const formElement = params.formElement;

    let visibility = false;

    const cough = programEncounter.getObservationReadableValue('Does the child have cough or difficult breathing');
   
    _.isEqual(cough, 'Yes') ? visibility = true : visibility = false;
    const age = programEncounter.programEnrolment.individual.getAgeInMonths();
   

    let isHeigh = 'No';
    if (age <= 2) {
        let obs = programEncounter.getObservationReadableValue('Child Respiratory Rate');
       
        if (obs > 59.9) {
            isHeigh = 'Yes';
            
        }

    } else if (age > 2 && age <= 12) {
        let obs = programEncounter.getObservationReadableValue('Child respiratory rate 2 month to 1 year');
       
        if (obs > 49) {
            isHeigh = 'Yes';
            
        }
    } else if (age > 12) {
        let obs = programEncounter.getObservationReadableValue('Child respiratory 1 year and above');
      
        if (obs > 39) {
            isHeigh = 'Yes';
            
        }
    }


    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, isHeigh);
}
;",
          "mandatory": false
        },
        {
          "name": "Look for chest indrwaning",
          "uuid": "b89ae3f8-b367-4386-9304-5a46a484b9df",
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
          "displayOrder": 8,
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
      "uuid": "d8f76796-ee95-484e-884c-1440a23954e5",
      "name": "Check for Diarrhoea",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Does child has diorrhea",
          "uuid": "a9c9c061-afbc-4fef-98c7-5efcd8cb5da7",
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
          "uuid": "1fa4ab94-a372-4f97-a2be-e23737bfed75",
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
          "uuid": "62307445-44f0-4983-9902-4d3eb38b8024",
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
          "uuid": "66c96b5b-e7bb-4055-902b-2099c580dced",
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
          "uuid": "8578eb59-fb98-410d-8683-631187ddca3d",
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
          "uuid": "92c91356-48e9-44da-96fd-54f527b04310",
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
          "uuid": "e7fe6cb0-0a3e-4fd3-9e1a-0ee4963feb72",
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
          "uuid": "cb70e64e-4aba-4931-9315-90fc7078bf41",
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
          "uuid": "cd263620-1ba9-4f02-97f2-dcca4096a9df",
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
          "uuid": "30413c9b-1b25-4a7e-bfeb-758424ac762f",
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
          "uuid": "1483d199-06aa-49ef-a69f-073b562bf725",
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
      "uuid": "a3da1dff-a355-4af5-b9f0-68ae6c803e86",
      "name": "Check for Fever",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Does child has history of fever",
          "uuid": "370eef6e-331b-4d3c-b55d-a35d548054e8",
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
          "uuid": "8877ab62-183f-4b12-8fb1-69bed55e872f",
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
          "uuid": "10932bf6-ee90-48fa-aa8e-7d2884a19ca4",
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
          "uuid": "55855c7a-bbfc-4da1-900a-7ade4a1652b4",
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
          "uuid": "7526d3e4-d0e5-452a-af96-54b4f7d55184",
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
          "uuid": "2f61417b-a54a-47b0-a9bc-7b21832696e3",
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
          "uuid": "8a49602a-a3cc-4b65-9d1a-988967fe074c",
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
          "uuid": "20adb64c-8f81-4cd2-8922-6dc34054097a",
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
      "uuid": "dea8f585-8ae3-402a-a4f5-da8abd7118c0",
      "name": "Check for Malnutrition",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "weight of child",
          "uuid": "df5489c3-3083-4373-9146-76e372aeddb6",
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
          "uuid": "8801ced2-3a6d-497f-b9e2-f41eb9a1bb9c",
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
          "uuid": "37d3bcc6-2c3e-41b6-a58b-936cc3310a6c",
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
          "uuid": "3a8d3eae-cf54-4fd2-a00d-4652d0b088ce",
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
          "uuid": "13fba3aa-f870-45d7-841d-ada1be206b8a",
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
          "uuid": "05c47d69-38a1-49a3-b71f-e0a66767fb6e",
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
          "uuid": "29dc90ef-54c9-4662-a9c8-5e8a0dbc8c7e",
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
          "uuid": "de7a9310-11c4-4ef7-872f-d88038e470f9",
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
          "uuid": "9e980020-6cfa-474f-ba64-e17f441b3d3d",
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
          "uuid": "bf8520a1-03c0-404c-81c4-de542504ba88",
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
          "uuid": "934db74a-6424-4cd1-802d-2152e9acc5e1",
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
          "uuid": "63d74acc-e46d-426e-be4c-c911981d5ea6",
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
          "uuid": "30e2e554-dd0e-49ea-8c10-e34d4d54390e",
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
      "uuid": "e7ce5684-4eea-490c-9d99-44469f45d7c4",
      "name": "Referral details",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "If child is in SAM then refered to CMTC?",
          "uuid": "9f993630-c4ab-4c16-bd94-f0811fe40c19",
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
          "uuid": "f9729817-7dce-4cb1-afb4-0d74aba2df5f",
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
      "uuid": "07464fb4-2c42-4a6c-b547-76e21b87b94a",
      "name": "Check for Anemia",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Look for palmer pallor",
          "uuid": "60d1aea6-3a35-4984-8297-7f9ee4f530d0",
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
          "uuid": "cbb8de2e-8bbc-4359-b1a9-db2971899fba",
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
          "uuid": "23ed0a0f-9a0c-45d5-89ee-cc9f6df5a386",
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
          "uuid": "af65f727-a334-4515-bba2-4539659c6328",
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
          "uuid": "9c39b639-71ca-4ac7-bce6-01a34243e152",
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
          "uuid": "1c20983c-fd0a-4269-b587-255b5ef53d5d",
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
          "uuid": "30f53a66-5d11-4bd8-8b62-e86721061dce",
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
          "uuid": "39a072d1-6f80-4785-8fed-3a56f73dbf7c",
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
      "uuid": "e68967c0-673f-4fcf-b2e2-ae71a35f4c35",
      "name": "Ask for other complaints",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Does child has any other complaint",
          "uuid": "beab8122-eac7-4d67-9555-8a6742c09393",
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
          "uuid": "26dc0535-6472-4c1f-814f-d6f894c064ad",
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
      "uuid": "244a3101-65fe-4135-aa07-826caa2d0d7d",
      "name": "Facility",
      "displayOrder": 10,
      "formElements": [
        {
          "name": "Does child is going to anganwadi",
          "uuid": "7a50ad33-f9fc-41b5-882e-48124e17829f",
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
          "uuid": "fdd9cb6b-fe9e-4a00-a86e-6cf9c2a3a48e",
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
          "uuid": "444d0c5c-089c-44de-8a50-67029c2c3e9e",
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
          "uuid": "0d0be16e-18f6-41d9-9f7c-98a210c22d2a",
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
          "uuid": "718cb508-bdc0-4260-89d0-e356b8467d5d",
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
          "uuid": "3497b148-3698-4a37-b485-efef4ae5795a",
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
          "uuid": "918fd4bb-bb1c-4014-9ebe-6c2990818b16",
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
      "uuid": "75f98ce9-728d-4a3e-9ae2-222eed3b710c",
      "name": "High risk",
      "displayOrder": 11,
      "formElements": [
        {
          "name": "Is the child at high risk?",
          "uuid": "09cd9e0a-eaad-4b5c-a7fb-237f3343feb3",
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
          "mandatory": false
        }
      ],
      "display": "High risk",
      "timed": false
    },
    {
      "uuid": "c8a7bf64-aa6e-4621-9d78-217c31713335",
      "name": "Counselling Points",
      "displayOrder": 12,
      "formElements": [
        {
          "name": "Child followup counselling point (0-6 months)",
          "uuid": "f72d98b1-b29f-4404-959e-bb6d2476de7c",
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
          "uuid": "cbb23674-16a9-4ef3-ba58-b1d8f4f86b3a",
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
          "uuid": "df630149-18a9-41c4-b866-cd393e6714f4",
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
({params, imports}) => {
    const programEncounter = params.entity;
    const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
        programEncounter
    });

    const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;

    const nutritionalStatus = programEncounter.getObservationReadableValue('Nutritional status of child');
    const wfaStatus = programEncounter.getObservationReadableValue('Current nutritional status according to weight and age');


    const ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();


    const scheduleVisitsFollowupNormalWFA = () => {

        let earliest = programEncounter.encounterDateTime;
        const followupDate = imports.moment(earliest).add(1, 'months').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(7, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };
    const scheduleVisitsFollowupModUnderWeightWFA = () => {

        let earliest = programEncounter.earliestVisitDateTime;
        const followupDate = imports.moment(earliest).add(15, 'days').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(3, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };
    const scheduleVisitsFollowupSeveUnderWeightWFA = () => {

        let earliest = programEncounter.earliestVisitDateTime;
        const followupDate = imports.moment(earliest).add(7, 'days').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(1, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };


    const scheduleVisitsDuringChildFollowupNormal7To24 = () => {

        let earliest = programEncounter.encounterDateTime;
        let followupDate = imports.moment(earliest).add(1, 'months').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(7, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };
    const scheduleVisitsDuringChildFollowupMAM7To24 = () => {

        let earliest = programEncounter.earliestVisitDateTime;
        let followupDate = imports.moment(earliest).add(15, 'days').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(3, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };
    const scheduleVisitsDuringChildFollowupSAM7To24 = () => {

        let earliest = programEncounter.earliestVisitDateTime;
        let followupDate = imports.moment(earliest).add(7, 'days').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(1, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };


    const scheduleVisitsDuringChildFollowupNormal24To60 = () => {

        let earliest = programEncounter.encounterDateTime;
        let followupDate = imports.moment(earliest).add(1, 'months').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(7, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };
    const scheduleVisitsDuringChildFollowupMAM24To60 = () => {

        let earliest = programEncounter.earliestVisitDateTime;
        let followupDate = imports.moment(earliest).add(15, 'days').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(3, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };
    const scheduleVisitsDuringChildFollowupSAM24To60 = () => {

        let earliest = programEncounter.earliestVisitDateTime;
        let followupDate = imports.moment(earliest).add(7, 'days').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(1, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };


    if (ageOfChildInMonths <= 6 && ageOfChildInMonths >= 2) {

        switch (wfaStatus) {
            case 'Normal':
                scheduleVisitsFollowupNormalWFA();
                break;
            case 'Moderately Underweight':
                scheduleVisitsFollowupModUnderWeightWFA();
                break;
            case 'Severely Underweight':
                scheduleVisitsFollowupSeveUnderWeightWFA();
                break;
        }


    } else if (ageOfChildInMonths >= 7 && ageOfChildInMonths < 24) {

        switch (nutritionalStatus) {
            case 'Normal':
                scheduleVisitsDuringChildFollowupNormal7To24();
                break;
            case 'SAM' :
                scheduleVisitsDuringChildFollowupSAM7To24();
                break;
            case 'MAM' :
                scheduleVisitsDuringChildFollowupMAM7To24();
                break;
        }
    } else if (ageOfChildInMonths >= 24 && ageOfChildInMonths <= 60) {

        switch (nutritionalStatus) {
            case 'Normal':
                scheduleVisitsDuringChildFollowupNormal24To60();
                break;
            case 'SAM' :
                scheduleVisitsDuringChildFollowupSAM24To60();
                break;
            case 'MAM' :
                scheduleVisitsDuringChildFollowupMAM24To60();
                break;
        }
    }


    return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}