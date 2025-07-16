{
  "name": "ANC - Saheli",
  "uuid": "b601deab-642a-4599-a693-987644fcba42",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "042e5a64-6db3-41be-b7b4-fabc4e8c40f6",
      "name": "Services Provided",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Mamta card",
          "uuid": "3fc986bf-2e8d-48c3-a7fa-19288225c23e",
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
          "uuid": "b1d3859b-1b4e-4cdf-af5b-ad4667b0639d",
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
          "uuid": "55326b41-db15-4c94-9c58-caac9bd71214",
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
          "uuid": "8d74b13b-4f6d-496f-8aea-7ce56a9c8999",
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
          "uuid": "49e11c03-f340-4d27-a8be-057325ec8864",
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
          "uuid": "849c728c-54af-4ed8-ad3a-059f21153ec3",
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
          "uuid": "a32bb1b6-a7d5-4d30-82c5-88c015b9089c",
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
          "uuid": "d22e07c1-529e-4b69-879b-c6d6e7a3b83a",
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
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
    
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD 1")
            .is.defined.matches()) {
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
        }

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD 1")
            .is.defined
            .and.when.latestValueInPreviousEncounters("TD 2")
            .is.defined.matches())
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD Booster")
            .is.defined.matches()) {
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
        }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);

},
          "mandatory": false
        },
        {
          "name": "TD 2",
          "uuid": "cdcf65ce-6c18-46de-8476-b04242b4fe61",
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
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
    
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD 2")
            .is.defined.matches()) {
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
        }

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD 1")
            .is.defined
            .and.when.latestValueInPreviousEncounters("TD 2")
            .is.defined.matches())
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD Booster")
            .is.defined.matches()) {
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
        }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);

},
          "mandatory": false
        },
        {
          "name": "TD Booster",
          "uuid": "acdc783e-debc-455a-aaa3-22c1b1e0a22c",
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
  const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
    
  if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD 1")
            .is.defined.and.when.latestValueInPreviousEncounters("TD 2")
            .is.defined.matches()) {
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
        }

        if (new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("TD Booster")
            .is.defined.matches())
            return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);

},
          "mandatory": false
        },
        {
          "name": "Does she using iodised salt?",
          "uuid": "28de926b-319a-433d-a66d-9028da69e59f",
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
          "uuid": "d5d9d5a7-cb84-48b2-b0df-886757d0c110",
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
          "uuid": "32f361c4-eddd-49e4-80d5-59ba793136c5",
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
          "uuid": "180618c7-a54c-4708-9e79-e2c691f25d8c",
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
          "name": "Whether Saheli has written the expected date of delivery on the beneficiary's house wall?",
          "uuid": "cef47d64-8fcc-48c8-a1ff-23924efc32dd",
          "keyValues": [],
          "concept": {
            "name": "Whether Saheli has written the expected date of delivery on the beneficiary's house wall?",
            "uuid": "159dc3ad-c784-4385-84bb-9619beedc124",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("159dc3ad-c784-4385-84bb-9619beedc124").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Whether Saheli has written the expected date of delivery on the beneficiary's house wall?",
                          "conceptUuid": "159dc3ad-c784-4385-84bb-9619beedc124",
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
          "name": "Saheli has written the expected date of delivery on the beneficiary's house wall?",
          "uuid": "3cd9bc6d-b333-4a93-89a8-b41acee4f0b7",
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
          "displayOrder": 16,
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
          "mandatory": true
        }
      ],
      "display": "Services Provided",
      "timed": false
    },
    {
      "uuid": "10e4bad2-7d7f-4f10-8fe5-c2c17a7ed158",
      "name": "Vitals",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Height",
          "uuid": "076afe18-5250-49c0-9c2b-a72e696aab48",
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
          "uuid": "0855aa16-7c79-46cf-a564-2d2a8a20e60e",
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
          "uuid": "53360d67-9c82-48b3-a495-b3104fb6bb1d",
          "keyValues": [],
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
          "mandatory": false
        },
        {
          "name": "B.P - Systolic",
          "uuid": "b4b3a92e-abbd-4f2f-acff-b0b3423c1081",
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
          "uuid": "571eb7f8-0a8c-4570-b476-37a9280a71f2",
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
          "uuid": "1804f9e4-9d22-4d9e-b84b-c1b812b5a92c",
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
          "mandatory": false
        },
        {
          "name": "Temperature",
          "uuid": "427e08cc-02e0-4c68-9b2f-40a6099c61b4",
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
      "uuid": "96fb97bc-c5be-4e7a-b0da-94c5d2e5a963",
      "name": "Physical Examination",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Pedal oedema is present",
          "uuid": "85b6b843-d495-4322-b1e6-1019f353df58",
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
          "uuid": "0574f8a5-5e6a-4963-b161-4b00a94d2711",
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
          "uuid": "bc27c8d1-8d9e-4590-b985-0b4511cade82",
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
          "uuid": "7014ee22-8945-497f-8320-7db114b310d6",
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
          "uuid": "9d6f31ee-a6cb-4916-83ec-dd649b6017cf",
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
          "uuid": "b50d28e6-5d40-41f9-9559-e096a6870364",
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

  if ( programEncounter.name === 'ANC - Saheli 1' ) {
    visibility = true;
  } else {
    visibility = false;
  };
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "mandatory": false
        }
      ],
      "display": "Physical Examination",
      "timed": false
    },
    {
      "uuid": "7434e05a-76a5-4d34-86e6-60d37fb35e4f",
      "name": "Pregnancy Complications",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Is there any danger sign",
          "uuid": "2c0bf808-662d-487e-ade8-03d91172e960",
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
          "uuid": "95141acd-29d1-40b9-b739-349f50bcbce3",
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
 statusBuilder.show().when.valueInEncounter("Is there any danger sign").containsAnswerConceptName('Other');
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Pregnancy Complications",
      "timed": false
    },
    {
      "uuid": "bad46ca0-3447-4721-bae4-4cb22dbb9cf3",
      "name": "Per Abdominal Examination",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Foetal movements",
          "uuid": "202711ff-0678-408e-ae17-4bc68e15eba7",
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
      "uuid": "1fca9cc1-fafe-46de-8afb-cd0c6c5b769e",
      "name": "Lab Diagnostics - Blood",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Is laboratory test done?",
          "uuid": "44168ab6-4dd4-42a4-801e-d40e44677212",
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
          "mandatory": false
        },
        {
          "name": "Blood Examination Date",
          "uuid": "6c5cde2e-ce37-4c1e-8b9d-295d7d270587",
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
          "uuid": "f7fbe10d-b6b9-4e5e-91b1-3bec8f6f201d",
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
          "uuid": "3acd9758-f543-4716-b9c1-9cceb09484d9",
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
          "uuid": "0820e9b7-9411-4d7b-aa32-c0a45d4953d5",
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
          "uuid": "f36b1a72-1b45-4109-a074-d6908eca0250",
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
          "uuid": "6bcf47d0-9514-4fca-a456-0ac91d3aad70",
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
          "uuid": "1c6b5b76-b7ff-45c2-9c7f-0e45d300730d",
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
          "mandatory": false
        },
        {
          "name": "If yes, result of sickle cell test",
          "uuid": "f6a955e1-5793-4cb8-a455-079eb0f7f628",
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
          "mandatory": false
        },
        {
          "name": "Urine Albumin",
          "uuid": "220d415f-a5b8-40f1-82fa-2e42c3ea267c",
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
          "uuid": "4a637b9c-2557-4730-bbcf-491c860973a5",
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
          "uuid": "37f9cabb-ad94-403f-b48b-89583ff8944a",
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
          "mandatory": false
        },
        {
          "name": "If yes then write E.D.D as per USG",
          "uuid": "5fd7a01b-8ec9-47fd-b0eb-77ff7dd4b922",
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
          "mandatory": false
        },
        {
          "name": "USG Scanning Report - Number of foetus",
          "uuid": "ff07c02a-3284-426c-abfb-325d4e2d2150",
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
          "uuid": "3b909ee0-c296-4332-8d93-cda1f8215cd5",
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
          "uuid": "b35beb5f-b194-45c3-a478-5e76b437e140",
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
          "uuid": "50f93dbe-08c7-468b-a3da-9ca19ad5fec3",
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
      "uuid": "6fa512b7-6422-49de-98e3-5411cef11faa",
      "name": "Counselling",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "Plan to do delivery?",
          "uuid": "2b9c2986-5cde-4ed8-866c-9efc55aaa1eb",
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
      
    if (ruleCondition.whenItem(value)
    .is.greaterThanOrEqualTo(21)
    .and.when.latestValueInPreviousEncounters("Plan to do delivery?")
    .is.notDefined.matches()) {
       return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
  }
  
    if (ruleCondition
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
          "uuid": "dc5d2915-e486-42a9-98f4-3e187ee77f43",
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
  
  if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("Place of delivery").is.notDefined.matches()) {
            const status = new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
            status.answersToSkip = [formElement.getAnswerWithConceptName("On the way")];
            return status;
        }

        if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
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
          "uuid": "0511466b-e621-4382-846b-061b70c771a6",
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
          return  new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
       }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "mandatory": true
        },
        {
          "name": "COUNSELLING FOR 108",
          "uuid": "dbfdf9ab-aafb-42e5-bdd8-7ab703430a5c",
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
  
  if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("COUNSELLING FOR 108")
            .is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
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
          "uuid": "4f37ca74-218d-4241-a75a-a2d66d97eecd",
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
  
  if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("PLAN IN WHICH HOSPITAL")
            .is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
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
          "uuid": "efd5cc10-a8e4-4a80-bb52-8f00330e5da4",
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
  
  if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("MONEY SAVED")
            .is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
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
          "uuid": "b1c2e0b1-044c-456b-b7df-ec85107e9003",
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
  
  if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("Who will give blood if required")
            .is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
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
          "uuid": "7e6f78ac-13d4-46ca-84fe-0ba3c06bb68e",
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
  
  if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
            .and.when.latestValueInPreviousEncounters("MAKE CLOTHES READY FOR THE DELIVERY AND NEW BORN BABY")
            .is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21)
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
          "uuid": "b57fe9f1-b8df-47cf-8ff5-17b8c75b8777",
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
  
  if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21).and.when
            .latestValueInPreviousEncounters("Counselling Done for the risk factors / Morbidities to all Family members").is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21).and.when
            .latestValueInPreviousEncounters("Counselling Done for the risk factors / Morbidities to all Family members").containsAnswerConceptName("No").matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
       }

        return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);
},
          "mandatory": true
        },
        {
          "name": "Counselling done for the Government Scheme?",
          "uuid": "bcad23a6-b666-4c9d-8f3b-43c446296b67",
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
  
  if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21).and.when
            .latestValueInPreviousEncounters("Counselling done for the Government Scheme?").is.notDefined.matches()) {
          return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
        }

        if (ruleCondition.whenItem(value).is.greaterThanOrEqualTo(21).and.when
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
          "uuid": "f77f846b-50b2-48ea-b1c7-f743e1306a9c",
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
          "mandatory": false
        },
        {
          "name": "Have you enrolled in any government scheme?",
          "uuid": "18cca2e5-f12a-4c27-a763-1e2bbccb3169",
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
          "mandatory": false
        },
        {
          "name": "HB measured by color scale ?",
          "uuid": "6fe0d92d-9cba-4aba-af58-29e73e234e6d",
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
    const ruleCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement});
     
  const value = 
imports.motherCalculations.gestationalAgeAsOn(programEncounter.encounterDateTime, programEncounter.programEnrolment);

    if (ruleCondition.whenItem(value)
        .is.greaterThanOrEqualTo(21)
        .and.when.latestValueInPreviousEncounters("H.B")
        .is.notDefined.matches()) {
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, true);
    }


    return new imports.rulesConfig.FormElementStatus(formElement.uuid, false);

},
          "mandatory": false
        }
      ],
      "display": "Counselling",
      "timed": false
    },
    {
      "uuid": "7c02c403-97ef-4834-8325-db9cff4e57ac",
      "name": "Nutritional Counselling",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Diet Advice Dos",
          "uuid": "bdf20401-bf63-4207-9542-f5e1147c9b43",
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
          "uuid": "ba8d4924-5ca7-45f9-8aed-850d4f85b265",
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
          "uuid": "814d2f2a-0cfc-40fb-9a4d-0808c38e38f6",
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
      "uuid": "f0e75756-62b2-448d-9ffc-6ffd41f68610",
      "name": "General Counselling",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Rest and sleep",
          "uuid": "262408ea-5299-4fbd-ad25-d5fe27e60ae7",
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
          "uuid": "027498c5-f065-4e65-819d-376d6b487250",
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
          "uuid": "9cec6960-0fc4-4cea-bd4a-a6c71526d61c",
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
          "uuid": "67676002-c82a-4553-8c83-13470be72f2f",
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
          "uuid": "a192242c-d16d-49b1-864e-b8ee4b2e3231",
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
      "uuid": "3ea9aefb-5a96-49a1-a426-9daba84ce6a5",
      "name": "Administrative Counselling",
      "displayOrder": 10,
      "formElements": [
        {
          "name": "Government scheme information",
          "uuid": "94e5e741-fccc-452e-a8e0-464385ca21ac",
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
          "uuid": "9f774568-ca33-4707-a5d4-c8ae5e4e215b",
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
    },
    {
      "uuid": "2688525e-5741-40d5-b05b-5520a43334db",
      "name": "High risk",
      "displayOrder": 11,
      "formElements": [
        {
          "name": "Is the mother at high risk?",
          "uuid": "fdcbed3b-52ba-447d-9ab9-7420c40791c5",
          "keyValues": [],
          "concept": {
            "name": "Is the mother at high risk",
            "uuid": "963948d3-3dfe-4f7f-bd2f-ec807bb94b07",
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
  "decisionRule": "  "use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const decisions = params.decisions;
    const complicationsBuilder = new imports.rulesConfig.complicationsBuilder({
        programEncounter: programEncounter,
        complicationsConcept: "High Risk Conditions"
    });
   
 const isNormalWeightGain = imports.motherCalculations
.isNormalWeightGain(programEncounter.programEnrolment,programEncounter,programEncounter.encounterDateTime);
           
           
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
({params, imports}) => {
    const programEncounter = params.entity;
    const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
        programEncounter
    });

    const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;


    const encounterScheduleANC = [
        {"name": "ANC - Saheli 2", "earliest": 150, "max": 157},
        {"name": "ANC - Saheli 3", "earliest": 210, "max": 217},
        {"name": "ANC - Saheli 4", "earliest": 240, "max": 247},
        {"name": "ANC - Saheli 5", "earliest": 255, "max": 262},
        {"name": "ANC - Saheli 6", "earliest": 270, "max": 277}
    ];


    const lmpDate = programEncounter.programEnrolment.getObservationValue('Last menstrual period');
    const highRiskANC = programEncounter.getObservationReadableValue('Is the mother at high risk');
    console.log('highRisk--->', highRiskANC);
    console.log('earliest--->', programEncounter.earliestVisitDateTime);

    let visitDate = programEncounter.encounterDateTime;
    //|| getEarliestEncounterDate(programEncounter)


    if (!hasExitedProgram(programEncounter)) {
        var encounterSchedule = encounterScheduleANC;

        var schedule = _.chain(encounterSchedule)
            .filter(e => imports.moment(visitDate)
                .isSameOrBefore(imports.moment(lmpDate).add(e.earliest, 'days').toDate(), 'date') === true)
            .filter(e => (programEncounter.programEnrolment.hasEncounter('ANC - Saheli', e.name)) === false)
            .first()
            .value();

        if (!_.isEmpty(schedule)) {
            console.log('schedule', schedule);

            let earliestVisitDate;
            let maxVisitDate;

            if (_.isEqual(highRiskANC, 'Yes')) {
                earliestVisitDate = imports.moment(programEncounter.earliestVisitDateTime).add(15, 'days').toDate();
                maxVisitDate = imports.moment(programEncounter.earliestVisitDateTime).add(18, 'days').toDate();
                var encName = programEncounter.name;
                var newEncName = (encName.match(/\\d/g)).join("");
                var encName = 'ANC - Saheli ';

                scheduleBuilder.add({
                    name: encName.concat(parseInt(newEncName) + 1),
                    encounterType: 'ANC - Saheli',
                    earliestDate: earliestVisitDate,
                    maxDate: maxVisitDate
                });

            } else {
                earliestVisitDate = imports.moment(lmpDate).add(schedule.earliest, 'days').toDate();
                maxVisitDate = imports.moment(lmpDate).add(schedule.max, 'days').toDate();


                scheduleBuilder.add({
                    name: schedule.name,
                    encounterType: 'ANC - Saheli',
                    earliestDate: earliestVisitDate,
                    maxDate: maxVisitDate
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