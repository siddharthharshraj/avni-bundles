{
  "name": "Screening Form Encounter",
  "uuid": "d7adfada-b839-44a1-a7db-9ac5a51852e2",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "1644300f-7a90-4a87-96f1-fcaf6b693e2b",
      "name": "Screening Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Is Any One Measured the Blood Pressure in Last One Year?",
          "uuid": "aa48dfc6-b70c-4397-8a77-9ab256ebd20e",
          "keyValues": [],
          "concept": {
            "name": "Is Any One Measured the Blood Pressure in Last One Year?",
            "uuid": "f7fdeb36-e004-4375-b7c7-cd9cb48afc24",
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
          "name": "Is Any One Informed You That Your Blood Pressure High?",
          "uuid": "e646790b-2c09-4b14-9eda-d4e9fe0a19bf",
          "keyValues": [],
          "concept": {
            "name": "Is Any One Informed You That Your Blood Pressure High?",
            "uuid": "14661d8f-988a-444a-baa7-55686f900a76",
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
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("f7fdeb36-e004-4375-b7c7-cd9cb48afc24").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Is Any One Measured the Blood Pressure in Last One Year?",
                          "conceptUuid": "f7fdeb36-e004-4375-b7c7-cd9cb48afc24",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Have You Take Any Medicine  for That?",
          "uuid": "018ff05d-7184-434a-b439-9ab9e8fb75d0",
          "keyValues": [],
          "concept": {
            "name": "Have You Take Any Medicine  for BP?",
            "uuid": "ddfe0dc7-5a4a-4b74-8816-c47dfd619a78",
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
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("f7fdeb36-e004-4375-b7c7-cd9cb48afc24").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Is Any One Measured the Blood Pressure in Last One Year?",
                          "conceptUuid": "f7fdeb36-e004-4375-b7c7-cd9cb48afc24",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Which Medicine?",
          "uuid": "d20614d0-a3e5-42c9-9151-97ed103410c9",
          "keyValues": [],
          "concept": {
            "name": "Which Medicine for BP?",
            "uuid": "0a23f905-de38-42b6-87ca-0c1714e48bd1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Amlodipin 5 Mg  Once a Day",
                "uuid": "13fe2f25-53a5-477f-992d-6b128fe416bf",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Amlodipin 5 Mg Two Times a Day",
                "uuid": "66d23a47-f6f6-4068-b538-0b238f023c75",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Tab Telmisatran 40 Mg Two Times a Day",
                "uuid": "52bac75e-5f31-4c8a-abad-d0a8b982929f",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Tab Telmisatran 40 Mg Once a Day",
                "uuid": "3b5555b7-e06e-4a21-81d0-b342d06fcd49",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Tab Cholrthalidone 12.5 Mg Once a Day",
                "uuid": "3a795958-0e56-46f8-8030-354d2c36b08c",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ddfe0dc7-5a4a-4b74-8816-c47dfd619a78").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Have You Take Any Medicine  for That?",
                          "conceptUuid": "ddfe0dc7-5a4a-4b74-8816-c47dfd619a78",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Other Medicine,Please Specify",
          "uuid": "7415689c-f80e-4c2e-baf1-22d3d6a3e256",
          "keyValues": [],
          "concept": {
            "name": "Other BP Medicine,Please Specify",
            "uuid": "a33b70fa-7761-4acb-a3f4-18a0d6c9fb8c",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0a23f905-de38-42b6-87ca-0c1714e48bd1").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Which Medicine for BP?",
                          "conceptUuid": "0a23f905-de38-42b6-87ca-0c1714e48bd1",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "c802a91a-7b34-4416-be89-4197227ded2b"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Are You Taking Medicine Regularly?",
          "uuid": "5d415085-1fc5-45e9-a929-47315fece850",
          "keyValues": [],
          "concept": {
            "name": "Are You Taking BP Medicine Regularly?",
            "uuid": "9264423c-6649-4062-a617-b10e0b02f11c",
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
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ddfe0dc7-5a4a-4b74-8816-c47dfd619a78").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Have You Take Any Medicine  for That?",
                          "conceptUuid": "ddfe0dc7-5a4a-4b74-8816-c47dfd619a78",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Have You Drink (Except Water) or Eat Anything in Last One Hour?",
          "uuid": "bf4bcfb3-f966-4898-befd-3bafa70b5979",
          "keyValues": [],
          "concept": {
            "name": "Have You Drink (Except Water) or Eat Anything in Last One Hour?",
            "uuid": "9d8b02d1-4ee9-4a99-8a8e-14eb70610e2a",
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
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Can You Give Consent for Taking Blood Pressure?",
          "uuid": "cfe94dee-231a-48d0-98ca-b1372c7673dd",
          "keyValues": [],
          "concept": {
            "name": "Can You Give Consent for Taking Blood Pressure?",
            "uuid": "ae09ad21-b589-498e-abb1-2c8d7c9a76da",
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
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "First Time Systolic Blood Pressure",
          "uuid": "ed0cfa5a-b125-44da-8cc3-6567d5571924",
          "keyValues": [],
          "concept": {
            "name": "First Time Systolic Blood Pressure",
            "uuid": "79ad36f7-abc5-4728-8ab7-de164bd998f4",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae09ad21-b589-498e-abb1-2c8d7c9a76da").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Can You Give Consent for Taking Blood Pressure?",
                          "conceptUuid": "ae09ad21-b589-498e-abb1-2c8d7c9a76da",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "First Time Diastolic Blood Pressure",
          "uuid": "8c65a2d9-5e53-4f54-9fe9-fd020da62042",
          "keyValues": [],
          "concept": {
            "name": "First Time Diastolic Blood Pressure",
            "uuid": "d8d21249-2275-43af-8804-547e4ebd5cea",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae09ad21-b589-498e-abb1-2c8d7c9a76da").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Can You Give Consent for Taking Blood Pressure?",
                          "conceptUuid": "ae09ad21-b589-498e-abb1-2c8d7c9a76da",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Second Time Systolic Blood Pressure",
          "uuid": "cab93a14-720b-4b99-b0cc-1c5b476beba1",
          "keyValues": [],
          "concept": {
            "name": "Second Time Systolic Blood Pressure",
            "uuid": "5bd04fe1-a466-4961-872f-ed379c3c0845",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae09ad21-b589-498e-abb1-2c8d7c9a76da").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Can You Give Consent for Taking Blood Pressure?",
                          "conceptUuid": "ae09ad21-b589-498e-abb1-2c8d7c9a76da",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Second Time Diastolic Blood Pressure",
          "uuid": "f4378a59-44af-4640-a5be-72ad540cccdc",
          "keyValues": [],
          "concept": {
            "name": "Second Time Diastolic Blood Pressure",
            "uuid": "1a732816-f11e-4038-aadf-576460ce2027",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae09ad21-b589-498e-abb1-2c8d7c9a76da").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Can You Give Consent for Taking Blood Pressure?",
                          "conceptUuid": "ae09ad21-b589-498e-abb1-2c8d7c9a76da",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Third Time Systolic Blood Pressure",
          "uuid": "76b4fa64-41e2-4ef1-9971-a2aebbaababd",
          "keyValues": [],
          "concept": {
            "name": "Third Time Systolic Blood Pressure",
            "uuid": "b9c3df81-4906-4c39-b7fe-fe1a118f7eaf",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae09ad21-b589-498e-abb1-2c8d7c9a76da").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Can You Give Consent for Taking Blood Pressure?",
                          "conceptUuid": "ae09ad21-b589-498e-abb1-2c8d7c9a76da",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Third Time Diastolic Blood Pressure",
          "uuid": "e604fda3-aca1-430f-b498-6e48c0466b69",
          "keyValues": [],
          "concept": {
            "name": "Third Time Diastolic Blood Pressure",
            "uuid": "2b57c2f1-5b81-4d08-9f1d-186043cd0237",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae09ad21-b589-498e-abb1-2c8d7c9a76da").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Can You Give Consent for Taking Blood Pressure?",
                          "conceptUuid": "ae09ad21-b589-498e-abb1-2c8d7c9a76da",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Average Systolic Blood Pressure",
          "uuid": "44c9ade0-29fd-430e-8bb1-28bc75ba6265",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Average Systolic Blood Pressure",
            "uuid": "bb031144-de4c-4a82-8145-3646de8316d0",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae09ad21-b589-498e-abb1-2c8d7c9a76da").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
  visibility = condition11 ;
  let firstSys = encounter.getObservationValue("79ad36f7-abc5-4728-8ab7-de164bd998f4");
  let secondSys = encounter.getObservationValue("5bd04fe1-a466-4961-872f-ed379c3c0845");
  let thirdSys = encounter.getObservationValue("b9c3df81-4906-4c39-b7fe-fe1a118f7eaf");
  
  value = (firstSys+secondSys+thirdSys)/3;

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Average Diastolic Blood Pressure",
          "uuid": "13a9fee5-fb7e-44f5-8e0f-1b17eaca29da",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Average Diastolic Blood Pressure",
            "uuid": "f9228840-67fb-4c5e-8d2d-0c5735ff78d1",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae09ad21-b589-498e-abb1-2c8d7c9a76da").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
  visibility = condition11 ;
  let firstDia = encounter.getObservationValue("d8d21249-2275-43af-8804-547e4ebd5cea");
  let secondDia = encounter.getObservationValue("1a732816-f11e-4038-aadf-576460ce2027");
  let thirdDia = encounter.getObservationValue("2b57c2f1-5b81-4d08-9f1d-186043cd0237");
  
  value = (firstDia+secondDia+thirdDia)/3;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Is Any One Measured the Diabetes in Last One Year?",
          "uuid": "882febd1-f5ab-4034-9c54-6891e007baf3",
          "keyValues": [],
          "concept": {
            "name": "Is Any One Measured the Diabetes in Last One Year?",
            "uuid": "ccd722ec-7028-4454-8c03-bfe1e4624046",
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
          "displayOrder": 17,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is Any One Informed You That Your Diabetes High?",
          "uuid": "f23f7d56-693f-4049-9448-b9f6301ebfe3",
          "keyValues": [],
          "concept": {
            "name": "Is Any One Informed You That Your Diabetes High?",
            "uuid": "23889ed2-1cdd-4e23-856c-2ce11de2ea34",
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
          "displayOrder": 18,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ccd722ec-7028-4454-8c03-bfe1e4624046").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Is Any One Measured the Diabetes in Last One Year?",
                          "conceptUuid": "ccd722ec-7028-4454-8c03-bfe1e4624046",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Have You Take Any Medicine for That?",
          "uuid": "65a523de-ed49-4636-9bc7-d701b69df9bb",
          "keyValues": [],
          "concept": {
            "name": "Have You Take Any Medicine for Sugar?",
            "uuid": "4ae2d4b0-d7ac-4bb7-811b-dc4f6b7e9e73",
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
          "displayOrder": 19,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("23889ed2-1cdd-4e23-856c-2ce11de2ea34").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Is Any One Informed You That Your Diabetes High?",
                          "conceptUuid": "23889ed2-1cdd-4e23-856c-2ce11de2ea34",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Which Medicine ?",
          "uuid": "db6e5074-5ed6-499d-97e5-961723f425b7",
          "keyValues": [],
          "concept": {
            "name": "Which Medicine for Sugar?",
            "uuid": "46bc06c4-2e68-4192-a785-8aadadf01ca3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Tab Glimirpide 1 Mg Once a Day",
                "uuid": "4a74f9c5-6eb2-4389-8e14-9d10dcb5ee5a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Tab Metformin 1000 Mg Twice a Day",
                "uuid": "c316b8ce-c334-4791-b65c-b9ac0e934eeb",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Tab Metformin 500 Mg Once a Day",
                "uuid": "271ee078-5de9-4ff8-99bf-98a17bfb81a8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Tab Metformin 500 Mg Twice a Day",
                "uuid": "e5c2a1fd-49fe-49ad-8844-542bc964bbbe",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Tab Glimirpide 1 Mg Twice a Day",
                "uuid": "018ba508-e319-4ac7-b32e-3b308f193ca0",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 20,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("4ae2d4b0-d7ac-4bb7-811b-dc4f6b7e9e73").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Have You Take Any Medicine for Sugar?",
                          "conceptUuid": "4ae2d4b0-d7ac-4bb7-811b-dc4f6b7e9e73",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Other Medicine,Please Specify",
          "uuid": "300b3b8e-5645-4e33-9abf-b451ede48c30",
          "keyValues": [],
          "concept": {
            "name": "Other Sugar Medicine,Please Specify",
            "uuid": "a2ef2c0d-efe5-4b6e-82aa-fcf747db0eaa",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 21,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("46bc06c4-2e68-4192-a785-8aadadf01ca3").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Which Medicine for Sugar?",
                          "conceptUuid": "46bc06c4-2e68-4192-a785-8aadadf01ca3",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "c802a91a-7b34-4416-be89-4197227ded2b"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Are You Taking Medicine Regularly ?",
          "uuid": "fbdf4c33-3f48-4fb6-ab7e-152a86ec073e",
          "keyValues": [],
          "concept": {
            "name": "Are You Taking Sugar Medicine Regularly ?",
            "uuid": "bbdaf5ac-4f1f-4baa-a108-56b4bbbc4763",
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
          "displayOrder": 22,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("4ae2d4b0-d7ac-4bb7-811b-dc4f6b7e9e73").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Have You Take Any Medicine for Sugar?",
                          "conceptUuid": "4ae2d4b0-d7ac-4bb7-811b-dc4f6b7e9e73",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Have You Drink (Except Water) or Eat Anything in Last One Hour?",
          "uuid": "aa5b9192-f12d-4501-9fb5-9a416f91a68d",
          "keyValues": [],
          "concept": {
            "name": "Have You Drink (Except Water) Or Eat Anything in Last One Hour?",
            "uuid": "07b558ed-de64-4846-9f3d-c3a8e0dfdfd3",
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
          "displayOrder": 23,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Can You Give Consent for Measuring Diabetes?",
          "uuid": "7c589ab5-cc30-4ff5-8859-5f6ee4581922",
          "keyValues": [],
          "concept": {
            "name": "Can You Give Consent for Measuring Diabetes?",
            "uuid": "d93a7da1-71b7-4a8f-962c-28f13397db5b",
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
          "displayOrder": 24,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Current Random Blood Sugar (RBS)",
          "uuid": "e899eb61-f7e4-4ef5-8eab-38219f0a85bc",
          "keyValues": [],
          "concept": {
            "name": "Current Random Blood Sugar (RBS)",
            "uuid": "5666b393-d450-4865-8127-205559a6b1be",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 25,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d93a7da1-71b7-4a8f-962c-28f13397db5b").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Can You Give Consent for Measuring Diabetes?",
                          "conceptUuid": "d93a7da1-71b7-4a8f-962c-28f13397db5b",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        }
      ],
      "display": "Screening Details",
      "timed": false
    },
    {
      "uuid": "fcfc5cf5-4338-4286-8418-9ff1cbb29417",
      "name": "Referral Details",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Referral Required",
          "uuid": "d5f2459b-8129-4ea3-8bdc-c2a530c7f1c7",
          "keyValues": [],
          "concept": {
            "name": "Referral Required",
            "uuid": "4fccbb67-b4f9-4fe5-a187-0c2645962485",
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
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  const encounterDateTime = moment(encounter.encounterDateTime).startOf('day');

  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("4fccbb67-b4f9-4fe5-a187-0c2645962485").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
  visibility = condition11 ;
  let refDate = encounter.getObservationValue("5f2dd567-1340-4c63-8e24-cb79712964a7");
    if(refDate){
        refDate = moment(refDate).startOf('day');
        if(refDate.isBefore(encounterDateTime)){
            validationErrors.push("Invalid date: Do not enter past date.");
        }
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Which Hospital Patient Refer?",
          "uuid": "a20df5d4-1db6-4eaf-8380-04e45a141bc1",
          "keyValues": [],
          "concept": {
            "name": "Which Hospital Patient Refer?",
            "uuid": "2559c679-c60d-4a71-92b9-1fd4e7fd2f92",
            "dataType": "Coded",
            "answers": [
              {
                "name": "DH",
                "uuid": "d890b14e-4719-463b-a606-708abf41589b",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Trust Hospital",
                "uuid": "3d4f28f2-27a0-4e3b-bf8b-5a99c7c94677",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Medical College",
                "uuid": "722a0a74-8af6-4502-926a-aa4774529164",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "PHC",
                "uuid": "23bf2ac6-4abc-4bd4-9a3e-52c5c6e3f9e1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Private Doctor",
                "uuid": "d678e94c-c6a7-41a6-b7d6-31937df73615",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "CHC",
                "uuid": "f2cfc6dd-c898-4d7d-acbf-db3acb433136",
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
                "name": "HWC",
                "uuid": "6977738e-17c2-4d69-bf93-8c07ec66c08f",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("4fccbb67-b4f9-4fe5-a187-0c2645962485").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Referral Required",
                          "conceptUuid": "4fccbb67-b4f9-4fe5-a187-0c2645962485",
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Other Hospital,Please Specify",
          "uuid": "c055e4a6-5b7d-4246-a428-b95b152834dc",
          "keyValues": [],
          "concept": {
            "name": "Other Hospital,Please Specify",
            "uuid": "0009826e-1d3b-4a54-b187-f179356b52ad",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("2559c679-c60d-4a71-92b9-1fd4e7fd2f92").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Which Hospital Patient Refer?",
                          "conceptUuid": "2559c679-c60d-4a71-92b9-1fd4e7fd2f92",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "c802a91a-7b34-4416-be89-4197227ded2b"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const programEncounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    

    function calculateHypertensionGrade(systolic, diastolic) {

        // Define the hypertension grade table as a 2D array
        // Rows represent systolic ranges (<=120, 121-129, 130-139, 140-159, 160-179, >=180)
        // Columns represent diastolic ranges (<=80, 81-84, 85-89, 90-99, 100-109, >=110)
        const gradeTable = [
            [1, 2, 3, 4, 5, 6],  // <=120
            [2, 2, 3, 4, 5, 6],  // 121-129
            [3, 3, 3, 4, 5, 6],  // 130-139
            [4, 4, 4, 4, 5, 6],  // 140-159
            [5, 5, 5, 5, 5, 6],  // 160-179
            [6, 6, 6, 6, 6, 6]   // >=180
        ];

        // Determine systolic row index
        let systolicRow;
        if (systolic <= 120) systolicRow = 0;
        else if (systolic <= 129) systolicRow = 1;
        else if (systolic <= 139) systolicRow = 2;
        else if (systolic <= 159) systolicRow = 3;
        else if (systolic <= 179) systolicRow = 4;
        else systolicRow = 5;  // >=180

        // Determine diastolic column index
        let diastolicCol;
        if (diastolic <= 80) diastolicCol = 0;
        else if (diastolic <= 84) diastolicCol = 1;
        else if (diastolic <= 89) diastolicCol = 2;
        else if (diastolic <= 99) diastolicCol = 3;
        else if (diastolic <= 109) diastolicCol = 4;
        else diastolicCol = 5;  // >=110

        // Get the combined grade from the table (1-6)
        const combinedGrade = gradeTable[systolicRow][diastolicCol];
        
        // Return the single combined grade (1-6)
        return combinedGrade;
    }

    const avgSystolic = programEncounter.getObservationValue("bb031144-de4c-4a82-8145-3646de8316d0");
    const avgDiastolic = programEncounter.getObservationValue("f9228840-67fb-4c5e-8d2d-0c5735ff78d1");
    const sugarLevel = programEncounter.getObservationValue("5666b393-d450-4865-8127-205559a6b1be");
    
        
    const grade = calculateHypertensionGrade(avgSystolic, avgDiastolic);
    const severityMap = {
        1: 'Grade One',
        2: 'Grade Two',
        3: 'Grade Three',
        4: 'Grade Four',
        5: 'Grade Five',
        6: 'Grade Six'
    };
    
    const grades = ['Grade Two','Grade Three','Grade Four','Grade Five','Grade Six'];
    
    const severity = severityMap[grade] || 'Unknown';
    

    const isSevere = grades.includes(severity);
    

    visibility = isSevere || (sugarLevel && sugarLevel > 200);
    

    return formElementGroup.formElements.map((formElement) => {
    

            
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Referral Details",
      "timed": false
    }
  ],
  "decisionRule": "
  "use strict";
({params, imports}) => {
    const encounter = params.entity;
    const decisions = params.decisions;
    const encounterDecisions = [];
    
    function calculateHypertensionGrade(systolic, diastolic) {

    // Define the hypertension grade table as a 2D array
    // Rows represent systolic ranges (<=120, 121-129, 130-139, 140-159, 160-179, >=180)
    // Columns represent diastolic ranges (<=80, 81-84, 85-89, 90-99, 100-109, >=110)
    const gradeTable = [
        [1, 2, 3, 4, 5, 6],  // <=120
        [2, 2, 3, 4, 5, 6],  // 121-129
        [3, 3, 3, 4, 5, 6],  // 130-139
        [4, 4, 4, 4, 5, 6],  // 140-159
        [5, 5, 5, 5, 5, 6],  // 160-179
        [6, 6, 6, 6, 6, 6]   // >=180
    ];

    // Determine systolic row index
    let systolicRow;
    if (systolic <= 120) systolicRow = 0;
    else if (systolic <= 129) systolicRow = 1;
    else if (systolic <= 139) systolicRow = 2;
    else if (systolic <= 159) systolicRow = 3;
    else if (systolic <= 179) systolicRow = 4;
    else systolicRow = 5;  // >=180

    // Determine diastolic column index
    let diastolicCol;
    if (diastolic <= 80) diastolicCol = 0;
    else if (diastolic <= 84) diastolicCol = 1;
    else if (diastolic <= 89) diastolicCol = 2;
    else if (diastolic <= 99) diastolicCol = 3;
    else if (diastolic <= 109) diastolicCol = 4;
    else diastolicCol = 5;  // >=110

    // Get the combined grade from the table (1-6)
    const combinedGrade = gradeTable[systolicRow][diastolicCol];
    
    // Return the single combined grade (1-6)
    return combinedGrade;
}

    //create complicationBuilder using encounter and then push to encounterDecisions array.
        const avgSystolic = encounter.getObservationValue("bb031144-de4c-4a82-8145-3646de8316d0");
        const avgDiastolic = encounter.getObservationValue("f9228840-67fb-4c5e-8d2d-0c5735ff78d1");
        
        const grade = calculateHypertensionGrade(avgSystolic, avgDiastolic);
         const severityMap = {
                1: 'Grade One',
                2: 'Grade Two',
                3: 'Grade Three',
                4: 'Grade Four',
                5: 'Grade Five',
                6: 'Grade Six'
            };
            
            const severity = severityMap[grade] || 'Unknown';
            
            // Add to encounter decisions
            encounterDecisions.push({
                name: "Hypertension Grade",
                value: severity
            });
        decisions.encounterDecisions.push(...encounterDecisions);

      
    return decisions;
},
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": [
    {
      "name": "Hypertension Grade",
      "uuid": "08a08802-97b2-43d3-8757-16a3b4ecf3c8",
      "dataType": "Text",
      "answers": [],
      "active": true,
      "keyValues": []
    }
  ]
}