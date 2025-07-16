{
  "name": "NCD Followup Encounter",
  "uuid": "f031af7f-65a7-4086-983f-16ad76fea233",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "cf29c72b-a3e8-4463-9ac5-294c0e1600cd",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [],
      "display": "Details",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "8195d651-f556-41ea-8f04-8bfc34a37bca",
      "name": "General Information",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Scheduled Followup For",
          "uuid": "2da5213f-7c9b-4193-b093-8f4b6d4b7a07",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Scheduled Followup For",
            "uuid": "b26f1f64-8fb6-48e8-b3cb-230c289a6c73",
            "dataType": "Text",
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
  
  const name = programEncounter.name;
  if(name.includes('Hypertension')){
    value = 'Hypertension';
  } else if(name.includes('Diabetes')){
    value = 'Diabetes';
  } else {
    value = 'Both';
  }  
 
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Do Also Want to Follow up for Hypertension?",
          "uuid": "314fdbf6-d7f2-4bf5-b33b-18494c41be7b",
          "keyValues": [],
          "concept": {
            "name": "Do Also Want to Follow up for Hypertension?",
            "uuid": "9cb507a3-4aa7-4afd-b78f-2c5f60fd055a",
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
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("b26f1f64-8fb6-48e8-b3cb-230c289a6c73").equals("Diabetes").matches();
  
  const name = programEncounter.name.includes('Diabetes'); 
  
  visibility = condition11 || name;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Do Also Want to Follow up for Diabetes?",
          "uuid": "657e5d35-34bf-45a5-b716-361ecd7a30f6",
          "keyValues": [],
          "concept": {
            "name": "Do Also Want to Follow up for Diabetes?",
            "uuid": "1fb310f5-be3f-4edb-a81e-1e3cd36970f3",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("b26f1f64-8fb6-48e8-b3cb-230c289a6c73").equals("Hypertension").matches();
  
    const name = programEncounter.name.includes('Hypertension'); 

  
  visibility = condition11 || name ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Delay Days",
          "uuid": "0196817f-0567-4daf-8a5a-9b28bd65bd00",
          "keyValues": [],
          "concept": {
            "name": "Delay Days",
            "uuid": "b19729b8-5810-42e6-b4de-a3d23e7caaee",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
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
  

  
const earliestVisitDateTime = moment(programEncounter.earliestVisitDateTime).startOf('day');
const encounterDateTime = moment(programEncounter.encounterDateTime).startOf('day');
const daysDifference = encounterDateTime.diff(earliestVisitDateTime, 'days');

value = daysDifference;

  
 
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Have You Gone for the Hospital Check Up?",
          "uuid": "441d6e36-8c7c-4051-ac0b-ac564c7da43e",
          "keyValues": [],
          "concept": {
            "name": "Have You Gone for the Hospital Check Up?",
            "uuid": "8c80d2a1-da59-4df5-9059-4d80bb9e60c9",
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Why the Patient Not Go to the Hospital for Checkup?",
          "uuid": "4bb7bbc2-e4a5-443f-8388-41cd9210c3bd",
          "keyValues": [],
          "concept": {
            "name": "Why the Patient Not Go to the Hospital for Checkup?",
            "uuid": "13864ede-541e-46b6-b8f0-883f931fdc37",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Bedridden",
                "uuid": "167ef1f3-5c9e-4526-bce3-9107c7a8477a",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Do Not Want Any Treatment",
                "uuid": "e0cafea7-00db-4739-a25e-b923e317eedf",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Not Willing to Go My Own",
                "uuid": "bf6166ec-cca1-4f34-992b-35fc5bed0698",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "unique": true,
                "active": true
              },
              {
                "name": "No Money",
                "uuid": "4a6400dd-70ea-47fc-836f-7da46317a928",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "No One to Take Me to the Hospital",
                "uuid": "77640e2c-05b1-4422-a3fe-11d842e1d864",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "No Support from Home/Family",
                "uuid": "a4aefdd2-f17c-4864-b762-68db948b69fd",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Too Old",
                "uuid": "3f2d9495-e500-4ccd-bbef-6c0c94a29664",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("8c80d2a1-da59-4df5-9059-4d80bb9e60c9").containsAnswerConceptName("16092a1e-4a02-4ffd-a3a9-47f07f147a12").matches();
  
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
                          "conceptName": "Have You Gone for the Hospital Check Up?",
                          "conceptUuid": "8c80d2a1-da59-4df5-9059-4d80bb9e60c9",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "16092a1e-4a02-4ffd-a3a9-47f07f147a12"
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
          "name": "Other Reason for Not Going to Hospital for Checkup",
          "uuid": "d3e99688-fda9-428f-be29-3c1198e0db5c",
          "keyValues": [],
          "concept": {
            "name": "Other Reason for Not Going to Hospital for Checkup",
            "uuid": "4df27e1e-6e1c-4444-b551-eb49202e5a3e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("13864ede-541e-46b6-b8f0-883f931fdc37").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
                          "conceptName": "Why the Patient Not Go to the Hospital for Checkup?",
                          "conceptUuid": "13864ede-541e-46b6-b8f0-883f931fdc37",
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
          "name": "Counselling Done by Supervisors",
          "uuid": "257494c5-3bc0-4b24-a5f6-a4108e51f8e4",
          "keyValues": [],
          "concept": {
            "name": "Counselling Done by Supervisors",
            "uuid": "8fa11360-a4f9-4c59-9aa2-e9584c60af8f",
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
          "name": "Date of Visit the Hospital",
          "uuid": "29b2f0e1-19ac-41d9-9891-d60b07c56e3d",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of Visit the Hospital",
            "uuid": "e8ba2b2d-6068-497f-9854-09c2a059b7bd",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
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
  
    const encounterDateTime = moment(programEncounter.encounterDateTime).startOf('day');

  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("8c80d2a1-da59-4df5-9059-4d80bb9e60c9").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
  visibility = condition11 ;
  let refDate = programEncounter.getObservationValue("e8ba2b2d-6068-497f-9854-09c2a059b7bd");
    if(refDate){
        refDate = moment(refDate).startOf('day');
        if(refDate.isAfter(encounterDateTime)){
            validationErrors.push("Invalid date: Do not enter future date.");
        }
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Which Hospital Where They Referred To?",
          "uuid": "12ff476b-c9e3-4217-beae-7c9a24bcb3dc",
          "keyValues": [],
          "concept": {
            "name": "Which Hospital Where They Referred To?",
            "uuid": "5f27e852-1d5d-49c1-893d-6eda5334f51a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "CHC",
                "uuid": "f2cfc6dd-c898-4d7d-acbf-db3acb433136",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "State hospital",
                "uuid": "0097d74d-c046-4504-9efe-e9811f6363af",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "SRH",
                "uuid": "55520393-af5d-406b-b734-8810e2164d15",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Medical Camp",
                "uuid": "f5f8111b-89f9-47b9-9765-7ce5590f8f0d",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Near by Private Clinic",
                "uuid": "dd4ff260-e9fa-4528-873e-fc819ecf51ea",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Medical College/ District Hospital",
                "uuid": "8a2eb0f2-cdc9-413c-9124-908da876ccd5",
                "dataType": "NA",
                "answers": [],
                "order": 8,
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
                "name": "Private Hospital",
                "uuid": "5ab46f09-23a8-439b-9e8e-484b56220753",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Sub Center",
                "uuid": "07703746-707c-426c-b8fd-1d1c144f24a1",
                "dataType": "NA",
                "answers": [],
                "order": 0,
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
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("8c80d2a1-da59-4df5-9059-4d80bb9e60c9").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Have You Gone for the Hospital Check Up?",
                          "conceptUuid": "8c80d2a1-da59-4df5-9059-4d80bb9e60c9",
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
      "display": "General Information",
      "timed": false
    },
    {
      "uuid": "aa8cde04-b319-4413-966e-7a08140acb74",
      "name": "Diabetes Followup Details",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Random Blood Sugar",
          "uuid": "89b4a027-a7bf-4ecf-a6cd-6342e4d9e187",
          "keyValues": [],
          "concept": {
            "name": "Current Random Blood Sugar (RBS)",
            "uuid": "5666b393-d450-4865-8127-205559a6b1be",
            "dataType": "Numeric",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("8c80d2a1-da59-4df5-9059-4d80bb9e60c9").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Have You Gone for the Hospital Check Up?",
                          "conceptUuid": "8c80d2a1-da59-4df5-9059-4d80bb9e60c9",
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
          "name": "Was Medicine Given?",
          "uuid": "7e8a91e4-7e2c-4580-a726-38c0f18c04f2",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("8c80d2a1-da59-4df5-9059-4d80bb9e60c9").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Have You Gone for the Hospital Check Up?",
                          "conceptUuid": "8c80d2a1-da59-4df5-9059-4d80bb9e60c9",
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
          "name": "Reason for Not Giving Medicine?",
          "uuid": "0e45cae8-d473-4a9a-9e47-c4f42881604e",
          "keyValues": [],
          "concept": {
            "name": "Reason for Not Giving Medicine?",
            "uuid": "a79fe105-6070-42a1-9a50-0d119bdd0221",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Blood Sugar Is Within the Normal Limit, so No Need for Medicine",
                "uuid": "b6603f4f-cbde-45cb-951f-5c27a0c143f5",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Hospital Ask for Follow up Visit",
                "uuid": "b847880b-7f29-412b-8b00-5b051ab54b33",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Doctor Not Available",
                "uuid": "b0f7bd46-9fd1-4733-8f50-f22e2870e407",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Medicine Stock Not Available",
                "uuid": "18822335-1e33-4836-8cd7-5080d48e2624",
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
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("4ae2d4b0-d7ac-4bb7-811b-dc4f6b7e9e73").containsAnswerConceptName("16092a1e-4a02-4ffd-a3a9-47f07f147a12").matches();
  
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
                            "No"
                          ],
                          "answerConceptUuids": [
                            "16092a1e-4a02-4ffd-a3a9-47f07f147a12"
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
          "uuid": "20724e5f-7da5-45c9-8c6a-813d3ff359e7",
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
          "displayOrder": 4,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("4ae2d4b0-d7ac-4bb7-811b-dc4f6b7e9e73").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
          "uuid": "4529e158-1bc3-4946-8616-8c2b1b026bbe",
          "keyValues": [],
          "concept": {
            "name": "Other Sugar Medicine,Please Specify",
            "uuid": "a2ef2c0d-efe5-4b6e-82aa-fcf747db0eaa",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("46bc06c4-2e68-4192-a785-8aadadf01ca3").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
          "name": "Have You Take Medicine Regularly?",
          "uuid": "ce601365-ac10-464d-b8e9-2a0d47bee58a",
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
          "displayOrder": 6,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("4ae2d4b0-d7ac-4bb7-811b-dc4f6b7e9e73").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
          "name": "Why Not Take the Medicine?",
          "uuid": "bfc964c9-2be0-4e4f-bf62-89102a996972",
          "keyValues": [],
          "concept": {
            "name": "Why Not Take the Sugar Medicine?",
            "uuid": "0ac4314e-8bf7-456d-acaf-be59f46f0941",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Started Alternate Treatment",
                "uuid": "a98d0f50-b591-4ae8-bfc2-06fa8cd26ffa",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Lack of Understanding About Medicine",
                "uuid": "152fdfe6-2342-4cf9-8cc1-cf7bbd54f841",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Allergic Reaction",
                "uuid": "dca92243-60ef-4031-93d5-bf2378d48a70",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Too Much Medicine",
                "uuid": "04687965-d09f-4266-a078-34fb77d37456",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "unique": true,
                "active": true
              },
              {
                "name": "Bedridden No One Get Medicine for Me",
                "uuid": "cd13ad3e-1789-456f-a1f6-ce15a7a3e91f",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "I Do Not Have Any Symptoms, so I Am Not Am Not Taking Medicine",
                "uuid": "e278bd20-c806-4d43-88fb-755de01cf739",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("bbdaf5ac-4f1f-4baa-a108-56b4bbbc4763").containsAnswerConceptName("16092a1e-4a02-4ffd-a3a9-47f07f147a12").matches();
  
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
                          "conceptName": "Are You Taking Sugar Medicine Regularly ?",
                          "conceptUuid": "bbdaf5ac-4f1f-4baa-a108-56b4bbbc4763",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "16092a1e-4a02-4ffd-a3a9-47f07f147a12"
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
          "name": "Other Reason for Not Take the Medicine,Please Specify",
          "uuid": "c1607c27-1cb7-48ca-861f-1dcf5cea6e74",
          "keyValues": [],
          "concept": {
            "name": "Other Reason for Not Take the Sugar Medicine,Please Specify",
            "uuid": "f20e8577-d074-45a9-a220-33cb765e9e5a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("0ac4314e-8bf7-456d-acaf-be59f46f0941").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
                          "conceptName": "Why Not Take the Medicine?",
                          "conceptUuid": "0ac4314e-8bf7-456d-acaf-be59f46f0941",
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
          "mandatory": false
        },
        {
          "name": "Does Medicine Have Any Side Effects in You?",
          "uuid": "96fa07a9-8133-44d0-83a8-d2a9207e30ab",
          "keyValues": [],
          "concept": {
            "name": "Does Sugar Medicine Have Any Side Effects in You?",
            "uuid": "c8ce601a-ee5f-405e-8f91-22320802c7c8",
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
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("bbdaf5ac-4f1f-4baa-a108-56b4bbbc4763").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Are You Taking Sugar Medicine Regularly ?",
                          "conceptUuid": "bbdaf5ac-4f1f-4baa-a108-56b4bbbc4763",
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
          "name": "Which Type of Reaction?",
          "uuid": "9d693fa0-c992-47c2-9633-b910c8550d4e",
          "keyValues": [],
          "concept": {
            "name": "Which Type of Reaction for Sugar?",
            "uuid": "7994b992-5193-4ebf-82b9-073d204977c3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Stomach Discomfort",
                "uuid": "06525a68-8064-4543-a4f1-7c14007c006e",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Chest Pain",
                "uuid": "49818476-ed2c-4c79-9e5d-5e9833f6764a",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Weight Loss",
                "uuid": "08c296b9-fea1-47b1-908c-7a2bde44615f",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Frequent Urination",
                "uuid": "479b2160-2650-4035-9add-7b552f60d061",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Leg Cramps",
                "uuid": "e6c4ddf8-769c-4f95-be91-3f4c48c14aa7",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Rashes",
                "uuid": "d5b85de7-b098-4b07-a13e-574f07ffe8fe",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Headache",
                "uuid": "5d914b73-2c8e-4169-ac47-728bc266bd6e",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Oedema of Feet",
                "uuid": "8c2b415c-902c-40cb-bfc1-48343984069f",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "unique": true,
                "active": true
              },
              {
                "name": "None",
                "uuid": "540cc15d-2ad4-496c-8514-64031f08290a",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "unique": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 10,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("c8ce601a-ee5f-405e-8f91-22320802c7c8").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Does Medicine Have Any Side Effects in You?",
                          "conceptUuid": "c8ce601a-ee5f-405e-8f91-22320802c7c8",
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
          "name": "Other type of Reaction,Please Specify",
          "uuid": "1b45e31a-7636-433d-938d-639e838d0a8b",
          "keyValues": [],
          "concept": {
            "name": "Other type of Reaction for Sugar,Please Specify",
            "uuid": "46b3364a-240b-4d8f-ad4e-449bbdc700ec",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("7994b992-5193-4ebf-82b9-073d204977c3").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
                          "conceptName": "Which Type of Reaction?",
                          "conceptUuid": "7994b992-5193-4ebf-82b9-073d204977c3",
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
          "name": "Are You Still Experiencing Any Symptoms for DM",
          "uuid": "e4d5fdc8-3a5c-4f1f-b6b6-102995b39fb0",
          "keyValues": [],
          "concept": {
            "name": "Are You Still Experiencing Any Symptoms for DM",
            "uuid": "e20795cf-0558-47a7-899d-a01bfa66f455",
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
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Which Type of Symptoms?",
          "uuid": "db0bbe11-5d8d-4260-a1e6-b1265b7b0025",
          "keyValues": [],
          "concept": {
            "name": "Which Type of Symptoms for DM?",
            "uuid": "3870356c-75fb-44cb-867d-7429bfad42ff",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Nausea and Abdominal Pain",
                "uuid": "bed41e48-6ae1-43b4-9319-e1c22f600e58",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Fatigue and Lack of Energy",
                "uuid": "1ea97d06-ccd8-4707-b024-fc97e5c3bb8d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "None",
                "uuid": "540cc15d-2ad4-496c-8514-64031f08290a",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "unique": true,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "unique": true,
                "active": true
              },
              {
                "name": "Excessive Thirst (Desire to Drink a Lot of Water)",
                "uuid": "7d1dbe67-5263-49b1-a07d-261cf0833d7f",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Increased Fatigue and Lack of Energy",
                "uuid": "4bec5cbb-60b4-4000-922b-8a842657afed",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Slow Healing of Wounds",
                "uuid": "e43b8089-624a-4288-9714-59dac150b34a",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Frequent Urination (especially at Night)",
                "uuid": "920446de-fe15-4699-9431-2e0d392babdf",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Increased Skin Infections and Fungal Infections",
                "uuid": "9589a39a-43dc-4226-9852-e357073e6b25",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Excessive Hunger/Blurry Vision",
                "uuid": "b6b66f88-a89d-4102-acfd-d56965ff2064",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Numbness or Tingling in Hands and Feet (neuropathy)",
                "uuid": "dc96eeab-9f25-45d3-9cf3-475fa8016744",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Sudden Weight Loss",
                "uuid": "31bea047-9d4c-4d40-acc4-a243097e44ac",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 13,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("e20795cf-0558-47a7-899d-a01bfa66f455").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Are You Still Experiencing Any Symptoms for DM",
                          "conceptUuid": "e20795cf-0558-47a7-899d-a01bfa66f455",
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
          "name": "Other Symptoms?Please Specify",
          "uuid": "9cfcd0e9-4704-4eeb-9a37-88ccc2137c8d",
          "keyValues": [],
          "concept": {
            "name": "Other Symptoms for DM?Please Specify",
            "uuid": "c921765f-970f-42ce-b7df-6284aad91031",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("3870356c-75fb-44cb-867d-7429bfad42ff").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
                          "conceptName": "Which Type of Symptoms for DM?",
                          "conceptUuid": "3870356c-75fb-44cb-867d-7429bfad42ff",
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
          "name": "Can You Give the Referral Slip?",
          "uuid": "ddbf214a-1cfe-4c4d-bfa6-3dab21b5eb67",
          "keyValues": [],
          "concept": {
            "name": "Can You Give the Referral Slip?",
            "uuid": "7a5997ff-c907-4c7b-a31a-6a738b239c2c",
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Today's Random Blood Sugar",
          "uuid": "18419ac4-8767-4abf-a1c3-90ce2c3c144f",
          "keyValues": [],
          "concept": {
            "name": "Today's Random Blood Sugar",
            "uuid": "509542f2-b76d-4339-af57-add590b8d536",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 500,
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
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
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("b26f1f64-8fb6-48e8-b3cb-230c289a6c73").equals("Diabetes").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("1fb310f5-be3f-4edb-a81e-1e3cd36970f3").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("b26f1f64-8fb6-48e8-b3cb-230c289a6c73").equals("Both").matches();
  
        visibility = condition11 || condition21 || condition31 ;
  
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
              "conjunction": "or",
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "encounter",
                      "conceptName": "Scheduled Followup For",
                      "conceptUuid": "b26f1f64-8fb6-48e8-b3cb-230c289a6c73",
                      "conceptDataType": "Text"
                    },
                    "rhs": {
                      "type": "value",
                      "value": "Diabetes"
                    },
                    "operator": "equals"
                  }
                ],
                "conjunction": "and"
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
                      "conceptName": "Do Also Want to Follow up for Diabetes?",
                      "conceptUuid": "1fb310f5-be3f-4edb-a81e-1e3cd36970f3",
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
            },
            {
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "encounter",
                      "conceptName": "Scheduled Followup For",
                      "conceptUuid": "b26f1f64-8fb6-48e8-b3cb-230c289a6c73",
                      "conceptDataType": "Text"
                    },
                    "rhs": {
                      "type": "value",
                      "value": "Both"
                    },
                    "operator": "equals"
                  }
                ],
                "conjunction": "and"
              }
            }
          ]
        }
      ],
      "display": "Diabetes Followup Details",
      "timed": false
    },
    {
      "uuid": "73749063-4201-41b0-bc37-6aea57f1d8d5",
      "name": "Hypertension Followup Details",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Was Your Blood Pressure Check in the Hospital?",
          "uuid": "6c8a64e3-b81e-426d-8d01-ab0e3b08d310",
          "keyValues": [],
          "concept": {
            "name": "Was Your Blood Pressure Check in the Hospital?",
            "uuid": "0699492f-ab85-44b8-b646-d596bf20fbe9",
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
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("8c80d2a1-da59-4df5-9059-4d80bb9e60c9").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Have You Gone for the Hospital Check Up?",
                          "conceptUuid": "8c80d2a1-da59-4df5-9059-4d80bb9e60c9",
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
          "name": "Blood Pressure Systolic",
          "uuid": "d46ba5ad-111f-488f-b4d0-b3548279e88d",
          "keyValues": [],
          "concept": {
            "name": "Blood Pressure Systolic",
            "uuid": "0d64f4bc-5568-4fc2-84ef-5f1ee789befe",
            "dataType": "Numeric",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("0699492f-ab85-44b8-b646-d596bf20fbe9").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Was Your Blood Pressure Check in the Hospital?",
                          "conceptUuid": "0699492f-ab85-44b8-b646-d596bf20fbe9",
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
          "name": "Blood Pressure Diastolic",
          "uuid": "43c04011-cafc-4d2d-8694-a672ac584096",
          "keyValues": [],
          "concept": {
            "name": "Blood Pressure Diastolic",
            "uuid": "bd47866d-2976-4e32-9384-9466a9e1144a",
            "dataType": "Numeric",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("0699492f-ab85-44b8-b646-d596bf20fbe9").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Was Your Blood Pressure Check in the Hospital?",
                          "conceptUuid": "0699492f-ab85-44b8-b646-d596bf20fbe9",
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
          "name": "Blood Pressure Category",
          "uuid": "5f08ceed-1525-421d-89c4-6d843bd29c0e",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Blood Pressure Category",
            "uuid": "08b2ed82-43b6-4853-863b-5f211b88c9a5",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Grade One",
                "uuid": "e459de08-9a15-47bd-b293-b0b908992b7e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Grade Two",
                "uuid": "2207d13e-7eee-4c83-8595-b2a6a0515c2a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Grade Five",
                "uuid": "65fc3a22-bfc4-43ef-a673-e5132e3052e3",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Grade Six",
                "uuid": "8caa352a-4a22-4a74-9dca-9010866a25a6",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Grade Four",
                "uuid": "7e7526a9-a466-46f0-b7c9-b33a3af4142a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Grade Three",
                "uuid": "a592f645-d094-4d1b-b25b-454f3ca82e94",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("0699492f-ab85-44b8-b646-d596bf20fbe9").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
  visibility = condition11 ;
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
      const avgSystolic = programEncounter.getObservationValue("0d64f4bc-5568-4fc2-84ef-5f1ee789befe");
      const avgDiastolic = programEncounter.getObservationValue("bd47866d-2976-4e32-9384-9466a9e1144a");
        
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
            value = severity;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Was Medicine Given?",
          "uuid": "42f4f814-4ae2-444e-ae7e-326629c3fd41",
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
          "displayOrder": 5,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("0699492f-ab85-44b8-b646-d596bf20fbe9").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Was Your Blood Pressure Check in the Hospital?",
                          "conceptUuid": "0699492f-ab85-44b8-b646-d596bf20fbe9",
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
          "name": "Reason for Not Giving Medicine?",
          "uuid": "8c4c7e3f-52e7-4a54-b0d5-b1ec5b3c04e7",
          "keyValues": [],
          "concept": {
            "name": "Reason for Not Giving Medicine for BP?",
            "uuid": "f0ff2ea8-8606-4e14-bd5e-380a706dcd77",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Doctor Not Available",
                "uuid": "b0f7bd46-9fd1-4733-8f50-f22e2870e407",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Medicine Stock Not Available",
                "uuid": "18822335-1e33-4836-8cd7-5080d48e2624",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Blood Pressure Is Within the Normal Limit, so No Need for Medicine",
                "uuid": "b4dd3657-db18-4755-b4e4-48c07e95d7fc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Hospital Ask for Follow up Visit",
                "uuid": "b847880b-7f29-412b-8b00-5b051ab54b33",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("ddfe0dc7-5a4a-4b74-8816-c47dfd619a78").containsAnswerConceptName("16092a1e-4a02-4ffd-a3a9-47f07f147a12").matches();
  
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
                          "conceptName": "Have You Take Any Medicine  for BP?",
                          "conceptUuid": "ddfe0dc7-5a4a-4b74-8816-c47dfd619a78",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "16092a1e-4a02-4ffd-a3a9-47f07f147a12"
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
          "uuid": "4cdf4ada-62f3-4161-b5d6-8c934f431bce",
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
          "displayOrder": 7,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("ddfe0dc7-5a4a-4b74-8816-c47dfd619a78").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Have You Take Any Medicine  for BP?",
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
          "mandatory": false
        },
        {
          "name": "Other Medicine,Please Specify",
          "uuid": "9312d82c-8f97-4f05-ba48-1aced8e0d07c",
          "keyValues": [],
          "concept": {
            "name": "Other BP Medicine,Please Specify",
            "uuid": "a33b70fa-7761-4acb-a3f4-18a0d6c9fb8c",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("0a23f905-de38-42b6-87ca-0c1714e48bd1").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
          "name": "Have You Take Medicine Regularly?",
          "uuid": "bc787a70-d884-4338-a651-abeaf321ddd7",
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
          "displayOrder": 9,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("ddfe0dc7-5a4a-4b74-8816-c47dfd619a78").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Have You Take Any Medicine  for BP?",
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
          "name": "Why Not Take the Medicine?",
          "uuid": "86c83ac4-5da5-4afd-ad0f-0e5e01c10083",
          "keyValues": [],
          "concept": {
            "name": "Why Not Take the BP Medicine?",
            "uuid": "763dee7b-e2c6-45a0-b195-97842f3632c6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Allergic Reaction",
                "uuid": "dca92243-60ef-4031-93d5-bf2378d48a70",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Too Much Medicine",
                "uuid": "04687965-d09f-4266-a078-34fb77d37456",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Bedridden No One Get Medicine for Me",
                "uuid": "cd13ad3e-1789-456f-a1f6-ce15a7a3e91f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Lack of Understanding About Medicine",
                "uuid": "152fdfe6-2342-4cf9-8cc1-cf7bbd54f841",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Started Alternate Treatment",
                "uuid": "a98d0f50-b591-4ae8-bfc2-06fa8cd26ffa",
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
                "order": 6,
                "active": true
              },
              {
                "name": "I Do Not Have Any Symptoms, so I Am Not Am Not Taking Medicine",
                "uuid": "e278bd20-c806-4d43-88fb-755de01cf739",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 10,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("9264423c-6649-4062-a617-b10e0b02f11c").containsAnswerConceptName("16092a1e-4a02-4ffd-a3a9-47f07f147a12").matches();
  
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
                          "conceptName": "Are You Taking BP Medicine Regularly?",
                          "conceptUuid": "9264423c-6649-4062-a617-b10e0b02f11c",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "16092a1e-4a02-4ffd-a3a9-47f07f147a12"
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
          "name": "Other Reason for Not Take the Medicine,Please Specify",
          "uuid": "b7f49e41-eb61-4cf9-a79e-79afbf5a0317",
          "keyValues": [],
          "concept": {
            "name": "Other Reason for Not Take the BP Medicine,Please Specify",
            "uuid": "40d45cae-5485-445a-b4f1-74424661d33a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("763dee7b-e2c6-45a0-b195-97842f3632c6").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
                          "conceptName": "Why Not Take the BP Medicine?",
                          "conceptUuid": "763dee7b-e2c6-45a0-b195-97842f3632c6",
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
          "name": "Does Medicine Have Any Side Effects in You?",
          "uuid": "e473301e-78e1-4e0d-b13c-c7017e9de4b3",
          "keyValues": [],
          "concept": {
            "name": "Does BP Medicine Have Any Side Effects in You?",
            "uuid": "29995dcb-8ccc-4115-8295-f291d9a19726",
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
          "displayOrder": 12,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("9264423c-6649-4062-a617-b10e0b02f11c").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Are You Taking BP Medicine Regularly?",
                          "conceptUuid": "9264423c-6649-4062-a617-b10e0b02f11c",
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
          "name": "Which Type of Reaction?",
          "uuid": "fffbf3a2-493f-41fd-8776-255d3a268fcd",
          "keyValues": [],
          "concept": {
            "name": "Which Type of Reaction for BP?",
            "uuid": "9ccd4b34-74e6-411f-8ca0-b8d5cd867fa0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "None",
                "uuid": "540cc15d-2ad4-496c-8514-64031f08290a",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "unique": true,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "unique": true,
                "active": true
              },
              {
                "name": "Chest Pain",
                "uuid": "49818476-ed2c-4c79-9e5d-5e9833f6764a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Rashes",
                "uuid": "d5b85de7-b098-4b07-a13e-574f07ffe8fe",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Leg Cramps",
                "uuid": "e6c4ddf8-769c-4f95-be91-3f4c48c14aa7",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Oedema of Feet",
                "uuid": "8c2b415c-902c-40cb-bfc1-48343984069f",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Headache",
                "uuid": "5d914b73-2c8e-4169-ac47-728bc266bd6e",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Frequent Urination",
                "uuid": "479b2160-2650-4035-9add-7b552f60d061",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Weight Loss",
                "uuid": "08c296b9-fea1-47b1-908c-7a2bde44615f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Stomach Discomfort",
                "uuid": "06525a68-8064-4543-a4f1-7c14007c006e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 13,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("29995dcb-8ccc-4115-8295-f291d9a19726").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Does BP Medicine Have Any Side Effects in You?",
                          "conceptUuid": "29995dcb-8ccc-4115-8295-f291d9a19726",
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
          "mandatory": false
        },
        {
          "name": "Other type of Reaction, Please Specify",
          "uuid": "a282a60d-d465-4c2f-97d4-ba16e8f6e0b1",
          "keyValues": [],
          "concept": {
            "name": "Other type of Reaction for BP, Please Specify",
            "uuid": "47909cd7-7c2e-4354-82ce-4d2b9cdf4204",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("9ccd4b34-74e6-411f-8ca0-b8d5cd867fa0").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
                          "conceptName": "Which Type of Reaction for BP?",
                          "conceptUuid": "9ccd4b34-74e6-411f-8ca0-b8d5cd867fa0",
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
          "name": "Are You Still Experiencing Any Symptoms for HTN?",
          "uuid": "f53d8bfd-75bc-433d-8631-001babdd5deb",
          "keyValues": [],
          "concept": {
            "name": "Are You Still Experiencing Any Symptoms for HTN?",
            "uuid": "a5527022-86dc-4eb0-9ef4-5b1afdc2895c",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("9264423c-6649-4062-a617-b10e0b02f11c").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Are You Taking BP Medicine Regularly?",
                          "conceptUuid": "9264423c-6649-4062-a617-b10e0b02f11c",
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
          "name": "Which Type of Symptoms?",
          "uuid": "647b35f6-9a39-4458-929c-c980b7825694",
          "keyValues": [],
          "concept": {
            "name": "Which Type of Symptoms for BP?",
            "uuid": "d0c8e1a8-be4f-431a-b7f0-3360a8540624",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Chest Pain",
                "uuid": "49818476-ed2c-4c79-9e5d-5e9833f6764a",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Ringing in the Ears",
                "uuid": "ba929707-a247-4882-9032-8e610ab1aed3",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Excessive Fatigue",
                "uuid": "d6f642a0-d87b-4c58-8343-67fc4a4abd68",
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
                "order": 9,
                "active": true
              },
              {
                "name": "Headache",
                "uuid": "5d914b73-2c8e-4169-ac47-728bc266bd6e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Dizziness or Feeling Weak",
                "uuid": "f31cfbef-a59f-4e74-bbaa-7904fec2f907",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Difficulty in Breathing",
                "uuid": "05454cec-3796-464b-b0c3-9b1f865a2918",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Vision Problem",
                "uuid": "c0a66b61-9229-45d6-a686-9cf715ced521",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Palpitation",
                "uuid": "3e422b63-022f-48e5-88bc-bbc9f3d0f129",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Bleeding from Nose",
                "uuid": "a4c5e58e-d1c4-4cb4-bb48-fee21ff765ee",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 16,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("a5527022-86dc-4eb0-9ef4-5b1afdc2895c").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
                          "conceptName": "Are You Still Experiencing Any Symptoms for HTN?",
                          "conceptUuid": "a5527022-86dc-4eb0-9ef4-5b1afdc2895c",
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
          "name": "Other Symptoms? Please Specify",
          "uuid": "0487321e-ffbc-44a3-a09f-a51fee7a10f4",
          "keyValues": [],
          "concept": {
            "name": "Other Symptoms for BP? Please Specify",
            "uuid": "197acd9b-b68a-41bc-ae71-0391ed89c43d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 17,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("d0c8e1a8-be4f-431a-b7f0-3360a8540624").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
                          "conceptName": "Which Type of Symptoms for BP?",
                          "conceptUuid": "d0c8e1a8-be4f-431a-b7f0-3360a8540624",
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
          "name": "Today's Systolic Blood Pressure ( First Time)",
          "uuid": "9d104ee5-b048-4fa2-9b44-8fe714a30cc5",
          "keyValues": [],
          "concept": {
            "name": "First Time Systolic Blood Pressure",
            "uuid": "79ad36f7-abc5-4728-8ab7-de164bd998f4",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 18,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Today's Diastolic Blood Pressure ( First Time)",
          "uuid": "6222183a-745b-4a44-8c2e-01dd05a8465a",
          "keyValues": [],
          "concept": {
            "name": "First Time Diastolic Blood Pressure",
            "uuid": "d8d21249-2275-43af-8804-547e4ebd5cea",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 19,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Today's Systolic Blood Pressure ( Second Time)",
          "uuid": "7c2291ed-3bae-41eb-9c0b-2f3880d3e2a9",
          "keyValues": [],
          "concept": {
            "name": "Second Time Systolic Blood Pressure",
            "uuid": "5bd04fe1-a466-4961-872f-ed379c3c0845",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 20,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Today's Diastolic Blood Pressure ( Second Time)",
          "uuid": "8af1a58b-a72f-490f-af6f-1f821356883d",
          "keyValues": [],
          "concept": {
            "name": "Second Time Diastolic Blood Pressure",
            "uuid": "1a732816-f11e-4038-aadf-576460ce2027",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 21,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Today's Systolic Blood Pressure ( Third Time)",
          "uuid": "fe732b9f-1472-466f-85fe-56eb87e3168d",
          "keyValues": [],
          "concept": {
            "name": "Third Time Systolic Blood Pressure",
            "uuid": "b9c3df81-4906-4c39-b7fe-fe1a118f7eaf",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 22,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Today's Diastolic Blood Pressure (Third Time)",
          "uuid": "8f0ee06d-e494-4837-b2ef-86830095a597",
          "keyValues": [],
          "concept": {
            "name": "Third Time Diastolic Blood Pressure",
            "uuid": "2b57c2f1-5b81-4d08-9f1d-186043cd0237",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 23,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Average Systolic Blood Pressure",
          "uuid": "3188e050-8745-4e5f-808f-6ca062176f26",
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
          "displayOrder": 24,
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
          "uuid": "57ae3403-a94d-4bf1-b418-4624312e6b4b",
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
  

  let firstDia = encounter.getObservationValue("d8d21249-2275-43af-8804-547e4ebd5cea");
  let secondDia = encounter.getObservationValue("1a732816-f11e-4038-aadf-576460ce2027");
  let thirdDia = encounter.getObservationValue("2b57c2f1-5b81-4d08-9f1d-186043cd0237");
  
  value = (firstDia+secondDia+thirdDia)/3;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
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
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("b26f1f64-8fb6-48e8-b3cb-230c289a6c73").equals("Hypertension").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("b26f1f64-8fb6-48e8-b3cb-230c289a6c73").equals("Both").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("9cb507a3-4aa7-4afd-b78f-2c5f60fd055a").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
        visibility = condition11 || condition21 || condition31 ;
  
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
              "conjunction": "or",
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "encounter",
                      "conceptName": "Scheduled Followup For",
                      "conceptUuid": "b26f1f64-8fb6-48e8-b3cb-230c289a6c73",
                      "conceptDataType": "Text"
                    },
                    "rhs": {
                      "type": "value",
                      "value": "Hypertension"
                    },
                    "operator": "equals"
                  }
                ],
                "conjunction": "and"
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
                      "conceptName": "Scheduled Followup For",
                      "conceptUuid": "b26f1f64-8fb6-48e8-b3cb-230c289a6c73",
                      "conceptDataType": "Text"
                    },
                    "rhs": {
                      "type": "value",
                      "value": "Both"
                    },
                    "operator": "equals"
                  }
                ],
                "conjunction": "and"
              }
            },
            {
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "encounter",
                      "conceptName": "Do Also Want to Follow up for Hypertension?",
                      "conceptUuid": "9cb507a3-4aa7-4afd-b78f-2c5f60fd055a",
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
      "display": "Hypertension Followup Details",
      "timed": false
    },
    {
      "uuid": "636b748f-5449-4f58-8741-97797285834d",
      "name": "Referral Details",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Referral Required",
          "uuid": "c2c40004-4dca-41a5-a1e4-94dc00ad3e05",
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
          "mandatory": true
        },
        {
          "name": "Date of Referral",
          "uuid": "ce19fb31-1fab-45f8-9e5c-387b3b24ab8f",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of Referral",
            "uuid": "5f2dd567-1340-4c63-8e24-cb79712964a7",
            "dataType": "Date",
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
  
  const encounterDateTime = moment(programEncounter.encounterDateTime).startOf('day');

  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("4fccbb67-b4f9-4fe5-a187-0c2645962485").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
  visibility = condition11 ;
  let refDate = programEncounter.getObservationValue("5f2dd567-1340-4c63-8e24-cb79712964a7");
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
          "uuid": "5e5a9af0-3ddf-4d53-b043-4c78aed3ce4d",
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
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("4fccbb67-b4f9-4fe5-a187-0c2645962485").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
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
          "uuid": "48d95570-539f-493c-8bd5-b6ab211247bb",
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
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("2559c679-c60d-4a71-92b9-1fd4e7fd2f92").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
    const sugarLevel = programEncounter.getObservationValue("509542f2-b76d-4339-af57-add590b8d536");
    
        
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
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const HYPERTENSION_CONCEPT = '08a08802-97b2-43d3-8757-16a3b4ecf3c8';
  const BLOOD_SUGAR_CONCEPT = '509542f2-b76d-4339-af57-add590b8d536';
  const SEVERE_HYPERTENSION_GRADES = ['Grade Two', 'Grade Three', 'Grade Four', 'Grade Five', 'Grade Six'];
  const ENCOUNTER_TYPE = 'NCD Followup';
  
  const programEncounter = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({ programEncounter });
  const moment = imports.moment;
  
  const screeningDateTime = programEncounter.encounterDateTime;
  const hypertensionGrade = programEncounter.getObservationValue(HYPERTENSION_CONCEPT);
  const randomBloodSugar = parseFloat(programEncounter.getObservationValue(BLOOD_SUGAR_CONCEPT));
  
  const getHypertensionConfig = (grade) => ({
    'Grade Two': { minDays: 180, maxDays: 210 },
    'Grade Three': { minDays: 60, maxDays: 75 },
    'Grade Four': { minDays: 30, maxDays: 45 },
    'Grade Five': { minDays: 7, maxDays: 15 },
    'Grade Six': { minDays: 3, maxDays: 7 }
  }[grade] || { minDays: 365, maxDays: 395 });
  
  const getDiabetesConfig = (sugarLevel) => 
    sugarLevel > 200 ? { minDays: 15, maxDays: 30 } : { minDays: 60, maxDays: 75 };
  
  const scheduleFollowUp = (name, config, isYearly = false) => {
    const days = isYearly ? 365 : config.minDays;
    const maxDays = isYearly ? 395 : config.maxDays;
    
    scheduleBuilder.add({
      name,
      encounterType: ENCOUNTER_TYPE,
      earliestDate: moment(screeningDateTime).add(days, 'days').startOf('day').toDate(),
      maxDate: moment(screeningDateTime).add(maxDays, 'days').endOf('day').toDate()
    });
  };
  
  const hasHighSugar = !isNaN(randomBloodSugar) && randomBloodSugar >= 150;
  const isSevereHypertension = SEVERE_HYPERTENSION_GRADES.includes(hypertensionGrade);
  
  // Only schedule one type of follow-up
  if (hasHighSugar && isSevereHypertension) {
    // Combined follow-up - take the more urgent of the two conditions
    const diabetesConfig = getDiabetesConfig(randomBloodSugar);
    const hypertensionConfig = getHypertensionConfig(hypertensionGrade);
    const combinedConfig = hypertensionConfig.minDays <= diabetesConfig.minDays 
      ? hypertensionConfig 
      : diabetesConfig;
    
    scheduleFollowUp('FollowUp-Combined', combinedConfig);
  } 
  else if (hasHighSugar) {
    // Diabetes only follow-up
    const diabetesConfig = getDiabetesConfig(randomBloodSugar);
    scheduleFollowUp('FollowUp-Diabetes', diabetesConfig);
  }
  else if (hypertensionGrade === 'Grade One' && (!hasHighSugar || randomBloodSugar < 150)) {
    // Yearly checkup for Grade One hypertension with normal blood sugar
    scheduleFollowUp('Yearly-Combined', {}, true);
  }
  else if (hypertensionGrade) {
    // Other hypertension grades follow-up
    const config = getHypertensionConfig(hypertensionGrade);
    scheduleFollowUp('FollowUp-Hypertension', config);
  }
  
  return scheduleBuilder.getAll();
}
,
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