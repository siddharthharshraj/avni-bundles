{
  "name": "Village inputs (voided~3773)",
  "uuid": "9d5f31e2-15fd-4399-ae9d-30e8df9deba4",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "59ee860f-8419-4f80-90f2-079208f7e231",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Current population of the village",
          "uuid": "754726ff-f455-479d-b1a8-3e95164775a4",
          "keyValues": [],
          "concept": {
            "name": "Current population of the village",
            "uuid": "5e266195-e277-433e-9f76-ff9c0bd51ba2",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 9999,
            "highNormal": 9999,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5e266195-e277-433e-9f76-ff9c0bd51ba2").greaterThan(5000).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 5000..");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 5000.."
                  },
                  "actionType": "validationError"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Current population of the village",
                          "conceptUuid": "5e266195-e277-433e-9f76-ff9c0bd51ba2",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 5000
                        },
                        "operator": "greaterThan"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Source of Population Data",
          "uuid": "3780636a-f467-4ac5-9dc2-570140bd0bc3",
          "keyValues": [],
          "concept": {
            "name": "Source of Population Data",
            "uuid": "374729d5-b5a5-4f0c-bdcd-efb7905c34d8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Census",
                "uuid": "cd8f5bcf-0b9a-46ad-b464-e7d52a211eb0",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "AWW register",
                "uuid": "9bed5293-67ea-4f11-8330-32d4d557f430",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "ASHA",
                "uuid": "b738ce8f-ada1-4de2-abcc-a602513c75f5",
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
          "name": "Is this a revenue village",
          "uuid": "f58159e8-e139-403d-8b1b-ee7fe6af9720",
          "keyValues": [],
          "concept": {
            "name": "Is this a revenue village",
            "uuid": "0f7d5875-7673-4d10-a22d-fd71ff12957a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
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
          "name": "Total number of households in the village",
          "uuid": "1b23bc5d-5c8a-4ade-afec-42cc69c2780a",
          "keyValues": [],
          "concept": {
            "name": "Total number of households in the village",
            "uuid": "e886f881-5f4c-482a-91a0-2804c6b6b224",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 999,
            "highNormal": 999,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("e886f881-5f4c-482a-91a0-2804c6b6b224").greaterThan(3000).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 3000.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 3000."
                  },
                  "actionType": "validationError"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Total number of households in the village",
                          "conceptUuid": "e886f881-5f4c-482a-91a0-2804c6b6b224",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 3000
                        },
                        "operator": "greaterThan"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Is the drainage facility available in the village",
          "uuid": "e1685ac2-3392-4828-a909-5374e6015bfd",
          "keyValues": [],
          "concept": {
            "name": "Is the drainage facility available in the village",
            "uuid": "7a30744a-26cf-475e-9bce-673e7d44577e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
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
          "name": "Village electrification",
          "uuid": "a1b31dfb-8003-465d-87cd-64a86c3cc2d3",
          "keyValues": [],
          "concept": {
            "name": "Village electrification",
            "uuid": "817498a3-1414-45e7-96f4-ec14a6f34e2a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
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
          "name": "Whether village is connected by all-weather road to the health facility : AWC",
          "uuid": "0a2f7c6b-a8de-4b52-a9a4-036fdb42c5bc",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility : AWC",
            "uuid": "203ac932-20d6-4ae1-8db7-a1577c299df3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
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
          "name": "Whether village is connected by all-weather road to the health facility: Sub Center",
          "uuid": "e954c489-0bec-4753-a38a-40cf437b2bb8",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: Sub Center",
            "uuid": "6b4a4c21-af4a-4003-8848-2efa9005123e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
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
          "name": "Whether village is connected by all-weather road to the health facility: PHC",
          "uuid": "4cf71100-3380-4515-b2a9-1550e8ec8191",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: PHC",
            "uuid": "bec579a9-3a3f-42db-8456-00594478fc8f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
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
          "name": "Whether village is connected by all-weather road to the health facility: Maa Gruha",
          "uuid": "66a45b12-f045-4ee3-bc53-f168f2c4b2b8",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: Maa Gruha",
            "uuid": "049ad570-2e0d-43bb-9cdd-49e311c655c9",
            "dataType": "Coded",
            "answers": [
              {
                "name": "NA",
                "uuid": "a1da52a7-f587-4f8f-9349-2d4ee4dae563",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
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
          "name": "Whether village is connected by all-weather road to the health facility: Block CHC",
          "uuid": "912cb5d3-86cc-4038-af4e-fa510e479057",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: Block CHC",
            "uuid": "97cf279c-c91f-47b9-91de-81738f10c1b7",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
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
          "name": "Whether village is connected by all-weather road to the health facility: Creche",
          "uuid": "facd5298-4e54-4396-9316-6238fe2d7b97",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: Creche",
            "uuid": "2e1ce2cb-73f9-4b41-99c5-45e1bf0f67ea",
            "dataType": "Coded",
            "answers": [
              {
                "name": "NA",
                "uuid": "a1da52a7-f587-4f8f-9349-2d4ee4dae563",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
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
          "name": "Whether village is connected by all-weather road to the health facility: NRC",
          "uuid": "a7f95e0a-f30d-4846-a4d5-7148e11aeaf1",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: NRC",
            "uuid": "9c6ad75e-11b9-4afc-9db0-dcbca89c8bed",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
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
          "name": "Whether village is connected by all-weather road to the health facility: District Hospital",
          "uuid": "ec8edcbb-e9f5-441e-8592-5856d2caf1e2",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: District Hospital",
            "uuid": "78a60f3e-0749-4424-9378-32ca8bb0eb2a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Time take to reach from Village (by ambulance/four wheeler) to nearest PHC (in minutes)",
          "uuid": "352661ef-f2a5-491e-a762-85d7c1e56bd2",
          "keyValues": [],
          "concept": {
            "name": "Time take to reach from Village (by ambulance/four wheeler) to nearest PHC (in minutes)",
            "uuid": "a220247c-2d95-47d8-85d9-cec6b1eed5bb",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 999,
            "highNormal": 999,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("a220247c-2d95-47d8-85d9-cec6b1eed5bb").greaterThan(1500).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 1500.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 1500."
                  },
                  "actionType": "validationError"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Time take to reach from Village (by ambulance/four wheeler) to nearest PHC (in minutes)",
                          "conceptUuid": "a220247c-2d95-47d8-85d9-cec6b1eed5bb",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1500
                        },
                        "operator": "greaterThan"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Time taken to reach from Village (by ambulance/four wheeler) to nearest CHC (in minutes)",
          "uuid": "a0a90198-c93c-4178-bc93-de0f476fbde1",
          "keyValues": [],
          "concept": {
            "name": "Time taken to reach from Village (by ambulance/four wheeler) to nearest CHC (in minutes)",
            "uuid": "6677f6ae-c554-4712-b8f0-cb09a5943885",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 999,
            "highNormal": 999,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6677f6ae-c554-4712-b8f0-cb09a5943885").greaterThan(1500).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 1500.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 1500."
                  },
                  "actionType": "validationError"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Time taken to reach from Village (by ambulance/four wheeler) to nearest CHC (in minutes)",
                          "conceptUuid": "6677f6ae-c554-4712-b8f0-cb09a5943885",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1500
                        },
                        "operator": "greaterThan"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Time taken to reach from Village (by ambulance/four wheeler) to nearest Maa Gruha (in minutes)",
          "uuid": "c0b0ec54-c4c9-48fe-b43d-ee59af8dc901",
          "keyValues": [],
          "concept": {
            "name": "Time taken to reach from Village (by ambulance/four wheeler) to nearest Maa Gruha (in minutes)",
            "uuid": "d73cc238-7ad5-4b17-93c2-e209dd0ae982",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 999,
            "highNormal": 999,
            "active": true
          },
          "displayOrder": 17,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d73cc238-7ad5-4b17-93c2-e209dd0ae982").greaterThan(1500).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 1500.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 1500."
                  },
                  "actionType": "validationError"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Time taken to reach from Village (by ambulance/four wheeler) to nearest Maa Gruha (in minutes)",
                          "conceptUuid": "d73cc238-7ad5-4b17-93c2-e209dd0ae982",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1500
                        },
                        "operator": "greaterThan"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Time taken to reach from Village (by ambulance/four wheeler) to NRC (in minutes)",
          "uuid": "d580aefa-a8b0-486b-921d-523bca1805a1",
          "keyValues": [],
          "concept": {
            "name": "Time taken to reach from Village (by ambulance/four wheeler) to NRC (in minutes)",
            "uuid": "16e20348-4e9b-4df7-bde6-02667d23cde2",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 999,
            "highNormal": 999,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("16e20348-4e9b-4df7-bde6-02667d23cde2").greaterThan(1500).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 1500.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 1500."
                  },
                  "actionType": "validationError"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Time taken to reach from Village (by ambulance/four wheeler) to NRC (in minutes)",
                          "conceptUuid": "16e20348-4e9b-4df7-bde6-02667d23cde2",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1500
                        },
                        "operator": "greaterThan"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Time taken to reach from Village (by ambulance/four wheeler) to District Hospital (in minutes)",
          "uuid": "b95245c4-4838-4b0f-9c96-189c7a889d09",
          "keyValues": [],
          "concept": {
            "name": "Time taken to reach from Village (by ambulance/four wheeler) to District Hospital (in minutes)",
            "uuid": "57ee834e-9b21-4208-a404-e489f489bb2e",
            "dataType": "Numeric",
            "answers": [],
            "highNormal": 999,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("57ee834e-9b21-4208-a404-e489f489bb2e").greaterThan(1500).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 1500.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 1500."
                  },
                  "actionType": "validationError"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Time taken to reach from Village (by ambulance/four wheeler) to District Hospital (in minutes)",
                          "conceptUuid": "57ee834e-9b21-4208-a404-e489f489bb2e",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1500
                        },
                        "operator": "greaterThan"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "How far is FRU from the village (by ambulance/four wheeler) (in minutes)",
          "uuid": "f37a43b2-9e09-4dba-8eea-8d5bc0820c3e",
          "keyValues": [],
          "concept": {
            "name": "How far is FRU from the village (by ambulance/four wheeler) (in minutes)",
            "uuid": "f015e042-9154-4c7f-b793-b6b05c10a472",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 999,
            "highNormal": 999,
            "active": true,
            "keyValues": []
          },
          "displayOrder": 20,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("f015e042-9154-4c7f-b793-b6b05c10a472").greaterThan(1500).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 1500.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 1500."
                  },
                  "actionType": "validationError"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "How far is FRU from the village (by ambulance/four wheeler) (in minutes)",
                          "conceptUuid": "f015e042-9154-4c7f-b793-b6b05c10a472",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1500
                        },
                        "operator": "greaterThan"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Is the village cut from main land during rainy season",
          "uuid": "ace7074e-6202-4345-ba82-010c401dfc52",
          "keyValues": [],
          "concept": {
            "name": "Is the village cut from main land during rainy season",
            "uuid": "869e3ef2-25be-4d82-9287-9cd94985f6d3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 21,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Does the village have a VHND point?",
          "uuid": "b0636150-382d-4c31-a12b-e4d4721f3b70",
          "keyValues": [],
          "concept": {
            "name": "Does the village have a VHND point",
            "uuid": "ea5bdf14-381a-4ad9-9ddb-2dcf7e85580b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
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
          "mandatory": true
        },
        {
          "name": "Does AWW live in the village?",
          "uuid": "a1c2d90e-3187-4bf4-bc57-2a2ff3a92d97",
          "keyValues": [],
          "concept": {
            "name": "Does AWW live in the village",
            "uuid": "e3c7bf20-47ec-453e-b7a5-0487a90552fa",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
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
          "name": "Does your ASHA live in the village?",
          "uuid": "f1840bb0-fb0f-49c7-9336-b0347bc66d2f",
          "keyValues": [],
          "concept": {
            "name": "Does your ASHA live in the village",
            "uuid": "9f740927-bfd9-47ea-8380-d15a5b7fff57",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
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
          "name": "Is Ambulance (Janani express – 102) coming to the village for transporting pregnant women to Maa gruha / CHC ?",
          "uuid": "742e84d9-a182-40ca-810e-9b5e98bfcf13",
          "keyValues": [],
          "concept": {
            "name": "Is Ambulance (Janani express – 102) coming to the village for transporting pregnant women to Maa gruha / CHC",
            "uuid": "9d48ae20-26f1-4b2e-b338-8a605f690214",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 25,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is the village having “iron sucrose point”",
          "uuid": "84514093-9302-4926-b1e7-498d7abc4fcd",
          "keyValues": [],
          "concept": {
            "name": "Is the village having “iron sucrose point”",
            "uuid": "908078ef-cf42-4817-b043-27212169a1dc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 26,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is the village having community based nutri garden ?",
          "uuid": "ec91803f-3a4a-432e-8d3a-9446f8da6e73",
          "keyValues": [],
          "concept": {
            "name": "Is the village having community based nutri garden",
            "uuid": "d9c46794-5051-44fc-b6ee-11f4646a7617",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 27,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is the village having PVTG / Tribal population ?",
          "uuid": "c963dbce-f0e7-49b4-a7f5-effa18f4fd57",
          "keyValues": [],
          "concept": {
            "name": "Is the village having PVTG / Tribal population",
            "uuid": "54e6bf01-37c6-4434-9924-8319f3a2817a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 28,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is the village hard to reach ?",
          "uuid": "11929a5b-ec4e-404d-8bfa-af874a0f93a2",
          "keyValues": [],
          "concept": {
            "name": "Is the village hard to reach",
            "uuid": "4e2ba1be-ec59-472a-9008-0ed2261b0e81",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 29,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": [],
  "voided": true
}