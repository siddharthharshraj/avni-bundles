{
  "name": "Activity Form (voided~3734)",
  "uuid": "b7b96ac1-8dbc-4fa8-a5a5-bc07ba000ab8",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "208d86c0-4aa7-4f38-aa0a-648c348a6bf2",
      "name": "Address",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Districts",
          "uuid": "99ae2120-1c1e-4a74-ad87-69937883621e",
          "keyValues": [],
          "concept": {
            "name": "Districts (voided~207396)",
            "uuid": "45008c2c-e3cf-45b7-96fc-0350b2927d42",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Value 1",
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "unique": true,
                "active": true
              },
              {
                "name": "Value 3",
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Value 2",
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Blocks",
          "uuid": "ae238b65-0dc7-4833-a74c-526b9daa2a7a",
          "keyValues": [],
          "concept": {
            "name": "Blocks (voided~220547)",
            "uuid": "706ec20c-611e-4acd-a046-d6a45e161b19",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Value 2",
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Value 3",
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Value 1",
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Village",
          "uuid": "d24fda26-7b85-4227-9a2b-8cc2bb2a95da",
          "keyValues": [],
          "concept": {
            "name": "Villages (voided~220507)",
            "uuid": "17d911ad-18a5-4903-b43e-32d4674e86f0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Value 2",
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Value 3",
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Value 1",
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "State",
          "uuid": "e2c96546-de28-4c25-8bd3-358353ef0199",
          "keyValues": [],
          "concept": {
            "name": "State",
            "uuid": "fdcb1ae2-505d-4784-993f-1de9d5e2ba60",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "3410e7a2-cefe-4fc7-94b4-6631656c548c"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ]
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Village",
          "uuid": "7cbb726c-b488-4bf5-8481-1dc5599142ba",
          "keyValues": [],
          "concept": {
            "name": "Village (voided~207375)",
            "uuid": "1f22b2fd-7279-4b6d-a92d-9a7415a8b14b",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Village",
          "uuid": "925fcefe-0e20-49dc-ae9c-a9446b8c431d",
          "keyValues": [],
          "concept": {
            "name": "Location",
            "uuid": "164971fe-2166-4b06-b215-926fba6362ef",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "47a9e070-090d-46f8-8f06-834c193b8bec"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ]
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
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
          "name": "Number of participants (Female)",
          "uuid": "c67a2e51-b00b-496f-8c3e-0aa48c001506",
          "keyValues": [],
          "concept": {
            "name": "Number of Participants (Female)",
            "uuid": "2966afcc-2c07-44cf-8711-3fc23f52a6b5",
            "dataType": "Numeric",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
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
          "name": "Number of participants",
          "uuid": "6bca3d44-66e9-4ff6-9c4d-3cb4eb6f30f1",
          "keyValues": [],
          "concept": {
            "name": "Number of participants (voided~220326)",
            "uuid": "31ea4861-8939-42c2-a7a1-bcd2313946c6",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "lowNormal": 1,
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
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
        },
        {
          "name": "Activity start date",
          "uuid": "b8b77965-4769-406a-9b8b-854e7ad64317",
          "keyValues": [],
          "concept": {
            "name": "Activity Start Date",
            "uuid": "8c938361-485e-4b5a-9643-51b741905fd8",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  let visitDate = imports.moment(encounter.encounterDateTime).format('YYYYMMDD');  
  let activityStartDate = encounter.getObservationReadableValue('Activity Start Date');
  const activityStartDateStr = (activityStartDate && imports.moment(activityStartDate).format('YYYYMMDD')) || '0';
  
//  if(activityStartDate && visitDate > activityStartDateStr) { 
// statusBuilder.validationError("Activity start date cannot be after visit date");
// }
 // Changes start
 
 if( activityStartDate && imports.moment(encounter.individual.registrationDate).startOf('day') > imports.moment(activityStartDate).startOf('day')) {
   statusBuilder.validationError("Activity start date cannot be earlier than the Demand registration date");
 }
 
 // Changes End
 
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Activity end date",
          "uuid": "bdc0559a-8cd3-48ee-b4d0-ce11f2b66151",
          "keyValues": [],
          "concept": {
            "name": "Activity End Date",
            "uuid": "2e85dffe-c09e-4adb-a1b2-41f59aa68d49",
            "dataType": "Date",
            "answers": [],
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
  let activityStartDateObservation = encounter.findObservation('8c938361-485e-4b5a-9643-51b741905fd8');
  let activityStartDateValue = _.isEmpty(activityStartDateObservation) ? activityStartDateObservation : activityStartDateObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("2e85dffe-c09e-4adb-a1b2-41f59aa68d49").lessThan(activityStartDateValue, 'day').matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("8c938361-485e-4b5a-9643-51b741905fd8").defined.matches();
  
  if(condition11 ){
    validationErrors.push("Activity End Date cannot be before Activity Start Date");  
}
    visibility = condition12 ;

  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Number of days of participation",
          "uuid": "d5366302-b570-4d18-98fc-cf04b74aa1e1",
          "keyValues": [],
          "concept": {
            "name": "Number of Days of Participation",
            "uuid": "9a182a63-61df-441c-af58-953253c8d0f2",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  
  const startDate = encounter.getObservationReadableValue('Activity Start Date');
  const endDate = encounter.getObservationReadableValue('Activity End Date');
  const value = imports.moment(endDate).diff(imports.moment(startDate) ,'days') + 1;
  
  const duration = encounter.getObservationReadableValue('Number of Days of Participation');
  
  if(duration != undefined){
    if(duration > value){
    statusBuilder.validationError("Duration of activity cannot be more than the start and end dates entered!");
    }
  }
    
    if(duration != undefined){
    if(duration == 0){
    statusBuilder.validationError("Number of days participated cannot be zero");
    }
  }
    
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "S2S related activity",
          "uuid": "4d157151-8c28-4869-8c4c-6f88eb23c5e9",
          "keyValues": [],
          "concept": {
            "name": "Activity Conducted With Students",
            "uuid": "2d3389d4-07ae-42cd-8c25-e9a0203e2c9a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "School Improvement Activities (Plantation/Kitchen Garden/Cleaning of School/Garden)",
                "uuid": "5a74c9f8-e5eb-4113-9c61-720d7eb4de7e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Any other",
                "uuid": "f903963d-1c98-4f85-827c-c15a0930b845",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Academic (Counting/Writing/Essay/Alphabet)",
                "uuid": "267c7456-ba18-44b3-93b3-a371460f9a30",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Knowledge Activities (Health/Hygiene/Environment/Conservation)",
                "uuid": "ad8143ae-40f1-4b6b-ba97-c95cc091e9d8",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Art & Craft (Painting/Drawing/Rangoli/ Craft Activity/Poster)",
                "uuid": "e1c97f61-ec50-4594-9254-606c2f15d2b9",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Cultural (Dance/Drama/Singing/Poem/Skit/Story Telling/Rhymes)",
                "uuid": "bb9ba1dd-82c9-45ac-86c4-d524ab514f49",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Sports (Games/Kho Kho/Yoga/Any other)",
                "uuid": "6f1feaba-3286-414d-a40b-d7eb259b7183",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 8,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "or"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Specify other S2S related activity",
          "uuid": "7f84be8e-6b8d-4699-8179-7c5ba8382108",
          "keyValues": [],
          "concept": {
            "name": "Specify other S2S related activity",
            "uuid": "885b713c-7c3b-469e-bcab-5b30c742c2c4",
            "dataType": "Text",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("2d3389d4-07ae-42cd-8c25-e9a0203e2c9a").containsAnswerConceptName("f903963d-1c98-4f85-827c-c15a0930b845").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "S2S related activity",
                          "conceptUuid": "2d3389d4-07ae-42cd-8c25-e9a0203e2c9a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other"
                          ],
                          "answerConceptUuids": [
                            "f903963d-1c98-4f85-827c-c15a0930b845"
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
        },
        {
          "name": "Name of Organization/School",
          "uuid": "2befa4dd-8ec9-4f21-9fdc-d5c29fd33669",
          "keyValues": [],
          "concept": {
            "name": "School / Anganwadi / Learning Center Name",
            "uuid": "2e39d19d-fc03-400e-9f5e-1f815483ea47",
            "dataType": "Text",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "or"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Activity type",
          "uuid": "6b200803-bc74-4d58-84a6-1be3fcd87fc2",
          "keyValues": [],
          "concept": {
            "name": "Activity Type",
            "uuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Agriculture Plantation",
                "uuid": "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Miscellaneous",
                "uuid": "278d95a9-5a62-4ff2-b515-4a6332e09aca",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "Others",
                    "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                    "dataType": "NA",
                    "answers": [],
                    "order": 2,
                    "active": true
                  },
                  {
                    "name": "Toilet/Bathroom/private spaces",
                    "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                    "dataType": "NA",
                    "answers": [],
                    "order": 3,
                    "active": true
                  },
                  {
                    "name": "Truck Unloading",
                    "uuid": "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "Electric Pole",
                    "uuid": "38dc542e-277d-4790-8982-0d2f3253f0fc",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  }
                ],
                "order": 4,
                "active": true
              },
              {
                "name": "Agriculture_Plantation",
                "uuid": "dc829fd5-0c19-4223-93a0-c29b8919dcc9",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "There was soil erosion due to heavy water flow hence need for plantation",
                    "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                    "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                    "dataType": "NA",
                    "answers": [],
                    "order": 4,
                    "active": true
                  },
                  {
                    "name": "To improve grazing facilities for livestock",
                    "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                    "dataType": "NA",
                    "answers": [],
                    "order": 9,
                    "active": true
                  },
                  {
                    "name": "To improve water retention capacity",
                    "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                    "dataType": "NA",
                    "answers": [],
                    "order": 7,
                    "active": true
                  },
                  {
                    "name": "To construct partitions to demarcate areas",
                    "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594",
                    "dataType": "NA",
                    "answers": [],
                    "order": 11,
                    "active": true
                  },
                  {
                    "name": "Any other not given above",
                    "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                    "dataType": "NA",
                    "answers": [],
                    "order": 12,
                    "active": true
                  },
                  {
                    "name": "To increase incomes in the village from sales of vegetables",
                    "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                    "dataType": "NA",
                    "answers": [],
                    "order": 6,
                    "active": true
                  },
                  {
                    "name": "To decrease the impact of deforestation",
                    "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec",
                    "dataType": "NA",
                    "answers": [],
                    "order": 10,
                    "active": true
                  },
                  {
                    "name": "Water needed to be conserved, hence planted trees",
                    "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  },
                  {
                    "name": "To improve agricultural productivity",
                    "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190",
                    "dataType": "NA",
                    "answers": [],
                    "order": 8,
                    "active": true
                  },
                  {
                    "name": "The crops needed organic manure hence composting",
                    "uuid": "75813429-7612-49f9-b159-e746c38be9da",
                    "dataType": "NA",
                    "answers": [],
                    "order": 2,
                    "active": true
                  },
                  {
                    "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                    "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                    "dataType": "NA",
                    "answers": [],
                    "order": 5,
                    "active": true
                  },
                  {
                    "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                    "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                    "dataType": "NA",
                    "answers": [],
                    "order": 3,
                    "active": true
                  }
                ],
                "order": 3,
                "active": true
              },
              {
                "name": "Miscellaneous Activity",
                "uuid": "f73d13a5-f6cf-4138-b4c6-849efbbe632f",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Access_Infrastructure",
                "uuid": "72a547e0-0058-4840-8f9e-d22479e4a48f",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "There was limited/or no connectivity to nearly medical facilities",
                    "uuid": "865be3b0-6b05-475b-b624-43aca7568538",
                    "dataType": "NA",
                    "answers": [],
                    "order": 3,
                    "active": true
                  },
                  {
                    "name": "There was limited/or no connectivity to nearby market facilities",
                    "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2",
                    "dataType": "NA",
                    "answers": [],
                    "order": 5,
                    "active": true
                  },
                  {
                    "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                    "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d",
                    "dataType": "NA",
                    "answers": [],
                    "order": 4,
                    "active": true
                  },
                  {
                    "name": "The walls/boundaries of the school were damaged affecting studies",
                    "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                    "dataType": "NA",
                    "answers": [],
                    "order": 8,
                    "active": true
                  },
                  {
                    "name": "To protect school facilities and ensure safety for children",
                    "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                    "dataType": "NA",
                    "answers": [],
                    "order": 10,
                    "active": true
                  },
                  {
                    "name": "There was limited/ or no connectivity to the nearby villages",
                    "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                    "dataType": "NA",
                    "answers": [],
                    "order": 2,
                    "active": true
                  },
                  {
                    "name": "There was limited/or no connectivity to water facilities/sources",
                    "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                    "dataType": "NA",
                    "answers": [],
                    "order": 6,
                    "active": true
                  },
                  {
                    "name": "To repair/rebuilt damaged community infrastructure",
                    "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                    "dataType": "NA",
                    "answers": [],
                    "order": 12,
                    "active": true
                  },
                  {
                    "name": "Any other not given above",
                    "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                    "dataType": "NA",
                    "answers": [],
                    "order": 13,
                    "active": true
                  },
                  {
                    "name": "The children did not have a proper place to study",
                    "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                    "dataType": "NA",
                    "answers": [],
                    "order": 7,
                    "active": true
                  },
                  {
                    "name": "In order to increase life and longevity of trees",
                    "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                    "dataType": "NA",
                    "answers": [],
                    "order": 9,
                    "active": true
                  },
                  {
                    "name": "To protect community infrastructure from getting damaged",
                    "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                    "dataType": "NA",
                    "answers": [],
                    "order": 11,
                    "active": true
                  },
                  {
                    "name": "There was no connectivity to the market",
                    "uuid": "834993e6-5643-4229-914d-a58df97cef30",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "There was no meeting place for villagers",
                    "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  }
                ],
                "order": 1,
                "active": true
              },
              {
                "name": "Access Infrastructure",
                "uuid": "452bc10f-09b4-446e-93f4-52d477885be0",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Water Management",
                "uuid": "1b061e73-b94f-499d-b82c-234670e104c5",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Sanitation",
                "uuid": "fe6cd113-e3e3-44b6-abe7-81ba7605787b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Water_Management",
                "uuid": "476a03c0-071a-42df-a04e-ec60752d1283",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "Difficulty to get water for livestock related needs",
                    "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                    "dataType": "NA",
                    "answers": [],
                    "order": 11,
                    "active": true
                  },
                  {
                    "name": "Difficulty in reaching to water source",
                    "uuid": "835cab14-f41e-43d4-a77f-db59b715317f",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "Shortage of water for irrigation purposes",
                    "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc",
                    "dataType": "NA",
                    "answers": [],
                    "order": 12,
                    "active": true
                  },
                  {
                    "name": "Water was dirty for use for livestock related needs",
                    "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                    "dataType": "NA",
                    "answers": [],
                    "order": 3,
                    "active": true
                  },
                  {
                    "name": "Water was getting wasted",
                    "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                    "dataType": "NA",
                    "answers": [],
                    "order": 5,
                    "active": true
                  },
                  {
                    "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                    "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5",
                    "dataType": "NA",
                    "answers": [],
                    "order": 10,
                    "active": true
                  },
                  {
                    "name": "Any other not given above",
                    "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                    "dataType": "NA",
                    "answers": [],
                    "order": 14,
                    "active": true
                  },
                  {
                    "name": "Shortage of water in the village",
                    "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  },
                  {
                    "name": "Water needed to be conserved",
                    "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623",
                    "dataType": "NA",
                    "answers": [],
                    "order": 6,
                    "active": true
                  },
                  {
                    "name": "Water was too dirty to drink",
                    "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                    "dataType": "NA",
                    "answers": [],
                    "order": 2,
                    "active": true
                  },
                  {
                    "name": "Water was dirty to use for household related needs",
                    "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                    "dataType": "NA",
                    "answers": [],
                    "order": 4,
                    "active": true
                  },
                  {
                    "name": "Villagers including children were getting sick",
                    "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                    "dataType": "NA",
                    "answers": [],
                    "order": 9,
                    "active": true
                  },
                  {
                    "name": "Water used to collect and the place would get flooded/swamped",
                    "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03",
                    "dataType": "NA",
                    "answers": [],
                    "order": 13,
                    "active": true
                  },
                  {
                    "name": "Villagers especially women and children were spending too much time in collecting waters",
                    "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                    "dataType": "NA",
                    "answers": [],
                    "order": 8,
                    "active": true
                  },
                  {
                    "name": "There was a need for water tables to increase",
                    "uuid": "b748ae00-0844-473d-b427-6031936809fa",
                    "dataType": "NA",
                    "answers": [],
                    "order": 7,
                    "active": true
                  }
                ],
                "order": 8,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
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
        },
        {
          "name": "Activity Sub-type for Access infrastructure",
          "uuid": "a43a066c-fd40-4c11-bb6e-cea8553e7d49",
          "keyValues": [],
          "concept": {
            "name": "Activity Sub-type (voided~207436)",
            "uuid": "6bc60f7a-fe77-435a-b9ba-93de5e131123",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Community Hall/Center/House",
                "uuid": "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Benches",
                "uuid": "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Road",
                "uuid": "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Bandstand",
                "uuid": "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Ground levelling",
                "uuid": "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Protection wall for roads",
                "uuid": "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Fencing & boundary wall",
                "uuid": "f431cbac-b99d-48fb-8694-0299c352eb9a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Bridge/Pulia",
                "uuid": "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Activity Sub-type for Water management",
          "uuid": "8f2d8338-3246-4e04-8750-22789bb2e93a",
          "keyValues": [],
          "concept": {
            "name": "Activity Sub-type for Water management",
            "uuid": "b116f78d-1c06-4014-a511-72378136204f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Pond",
                "uuid": "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Dugwell/Chua/Jalkhund",
                "uuid": "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Waterfall/Jharna/Spring Water/Dhara",
                "uuid": "a5f019c6-17a0-4536-8222-67935d482774",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Soak pit",
                "uuid": "be655900-d882-4d99-ab29-faf560b8e832",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                "uuid": "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Canal",
                "uuid": "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Water-Tank/Pipeline",
                "uuid": "82246b7a-c13f-435d-9e17-d8d288ff3891",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Backwater",
                "uuid": "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Check dam",
                "uuid": "824d11d4-525d-4610-9afe-f87c030a54eb",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "BackwaterDugwell/Chua/Jalkund (voided~207440)",
                "uuid": "64fe012a-3230-4115-8092-f16bf6286200",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true,
                "voided": true
              },
              {
                "name": "Well",
                "uuid": "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "River",
                "uuid": "00ee1a95-2236-4c43-83d7-36c911172069",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Activity Sub-type for Sanitation",
          "uuid": "39fa204d-03d7-464a-bd69-5b71b009e9ae",
          "keyValues": [],
          "concept": {
            "name": "Activity Sub-type for Sanitation (voided~207454)",
            "uuid": "3ab64b6c-8ad3-4cbe-9dc8-fa3a8246d6e6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Dustbin",
                "uuid": "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Road & road-side bush cutting",
                "uuid": "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Community spaces- Meeting point/ Religious places/ School/ Park & AWC etc",
                "uuid": "58653f74-082c-47a7-9a25-548990a4bd4c",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Drainage",
                "uuid": "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Water body premises",
                "uuid": "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Toilet/Bathroom/private spaces",
                "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Sanitaiton"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Activity Sub-type for Agricultural plantation",
          "uuid": "e1831560-fb03-417a-8c7d-a5066d1349fe",
          "keyValues": [],
          "concept": {
            "name": "Activity Sub-type for Agricultural plantation",
            "uuid": "bdb69c4d-d46a-4387-9b08-aba1cdaf66cc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Land Bundling (voided~207458)",
                "uuid": "d7356902-e705-414d-99e4-f08b10fe7f73",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true,
                "voided": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Compost Pit",
                "uuid": "798e61fa-8d8d-43b4-8738-251be7bdc5b4",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Plantation",
                "uuid": "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Community farming",
                "uuid": "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Kitchen Garden",
                "uuid": "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Activity Sub-type for Miscellaneous",
          "uuid": "1a13b496-6d77-4ebc-8a8c-ca72411ac54d",
          "keyValues": [],
          "concept": {
            "name": "Miscellaneous",
            "uuid": "278d95a9-5a62-4ff2-b515-4a6332e09aca",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Toilet/Bathroom/private spaces",
                "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Truck Unloading",
                "uuid": "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Electric Pole",
                "uuid": "38dc542e-277d-4790-8982-0d2f3253f0fc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Miscelleneous"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Activity sub type",
          "uuid": "068992fb-3988-4063-88d9-46f56cca44df",
          "keyValues": [],
          "concept": {
            "name": "Activity sub type",
            "uuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Kitchen Garden",
                "uuid": "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Plantation",
                "uuid": "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "active": true
              },
              {
                "name": "Well",
                "uuid": "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                "dataType": "NA",
                "answers": [],
                "order": 37,
                "active": true
              },
              {
                "name": "Community Hall/Center/House",
                "uuid": "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "River",
                "uuid": "00ee1a95-2236-4c43-83d7-36c911172069",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "active": true
              },
              {
                "name": "Soak pit",
                "uuid": "be655900-d882-4d99-ab29-faf560b8e832",
                "dataType": "NA",
                "answers": [],
                "order": 29,
                "active": true
              },
              {
                "name": "CCT",
                "uuid": "f246f297-f123-4b7a-b06f-d8c22a10bac2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Water storage pit",
                "uuid": "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                "dataType": "NA",
                "answers": [],
                "order": 34,
                "active": true
              },
              {
                "name": "Dustbin",
                "uuid": "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Water body premises",
                "uuid": "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                "dataType": "NA",
                "answers": [],
                "order": 33,
                "active": true
              },
              {
                "name": "Community spaces- Meeting point/ Religious places/ School/ Park & AWC etc",
                "uuid": "58653f74-082c-47a7-9a25-548990a4bd4c",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Fencing & boundary wall",
                "uuid": "f431cbac-b99d-48fb-8694-0299c352eb9a",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Embankment / ghat",
                "uuid": "ec5c4214-ddd6-4146-8282-195f4d711c59",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "active": true
              },
              {
                "name": "Percolation pit",
                "uuid": "1162b0e5-7ccf-4eac-92b4-6e71898fa268",
                "dataType": "NA",
                "answers": [],
                "order": 38,
                "active": true
              },
              {
                "name": "Nursery Making",
                "uuid": "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                "dataType": "NA",
                "answers": [],
                "order": 40,
                "active": true
              },
              {
                "name": "Bandstand",
                "uuid": "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Truck Unloading",
                "uuid": "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                "dataType": "NA",
                "answers": [],
                "order": 31,
                "active": true
              },
              {
                "name": "Bridge/Pulia",
                "uuid": "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Road & road-side bush cutting",
                "uuid": "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "active": true
              },
              {
                "name": "Benches",
                "uuid": "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Waterfall/Jharna/Spring Water/Dhara",
                "uuid": "a5f019c6-17a0-4536-8222-67935d482774",
                "dataType": "NA",
                "answers": [],
                "order": 36,
                "active": true
              },
              {
                "name": "Dugwell/Chua/Jalkhund",
                "uuid": "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Land Bunding",
                "uuid": "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "Check dam",
                "uuid": "824d11d4-525d-4610-9afe-f87c030a54eb",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Road",
                "uuid": "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                "dataType": "NA",
                "answers": [],
                "order": 26,
                "active": true
              },
              {
                "name": "Land Bundling (voided~207458)",
                "uuid": "d7356902-e705-414d-99e4-f08b10fe7f73",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true,
                "voided": true
              },
              {
                "name": "Ground levelling",
                "uuid": "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Canal",
                "uuid": "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Toilet/Bathroom/private spaces",
                "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                "dataType": "NA",
                "answers": [],
                "order": 30,
                "active": true
              },
              {
                "name": "Compost pit",
                "uuid": "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Protection wall for roads",
                "uuid": "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                "dataType": "NA",
                "answers": [],
                "order": 32,
                "active": true
              },
              {
                "name": "Water-Tank/Pipeline",
                "uuid": "82246b7a-c13f-435d-9e17-d8d288ff3891",
                "dataType": "NA",
                "answers": [],
                "order": 35,
                "active": true
              },
              {
                "name": "Flower garden",
                "uuid": "2d229755-ee38-4f7f-a7f8-404125b3c393",
                "dataType": "NA",
                "answers": [],
                "order": 39,
                "active": true
              },
              {
                "name": "Seed Balls",
                "uuid": "32699e9f-c289-4581-9781-24b2bdbb0841",
                "dataType": "NA",
                "answers": [],
                "order": 28,
                "active": true
              },
              {
                "name": "Drainage",
                "uuid": "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Electric Pole",
                "uuid": "38dc542e-277d-4790-8982-0d2f3253f0fc",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Community farming",
                "uuid": "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Pond",
                "uuid": "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "active": true
              },
              {
                "name": "Backwater",
                "uuid": "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Whitewash/ painting",
                "uuid": "654e67f1-9d45-444e-aab5-20a980733ca4",
                "dataType": "NA",
                "answers": [],
                "order": 41,
                "active": true
              },
              {
                "name": "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                "uuid": "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","1b061e73-b94f-499d-b82c-234670e104c5","fe6cd113-e3e3-44b6-abe7-81ba7605787b","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  if(condition11 ) {
    _.forEach(["a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","b462ddf4-977b-4bc5-8157-7f0132c5245d","9ada0111-bbea-4fde-8097-32ccc0de6c78","ec5c4214-ddd6-4146-8282-195f4d711c59","32699e9f-c289-4581-9781-24b2bdbb0841","8748bdc4-de26-4411-a9b4-269abf7fc6f5"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","b462ddf4-977b-4bc5-8157-7f0132c5245d","9ada0111-bbea-4fde-8097-32ccc0de6c78","32699e9f-c289-4581-9781-24b2bdbb0841"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","b462ddf4-977b-4bc5-8157-7f0132c5245d","9ada0111-bbea-4fde-8097-32ccc0de6c78","ec5c4214-ddd6-4146-8282-195f4d711c59","32699e9f-c289-4581-9781-24b2bdbb0841","8748bdc4-de26-4411-a9b4-269abf7fc6f5"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","ec5c4214-ddd6-4146-8282-195f4d711c59","8748bdc4-de26-4411-a9b4-269abf7fc6f5"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","ec39b654-3009-46ad-a2d4-2fda9f40d856","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","b462ddf4-977b-4bc5-8157-7f0132c5245d","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","9ada0111-bbea-4fde-8097-32ccc0de6c78","3f7366d8-350c-4290-aa9e-e265eea76ae5","ec5c4214-ddd6-4146-8282-195f4d711c59","8748bdc4-de26-4411-a9b4-269abf7fc6f5","32699e9f-c289-4581-9781-24b2bdbb0841"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = condition16 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Canal",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Backwater",
                      "Dugwell/Chua/Jalkund",
                      "Pond",
                      "River",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Water Tank/Pipeline",
                      "Well",
                      "Soak Pit",
                      "Dustbin",
                      "Toilet/Bathroom/private spaces",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Drainage",
                      "Road & road side bush cutting",
                      "Water-body premises",
                      "Community Farming",
                      "Kitchen Garden",
                      "Plantation",
                      "Electric Pole",
                      "Truck Unloading",
                      "Compost pit",
                      "Land bunding",
                      "Pond ghat / embankment",
                      "Seed ball",
                      "Water storage pit"
                    ],
                    "answerUuidsToSkip": [
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "or"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Community Hall/Centre/House",
                      "Fencing & Boundary Wall",
                      "Road",
                      "Ground Levelling",
                      "Wall for Roads",
                      "Dustbin",
                      "Toilet/Bathroom/private spaces",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Drainage",
                      "Road & road side bush cutting",
                      "Water-body premises",
                      "Community Farming",
                      "Kitchen Garden",
                      "Plantation",
                      "Electric Pole",
                      "Truck Unloading",
                      "Compost pit",
                      "Land bunding",
                      "Seed ball"
                    ],
                    "answerUuidsToSkip": [
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "32699e9f-c289-4581-9781-24b2bdbb0841"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Community Hall/Centre/House",
                      "Fencing & Boundary Wall",
                      "Road",
                      "Ground Levelling",
                      "Wall for Roads",
                      "Canal",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Backwater",
                      "Dugwell/Chua/Jalkund",
                      "Pond",
                      "River",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Water Tank/Pipeline",
                      "Well",
                      "Soak Pit",
                      "Community Farming",
                      "Kitchen Garden",
                      "Plantation",
                      "Electric Pole",
                      "Truck Unloading",
                      "Compost pit",
                      "Land bunding",
                      "Pond ghat / embankment",
                      "Seed ball",
                      "Water storage pit"
                    ],
                    "answerUuidsToSkip": [
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Sanitation"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Community Hall/Centre/House",
                      "Fencing & Boundary Wall",
                      "Road",
                      "Ground Levelling",
                      "Wall for Roads",
                      "Canal",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Backwater",
                      "Dugwell/Chua/Jalkund",
                      "Pond",
                      "River",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Water Tank/Pipeline",
                      "Well",
                      "Soak Pit",
                      "Dustbin",
                      "Toilet/Bathroom/private spaces",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Drainage",
                      "Road & road side bush cutting",
                      "Water-body premises",
                      "Electric Pole",
                      "Truck Unloading",
                      "Pond ghat / embankment",
                      "Water storage pit"
                    ],
                    "answerUuidsToSkip": [
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Community Hall/Centre/House",
                      "Fencing & Boundary Wall",
                      "Road",
                      "Ground Levelling",
                      "Wall for Roads",
                      "Canal",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Backwater",
                      "Dugwell/Chua/Jalkund",
                      "Pond",
                      "River",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Water Tank/Pipeline",
                      "Well",
                      "Soak Pit",
                      "Dustbin",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Drainage",
                      "Road & road side bush cutting",
                      "Water-body premises",
                      "Compost pit",
                      "Community Farming",
                      "Kitchen Garden",
                      "Plantation",
                      "Land bunding",
                      "Toilet/Bathroom/private spaces",
                      "Pond ghat / embankment",
                      "Water storage pit",
                      "Seed ball"
                    ],
                    "answerUuidsToSkip": [
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "32699e9f-c289-4581-9781-24b2bdbb0841"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Water Management",
                            "Sanitaiton",
                            "Agriculture Plantation",
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
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
          "name": "Specify Other Sub Type",
          "uuid": "cb797444-c7e5-4b01-8985-3a0e4258e75a",
          "keyValues": [],
          "concept": {
            "name": "Specify Other Sub Type",
            "uuid": "e08bdfcc-fefc-4425-9abb-22578697e5a0",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("016a6d0a-60f9-405f-8dac-08fcf6b39823").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823"
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
          "name": "Objective of work",
          "uuid": "b02bfa24-b286-491e-b3c9-e09d0f5c86c4",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Others"
              ]
            }
          ],
          "concept": {
            "name": "Objective of Work",
            "uuid": "0ea2a76f-933e-448e-896a-46a4238a3488",
            "dataType": "Coded",
            "answers": [
              {
                "name": "There was stench all over the place",
                "uuid": "67977dec-8209-4483-8b77-030797cbd53e",
                "dataType": "NA",
                "answers": [],
                "order": 28,
                "active": true
              },
              {
                "name": "To construct partitions to demarcate areas",
                "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594",
                "dataType": "NA",
                "answers": [],
                "order": 31,
                "active": true
              },
              {
                "name": "Water needed to be conserved, hence planted trees",
                "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                "dataType": "NA",
                "answers": [],
                "order": 45,
                "active": true
              },
              {
                "name": "The place was very dirty",
                "uuid": "f667c9e4-4300-4d4d-a726-009046566fa1",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Villagers especially women and children were spending too much time in collecting waters",
                "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                "dataType": "NA",
                "answers": [],
                "order": 41,
                "active": true
              },
              {
                "name": "To protect community infrastructure from getting damaged",
                "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                "dataType": "NA",
                "answers": [],
                "order": 38,
                "active": true
              },
              {
                "name": "The drains were clogged",
                "uuid": "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "The women did not have bathrooms to change or bathe in privacy",
                "uuid": "b145f169-e306-4d4c-a820-88b51a63b2a6",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "There was fear of diseases like cholera and typhoid happening",
                "uuid": "7759083b-3bdd-4fac-b198-04ea94955631",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Shortage of water for irrigation purposes",
                "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "The road could not be used for commuting",
                "uuid": "3035de80-1603-4ea9-947b-82d093e2bba2",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                "dataType": "NA",
                "answers": [],
                "order": 30,
                "active": true
              },
              {
                "name": "To improve water retention capacity",
                "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                "dataType": "NA",
                "answers": [],
                "order": 36,
                "active": true
              },
              {
                "name": "There is fear of being attacked by animals in heavily bushed roads",
                "uuid": "2db06055-67eb-4966-8591-c414aa00c774",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 52,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearby market facilities",
                "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "To protect school facilities and ensure safety for children",
                "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                "dataType": "NA",
                "answers": [],
                "order": 39,
                "active": true
              },
              {
                "name": "There were mosquitoes breeding",
                "uuid": "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                "dataType": "NA",
                "answers": [],
                "order": 29,
                "active": true
              },
              {
                "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                "dataType": "NA",
                "answers": [],
                "order": 26,
                "active": true
              },
              {
                "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                "dataType": "NA",
                "answers": [],
                "order": 33,
                "active": true
              },
              {
                "name": "The children did not have a proper place to study",
                "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Water was too dirty to drink",
                "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                "dataType": "NA",
                "answers": [],
                "order": 50,
                "active": true
              },
              {
                "name": "Difficulty to get water for livestock related needs",
                "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Villagers were getting sick repeatedly",
                "uuid": "18803ff7-484e-4187-a2ae-64e4f47890aa",
                "dataType": "NA",
                "answers": [],
                "order": 43,
                "active": true
              },
              {
                "name": "Water needed to be conserved",
                "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623",
                "dataType": "NA",
                "answers": [],
                "order": 44,
                "active": true
              },
              {
                "name": "Water was getting wasted",
                "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                "dataType": "NA",
                "answers": [],
                "order": 49,
                "active": true
              },
              {
                "name": "The garbage used to be dumped everywhere",
                "uuid": "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Villagers including children were getting sick",
                "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                "dataType": "NA",
                "answers": [],
                "order": 42,
                "active": true
              },
              {
                "name": "Water used to collect and the place would get flooded/swamped",
                "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03",
                "dataType": "NA",
                "answers": [],
                "order": 46,
                "active": true
              },
              {
                "name": "There was no connectivity to the market",
                "uuid": "834993e6-5643-4229-914d-a58df97cef30",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "active": true
              },
              {
                "name": "There was a need for water tables to increase",
                "uuid": "b748ae00-0844-473d-b427-6031936809fa",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Water was dirty for use for livestock related needs",
                "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                "dataType": "NA",
                "answers": [],
                "order": 47,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to water facilities/sources",
                "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "active": true
              },
              {
                "name": "Children were unable to play",
                "uuid": "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Difficulty in reaching to water source",
                "uuid": "835cab14-f41e-43d4-a77f-db59b715317f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "There was limited/ or no connectivity to the nearby villages",
                "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearly medical facilities",
                "uuid": "865be3b0-6b05-475b-b624-43aca7568538",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "active": true
              },
              {
                "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "There was no meeting place for villagers",
                "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "active": true
              },
              {
                "name": "There was soil erosion due to heavy water flow hence need for plantation",
                "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "active": true
              },
              {
                "name": "Any other not given above",
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                "dataType": "NA",
                "answers": [],
                "order": 51,
                "active": true
              },
              {
                "name": "To increase incomes in the village from sales of vegetables",
                "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                "dataType": "NA",
                "answers": [],
                "order": 37,
                "active": true
              },
              {
                "name": "There was fear of getting bitten by snakes and worms while commuting",
                "uuid": "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "To repair/rebuilt damaged community infrastructure",
                "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                "dataType": "NA",
                "answers": [],
                "order": 40,
                "active": true
              },
              {
                "name": "The walls/boundaries of the school were damaged affecting studies",
                "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "To improve agricultural productivity",
                "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190",
                "dataType": "NA",
                "answers": [],
                "order": 34,
                "active": true
              },
              {
                "name": "To improve grazing facilities for livestock",
                "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                "dataType": "NA",
                "answers": [],
                "order": 35,
                "active": true
              },
              {
                "name": "To decrease the impact of deforestation",
                "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec",
                "dataType": "NA",
                "answers": [],
                "order": 32,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "In order to increase life and longevity of trees",
                "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Water was dirty to use for household related needs",
                "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                "dataType": "NA",
                "answers": [],
                "order": 48,
                "active": true
              },
              {
                "name": "Shortage of water in the village",
                "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "The crops needed organic manure hence composting",
                "uuid": "75813429-7612-49f9-b159-e746c38be9da",
                "dataType": "NA",
                "answers": [],
                "order": 8,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","fe6cd113-e3e3-44b6-abe7-81ba7605787b","1b061e73-b94f-499d-b82c-234670e104c5","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  visibility = condition11 && condition21 ;
    if(condition12 ) {
    _.forEach(["f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","f674eee6-c577-4807-a5c2-b7bfa6d1c516","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","c1b668ce-5d81-4e25-80f2-10a0fc98d313","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","834993e6-5643-4229-914d-a58df97cef30","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","c3bed0f8-f8fd-4403-ba66-837547d38623","cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","f674eee6-c577-4807-a5c2-b7bfa6d1c516","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","c3bed0f8-f8fd-4403-ba66-837547d38623","448ebcb5-6974-43b7-8d9b-67002770e1b5","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","14c72422-9cfc-49f4-a835-7ab131dd3190","f674eee6-c577-4807-a5c2-b7bfa6d1c516","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition16 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","829f7f00-fcca-46fe-b0b5-ef39f2548141","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","07557c41-b1e1-47fd-8a16-d3dc5363a16e","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","f674eee6-c577-4807-a5c2-b7bfa6d1c516","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","016a6d0a-60f9-405f-8dac-08fcf6b39823","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
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
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Sanitaiton",
                            "Water Management",
                            "Agriculture Plantation",
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b",
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "The place was very dirty",
                      "There were mosquitoes breeding",
                      "The drains were clogged",
                      "The road could not be used for commuting",
                      "The garbage used to be dumped everywhere",
                      "There was stench all over the place",
                      "Children were unable to play",
                      "Villagers were getting sick repeatedly",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "The crops needed organic manure hence composting",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To increase incomes in the village from sales of vegetables",
                      "To improve water retention capacity",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To decrease the impact of deforestation",
                      "To construct partitions to demarcate areas",
                      "There was no meeting place for villagers",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "The children did not have a proper place to study",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "In order to increase life and longevity of trees",
                      "To protect school facilities and ensure safety for children",
                      "To protect community infrastructure from getting damaged",
                      "To repair/rebuilt damaged community infrastructure",
                      "There was no connectivity to the market",
                      "Water needed to be conserved, hence planted trees",
                      "There was limited/or no connectivity to nearly medical facilities"
                    ],
                    "answerUuidsToSkip": [
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "865be3b0-6b05-475b-b624-43aca7568538"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Water was getting wasted",
                      "Water needed to be conserved",
                      "There was a need for water tables to increase",
                      "Villagers including children were getting sick",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Difficulty to get water for livestock related needs",
                      "Shortage of water for irrigation purposes",
                      "Water used to collect and the place would get  flooded/swamped",
                      "The place was very dirty",
                      "There were mosquitoes breeding",
                      "The drains were clogged",
                      "The road could not be used for commuting",
                      "The garbage used to be dumped everywhere",
                      "There was stench all over the place",
                      "Children were unable to play",
                      "Villagers were getting sick repeatedly",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "Water needed to be conserved",
                      "Shortage of water in the village",
                      "Difficulty in reaching to water source",
                      "Water was too dirty to drink",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "The crops needed organic manure hence composting",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To increase incomes in the village from sales of vegetables",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To decrease the impact of deforestation",
                      "To construct partitions to demarcate areas",
                      "Water needed to be conserved, hence planted trees"
                    ],
                    "answerUuidsToSkip": [
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Shortage of water in the village",
                      "Difficulty in reaching to water source",
                      "Water was too dirty to drink",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water needed to be conserved",
                      "There was a need for water tables to increase",
                      "Villagers including children were getting sick",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Difficulty to get water for livestock related needs",
                      "Shortage of water for irrigation purposes",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water needed to be conserved",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "The crops needed organic manure hence composting",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To increase incomes in the village from sales of vegetables",
                      "To improve agricultural productivity",
                      "To improve water retention capacity",
                      "To improve grazing facilities for livestock",
                      "To decrease the impact of deforestation",
                      "To construct partitions to demarcate areas",
                      "There was no meeting place for villagers",
                      "There was no connectivity to the market",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearby market facilities",
                      "The children did not have a proper place to study",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "In order to increase life and longevity of trees",
                      "To protect school facilities and ensure safety for children",
                      "To protect community infrastructure from getting damaged",
                      "To repair/rebuilt damaged community infrastructure",
                      "Water needed to be conserved, hence planted trees",
                      "There was limited/or no connectivity to nearly medical facilities"
                    ],
                    "answerUuidsToSkip": [
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "865be3b0-6b05-475b-b624-43aca7568538"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Sanitaiton"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Shortage of water in the village",
                      "Difficulty in reaching to water source",
                      "Water was too dirty to drink",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water needed to be conserved",
                      "There was a need for water tables to increase",
                      "Villagers including children were getting sick",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Difficulty to get water for livestock related needs",
                      "Shortage of water for irrigation purposes",
                      "Water used to collect and the place would get  flooded/swamped",
                      "The place was very dirty",
                      "There were mosquitoes breeding",
                      "The drains were clogged",
                      "The road could not be used for commuting",
                      "The garbage used to be dumped everywhere",
                      "There was stench all over the place",
                      "Children were unable to play",
                      "Villagers were getting sick repeatedly",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There was no meeting place for villagers",
                      "There was no connectivity to the market",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearby market facilities",
                      "The children did not have a proper place to study",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "In order to increase life and longevity of trees",
                      "To protect school facilities and ensure safety for children",
                      "To protect community infrastructure from getting damaged",
                      "To repair/rebuilt damaged community infrastructure",
                      "There was limited/or no connectivity to nearly medical facilities"
                    ],
                    "answerUuidsToSkip": [
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "865be3b0-6b05-475b-b624-43aca7568538"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Shortage of water in the village",
                      "Difficulty in reaching to water source",
                      "Water was too dirty to drink",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water needed to be conserved",
                      "There was a need for water tables to increase",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Difficulty to get water for livestock related needs",
                      "Shortage of water for irrigation purposes",
                      "Water used to collect and the place would get  flooded/swamped",
                      "The place was very dirty",
                      "There were mosquitoes breeding",
                      "The drains were clogged",
                      "The road could not be used for commuting",
                      "The garbage used to be dumped everywhere",
                      "There was stench all over the place",
                      "Children were unable to play",
                      "Villagers were getting sick repeatedly",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "Water needed to be conserved, hence planted trees",
                      "The crops needed organic manure hence composting",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To increase incomes in the village from sales of vegetables",
                      "To improve water retention capacity",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To decrease the impact of deforestation",
                      "To construct partitions to demarcate areas",
                      "There was no meeting place for villagers",
                      "There was no connectivity to the market",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearby market facilities",
                      "The children did not have a proper place to study",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "In order to increase life and longevity of trees",
                      "To protect school facilities and ensure safety for children",
                      "To protect community infrastructure from getting damaged",
                      "To repair/rebuilt damaged community infrastructure",
                      "Others",
                      "There was limited/or no connectivity to nearly medical facilities"
                    ],
                    "answerUuidsToSkip": [
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                      "865be3b0-6b05-475b-b624-43aca7568538"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
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
        },
        {
          "name": "Specify other",
          "uuid": "fcb15fc3-3778-4d4b-8501-aaa4e5fb838b",
          "keyValues": [],
          "concept": {
            "name": "Any other not given above, Specify other",
            "uuid": "33919c90-92b1-44f6-a5c8-3d04a3d159a1",
            "dataType": "Text",
            "answers": [],
            "active": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0ea2a76f-933e-448e-896a-46a4238a3488").containsAnswerConceptName("f9a72c48-3238-441d-a1de-2d8cd938dc22").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Objective of Work",
                          "conceptUuid": "0ea2a76f-933e-448e-896a-46a4238a3488",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other not given above"
                          ],
                          "answerConceptUuids": [
                            "f9a72c48-3238-441d-a1de-2d8cd938dc22"
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
        },
        {
          "name": "Specify Other Objective",
          "uuid": "08b9f98e-2f76-4fa4-9c08-ac841fe38046",
          "keyValues": [],
          "concept": {
            "name": "Specify Other Objective",
            "uuid": "3e1070a7-6c19-4594-aeb6-542025a66f8a",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0ea2a76f-933e-448e-896a-46a4238a3488").containsAnswerConceptName("016a6d0a-60f9-405f-8dac-08fcf6b39823").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Objective of Work",
                          "conceptUuid": "0ea2a76f-933e-448e-896a-46a4238a3488",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823"
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
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Activity category",
          "uuid": "d2ba4c04-70ca-48a0-a1de-e659d9cad701",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Repairing / Cleaning",
                "Making / Repairing / Cleaning",
                "Making / Repairing"
              ]
            }
          ],
          "concept": {
            "name": "Activity category",
            "uuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Making",
                "uuid": "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Cleaning",
                "uuid": "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Making / Repairing",
                "uuid": "3c01a59c-3428-4f10-b95a-34c0b0dd2c67",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Repairing / Cleaning",
                "uuid": "6116fbd2-f5e4-46bb-930d-7df3d7bc2292",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Repairing",
                "uuid": "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Making / Repairing / Cleaning",
                "uuid": "dca93504-ecb5-40fc-bfca-8d96d54f35f2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","1b061e73-b94f-499d-b82c-234670e104c5","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","fe6cd113-e3e3-44b6-abe7-81ba7605787b","f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","9ada0111-bbea-4fde-8097-32ccc0de6c78","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","b462ddf4-977b-4bc5-8157-7f0132c5245d","38dc542e-277d-4790-8982-0d2f3253f0fc","32699e9f-c289-4581-9781-24b2bdbb0841").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("58653f74-082c-47a7-9a25-548990a4bd4c","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","961b337f-fee4-4bed-a77a-83db71f1b5a2","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("58653f74-082c-47a7-9a25-548990a4bd4c","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","9ada0111-bbea-4fde-8097-32ccc0de6c78","ec39b654-3009-46ad-a2d4-2fda9f40d856","b462ddf4-977b-4bc5-8157-7f0132c5245d","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","32699e9f-c289-4581-9781-24b2bdbb0841").matches();
  
  visibility = condition11 ;
    if(condition12 ) {
    _.forEach(["cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["95882ddd-13f3-4ea8-b7f2-026e332bdc06"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["b66fa362-b975-4f0e-a7b2-9b0c37205c54"], (answer) => {
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
                  "actionType": "showFormElement"
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
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Water Management",
                            "Agriculture Plantation",
                            "Sanitaiton",
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b",
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Cleaning"
                    ],
                    "answerUuidsToSkip": [
                      "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Bandstand",
                            "Benches",
                            "Bridge/Pulia",
                            "Community Hall/Centre/House",
                            "Fencing & Boundary Wall",
                            "Road",
                            "Ground Levelling",
                            "Wall for Roads",
                            "Dustbin",
                            "Toilet/Bathroom/private spaces",
                            "Community Farming",
                            "Kitchen Garden",
                            "Land bunding",
                            "Plantation",
                            "Compost pit",
                            "Electric Pole",
                            "Seed ball"
                          ],
                          "answerConceptUuids": [
                            "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                            "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                            "f431cbac-b99d-48fb-8694-0299c352eb9a",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                            "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                            "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                            "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                            "38dc542e-277d-4790-8982-0d2f3253f0fc",
                            "32699e9f-c289-4581-9781-24b2bdbb0841"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Making"
                    ],
                    "answerUuidsToSkip": [
                      "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                            "Road & road side bush cutting",
                            "Water-body premises",
                            "Ground levelling",
                            "Truck Unloading"
                          ],
                          "answerConceptUuids": [
                            "58653f74-082c-47a7-9a25-548990a4bd4c",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                            "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                            "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Repairing"
                    ],
                    "answerUuidsToSkip": [
                      "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                            "Road & road side bush cutting",
                            "Water-body premises",
                            "Plantation",
                            "Land Bunding",
                            "Dustbin",
                            "Compost pit",
                            "Truck Unloading",
                            "Seed ball"
                          ],
                          "answerConceptUuids": [
                            "58653f74-082c-47a7-9a25-548990a4bd4c",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                            "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                            "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                            "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                            "32699e9f-c289-4581-9781-24b2bdbb0841"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
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
          "name": "Objective of work",
          "uuid": "2783e8b1-51c8-4f1e-85f2-6bdaf25e2b7e",
          "keyValues": [],
          "concept": {
            "name": "Objective of work (voided~207476)",
            "uuid": "6e6fe7fc-0cf0-4b68-93a6-7b95e12fd08c",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 23,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Activity Category",
          "uuid": "ac18bf96-58aa-4a8f-8404-3af9dd24032c",
          "keyValues": [],
          "concept": {
            "name": "Activity Category (voided~207467)",
            "uuid": "5c26afbe-c19e-4419-b89e-d03846c0e2e2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Making",
                "uuid": "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Cleaning",
                "uuid": "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Repairing",
                "uuid": "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 24,
          "type": "SingleSelect",
          "parentFormElementUuid": "2783e8b1-51c8-4f1e-85f2-6bdaf25e2b7e",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Sanitation",
          "uuid": "c7a30eeb-bdf8-4106-9278-0fceb7a8a462",
          "keyValues": [],
          "concept": {
            "name": "Sanitation activity",
            "uuid": "21a0ec64-d7d7-4dd9-a4b9-3ce68cc6be3c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "There were mosquitoes breeding",
                "uuid": "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Any other not given above",
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "The place was very dirty",
                "uuid": "f667c9e4-4300-4d4d-a726-009046566fa1",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "There was stench all over the place",
                "uuid": "67977dec-8209-4483-8b77-030797cbd53e",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Villagers were getting sick repeatedly",
                "uuid": "18803ff7-484e-4187-a2ae-64e4f47890aa",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Children were unable to play",
                "uuid": "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "The women did not have bathrooms to change or bathe in privacy",
                "uuid": "b145f169-e306-4d4c-a820-88b51a63b2a6",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "The drains were clogged",
                "uuid": "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "The garbage used to be dumped everywhere",
                "uuid": "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "There was fear of diseases like cholera and typhoid happening",
                "uuid": "7759083b-3bdd-4fac-b198-04ea94955631",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "The road could not be used for commuting",
                "uuid": "3035de80-1603-4ea9-947b-82d093e2bba2",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "There was fear of getting bitten by snakes and worms while commuting",
                "uuid": "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "There is fear of being attacked by animals in heavily bushed roads",
                "uuid": "2db06055-67eb-4966-8591-c414aa00c774",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 25,
          "type": "SingleSelect",
          "parentFormElementUuid": "2783e8b1-51c8-4f1e-85f2-6bdaf25e2b7e",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Agriculture_Plantation",
          "uuid": "1dd68c64-fe86-4afb-9865-d715fc6d50dd",
          "keyValues": [],
          "concept": {
            "name": "Agriculture_Plantation",
            "uuid": "dc829fd5-0c19-4223-93a0-c29b8919dcc9",
            "dataType": "Coded",
            "answers": [
              {
                "name": "There was soil erosion due to heavy water flow hence need for plantation",
                "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "To improve grazing facilities for livestock",
                "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "To improve water retention capacity",
                "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "To construct partitions to demarcate areas",
                "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Any other not given above",
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "To increase incomes in the village from sales of vegetables",
                "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "To decrease the impact of deforestation",
                "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Water needed to be conserved, hence planted trees",
                "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "To improve agricultural productivity",
                "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "The crops needed organic manure hence composting",
                "uuid": "75813429-7612-49f9-b159-e746c38be9da",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 26,
          "type": "SingleSelect",
          "parentFormElementUuid": "2783e8b1-51c8-4f1e-85f2-6bdaf25e2b7e",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Water management",
          "uuid": "158afa1f-84e4-4805-ab6d-73ed9fd1d11a",
          "keyValues": [],
          "concept": {
            "name": "Water management",
            "uuid": "0730dcd3-d272-481f-8a5d-09de5fae1005",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Water was too dirty to drink",
                "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Villagers especially women and children were spending too much time in collecting waters",
                "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Water was dirty for use for livestock related needs",
                "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Difficulty in reaching to water source",
                "uuid": "835cab14-f41e-43d4-a77f-db59b715317f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Villagers including children were getting sick",
                "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "There was a need for water tables to increase",
                "uuid": "b748ae00-0844-473d-b427-6031936809fa",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Water used to collect and the place would get flooded/swamped",
                "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Shortage of water in the village",
                "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Water was getting wasted",
                "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Any other not given above",
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Difficulty to get water for livestock related needs",
                "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Shortage of water for irrigation purposes",
                "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Water was dirty to use for household related needs",
                "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Water needed to be conserved",
                "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623",
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
          "parentFormElementUuid": "2783e8b1-51c8-4f1e-85f2-6bdaf25e2b7e",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Access_Infrastructure",
          "uuid": "a79895bf-317a-4ba0-992a-c3701a5cc93c",
          "keyValues": [],
          "concept": {
            "name": "Access_Infrastructure",
            "uuid": "72a547e0-0058-4840-8f9e-d22479e4a48f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "There was limited/or no connectivity to nearly medical facilities",
                "uuid": "865be3b0-6b05-475b-b624-43aca7568538",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearby market facilities",
                "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "The walls/boundaries of the school were damaged affecting studies",
                "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "To protect school facilities and ensure safety for children",
                "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "There was limited/ or no connectivity to the nearby villages",
                "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to water facilities/sources",
                "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "To repair/rebuilt damaged community infrastructure",
                "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Any other not given above",
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "The children did not have a proper place to study",
                "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "In order to increase life and longevity of trees",
                "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "To protect community infrastructure from getting damaged",
                "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "There was no connectivity to the market",
                "uuid": "834993e6-5643-4229-914d-a58df97cef30",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "There was no meeting place for villagers",
                "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 28,
          "type": "SingleSelect",
          "parentFormElementUuid": "2783e8b1-51c8-4f1e-85f2-6bdaf25e2b7e",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Activity Details",
      "timed": false
    },
    {
      "uuid": "c89596a4-49dd-4e84-a689-70a0d9120add",
      "name": "Measurement",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Measurements type",
          "uuid": "d6456af9-d1f8-4dff-976a-f6130d4231ed",
          "keyValues": [],
          "concept": {
            "name": "Measurements Type",
            "uuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Numbers (voided~207563)",
                "uuid": "d4c428d1-512f-4881-87f0-611d7746dd6c",
                "dataType": "Numeric",
                "answers": [],
                "order": 3,
                "active": true,
                "voided": true
              },
              {
                "name": "Volume",
                "uuid": "700c0785-7f52-43b4-917d-e1c482c62db2",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Numbers",
                "uuid": "23598869-15a8-43d3-a8f3-4f75b372cdc1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Area",
                "uuid": "96452733-db5e-4e82-8e75-8ef8a308ea8a",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Numbers (voided~207468)",
                "uuid": "61848cd7-b583-4640-b426-331de38417ee",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true,
                "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","3f0bd027-abf0-4beb-a7e7-9967d1994852","4ca95b4a-0d74-4bea-aac5-9f45da876178","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","a44830b7-3271-4313-baea-b6dc4e9cd5ae","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a7b922a1-a389-4ba1-94ca-59baf7a961d0","9ada0111-bbea-4fde-8097-32ccc0de6c78","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","016a6d0a-60f9-405f-8dac-08fcf6b39823","ec5c4214-ddd6-4146-8282-195f4d711c59").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","3f0bd027-abf0-4beb-a7e7-9967d1994852","4ca95b4a-0d74-4bea-aac5-9f45da876178","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","9ada0111-bbea-4fde-8097-32ccc0de6c78","00ee1a95-2236-4c43-83d7-36c911172069").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","b462ddf4-977b-4bc5-8157-7f0132c5245d","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","be655900-d882-4d99-ab29-faf560b8e832","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","be655900-d882-4d99-ab29-faf560b8e832","38dc542e-277d-4790-8982-0d2f3253f0fc","32699e9f-c289-4581-9781-24b2bdbb0841","8748bdc4-de26-4411-a9b4-269abf7fc6f5").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae").matches();
  
  if(condition11 ) {
    _.forEach(["23598869-15a8-43d3-a8f3-4f75b372cdc1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["23598869-15a8-43d3-a8f3-4f75b372cdc1","700c0785-7f52-43b4-917d-e1c482c62db2"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["96452733-db5e-4e82-8e75-8ef8a308ea8a","700c0785-7f52-43b4-917d-e1c482c62db2"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["96452733-db5e-4e82-8e75-8ef8a308ea8a"], (answer) => {
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
                      "Number"
                    ],
                    "answerUuidsToSkip": [
                      "23598869-15a8-43d3-a8f3-4f75b372cdc1"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Road",
                            "Wall for Roads",
                            "Drainage",
                            "Community Farming",
                            "Road & road side bush cutting",
                            "Canal",
                            "Check Dam",
                            "Backwater",
                            "Pond",
                            "River",
                            "Well",
                            "Land bunding",
                            "Truck Unloading",
                            "Others",
                            "Pond ghat / embankment"
                          ],
                          "answerConceptUuids": [
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Number",
                      "Volume"
                    ],
                    "answerUuidsToSkip": [
                      "23598869-15a8-43d3-a8f3-4f75b372cdc1",
                      "700c0785-7f52-43b4-917d-e1c482c62db2"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Road",
                            "Wall for Roads",
                            "Drainage",
                            "Community Farming",
                            "Road & road side bush cutting",
                            "Land bunding",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "00ee1a95-2236-4c43-83d7-36c911172069"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Area",
                      "Volume"
                    ],
                    "answerUuidsToSkip": [
                      "96452733-db5e-4e82-8e75-8ef8a308ea8a",
                      "700c0785-7f52-43b4-917d-e1c482c62db2"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Bandstand",
                            "Benches",
                            "Community Hall/Centre/House",
                            "Dustbin",
                            "Toilet/Bathroom/private spaces",
                            "Water-body premises",
                            "Compost pit",
                            "Kitchen Garden",
                            "Plantation",
                            "Soak Pit",
                            "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                            "Dugwell/Chua/Jalkhund",
                            "Soak pit",
                            "Electric Pole",
                            "Seed ball",
                            "Water storage pit"
                          ],
                          "answerConceptUuids": [
                            "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                            "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                            "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                            "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                            "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                            "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                            "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                            "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                            "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                            "be655900-d882-4d99-ab29-faf560b8e832",
                            "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                            "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                            "be655900-d882-4d99-ab29-faf560b8e832",
                            "38dc542e-277d-4790-8982-0d2f3253f0fc",
                            "32699e9f-c289-4581-9781-24b2bdbb0841",
                            "8748bdc4-de26-4411-a9b4-269abf7fc6f5"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Area"
                    ],
                    "answerUuidsToSkip": [
                      "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae"
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
        },
        {
          "name": "Nos",
          "uuid": "42f0b85e-410c-4810-bdef-b4834c7ede9d",
          "keyValues": [],
          "concept": {
            "name": "Nos",
            "uuid": "c8d91a28-238d-40ad-a26b-1be059c47863",
            "dataType": "Numeric",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("23598869-15a8-43d3-a8f3-4f75b372cdc1").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Number"
                          ],
                          "answerConceptUuids": [
                            "23598869-15a8-43d3-a8f3-4f75b372cdc1"
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
        },
        {
          "name": "Nos",
          "uuid": "de647d2e-b399-4ead-890e-16b234be6ba8",
          "keyValues": [],
          "concept": {
            "name": "Numbers (voided~207563)",
            "uuid": "d4c428d1-512f-4881-87f0-611d7746dd6c",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("23598869-15a8-43d3-a8f3-4f75b372cdc1").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Number"
                          ],
                          "answerConceptUuids": [
                            "23598869-15a8-43d3-a8f3-4f75b372cdc1"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Length",
          "uuid": "84fd5d6c-469d-4644-bb76-2016bb792d22",
          "keyValues": [],
          "concept": {
            "name": "Length",
            "uuid": "7ea0b0c5-e593-44ac-80f0-e675a53d1d4a",
            "dataType": "Numeric",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","4ca95b4a-0d74-4bea-aac5-9f45da876178","9ada0111-bbea-4fde-8097-32ccc0de6c78","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition41 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","824d11d4-525d-4610-9afe-f87c030a54eb","ec5c4214-ddd6-4146-8282-195f4d711c59").matches();
  
  const condition51 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition61 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition71 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("3f0bd027-abf0-4beb-a7e7-9967d1994852").matches();
  
  const condition81 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition91 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition101 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("ba6d69d5-bdb8-48bd-bd70-87e0b9848178").matches();
  
  const condition111 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnswerConceptName("cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition121 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition131 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","824d11d4-525d-4610-9afe-f87c030a54eb","ec5c4214-ddd6-4146-8282-195f4d711c59").matches();
  
  const condition141 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition151 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 || condition41 && condition51 && condition61 || condition71 && condition81 && condition91 || condition101 && condition111 && condition121 || condition131 && condition141 && condition151 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Road",
                            "Community Farming",
                            "Land bunding",
                            "Wall for Roads"
                          ],
                          "answerConceptUuids": [
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing",
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal",
                            "Backwater",
                            "Pond",
                            "River",
                            "Check Dam",
                            "Pond ghat / embankment"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Repairing",
                            "Cleaning",
                            "Making"
                          ],
                          "answerConceptUuids": [
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Drainage"
                          ],
                          "answerConceptUuids": [
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing",
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Road & road side bush cutting"
                          ],
                          "answerConceptUuids": [
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal",
                            "Backwater",
                            "Pond",
                            "River",
                            "Check Dam",
                            "Pond ghat / embankment"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Repairing",
                            "Cleaning",
                            "Making"
                          ],
                          "answerConceptUuids": [
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
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
        },
        {
          "name": "Breadth",
          "uuid": "25a2d0d2-70c2-4d83-847d-7467b2efa05d",
          "keyValues": [],
          "concept": {
            "name": "Breadth",
            "uuid": "1197d309-c9a1-4d65-8e45-61bfd6f01aee",
            "dataType": "Numeric",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","4ca95b4a-0d74-4bea-aac5-9f45da876178","9ada0111-bbea-4fde-8097-32ccc0de6c78").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition41 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("3f0bd027-abf0-4beb-a7e7-9967d1994852").matches();
  
  const condition51 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition61 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition71 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","ec5c4214-ddd6-4146-8282-195f4d711c59").matches();
  
  const condition81 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition91 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition101 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("ba6d69d5-bdb8-48bd-bd70-87e0b9848178").matches();
  
  const condition111 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnswerConceptName("cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition121 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition131 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","824d11d4-525d-4610-9afe-f87c030a54eb","ec5c4214-ddd6-4146-8282-195f4d711c59").matches();
  
  const condition141 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition151 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 || condition41 && condition51 && condition61 || condition71 && condition81 && condition91 || condition101 && condition111 && condition121 || condition131 && condition141 && condition151 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Road",
                            "Community Farming",
                            "Land bunding"
                          ],
                          "answerConceptUuids": [
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Drainage"
                          ],
                          "answerConceptUuids": [
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing",
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal",
                            "Check Dam",
                            "Backwater",
                            "Pond",
                            "River",
                            "Pond ghat / embankment"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing",
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Road & road side bush cutting"
                          ],
                          "answerConceptUuids": [
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal",
                            "Backwater",
                            "Pond",
                            "River",
                            "Check Dam",
                            "Pond ghat / embankment"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Repairing",
                            "Cleaning",
                            "Making"
                          ],
                          "answerConceptUuids": [
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
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
        },
        {
          "name": "Breadth",
          "uuid": "1d0a2e0f-6388-4c44-9bf7-1a4ffc1297fd",
          "keyValues": [],
          "concept": {
            "name": "Breadth (voided~207550)",
            "uuid": "acf809e2-30ba-49ab-9119-a344cc5ea7cb",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
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
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
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
          "name": "Height / Depth",
          "uuid": "4bd53ca3-d37a-40ee-ba74-c87e53046dc9",
          "keyValues": [],
          "concept": {
            "name": "Height / Depth",
            "uuid": "4542ba21-0801-416b-b739-9ca6707dc4b4",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("62f4b7d6-4a4a-4064-aa0e-a0c21053eec2").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnyAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition41 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","824d11d4-525d-4610-9afe-f87c030a54eb","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","ec5c4214-ddd6-4146-8282-195f4d711c59").matches();
  
  const condition51 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition61 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  const condition71 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("a7b922a1-a389-4ba1-94ca-59baf7a961d0").matches();
  
  const condition81 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition91 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 || condition41 && condition51 && condition61 || condition71 && condition81 && condition91 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Wall for Roads"
                          ],
                          "answerConceptUuids": [
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal",
                            "Backwater",
                            "Check Dam",
                            "Pond",
                            "River",
                            "Pond ghat / embankment"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Repairing",
                            "Cleaning",
                            "Making"
                          ],
                          "answerConceptUuids": [
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing",
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
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
        },
        {
          "name": "Height",
          "uuid": "e87bf4e8-f638-49b5-8391-fd75e6aa215d",
          "keyValues": [],
          "concept": {
            "name": "Height",
            "uuid": "a32d438f-ecd6-4f7a-9753-d42f923f743a",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Diameter",
          "uuid": "9497b9e4-494a-43b0-a9ad-4f9b15d02244",
          "keyValues": [],
          "concept": {
            "name": "Diameter",
            "uuid": "614c185c-7f63-406d-9f2a-6619564947f4",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("a7b922a1-a389-4ba1-94ca-59baf7a961d0").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnyAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a","700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing",
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area",
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a",
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
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
          "name": "Depth",
          "uuid": "02f45239-e5d5-4583-a80e-df7409cd4cd1",
          "keyValues": [],
          "concept": {
            "name": "Depth",
            "uuid": "ad7e9f42-d8b9-420b-b281-f5fc9cee43ef",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Height",
          "uuid": "bf68ccc0-584b-4606-8c9b-36b40edd5a6c",
          "keyValues": [],
          "concept": {
            "name": "Height (voided~207551)",
            "uuid": "09ee602c-ed75-4df9-b0c2-04f6adbcd199",
            "dataType": "Numeric",
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
          "name": "Diameter",
          "uuid": "90c0bc81-5988-45d9-a90d-8b7925f01dbb",
          "keyValues": [],
          "concept": {
            "name": "Diameter (voided~207552)",
            "uuid": "7405d9a6-465b-4e74-a6bb-4e4b93b1856c",
            "dataType": "Numeric",
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
          "name": "Depth",
          "uuid": "d4a5bf89-c1bf-4957-9fdc-67dd12a603bc",
          "keyValues": [],
          "concept": {
            "name": "Depth (voided~207553)",
            "uuid": "f82fa2e6-19a0-4ef8-886f-e485dc677925",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("f431cbac-b99d-48fb-8694-0299c352eb9a","961b337f-fee4-4bed-a77a-83db71f1b5a2","016a6d0a-60f9-405f-8dac-08fcf6b39823","58653f74-082c-47a7-9a25-548990a4bd4c","82246b7a-c13f-435d-9e17-d8d288ff3891","a5f019c6-17a0-4536-8222-67935d482774","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptNameOtherThan("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
        visibility = !(condition11 || condition21 );
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "hideFormElementGroup"
            }
          ],
          "conditions": [
            {
              "conjunction": "or",
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "encounter",
                      "conceptName": "Activity sub type",
                      "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Fencing & Boundary Wall",
                        "Ground Levelling",
                        "Others",
                        "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                        "Water Tank/Pipeline",
                        "Waterfall/Jharna/Spring Water/Dhara",
                        "Truck Unloading"
                      ],
                      "answerConceptUuids": [
                        "f431cbac-b99d-48fb-8694-0299c352eb9a",
                        "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                        "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                        "58653f74-082c-47a7-9a25-548990a4bd4c",
                        "82246b7a-c13f-435d-9e17-d8d288ff3891",
                        "a5f019c6-17a0-4536-8222-67935d482774",
                        "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911"
                      ]
                    },
                    "operator": "containsAnyAnswerConceptName"
                  }
                ]
              }
            },
            {
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "encounter",
                      "conceptName": "Type of Initiative",
                      "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "DFW"
                      ],
                      "answerConceptUuids": [
                        "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                      ]
                    },
                    "operator": "containsAnswerConceptNameOtherThan"
                  }
                ]
              }
            }
          ]
        }
      ],
      "display": "Measurement",
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