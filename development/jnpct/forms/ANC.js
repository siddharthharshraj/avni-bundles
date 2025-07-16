{
  "name": "ANC",
  "uuid": "9bf17b07-3e6b-414a-a96e-086fc9c5ef6a",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "4cc57127-fb33-42c4-9385-4fb6b9253aff",
      "name": "Services Provided",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Mamta card",
          "uuid": "9e8ae6e5-ba10-4be1-b9ca-ccdd72233888",
          "keyValues": [],
          "concept": {
            "name": "Mamta card",
            "uuid": "4bb3dbde-01df-4f6d-85aa-41a38c8ee3d3",
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
  statusBuilder.show().when.latestValueInPreviousEncounters('Mamta card').is.notDefined
            .or.containsAnswerConceptName("No");
    return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Do you have Iron/Folic acid tablets",
          "uuid": "7f234602-ce5b-4e62-b928-17fd88cc7bd1",
          "keyValues": [],
          "concept": {
            "name": "Do you have Iron/Folic acid tablets",
            "uuid": "3ae2d1a2-734a-4dbf-a1bc-adc19e4e7fff",
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
          "mandatory": false
        },
        {
          "name": "Is she taking iron/folic acid tablet?",
          "uuid": "539c4d7d-39bf-4728-8937-4275f54890d9",
          "keyValues": [],
          "concept": {
            "name": "Is she taking iron/folic acid tablet?",
            "uuid": "734d46fe-363a-4037-afb4-89ff87fbac5b",
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
          "mandatory": true
        },
        {
          "name": "If yes then write number of tablet swallowed",
          "uuid": "89e03cc4-c5b5-4a29-ae1d-b524ca720d6e",
          "keyValues": [],
          "concept": {
            "name": "IF YES THEN WRITE NUMBER OF TABLET SWALLOWED",
            "uuid": "eccf536c-efbd-4705-9d13-5eaceab49e51",
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
 statusBuilder.show().when.valueInEncounter("Is she taking iron/folic acid tablet?").is.yes;
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Do you have Calcium tablets?",
          "uuid": "bf02cc18-01d6-4acf-89c8-94da738d09b2",
          "keyValues": [],
          "concept": {
            "name": "Do you have Calcium tablets?",
            "uuid": "bc5c6259-d504-4041-bacd-bbb718d8a845",
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
          "mandatory": false
        },
        {
          "name": "Is she taking calcium tablet?",
          "uuid": "45f29a09-315c-49f4-891c-17d3c44cd491",
          "keyValues": [],
          "concept": {
            "name": "Is she taking calcium tablet?",
            "uuid": "2c2c44c6-b2c9-4c99-a0da-fcee2cddd14c",
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
          "name": "If yes then write number of calcium tablet swallowed",
          "uuid": "657b34a0-d63e-479f-948b-f8007951cea9",
          "keyValues": [],
          "concept": {
            "name": "IF YES THEN WRITE NUMBER OF CALCIUM TABLET SWALLOWED",
            "uuid": "7fd17431-fada-43e3-891b-d9b311cce9f0",
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
 statusBuilder.show().when.valueInEncounter("Is she taking calcium tablet?").is.yes;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "TD 1",
          "uuid": "f01e3fbd-6793-4ce1-a909-4d8f3ce79207",
          "keyValues": [],
          "concept": {
            "name": "TD 1",
            "uuid": "515b0e64-4621-4f0e-8636-4b68a922decf",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
    
    
if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD 1").is.defined.matches()) {
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
      } else if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD 1").is.defined
          .and.when.latestValueInPreviousEncounters("TD 2").is.defined.matches()){
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
      } else
         if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD Booster").is.defined.matches()) {           
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
        } else {
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }
        
},
          "mandatory": false
        },
        {
          "name": "TD 2",
          "uuid": "86f79fb3-579f-4f3c-83e1-5cc74027684c",
          "keyValues": [],
          "concept": {
            "name": "TD 2",
            "uuid": "4ad7f1d8-fa36-47b7-a3b6-83b8909c49ac",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
    
        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD 2")
            .is.defined.matches()) {
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
        }else if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD 1")
            .is.defined.and.when.latestValueInPreviousEncounters("TD 2").is.defined.matches()){
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
        }else if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD Booster").is.defined.matches()) {
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
        }else {
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

},
          "mandatory": false
        },
        {
          "name": "TD Booster",
          "uuid": "8439afa7-9436-45e3-97da-a8cd6c20d3ce",
          "keyValues": [],
          "concept": {
            "name": "TD Booster",
            "uuid": "afdec7b2-ecb2-409a-a506-d6ae3c5f9676",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
     
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD 1")
            .is.defined.and.when.latestValueInPreviousEncounters("TD 2")
            .is.defined.matches()) {
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
        }else if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD Booster").is.defined.matches()){
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
        } else {
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

},
          "mandatory": false
        },
        {
          "name": "Does she using iodised salt?",
          "uuid": "603e715c-8be4-48f4-add9-8f14481456de",
          "keyValues": [],
          "concept": {
            "name": "Does she using iodised salt?",
            "uuid": "8b69adbf-2209-4b80-922d-676e4566d43a",
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
          "displayOrder": 11,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Does she get snacks from Anganwadi",
          "uuid": "8c886131-d166-40b7-a6f5-41029498a644",
          "keyValues": [],
          "concept": {
            "name": "Does she get snacks from Anganwadi",
            "uuid": "8058e4f8-c64a-446f-a5a7-3b7b0f111fa5",
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
          "mandatory": true
        },
        {
          "name": "Does she eat all the snacks",
          "uuid": "0b6034e9-86f2-44b0-bc52-4891c46473f1",
          "keyValues": [],
          "concept": {
            "name": "Does she eat all the snacks",
            "uuid": "09019dea-c24f-46da-bd2f-a2b2e7e5fd88",
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
          "displayOrder": 13,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter("Does she get snacks from Anganwadi")
            .containsAnswerConceptName('Yes');
    return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Saheli has written the expected date of delivery on the beneficiary's house wall?",
          "uuid": "5f308187-ef70-449b-a156-540799a0c49a",
          "keyValues": [],
          "concept": {
            "name": "Saheli has written the expected date of delivery on the beneficiary's house wall?",
            "uuid": "244683d9-1d04-4012-b287-352e8c2a3d37",
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
          "displayOrder": 14,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("244683d9-1d04-4012-b287-352e8c2a3d37").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
  if(condition11 ) {
    _.forEach(["16092a1e-4a02-4ffd-a3a9-47f07f147a12"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "No"
                    ],
                    "answerUuidsToSkip": [
                      "16092a1e-4a02-4ffd-a3a9-47f07f147a12"
                    ]
                  },
                  "actionType": "skipAnswers"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "latestInPreviousEncounters",
                          "conceptName": "Saheli has written the expected date of delivery on the beneficiary's house wall?",
                          "conceptUuid": "244683d9-1d04-4012-b287-352e8c2a3d37",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "3a9fe9a1-a866-47ed-b75c-c0071ea22d97"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Supervisor has verified that Saheli has written expected date of delivery on beneficiary's house wall?",
          "uuid": "9e173cef-7cc7-44a7-bc29-625a857fa618",
          "keyValues": [],
          "concept": {
            "name": "Supervisor has verified that Saheli has written expected date of delivery on beneficiary's house wall?",
            "uuid": "f1657cff-4a1f-4aac-864c-9853c54b1cdd",
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
          "displayOrder": 15,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInEntireEnrolment("244683d9-1d04-4012-b287-352e8c2a3d37").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("f1657cff-4a1f-4aac-864c-9853c54b1cdd").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
  visibility = condition11 ;
    if(condition12 ){
   visibility = false ;
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        }
      ],
      "display": "Services Provided",
      "timed": false
    },
    {
      "uuid": "3cd8f875-93a4-4417-8966-0ee3e6c7c084",
      "name": "Vitals",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Height",
          "uuid": "a3cdb9fd-1a1a-4549-b2de-8a5de309a189",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.latestValueInPreviousEncounters("Height").is.notDefined;
   return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Weight",
          "uuid": "6550c3f0-8d34-4536-a011-748e37957b6e",
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
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "BMI",
          "uuid": "b1c8da3e-c08e-423a-a98d-3b797fc0df47",
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
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.latestValueInPreviousEncounters('MUAC (in cms)').is.notDefined;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "B.P - Systolic",
          "uuid": "d983ae3d-1214-4455-9962-0580b7283ebb",
          "keyValues": [],
          "concept": {
            "name": "B.P - Systolic",
            "uuid": "d5d860cc-9165-45b5-8795-065c2ee0e5aa",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 20,
            "highAbsolute": 190,
            "lowNormal": 90,
            "highNormal": 140,
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "B.P - Diastolic",
          "uuid": "04bbc1b9-60f5-40c6-94e9-e0d7ca91d6a1",
          "keyValues": [],
          "concept": {
            "name": "B.P - Diastolic",
            "uuid": "378241fc-b879-4037-bdc3-4746a7a11682",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 10,
            "highAbsolute": 120,
            "lowNormal": 50,
            "highNormal": 90,
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Blood Group",
          "uuid": "dc18cccc-50c5-4326-8daa-e0feb2a2bfa8",
          "keyValues": [],
          "concept": {
            "name": "Blood Group",
            "uuid": "1ba17bfc-1a27-4660-9ec5-e3e314d5eb2c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "A+",
                "uuid": "2bd804c1-d267-410f-81b5-390a39e6c6b2",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "O+",
                "uuid": "09a6c715-da7b-4dd5-aa73-4949be64f083",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "AB-",
                "uuid": "f8ef2109-67f9-47cc-a461-10d02066c414",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "B-",
                "uuid": "3067e276-7793-4906-a6e3-045822b0ffee",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "A-",
                "uuid": "48458cb4-6bcc-4474-bcc0-cd9e3e4712d1",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Don't Know",
                "uuid": "18fc80be-129b-4346-9a25-9e99bccc7ec6",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "AB+",
                "uuid": "0dab0fe3-bf6f-4d37-9d50-5c2dec5bd156",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "O-",
                "uuid": "d75b6736-7c92-42ac-aa89-0d63093805ff",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "B+",
                "uuid": "2af7b3a0-8646-4d58-abc4-fceac927d940",
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
  statusBuilder.show().when.latestValueInPreviousEncounters('Blood Group').is.notDefined
            .or.containsAnswerConceptName("Don't Know");
    return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Temperature",
          "uuid": "93621fe0-bdbe-4a73-b0a6-2e4db4ea2ee4",
          "keyValues": [],
          "concept": {
            "name": "Temperature",
            "uuid": "51f90d12-e4fb-4cb9-89d4-0c0b45629dbe",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 35.5,
            "highNormal": 37.5,
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Vitals",
      "timed": false
    },
    {
      "uuid": "c69ceab3-dbfd-474e-ac06-03c8631fb55b",
      "name": "Physical Examination",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Pedal oedema is present",
          "uuid": "684ffcc3-bc4f-4171-96ea-7da9ae58e17b",
          "keyValues": [],
          "concept": {
            "name": "pedal oedema is present",
            "uuid": "a82b2939-1298-4283-b08b-cbdc8616a54a",
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
          "name": "If yes then since how many days",
          "uuid": "a0db48b3-9317-416a-a1e5-16428ff806ae",
          "keyValues": [],
          "concept": {
            "name": "IF yes then since how many days",
            "uuid": "7b2672ae-c6ad-4e12-a408-9feac01183bf",
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
   statusBuilder.show().when.valueInEncounter("pedal oedema is present").is.yes;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Pallor",
          "uuid": "c92eacfd-de58-4b71-a6ee-7ef45768a6d1",
          "keyValues": [],
          "concept": {
            "name": "Pallor",
            "uuid": "b537a20f-7459-4e7d-9436-d6c702b2403e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Present",
                "uuid": "69f28ae9-7ef7-4602-a575-69034521d02a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Absent",
                "uuid": "cdd86de1-ff2c-4fe9-b49f-b2a3975def41",
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
          "mandatory": false
        },
        {
          "name": "Has she been having convulsions?",
          "uuid": "2f4face6-c619-4bf8-9d1e-caa0118b1dd9",
          "keyValues": [],
          "concept": {
            "name": "Has she been having convulsions?",
            "uuid": "4e7ac362-0578-4b7b-9c3c-1bba0f14e691",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Present",
                "uuid": "69f28ae9-7ef7-4602-a575-69034521d02a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Absent",
                "uuid": "cdd86de1-ff2c-4fe9-b49f-b2a3975def41",
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
          "mandatory": false
        },
        {
          "name": "Jaundice (Icterus)",
          "uuid": "6722483f-68b1-4126-ac39-f4d1e4f231d1",
          "keyValues": [],
          "concept": {
            "name": "Jaundice (Icterus)",
            "uuid": "efd91533-e2d0-497e-a4dc-0b66a30ef233",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Absent",
                "uuid": "cdd86de1-ff2c-4fe9-b49f-b2a3975def41",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Present",
                "uuid": "69f28ae9-7ef7-4602-a575-69034521d02a",
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
          "mandatory": false
        },
        {
          "name": "Breast Examination - Nipple",
          "uuid": "bcb698db-ab87-467b-8ed3-6088cbb67650",
          "keyValues": [],
          "concept": {
            "name": "Breast Examination - Nipple",
            "uuid": "e6228ce1-29af-4c48-b41a-858802a5cbc6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Flat",
                "uuid": "c9c4d34d-260b-4fce-a7ef-d92d94e7351e",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Retracted",
                "uuid": "60332376-c494-42f2-ac70-5da910f2ddb9",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  let visibility = true;

  if ( programEncounter.name === 'ANC 1' ) {
    visibility = true;
  } else {
    visibility = false;
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "mandatory": false
        }
      ],
      "display": "Physical Examination",
      "timed": false
    },
    {
      "uuid": "05fbc214-a24d-47be-970f-10cc2bdde2a0",
      "name": "Pregnancy Complications",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Is there any danger sign",
          "uuid": "5542e313-eb77-4cd7-88a1-c4dbfd7ca636",
          "keyValues": [],
          "concept": {
            "name": "Is there any danger sign",
            "uuid": "c23f62f9-9f8f-48bf-8549-a15f0165adf1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "twin pregnancy",
                "uuid": "440291c1-9b98-4089-89b4-a7585bcedb55",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Malaria",
                "uuid": "59bbe194-20a5-484f-8fc8-7c29bf97aefb",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "difficult breathing",
                "uuid": "338c4e61-0bbc-4488-9c93-84912f87eb59",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "abnormal": true,
                "active": true
              },
              {
                "name": "None",
                "uuid": "540cc15d-2ad4-496c-8514-64031f08290a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "unique": true,
                "active": true
              },
              {
                "name": "severe vomiting",
                "uuid": "5f7c7a32-792f-4c09-9341-8f5ea0ded551",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "abnormal": true,
                "active": true
              },
              {
                "name": "APH",
                "uuid": "56331346-a084-4205-88e1-acc7fcb9faee",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Reduced fetal movement",
                "uuid": "7d7b2fb5-9a5a-4795-ac92-0da3f3920b1f",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "abnormal": true,
                "active": true
              },
              {
                "name": "fever",
                "uuid": "137958fa-4666-44b2-880e-d5f1a639bb79",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Foul smelling menses",
                "uuid": "581e95c2-319c-43a6-a0f9-1dc93963813e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "abnormal": true,
                "active": true
              },
              {
                "name": "eclampsia",
                "uuid": "5aeae397-60e2-4bc0-9813-1ce8125d700d",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Blurred vision",
                "uuid": "b794dcd7-1983-4296-bc5a-ab29d9f49392",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "abnormal": true,
                "active": true
              },
              {
                "name": "problems in laboratory report",
                "uuid": "526b364e-97a0-4e70-9a53-97530e25989d",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Other complications?",
          "uuid": "a534341d-4c2f-4807-9560-5770799c4819",
          "keyValues": [],
          "concept": {
            "name": "Other complications?",
            "uuid": "1dc2c60f-e1a8-4f9f-9b05-c8bc96110a91",
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
   statusBuilder.show().when.valueInEncounter("Is there any danger sign").containsAnswerConceptName("Other");
  return statusBuilder.build();
},
          "mandatory": false
        }
      ],
      "display": "Pregnancy Complications",
      "timed": false
    },
    {
      "uuid": "7ed50c45-21aa-4fc6-83f3-08eb8251f545",
      "name": "Per Abdominal Examination",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Foetal movements",
          "uuid": "dd6bd195-cdd7-47c3-8cc3-f052b331206b",
          "keyValues": [],
          "concept": {
            "name": "Foetal movements",
            "uuid": "d7ff8486-11bf-4e7a-ba53-acc443923a2c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Absent",
                "uuid": "cdd86de1-ff2c-4fe9-b49f-b2a3975def41",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Reduced",
                "uuid": "8c69760a-cb15-450d-b8f6-30894d9f3dd3",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Per Abdominal Examination",
      "timed": false
    },
    {
      "uuid": "e5c6cf79-869f-4fdc-9394-29ac5bbb6a02",
      "name": "Lab Diagnostics - Blood",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Is laboratory test done?",
          "uuid": "b5737119-1a44-4876-abe2-4c4fa38a7f42",
          "keyValues": [],
          "concept": {
            "name": "Is laboratory test done?",
            "uuid": "4f928472-26bf-43d1-af80-aebbee104801",
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
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.latestValueInPreviousEncounters("Is laboratory test done?").is.notDefined.or.containsAnswerConceptName("No");
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Blood Examination Date",
          "uuid": "d85a48e5-f578-4835-8642-cf29a9c7e380",
          "keyValues": [],
          "concept": {
            "name": "Blood Examination Date",
            "uuid": "4b30fd1a-ed33-499b-81ea-9dbdfe917b08",
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
  statusBuilder.show().when.valueInEncounter("Is laboratory test done?").is.yes;
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "H.B",
          "uuid": "4f21d1ce-f097-42f8-9d3b-7a006a73fd77",
          "keyValues": [],
          "concept": {
            "name": "H.B",
            "uuid": "057ab538-63ef-4c56-b37c-03651ad823e2",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 12,
            "highNormal": 15.5,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter("Is laboratory test done?").is.yes;
   return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Blood Sugar",
          "uuid": "c27b6818-9538-41f7-b941-4be37be4903c",
          "keyValues": [],
          "concept": {
            "name": "Blood Sugar",
            "uuid": "23cbc12a-64f7-438f-accb-a1736ea3cc03",
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
   statusBuilder.show().when.valueInEncounter("Is laboratory test done?").is.yes;
    return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "VDRL",
          "uuid": "02cdc37e-4856-4dd4-8825-13ea25e7ce4c",
          "keyValues": [],
          "concept": {
            "name": "VDRL",
            "uuid": "5a48f80d-e956-403d-b192-93a80389faf2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Negative",
                "uuid": "40677daf-6062-4ba9-a2a2-2771df1af583",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Positive",
                "uuid": "55451fda-7cc3-454b-b632-6925801c97d2",
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
  statusBuilder.show().when.valueInEncounter("Is laboratory test done?").is.yes;
   return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "HIV/AIDS Test",
          "uuid": "ebcd7620-825b-4563-b61a-1db013720ae9",
          "keyValues": [],
          "concept": {
            "name": "HIV/AIDS Test",
            "uuid": "9c3f92c9-f3a6-49bc-a15e-e7909c8b61cc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Positive",
                "uuid": "55451fda-7cc3-454b-b632-6925801c97d2",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Negative",
                "uuid": "40677daf-6062-4ba9-a2a2-2771df1af583",
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
 statusBuilder.show().when.valueInEncounter("Is laboratory test done?").is.yes;
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "HbsAg",
          "uuid": "d39613b8-bb55-4447-a86e-b0ad1a58f1de",
          "keyValues": [],
          "concept": {
            "name": "HbsAg",
            "uuid": "737145a8-3259-4afc-9523-ed5d5f2d9a5f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Negative",
                "uuid": "40677daf-6062-4ba9-a2a2-2771df1af583",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Positive",
                "uuid": "55451fda-7cc3-454b-b632-6925801c97d2",
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
  statusBuilder.show().when.valueInEncounter("Is laboratory test done?").is.yes;
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Sickle cell test  done",
          "uuid": "b532c991-6899-49ca-92e7-7adda1d872a1",
          "keyValues": [],
          "concept": {
            "name": "Sickle cell test  done",
            "uuid": "a226cc07-ea19-4bd1-9040-b3c3fdcb5363",
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
   statusBuilder.show().when.latestValueInPreviousEncounters('Sickle cell test  done')
   .is.notDefined.or.containsAnswerConceptName("No");
    return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "If yes, result of sickle cell test",
          "uuid": "f0fe365c-30d6-434f-8efe-057277c991ff",
          "keyValues": [],
          "concept": {
            "name": "IF YES, result of sickle cell test",
            "uuid": "c8722864-8f31-4e58-8a3b-ce2c8a549f2b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "DISEASE",
                "uuid": "e141d616-3d4d-4934-ba9e-75d61914d25a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "TRAIT",
                "uuid": "5a807893-c34a-41f0-8be3-35416a55f0e4",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
   statusBuilder.show().when.valueInEncounter("Sickle cell test  done").is.yes;
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Urine Albumin",
          "uuid": "9d288524-e225-4b2a-87dd-e1d11bd054e2",
          "keyValues": [],
          "concept": {
            "name": "Urine Albumin",
            "uuid": "ddefc442-cb1f-432a-8e3d-0665dc620272",
            "dataType": "Coded",
            "answers": [
              {
                "name": "+1",
                "uuid": "57d1fde3-57c1-4c2f-bcbf-293987661e4c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "+3",
                "uuid": "982911aa-17c7-4970-ba74-a1d0c5fb9d62",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Absent",
                "uuid": "cdd86de1-ff2c-4fe9-b49f-b2a3975def41",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "+2",
                "uuid": "1fd8daa1-1695-488d-9fd1-ccef866f874a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Trace",
                "uuid": "ae09c05f-b0e6-492f-bae0-321335aacf84",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "+4",
                "uuid": "d1d21757-9104-404c-b3e6-5473d7127508",
                "dataType": "NA",
                "answers": [],
                "order": 6,
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
 statusBuilder.show().when.valueInEncounter("Is laboratory test done?").is.yes;
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Urine Sugar",
          "uuid": "4843cded-d4c0-4e56-943e-429813d91a58",
          "keyValues": [],
          "concept": {
            "name": "Urine Sugar",
            "uuid": "b6291b90-6f6e-4b15-be79-51e3284c4c81",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Trace",
                "uuid": "ae09c05f-b0e6-492f-bae0-321335aacf84",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "+2",
                "uuid": "1fd8daa1-1695-488d-9fd1-ccef866f874a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Absent",
                "uuid": "cdd86de1-ff2c-4fe9-b49f-b2a3975def41",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "+1",
                "uuid": "57d1fde3-57c1-4c2f-bcbf-293987661e4c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "+4",
                "uuid": "d1d21757-9104-404c-b3e6-5473d7127508",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "abnormal": true,
                "active": true
              },
              {
                "name": "+3",
                "uuid": "982911aa-17c7-4970-ba74-a1d0c5fb9d62",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "abnormal": true,
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
   statusBuilder.show().when.valueInEncounter("Is laboratory test done?").is.yes;
 return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Complete hospital checkup done",
          "uuid": "519fa6b2-9a2d-439e-9fdb-3b91d7dbe5a1",
          "keyValues": [],
          "concept": {
            "name": "Complete hospital checkup done",
            "uuid": "b9bd871d-cb06-4895-907b-adda2572b8c9",
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
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.latestValueInPreviousEncounters("Complete hospital checkup done").is.notDefined.or.containsAnswerConceptName("No");
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "If yes then write E.D.D as per USG",
          "uuid": "7f83a70d-46de-47aa-9e23-91b43da80fde",
          "keyValues": [],
          "concept": {
            "name": "If YES then write E.D.D as per USG",
            "uuid": "0f2f8288-126f-4976-a7bb-09999f7d870e",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter("Complete hospital checkup done").is.yes
.and.when.latestValueInPreviousEncounters("If YES then write E.D.D as per USG").is.notDefined;
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "USG Scanning Report - Number of foetus",
          "uuid": "e40fd5a4-762d-4d90-a37f-7c710ded7d68",
          "keyValues": [],
          "concept": {
            "name": "USG Scanning Report - Number of foetus",
            "uuid": "ba8274a2-5817-4f1b-a379-f945a285bb25",
            "dataType": "Coded",
            "answers": [
              {
                "name": "More than Three",
                "uuid": "1eaf3f52-b4f6-43bc-998f-44dfed64246d",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Three",
                "uuid": "05568801-d09e-49b2-a392-7f5d9f84fdd3",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Two",
                "uuid": "71be1f71-6589-46a5-9a50-c77a1dd93a04",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "One",
                "uuid": "0b67e02e-6b31-4f07-83a0-24210af3a994",
                "dataType": "NA",
                "answers": [],
                "order": 1,
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
  statusBuilder.show().when.valueInEncounter("USG Scanning Report - Number of foetus")
  .is.defined.or.when.latestValueInPreviousEncounters("USG Scanning Report - Number of foetus").is.notDefined
            .and.when.valueInEncounter("Complete hospital checkup done").is.yes;
   return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "USG Scanning Report - Amniotic fluid",
          "uuid": "0cde1e9a-c230-4cc9-89c2-1ffa2ce38730",
          "keyValues": [],
          "concept": {
            "name": "USG Scanning Report - Amniotic fluid",
            "uuid": "0197f0ee-97a8-4f68-8049-083f7e81b1dd",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Normal",
                "uuid": "eae1e6a3-b8ad-4716-9a52-a5677fb1f4ca",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Decreased",
                "uuid": "3bf8c853-cc5a-410e-80d1-a94bd08a76cb",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Increased",
                "uuid": "c6b2e6f5-ee9f-47ea-bcef-d679c8a66acd",
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
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
   statusBuilder.show().when.valueInEncounter("USG Scanning Report - Amniotic fluid")
   .is.defined.or.when.latestValueInPreviousEncounters("USG Scanning Report - Amniotic fluid").is.notDefined.and.when.valueInEncounter("Complete hospital checkup done").is.yes;
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "USG Scanning Report - Placenta Previa",
          "uuid": "681d509c-e838-4c40-bed0-cd8830c55ff3",
          "keyValues": [],
          "concept": {
            "name": "USG Scanning Report - Placenta Previa",
            "uuid": "5aeb53d9-96a4-4e17-8b06-dd58df20771a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Previa",
                "uuid": "1bcf80d6-e958-4401-af72-159700d8eb9a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Not Previa",
                "uuid": "2b37a7d3-3e0c-493b-a0c8-db68e4e90ce3",
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
  statusBuilder.show().when.valueInEncounter("USG Scanning Report - Placenta Previa").is.defined.or.when.latestValueInPreviousEncounters("USG Scanning Report - Placenta Previa").is.notDefined
            .and.when.valueInEncounter("Complete hospital checkup done").is.yes;
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Foetal presentation",
          "uuid": "22cb6d25-c653-42ac-a1bf-b2cfc902e119",
          "keyValues": [],
          "concept": {
            "name": "Foetal presentation",
            "uuid": "b0e836a1-8878-4798-881a-57a113824f0a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Cephalic",
                "uuid": "0e4215f6-6f95-4939-b16f-197b6b4cb2e9",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Breech",
                "uuid": "dd5c1140-bf9c-46d1-9003-0a7e7e2def6d",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Transverse",
                "uuid": "0a62c84f-a546-4f6c-bf0f-2ec57a86cf24",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter("Foetal presentation").is.defined
            .or.when.latestValueInPreviousEncounters("Foetal presentation").is.notDefined
            .and.when.valueInEncounter("Complete hospital checkup done").is.yes;
   return statusBuilder.build();
},
          "mandatory": false
        }
      ],
      "display": "Lab Diagnostics - Blood",
      "timed": false
    },
    {
      "uuid": "407100f2-b4e6-46d5-a160-5d77cc1aa250",
      "name": "Counselling",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "Plan to do delivery?",
          "uuid": "553cb11b-ad30-4747-957a-5a81c5923000",
          "keyValues": [],
          "concept": {
            "name": "Plan to do delivery?",
            "uuid": "89265b99-db8c-483f-9ee9-c3b1bab45d91",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Not yet decided",
                "uuid": "ec8a2653-e9cc-4912-8a3b-24701ba7ad09",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Piyar",
                "uuid": "4b938434-c187-48e0-a136-3899b6b3b95d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Sasru",
                "uuid": "a85fff2b-063b-413a-98c8-85a5039a2429",
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
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
  
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);
    
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value)
  .is.greaterThanOrEqualTo(21)
  .and.when.latestValueInPreviousEncounters("Plan to do delivery?")
  .is.notDefined.matches()) {
     return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
}

  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement})
  .whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("Plan to do delivery?")
            .containsAnswerConceptName("Not yet decided").matches())
     return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);

   return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);

},
          "mandatory": true
        },
        {
          "name": "Place of delivery",
          "uuid": "ac32956f-4c72-4cee-9cd1-b420bac0f59d",
          "keyValues": [],
          "concept": {
            "name": "Place of delivery",
            "uuid": "95ee3ade-e926-4f8e-a6b9-6c4086a4db3a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Not yet decided",
                "uuid": "ec8a2653-e9cc-4912-8a3b-24701ba7ad09",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Hospital",
                "uuid": "fcca20e2-f837-4b78-a52f-1d187bca389a",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "On the way",
                "uuid": "0c773b70-4b20-4713-a45c-c0f3b39db87f",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Home",
                "uuid": "8cfae1cd-3e75-40e9-9244-6d083c0d86f7",
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
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
  
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);
  
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("Place of delivery").is.notDefined.matches()) {
            const status = new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
            status.answersToSkip = [formElement.getAnswerWithConceptName("On the way")];
            return status;
        }

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("Place of delivery")
            .containsAnswerConceptName("Not yet decided").matches()) {
            const status = new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
            status.answersToSkip = [formElement.getAnswerWithConceptName("On the way")];
            return status;
        }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "mandatory": true
        },
        {
          "name": "Who will be accompaning you at the time of delivery?",
          "uuid": "42dac950-2ada-440a-9b75-160a0b5faa4f",
          "keyValues": [],
          "concept": {
            "name": "Who will be accompaning you at the time of delivery?",
            "uuid": "348bda11-61e5-4feb-bdc9-f6d40cc51614",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Brother",
                "uuid": "b7d4cfd4-7bd4-4e12-bd9b-5a4f4427bc20",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Father-in-law",
                "uuid": "08258f9a-4cd4-4ccb-8c31-549033f34a3e",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Brother-in-law",
                "uuid": "538d4324-3870-46f9-8172-e2f300da51f8",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Sister-in-law",
                "uuid": "e49ada2c-266c-49b1-8244-08035052ea0c",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Father",
                "uuid": "60bd2230-5ada-451a-a020-532d48173a8c",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Mother-in-law",
                "uuid": "edba6b48-d111-4379-81df-20f5d547904c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Sister",
                "uuid": "5f068502-a4e2-4598-b54a-74716d8020be",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Not yet decided",
                "uuid": "ec8a2653-e9cc-4912-8a3b-24701ba7ad09",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Husband",
                "uuid": "7d24f498-bd92-4f6e-9408-de1c154dbfc2",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other relatives",
                "uuid": "aa4ea2ad-9bc9-4a60-8778-fcfa84f01378",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Mother",
                "uuid": "b232bcab-0b3f-4d56-ae8b-e0267f0a6738",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
  
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);
  
  if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("Who will be accompaning you at the time of delivery?")
            .is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("Who will be accompaning you at the time of delivery?")
            .containsAnswerConceptName("Not yet decided").matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
       }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "mandatory": true
        },
        {
          "name": "COUNSELLING FOR 108",
          "uuid": "1be32c8b-cc15-4b40-9dc0-9206e482c497",
          "keyValues": [],
          "concept": {
            "name": "COUNSELLING FOR 108",
            "uuid": "7b0fffa6-e9ee-408f-9d41-e86ba9a9371c",
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
  
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);
  
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("COUNSELLING FOR 108")
            .is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("COUNSELLING FOR 108")
            .containsAnswerConceptName("No").matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
       }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "mandatory": true
        },
        {
          "name": "Plan in which hospital",
          "uuid": "3a0ac6c3-5c4f-493e-b5d6-a36e124f642b",
          "keyValues": [],
          "concept": {
            "name": "PLAN IN WHICH HOSPITAL",
            "uuid": "5faf735d-40b1-4542-8dae-24a3f02603f1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "State hospital",
                "uuid": "0097d74d-c046-4504-9efe-e9811f6363af",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Not yet decided",
                "uuid": "ec8a2653-e9cc-4912-8a3b-24701ba7ad09",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "PRIVATE",
                "uuid": "9d81d66f-dd69-46b4-85b3-525080b33d67",
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
                "order": 5,
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
                "name": "CHC PINDVAL",
                "uuid": "f85a0321-e224-4829-8d4d-074c75cf4028",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
                "name": "CHC KAPRADA",
                "uuid": "29f824b6-e09e-429a-b261-90d062d19afa",
                "dataType": "NA",
                "answers": [],
                "order": 4,
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
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
  
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);
  
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("PLAN IN WHICH HOSPITAL")
            .is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("PLAN IN WHICH HOSPITAL")
            .containsAnswerConceptName("Not yet decided").matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
       }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "mandatory": true
        },
        {
          "name": "Money saved",
          "uuid": "5b068253-86f2-4513-a494-e10462291fdf",
          "keyValues": [],
          "concept": {
            "name": "MONEY SAVED",
            "uuid": "247d2f74-8404-4d7e-8873-60ed1c9e71c9",
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
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
  
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);
  
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("MONEY SAVED")
            .is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("MONEY SAVED")
            .containsAnswerConceptName("No").matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
       }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "mandatory": true
        },
        {
          "name": "Who will give blood if required",
          "uuid": "8322b080-cdef-46f7-b035-6ac1e05ac6bc",
          "keyValues": [],
          "concept": {
            "name": "Who will give blood if required",
            "uuid": "477bdbfa-5f15-460c-93d9-fa60ad3ce387",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Brother",
                "uuid": "b7d4cfd4-7bd4-4e12-bd9b-5a4f4427bc20",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Father",
                "uuid": "60bd2230-5ada-451a-a020-532d48173a8c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Husband",
                "uuid": "7d24f498-bd92-4f6e-9408-de1c154dbfc2",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Brother-in-law",
                "uuid": "538d4324-3870-46f9-8172-e2f300da51f8",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Not yet decided",
                "uuid": "ec8a2653-e9cc-4912-8a3b-24701ba7ad09",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Father-in-law",
                "uuid": "08258f9a-4cd4-4ccb-8c31-549033f34a3e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other relatives",
                "uuid": "aa4ea2ad-9bc9-4a60-8778-fcfa84f01378",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
  
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);
  
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("Who will give blood if required")
            .is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("Who will give blood if required")
            .containsAnswerConceptName("No").matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
       }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "mandatory": true
        },
        {
          "name": "Make clothes ready for the delivery and new born baby",
          "uuid": "ef82a5e9-507a-4eb7-b88a-372f8f4b19ec",
          "keyValues": [],
          "concept": {
            "name": "MAKE CLOTHES READY FOR THE DELIVERY AND NEW BORN BABY",
            "uuid": "c3f20991-a82e-4ce5-9f13-473256e52114",
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
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
  
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);
  
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("MAKE CLOTHES READY FOR THE DELIVERY AND NEW BORN BABY")
            .is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("MAKE CLOTHES READY FOR THE DELIVERY AND NEW BORN BABY")
            .containsAnswerConceptName("No").matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
       }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "mandatory": true
        },
        {
          "name": "Counselling Done for the risk factors / Morbidities to all Family members",
          "uuid": "24b8497f-6fea-489d-89cf-91b927baf739",
          "keyValues": [],
          "concept": {
            "name": "Counselling Done for the risk factors / Morbidities to all Family members",
            "uuid": "c9d2db85-7709-4109-83cf-f6951ab4dbc3",
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
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
  
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);
  
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21).and.when
            .latestValueInPreviousEncounters("Counselling Done for the risk factors / Morbidities to all Family members").is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21).and.when
            .latestValueInPreviousEncounters("Counselling Done for the risk factors / Morbidities to all Family members").containsAnswerConceptName("No").matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
       }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "mandatory": true
        },
        {
          "name": "Counselling done for the Government Scheme?",
          "uuid": "c28716a3-8823-4f1e-be1f-0e51305718bb",
          "keyValues": [],
          "concept": {
            "name": "Counselling done for the Government Scheme?",
            "uuid": "f630f5ae-15bd-489d-9258-a989a70166a2",
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
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
  
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);
  
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21).and.when
            .latestValueInPreviousEncounters("Counselling done for the Government Scheme?").is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).whenItem(value).is.greaterThanOrEqualTo(21).and.when
            .latestValueInPreviousEncounters("Counselling done for the Government Scheme?")
            .containsAnswerConceptName("No").matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
       }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "mandatory": true
        },
        {
          "name": "Chiranjivi yojna form is ready?",
          "uuid": "5fd57e04-6b8b-4fab-b3db-b2d223aeaace",
          "keyValues": [],
          "concept": {
            "name": "Chiranjivi yojna form is ready?",
            "uuid": "b8576eff-bb29-49c6-ad34-d9970d7e5b36",
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
          "displayOrder": 11,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
  
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);
  
  if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21).and.when
            .latestValueInPreviousEncounters("Chiranjivi yojna form is ready?").is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21).and.when
            .latestValueInPreviousEncounters("Chiranjivi yojna form is ready?")
            .containsAnswerConceptName("No").matches()) {
          return status = new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
       }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Have you enrolled in any government scheme?",
          "uuid": "33878ee3-ea16-451d-a2ea-4bd79fa16271",
          "keyValues": [],
          "concept": {
            "name": "Have you enrolled in any government scheme?",
            "uuid": "5587d35b-de18-436c-832d-2dc1295407df",
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
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
  
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);
  
  if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21).and.when
            .latestValueInPreviousEncounters("Have you enrolled in any government scheme?").is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21).and.when
            .latestValueInPreviousEncounters("Have you enrolled in any government scheme?")
            .containsAnswerConceptName("No").matches()) {
          return status = new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
       }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "HB measured by color scale ?",
          "uuid": "0d8e0c2e-558d-4f43-b0bb-a64f1eaf90ef",
          "keyValues": [],
          "concept": {
            "name": "HB measured by color scale",
            "uuid": "f76ba360-0079-4c7b-bd16-b79ea26355ad",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
   statusBuilder.show().when.valueInEncounter("H.B").is.notDefined;
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Counselling",
      "timed": false
    },
    {
      "uuid": "71e495c3-e01b-47ff-8e5e-ebdc4de71167",
      "name": "Nutritional Counselling",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Diet Advice Dos",
          "uuid": "3b288873-40a9-47ac-939e-1c78345ef549",
          "keyValues": [],
          "concept": {
            "name": "Diet Advice Do's",
            "uuid": "5d5b9e5d-0d66-4138-b6a4-c3c7ba321960",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Diet Advice Donts",
          "uuid": "8867749f-1a09-4336-bc0d-de49ac0185fe",
          "keyValues": [],
          "concept": {
            "name": "Diet Advice Don'ts",
            "uuid": "7cdd0689-e7fc-43c2-b4fb-ef168fb7d9b0",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Supplementary nutritional therapy",
          "uuid": "a55cd1cb-ad7a-470e-8432-9d3534ca54a8",
          "keyValues": [],
          "concept": {
            "name": "Supplementary nutritional therapy (advice)",
            "uuid": "e6b81ecb-6261-4ea7-822b-efbd84b16ecd",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Nutritional Counselling",
      "timed": false
    },
    {
      "uuid": "4c55f756-9b14-40e6-8899-42f11695da35",
      "name": "General Counselling",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Rest and sleep",
          "uuid": "664724e6-fb5c-4bb4-bb32-03a52322c03f",
          "keyValues": [],
          "concept": {
            "name": "Rest and sleep advice Dos",
            "uuid": "0b18da58-4e5d-4af0-ad82-c2cb67175e1a",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Immunization Counselling",
          "uuid": "695b91aa-70cc-4990-a02b-9dfa2d15abac",
          "keyValues": [],
          "concept": {
            "name": "Immunization Counselling (advice)",
            "uuid": "43f54817-6701-416f-a391-fb1cc4133cd8",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Coitus/Sex Counselling",
          "uuid": "b23b060b-0532-4d75-8353-092f29dad43c",
          "keyValues": [],
          "concept": {
            "name": "Coitus/Sex Counselling (advice)",
            "uuid": "5ec93cdf-007e-4027-8935-cc9df95fb3a1",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Illness management",
          "uuid": "217a449f-c998-492d-aab2-ed6ba1ada5a7",
          "keyValues": [],
          "concept": {
            "name": "Illness management (advice)",
            "uuid": "77436bac-3168-40a9-8114-ffa2ce0b04fa",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Finance management",
          "uuid": "451436ff-9d40-48d1-8bd4-8f045efba9ab",
          "keyValues": [],
          "concept": {
            "name": "Finance management (advice)",
            "uuid": "cf4a12aa-476f-478c-a6eb-644012117159",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "General Counselling",
      "timed": false
    },
    {
      "uuid": "53168a75-7528-40e1-817f-72df811f4a5b",
      "name": "Administrative Counselling",
      "displayOrder": 10,
      "formElements": [
        {
          "name": "Government scheme information",
          "uuid": "57e410ce-820c-4254-a773-30e90e511772",
          "keyValues": [],
          "concept": {
            "name": "Government scheme information (advice)",
            "uuid": "9f88aa7e-5983-4b18-98ad-7e62ac628272",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Ambulance services information",
          "uuid": "521e9615-4d04-414d-a71f-a0e0ece53eb4",
          "keyValues": [],
          "concept": {
            "name": "Ambulance services information (advice)",
            "uuid": "350b9426-48ab-4a72-9e67-af6017518786",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Administrative Counselling",
      "timed": false
    }
  ],
  "decisionRule": "  "use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const decisions = params.decisions;
    const complicationsBuilder = new imports.rulesConfig.complicationsBuilder({
        programEncounter: programEncounter,
        complicationsConcept: "High Risk Conditions"
    });
   
 const isNormalWeightGain = imports.motherCalculations.isNormalWeightGain(programEncounter.programEnrolment,programEncounter);
           
           
        complicationsBuilder.addComplication("Height is less than 145")
            .when.valueInEncounter("Height").lessThanOrEqualTo(145);

        complicationsBuilder.addComplication("Irregular weight gain")
            .when.valueInEncounter("Weight").lessThanOrEqualTo(35);

        

        complicationsBuilder.addComplication('Low BMI')
            .when.valueInEncounter('BMI').lessThan(18.5);

        complicationsBuilder.addComplication('High BMI')
            .when.valueInEncounter('BMI').greaterThan(24.9);

        complicationsBuilder.addComplication("Rh Negative Blood Group")
            .when.valueInEncounter("Blood Group")
            .containsAnyAnswerConceptName("A-", "AB-", "O-", "B-");

        complicationsBuilder.addComplication("Pedal Edema Present")
            .when.valueInEncounter("pedal oedema is present")
            .containsAnswerConceptName("Yes");

        complicationsBuilder.addComplication("Pallor Present")
            .when.valueInEncounter("Pallor").containsAnswerConceptName("Present");

        complicationsBuilder.addComplication("Hypertension")
            .when.valueInEncounter("B.P - Systolic").greaterThanOrEqualTo(140);

        complicationsBuilder.addComplication("Hypertension")
            .when.valueInEncounter("B.P - Diastolic").greaterThanOrEqualTo(90);

        complicationsBuilder.addComplication("High Temperature")
            .when.valueInEncounter("Temperature").greaterThan(37.5);

        complicationsBuilder.addComplication("Having convulsions")
            .when.valueInEncounter("Has she been having convulsions?")
            .containsAnswerConceptName("Present");

        complicationsBuilder.addComplication("Jaundice (Icterus)")
            .when.valueInEncounter("Jaundice (Icterus)")
            .containsAnswerConceptName("Present");

        complicationsBuilder.addComplication("Breast Examination -Nipple not normal")
            .when.valueInEncounter("Breast Examination - Nipple")
            .containsAnyAnswerConceptName("Retracted", "Flat");

        complicationsBuilder.addComplication("Danger sign(s) present")
            .when.valueInEncounter("Is there any danger sign")
            .containsAnyAnswerConceptName("Malaria", "eclampsia", "APH", "Foul smelling menses", "twin pregnancy","fever", "difficult breathing", "severe vomiting", "problems in laboratory report",
                "Blurred vision", "Reduced fetal movement", "Other");

        complicationsBuilder.addComplication("High blood sugar")
            .when.valueInEncounter("Blood Sugar").is.greaterThanOrEqualTo(140);

        complicationsBuilder.addComplication("VDRL Postitve")
            .when.valueInEncounter("VDRL").containsAnswerConceptName("Positive");

        complicationsBuilder.addComplication("HIV/AIDS Positive")
            .when.valueInEncounter("HIV/AIDS Test").containsAnswerConceptName("Positive");

        complicationsBuilder.addComplication("HbsAg Positive")
            .when.valueInEncounter("HbsAg").containsAnswerConceptName("Positive");

        complicationsBuilder.addComplication("Sickle cell present")
            .when.valueInEncounter("IF YES, result of sickle cell test")
            .containsAnyAnswerConceptName("DISEASE", "TRAIT");

        complicationsBuilder.addComplication("Urine Albumin present")
            .when.valueInEncounter("Urine Albumin")
            .containsAnyAnswerConceptName("Trace", "+1", "+2", "+3", "+4");

        complicationsBuilder.addComplication("Urine Sugar present")
            .when.valueInEncounter("Urine Sugar")
            .containsAnyAnswerConceptName("Trace", "+1", "+2", "+3", "+4");

        complicationsBuilder.addComplication("Number of foetus more than 1")
            .when.valueInEncounter("USG Scanning Report - Number of foetus")
            .containsAnyAnswerConceptName("Two", "Three", "More than three");

        complicationsBuilder.addComplication("Liquour is not at normal level")
            .when.valueInEncounter("USG Scanning Report - Amniotic fluid")
            .containsAnyAnswerConceptName("Increased", "Decreased");

        complicationsBuilder.addComplication("Placenta Previa present")
            .when.valueInEncounter("USG Scanning Report - Placenta Previa")
            .containsAnyAnswerConceptName("Previa");

        complicationsBuilder.addComplication("Foetal presentation not Cephalic")
            .when.valueInEncounter("Foetal presentation")
            .containsAnyAnswerConceptName("Transverse", "Breech");

        complicationsBuilder.addComplication("Foetal movements not normal")
            .when.valueInEncounter("Foetal movements")
            .containsAnyAnswerConceptName("Absent", "Reduced");

        complicationsBuilder
            .addComplication("Severe Anemia")
            .when.valueInEncounter("H.B")
            .is.lessThan(7);

        complicationsBuilder
            .addComplication("Moderate Anemia")
            .when.valueInEncounter("H.B")
            .is.greaterThanOrEqualTo(7)
            .and.valueInEncounter("H.B")
            .is.lessThanOrEqualTo(9.9);

        complicationsBuilder
            .addComplication("Mild Anemia")
            .when.valueInEncounter("H.B")
            .is.greaterThanOrEqualTo(10)
            .and.valueInEncounter("H.B")
            .is.lessThanOrEqualTo(10.9);

        complicationsBuilder
            .addComplication("Severe Anemia")
            .when.valueInEncounter("HB measured by color scale")
            .is.lessThan(7);

        complicationsBuilder
            .addComplication("Moderate Anemia")
            .when.valueInEncounter("HB measured by color scale")
            .is.greaterThanOrEqualTo(7)
            .and.valueInEncounter("HB measured by color scale")
            .is.lessThanOrEqualTo(9.9);

        complicationsBuilder
            .addComplication("Mild Anemia")
            .when.valueInEncounter("HB measured by color scale")
            .is.greaterThanOrEqualTo(10)
            .and.valueInEncounter("HB measured by color scale")
            .is.lessThanOrEqualTo(10.9);
            
       decisions.encounterDecisions.push(complicationsBuilder.getComplications());
  
       return decisions;
},
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const programEncounter = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEncounter
  });
  
const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;

const encounterScheduleANCClusterIncharge = [
    {"name": "ANC Cluster Incharge-1", "earliest": 148, "max": 169},
    {"name": "ANC Cluster Incharge-2", "earliest": 204, "max": 225}
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

const encounterScheduleANCSaheli = [
        {"name": "ANC - Saheli 2", "earliest": 150, "max": 157},
        {"name": "ANC - Saheli 3", "earliest": 210, "max": 217},
        {"name": "ANC - Saheli 4", "earliest": 240, "max": 247},
        {"name": "ANC - Saheli 5", "earliest": 255, "max": 262},
        {"name": "ANC - Saheli 6", "earliest": 270, "max": 277}
    ];

const lmpDate = programEncounter.programEnrolment.getObservationValue('Last menstrual period');
const highRiskANC = programEncounter.getObservationReadableValue('High Risk Conditions') || programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('High Risk Conditions');
 
 let visitDate = programEncounter.EncounterDateTime ;
  

 const scheduleVisitsDuringANCClusterIncharge = () => {
      
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

const scheduleVisitsDuringANCSaheli = () => {
     
      var schedule = _.chain(encounterScheduleANCSaheli)
            .filter(e => imports.moment(visitDate)
                .isSameOrBefore(imports.moment(lmpDate).add(e.earliest, 'days').toDate(), 'date') === true)
            .filter(e => (programEncounter.programEnrolment.hasEncounter('ANC - Saheli', e.name)) === false)
            .first()
            .value();    
        
    if (!_.isEmpty(schedule)) {
         
       const earliestVisitDate = imports.moment(lmpDate).add(schedule.earliest, 'days').toDate();
       const maxVisitDate = imports.moment(lmpDate).add(schedule.max, 'days').toDate();

                scheduleBuilder.add({
                    name: schedule.name,
                    encounterType: 'ANC - Saheli',
                    earliestDate: earliestVisitDate,
                    maxDate: maxVisitDate
                });
    }

}; 

  
  if (!hasExitedProgram(programEncounter)) {
    var encounterSchedule = encounterScheduleANC;
    if (highRiskANC) {

            scheduleVisitsDuringANCClusterIncharge();
            encounterSchedule = encounterScheduleHighRiskANC;
            
            scheduleVisitsDuringANCSaheli();
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
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}