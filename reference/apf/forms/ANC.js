{
  "name": "ANC",
  "uuid": "de627061-b255-4cdd-bf82-db02390fa406",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "32e9fd39-d6c5-4e23-baab-75336bc515da",
      "name": "Visit Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Place of ANC",
          "uuid": "e4051446-e4a2-43d1-9e49-3bec96247757",
          "keyValues": [],
          "concept": {
            "name": "Place of ANC",
            "uuid": "6c44c836-8c53-4e7e-b8dd-c61aae7599fb",
            "dataType": "Coded",
            "answers": [
              {
                "name": "HSC",
                "uuid": "79f33f78-26e8-4c61-9523-0674666fa9c5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "DH",
                "uuid": "aeff17ad-99ba-423a-8754-d1430836d178",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "AWC/VHND",
                "uuid": "25e1dc4f-1379-46da-b628-d5187294b3b7",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "CHC",
                "uuid": "7f0d8995-6b14-4d2c-b285-9e1c0bb3d03b",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Private hospital/Patholab/Clinic",
                "uuid": "27e724de-b260-4a60-a90f-a677a3869c3c",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "PHC",
                "uuid": "19891cc9-2dc5-47b9-8a42-30d7bb63934c",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Any other govt facility",
                "uuid": "9c1de644-0982-474c-a7e9-28036ab376dd",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "MC",
                "uuid": "f1cde61a-149b-44d6-9e17-7914492688d2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
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
  
  
  /*let condition1 = moment(programEncounter.encounterDateTime).isAfter(moment(programEncounter.maxVisitDateTime));
  
  
  if(condition1 ){
    validationErrors.push("Overdue forms cannot be filled, please cancel this form so that next due form can be scheduled");  
}*/


  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Specify other govt facility",
          "uuid": "634ae2f6-5ca4-428b-ab66-3a7b2528a249",
          "keyValues": [],
          "concept": {
            "name": "Specify other govt facility",
            "uuid": "1f530616-37d7-4158-8e8c-046476dd19a9",
            "dataType": "Text",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("6c44c836-8c53-4e7e-b8dd-c61aae7599fb").containsAnswerConceptName("9c1de644-0982-474c-a7e9-28036ab376dd").matches();
  
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
                          "conceptName": "Place of ANC",
                          "conceptUuid": "6c44c836-8c53-4e7e-b8dd-c61aae7599fb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other govt facility"
                          ],
                          "answerConceptUuids": [
                            "9c1de644-0982-474c-a7e9-28036ab376dd"
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
          "mandatory": false
        },
        {
          "name": "Weight",
          "uuid": "c7145ffc-fc72-4cfa-ad82-ab8663eb0efe",
          "keyValues": [],
          "concept": {
            "name": "Weight of women",
            "uuid": "3981ddb0-30a3-43d2-9564-16ae9cc0e25e",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 30,
            "highAbsolute": 90,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "BMI",
          "uuid": "42a01a36-941b-4f6a-9983-d087b4191473",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "BMI",
            "uuid": "02e4238a-443e-4951-8553-aa0cd7de8476",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const _ = imports.lodash;
  const formElement = params.formElement;
  
  let weight = programEncounter.findObservation("Weight of women");
  let height = programEncounter.programEnrolment.findObservation("Height of women");
  
        height = height && height.getValue();
        weight = weight && weight.getValue();
        let value = '';
  
  if (_.isFinite(weight) && _.isFinite(height)) {
         value = ruleServiceLibraryInterfaceForSharingModules.common.calculateBMI(weight, height);
       }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, true, value);  
},
          "mandatory": false
        },
        {
          "name": "BP measured",
          "uuid": "0d6bf8cc-52fe-42ed-b336-c6e4b7922aa7",
          "keyValues": [],
          "concept": {
            "name": "BP measured",
            "uuid": "b7a8ecb8-4d97-4b2f-ab3c-5d9d0ac770c7",
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
                "name": "Don’t Know/Don’t Remember",
                "uuid": "749f3f54-ba48-45e2-9899-66b64f96901b",
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
              }
            ],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "BP Systolic Previous Month",
          "uuid": "263703c4-5214-46c9-a356-cf6b3a5a4da8",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "BP Systolic Previous Month",
            "uuid": "cbe004b7-4f06-4414-acfc-d29ea2701451",
            "dataType": "Numeric",
            "answers": [],
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
  
  let encounterList = programEncounter.programEnrolment.encounters.filter((enc)=> enc.encounterType.name === 'ANC' && enc.voided == false && enc.cancelDateTime == null);
  
  encounterList = _.orderBy(encounterList,['earliestVisitDateTime'],['asc']);
  
  visibility =  !(encounterList[0] && encounterList[0].uuid == programEncounter.uuid);
  
  if(visibility){
      encounterList = encounterList.filter(enc=>enc.encounterDateTime != null);
      const current = encounterList.length > 0 &&  encounterList[encounterList.length -1].getObservationReadableValue("BP Systolic Current Month");
      if(current){
          value = current;
      }
      else{
          visibility = false;
      }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "BP Systolic Current Month",
          "uuid": "612c1aa2-a6a0-4505-b208-b0da029a60df",
          "keyValues": [],
          "concept": {
            "name": "BP Systolic Current Month",
            "uuid": "17e8fc51-b021-41b1-a4e3-c43fcfd5eeee",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 30,
            "highAbsolute": 300,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("b7a8ecb8-4d97-4b2f-ab3c-5d9d0ac770c7").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "BP measured",
                          "conceptUuid": "b7a8ecb8-4d97-4b2f-ab3c-5d9d0ac770c7",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "8ebbf088-f292-483e-9084-7de919ce67b7"
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
          "name": "BP Diastolic Previous Month",
          "uuid": "e5a598bf-bcbd-45e2-9570-cedd4b37546c",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "BP Diastolic Previous Month",
            "uuid": "a15d0b15-e221-4a44-a191-e099eae68016",
            "dataType": "Numeric",
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
  
  let encounterList = programEncounter.programEnrolment.encounters.filter((enc)=> enc.encounterType.name === 'ANC' && enc.voided == false && enc.cancelDateTime == null);
  
  encounterList = _.orderBy(encounterList,['earliestVisitDateTime'],['asc']);
  
  visibility =  !(encounterList[0] && encounterList[0].uuid == programEncounter.uuid);
  
  if(visibility){
      encounterList = encounterList.filter(enc=>enc.encounterDateTime != null);
      const current =  encounterList.length > 0 &&  encounterList[encounterList.length -1].getObservationReadableValue("BP Diastolic Current Month");
      if(current){
          value = current;
      }
      else{
          visibility = false;
      }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "BP Diastolic Current Month",
          "uuid": "aa450e69-cff4-4389-afe8-379583b47baa",
          "keyValues": [],
          "concept": {
            "name": "BP Diastolic Current Month",
            "uuid": "4d44af0f-9426-4a4e-b1d0-33cab54140ab",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 30,
            "highAbsolute": 150,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("b7a8ecb8-4d97-4b2f-ab3c-5d9d0ac770c7").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "BP measured",
                          "conceptUuid": "b7a8ecb8-4d97-4b2f-ab3c-5d9d0ac770c7",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "8ebbf088-f292-483e-9084-7de919ce67b7"
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
          "name": "Ultrasound taken?",
          "uuid": "49af354c-0b66-46b3-8222-19186f29bbaa",
          "keyValues": [],
          "concept": {
            "name": "Ultrasound taken?",
            "uuid": "ed9ba8dd-19ec-490c-876b-f2a64d64af09",
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
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Abdominal observation",
          "uuid": "7918b27f-ce1d-498e-9275-3544107e009f",
          "keyValues": [],
          "concept": {
            "name": "Abdominal observation",
            "uuid": "a6b3f1aa-f5f8-4591-9a95-97c73edc07f7",
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
                "name": "Don’t Know/Don’t Remember",
                "uuid": "749f3f54-ba48-45e2-9899-66b64f96901b",
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
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "TD vaccine",
          "uuid": "17b3022b-e2d4-48b2-8b35-e4c9a8d13642",
          "keyValues": [],
          "concept": {
            "name": "TD vaccine",
            "uuid": "68cac2be-a340-46ab-ac71-34fc4eaef966",
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
                "name": "Don’t Know/Don’t Remember",
                "uuid": "749f3f54-ba48-45e2-9899-66b64f96901b",
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
              }
            ],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Urine test",
          "uuid": "c4b0c22d-b082-4d8c-a9e8-0eddc6a84d1f",
          "keyValues": [],
          "concept": {
            "name": "Urine test",
            "uuid": "f7755e44-ea42-4a3e-af30-8ba033976dae",
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
              },
              {
                "name": "Don’t Know/Don’t Remember",
                "uuid": "749f3f54-ba48-45e2-9899-66b64f96901b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
          "name": "Sugar test",
          "uuid": "c6d717a7-5f41-4a5c-982c-3bbaafb44270",
          "keyValues": [],
          "concept": {
            "name": "Sugar test",
            "uuid": "47d89367-1e3f-439b-be10-01b129ef85e5",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Don’t Know/Don’t Remember",
                "uuid": "749f3f54-ba48-45e2-9899-66b64f96901b",
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
          "displayOrder": 14,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Sugar test (value)",
          "uuid": "34de2b49-3527-4a6f-9c8f-8f6f758171ca",
          "keyValues": [],
          "concept": {
            "name": "Sugar test (value)",
            "uuid": "6ae2509f-c7af-46fc-a11d-98a6445bd724",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("47d89367-1e3f-439b-be10-01b129ef85e5").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "Sugar test",
                          "conceptUuid": "47d89367-1e3f-439b-be10-01b129ef85e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "8ebbf088-f292-483e-9084-7de919ce67b7"
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
          "name": "HB test",
          "uuid": "35790f8e-1783-4897-9191-6f9ad91d1fcc",
          "keyValues": [],
          "concept": {
            "name": "HB test",
            "uuid": "75124e31-e011-435f-9036-6725189eca72",
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
                "name": "Don’t Know/Don’t Remember",
                "uuid": "749f3f54-ba48-45e2-9899-66b64f96901b",
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
              }
            ],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "HB test (value)",
          "uuid": "d278766b-2d21-47b4-b072-49f2e3f3878d",
          "keyValues": [],
          "concept": {
            "name": "HB",
            "uuid": "68bc6e51-eb49-4816-b78b-2427bbab8d92",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("75124e31-e011-435f-9036-6725189eca72").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "HB test",
                          "conceptUuid": "75124e31-e011-435f-9036-6725189eca72",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "8ebbf088-f292-483e-9084-7de919ce67b7"
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
          "name": "Pregnancy geographically high risk?",
          "uuid": "c9599c27-33dd-4db0-b6ed-b82201005c85",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Pregnancy geographically high risk",
            "uuid": "96b167e1-2d98-40b9-af04-8e4f64f9999a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
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
          "displayOrder": 18,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  let value = 'No';
  let answersToSkip = [];
  let validationErrors = [];
  
  const lmp = programEncounter.programEnrolment.getObservationReadableValue("Last menstrual period");
  
  const seventhMonthDate = moment(lmp).add(183,'d');
  const currentMonthDate = moment(programEncounter.earliestVisitDateTime);

  const condition1 = currentMonthDate.isSameOrAfter(seventhMonthDate);
  
  const locationProperties = programEncounter.programEnrolment.individual.lowestAddressLevel.locationProperties;  
  
  if(locationProperties.length > 0){
     const locationProperty = locationProperties.filter(prop=>prop.concept.name == 'Geographically hard to reach village');
     if(locationProperty.length==1){
         const valueJSON = locationProperty[0].valueJSON;
         const answer = JSON.parse(valueJSON).answer;
         if(answer=="8ebbf088-f292-483e-9084-7de919ce67b7" && condition1){ 
            value = 'Yes';
            visibility =  true;
         } 
     }
  }

  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Is there a medical facillity intervention required for treatment?",
          "uuid": "673da722-8152-49f2-a411-b15950331240",
          "keyValues": [],
          "concept": {
            "name": "Is there a medical facillity intervention required for treatment?",
            "uuid": "35f880ca-60b5-4240-97e1-813c0a7a78c4",
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
          "displayOrder": 19,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("96b167e1-2d98-40b9-af04-8e4f64f9999a").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  const condition22 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInPreviousEncounters("35f880ca-60b5-4240-97e1-813c0a7a78c4").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
  if(condition11 && !condition22){
    visibility =  true;
  }

  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Pregnancy induced morbidity conditions",
          "uuid": "c2a31124-d05c-4003-81e0-fe465c829ec2",
          "keyValues": [],
          "concept": {
            "name": "Pregnancy induced morbidity conditions list",
            "uuid": "12d99265-c769-4236-aff5-fcba73976396",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No pre-morbidity conditions",
                "uuid": "56bf6a03-bb0f-4d90-b975-9ae03cd67b70",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "unique": true,
                "active": true
              },
              {
                "name": "Diabetes/ Gestational Diabetes",
                "uuid": "9f6c206e-f04a-4a2a-b3ae-78edbffb0f62",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Malaria Positive",
                "uuid": "681a29be-6127-451a-9617-ac62a242d082",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Tuberculosis",
                "uuid": "34f5f1a8-8a03-47d0-a91b-2a0fe959fc10",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Hypothyroidism",
                "uuid": "1e527e8b-76ef-426d-aee7-a9002dc031d0",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Heart conditions",
                "uuid": "dea0c584-32a3-493a-be95-66588e01181a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Syphillis",
                "uuid": "d9414d88-e0cf-4ffe-9cba-151d6879b773",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Pre-eclampsia",
                "uuid": "b95305a1-1831-49b7-a5a6-b4cb458a5d6f",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Thalassemia",
                "uuid": "83168c77-2a4d-4650-9ead-5c42f1c7f0c4",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Asthma",
                "uuid": "11228d39-49f1-4a44-9bbf-6c673c208326",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Sickle cell anemia",
                "uuid": "4b0c2486-20ac-458b-b89a-28603715aeb2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Hypertension",
                "uuid": "621462ed-23da-4b73-b590-4af8ccf34b45",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other pre-morbidity conditions",
                "uuid": "9f771423-6205-42db-8428-293ac0ad9b13",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 20,
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
  
  const isAnemia = new imports.rulesConfig.RuleCondition({programEncounter}).when.valueInEncounter("68bc6e51-eb49-4816-b78b-2427bbab8d92").lessThanOrEqualTo(10.9).matches();
  
  const isMorbidityCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("12d99265-c769-4236-aff5-fcba73976396").containsAnswerConceptNameOtherThan("56bf6a03-bb0f-4d90-b975-9ae03cd67b70").matches();
  
  const isBMILowInEnrolment = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEnrolment("02e4238a-443e-4951-8553-aa0cd7de8476").lessThan(18.5).matches();
  
    let isInadequareWeightGain = false;

    const earliestDate = moment(programEncounter.earliestVisitDateTime);
    const ancPreviousEncounters = programEncounter.programEnrolment.getEncounters(true).filter((enc) => enc.encounterType.name === 'ANC' && enc.encounterDateTime && earliestDate.isAfter(moment(enc.earliestVisitDateTime)));

    if (ancPreviousEncounters.length > 0) {
        ancPreviousEncounters.sort((a, b) => moment(b.earliestVisitDateTime).diff(moment(a.earliestVisitDateTime)));
        const lastANCEncounter = ancPreviousEncounters[0];

        const currentWeight = programEncounter.getObservationReadableValue("3981ddb0-30a3-43d2-9564-16ae9cc0e25e");
        const lastMonthWeight = lastANCEncounter.getObservationReadableValue("3981ddb0-30a3-43d2-9564-16ae9cc0e25e");

        if (lastMonthWeight + 2 > currentWeight) {
            isInadequareWeightGain = true;
        }
    }
  
  visibility = isAnemia || isMorbidityCondition || isBMILowInEnrolment || isInadequareWeightGain;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Have you received first installment of Mamata scheme amount?",
          "uuid": "21ae94d7-51be-4d6d-aa00-3ea3464e2b17",
          "keyValues": [],
          "concept": {
            "name": "Have you received first installment of Mamata scheme amount?",
            "uuid": "a1012f45-fb96-4bd0-94cb-2714065e4367",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Dont know",
                "uuid": "6efff09c-e027-49ae-b7c2-ff311dbdfd9b",
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
              },
              {
                "name": "Don't know",
                "uuid": "54f6160b-0c27-4bf7-b2e1-31f8f2fec972",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 22,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const programEnrolment = programEncounter.programEnrolment;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const lmp = programEncounter.programEnrolment.getObservationReadableValue("Last menstrual period");
  
  const seventhMonthDate = moment(lmp).add(180,'d');
  const currentMonthDate = moment(programEncounter.earliestVisitDateTime);

  const condition1 = currentMonthDate.isSameOrAfter(seventhMonthDate);
  const condition2 = (programEnrolment.findLatestObservationInEntireEnrolment("Have you received first installment of Mamata scheme amount?"))?true:false;
  
  console.log(`condition1 ${condition1} condition2 ${!condition2}`);
  
  
  if(condition1 && !condition2){
    visibility =  true;
  }
  
  
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Clinical high risk category",
          "uuid": "2a5eb342-0bb3-4fd8-bcc7-685268dd9029",
          "keyValues": [],
          "concept": {
            "name": "Clinically high risk",
            "uuid": "959cc421-380b-409b-8007-270c35d1e543",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Congenital malformation",
                "uuid": "1e167769-8cce-4e46-9ad9-cad964a1f048",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Premature Birth",
                "uuid": "62a9a0f0-e2e5-4e0d-aee2-cd1704ea90e0",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Mild anemia",
                "uuid": "9fc70140-e56b-4fb3-9261-2831f0e439d3",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Postpartum Hemorrhage",
                "uuid": "74f75a6f-1859-4f63-9d23-13fa882b4153",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Gravida 3 and Para 2",
                "uuid": "07cbfb35-3ebd-4844-9195-bea41587388f",
                "dataType": "NA",
                "answers": [],
                "order": 29,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Severe anemia",
                "uuid": "922fa8df-c11f-4c3f-bd2c-290079c19cd2",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Inadequate Weight Gain during Pregnancy",
                "uuid": "c844e580-e8a8-4251-b989-09bad1f4b015",
                "dataType": "NA",
                "answers": [],
                "order": 28,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Gravida is more than or equal to 4",
                "uuid": "5a33dde5-f5f4-49ff-acc1-3d7ede26dc52",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Obstructed labour",
                "uuid": "a2755462-a9a5-4094-a99e-2961beb9ee78",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "abnormal": true,
                "active": true
              },
              {
                "name": "BMI less than 18.5",
                "uuid": "83c690ab-e319-49ff-aaa4-1eccef57337c",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 30,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 31,
                "active": true
              },
              {
                "name": "Height Less than 147 cm",
                "uuid": "fa9c831b-3532-4f9e-bc53-3282a2bb8428",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Obstetric History of miscarriage, still birth etc.",
                "uuid": "6fb9e48a-a0c7-4c33-b428-4fe4177470c9",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Last Child death within 1 year",
                "uuid": "df107391-3e4a-4dc4-9536-692fe4d61a85",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Miscarriage/ Abortion",
                "uuid": "4c977b82-1405-4037-8cf2-b89597d42cfe",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Age is greater than 35 years",
                "uuid": "ad71b3c0-4d95-4f2b-892c-75ab40cf6442",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Height is less than 140 cm",
                "uuid": "91381321-7638-470f-b1e8-f1148af205a7",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Eclampsia",
                "uuid": "ec01498d-db7d-4e3d-bd05-d7fcf106c634",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Inter-pregnancy interval is less than 24 months",
                "uuid": "cf07926b-09b6-4c9e-91a6-ee1dbfc3efbe",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Weight Less than 37 kg",
                "uuid": "ddabf8cd-4b21-4d4b-a1bb-2be6554a6946",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "abnormal": true,
                "active": true
              },
              {
                "name": "HB Less than 7.0 g/dl",
                "uuid": "dc50229d-1fd6-4497-942b-ffb7789c3dce",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Age at marriage Less than 19 years",
                "uuid": "790970df-5ea2-4e67-bbf2-0f0cd53c5107",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Age greater than 35 yrs",
                "uuid": "2833e464-d721-4d45-96cb-0cabff149e91",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Age is less than 18 years",
                "uuid": "3daae4b4-0f28-461b-ad6c-040ca1b1fa28",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Less than 18 years marriage",
                "uuid": "887a2300-9a2a-4ff0-bb5c-5d1f69b96d10",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Still birth",
                "uuid": "8c2f1e75-cf54-4761-887f-b06e4ffa6463",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Cesarean Section (LSCS)",
                "uuid": "0642557d-1bac-4de9-996e-63925329f3a1",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Pregnancy induced morbidity conditions",
                "uuid": "7f2d5f3e-1542-4ace-acb1-b8b27d818df3",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Pregnancy induced morbidity conditions list",
                "uuid": "12d99265-c769-4236-aff5-fcba73976396",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "No pre-morbidity conditions",
                    "uuid": "56bf6a03-bb0f-4d90-b975-9ae03cd67b70",
                    "dataType": "NA",
                    "answers": [],
                    "order": 11,
                    "unique": true,
                    "active": true
                  },
                  {
                    "name": "Diabetes/ Gestational Diabetes",
                    "uuid": "9f6c206e-f04a-4a2a-b3ae-78edbffb0f62",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "Malaria Positive",
                    "uuid": "681a29be-6127-451a-9617-ac62a242d082",
                    "dataType": "NA",
                    "answers": [],
                    "order": 12,
                    "active": true
                  },
                  {
                    "name": "Tuberculosis",
                    "uuid": "34f5f1a8-8a03-47d0-a91b-2a0fe959fc10",
                    "dataType": "NA",
                    "answers": [],
                    "order": 2,
                    "active": true
                  },
                  {
                    "name": "Hypothyroidism",
                    "uuid": "1e527e8b-76ef-426d-aee7-a9002dc031d0",
                    "dataType": "NA",
                    "answers": [],
                    "order": 8,
                    "active": true
                  },
                  {
                    "name": "Heart conditions",
                    "uuid": "dea0c584-32a3-493a-be95-66588e01181a",
                    "dataType": "NA",
                    "answers": [],
                    "order": 7,
                    "active": true
                  },
                  {
                    "name": "Syphillis",
                    "uuid": "d9414d88-e0cf-4ffe-9cba-151d6879b773",
                    "dataType": "NA",
                    "answers": [],
                    "order": 9,
                    "active": true
                  },
                  {
                    "name": "Pre-eclampsia",
                    "uuid": "b95305a1-1831-49b7-a5a6-b4cb458a5d6f",
                    "dataType": "NA",
                    "answers": [],
                    "order": 4,
                    "active": true
                  },
                  {
                    "name": "Thalassemia",
                    "uuid": "83168c77-2a4d-4650-9ead-5c42f1c7f0c4",
                    "dataType": "NA",
                    "answers": [],
                    "order": 6,
                    "active": true
                  },
                  {
                    "name": "Asthma",
                    "uuid": "11228d39-49f1-4a44-9bbf-6c673c208326",
                    "dataType": "NA",
                    "answers": [],
                    "order": 3,
                    "active": true
                  },
                  {
                    "name": "Sickle cell anemia",
                    "uuid": "4b0c2486-20ac-458b-b89a-28603715aeb2",
                    "dataType": "NA",
                    "answers": [],
                    "order": 5,
                    "active": true
                  },
                  {
                    "name": "Hypertension",
                    "uuid": "621462ed-23da-4b73-b590-4af8ccf34b45",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  },
                  {
                    "name": "Other pre-morbidity conditions",
                    "uuid": "9f771423-6205-42db-8428-293ac0ad9b13",
                    "dataType": "NA",
                    "answers": [],
                    "order": 10,
                    "active": true
                  }
                ],
                "order": 26,
                "active": true
              },
              {
                "name": "Moderate anemia",
                "uuid": "4f926120-e3ab-4a15-8468-99f09ba9ff74",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Gravida more than equal to 3",
                "uuid": "8acebfb6-637d-4dcb-aba8-6df52e8a7655",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 23,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Visit Details",
      "timed": false
    },
    {
      "uuid": "9fd87e08-09f4-4950-8f33-bb7574f3414e",
      "name": "Other details",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "IFA received till date",
          "uuid": "560cfb4c-5534-4399-8ac5-96d95a99afa6",
          "keyValues": [],
          "concept": {
            "name": "IFA received till date",
            "uuid": "521cabeb-2a98-4115-a2dc-a8c3a170c653",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 720,
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "IFA consumed till date",
          "uuid": "35a8427c-6beb-40b1-a484-ae5832f61a2b",
          "keyValues": [],
          "concept": {
            "name": "IFA consumed till date",
            "uuid": "eab22faa-f90e-4cbc-b00a-05fa35e6936b",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 720,
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
  let ifaReceivedTillDateObservation = programEncounter.findObservation('521cabeb-2a98-4115-a2dc-a8c3a170c653');
  let ifaReceivedTillDateValue = _.isEmpty(ifaReceivedTillDateObservation) ? ifaReceivedTillDateObservation : ifaReceivedTillDateObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("eab22faa-f90e-4cbc-b00a-05fa35e6936b").greaterThan(ifaReceivedTillDateValue).matches();
  
  if(condition11 ){
    validationErrors.push("Number of tablets consumed cannot be greater than received");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "Number of tablets consumed cannot be greater than received"
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
                          "conceptName": "IFA consumed till date",
                          "conceptUuid": "eab22faa-f90e-4cbc-b00a-05fa35e6936b",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "IFA received till date",
                          "conceptUuid": "521cabeb-2a98-4115-a2dc-a8c3a170c653"
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
          "name": "Calcium received till date",
          "uuid": "e80ab292-c02f-4a78-911c-5a4505558a5b",
          "keyValues": [],
          "concept": {
            "name": "Calcium received till date",
            "uuid": "a993d25a-0413-4ac9-a169-44735fc511ed",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 720,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Calcium consumed till date",
          "uuid": "9f1d970e-bf18-4878-956f-00d59021b684",
          "keyValues": [],
          "concept": {
            "name": "Calcium consumed till date",
            "uuid": "10c5c998-8dad-4113-a97b-35ca5ae7d89a",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 720,
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
  let calciumReceivedTillDateObservation = programEncounter.findObservation('a993d25a-0413-4ac9-a169-44735fc511ed');
  let calciumReceivedTillDateValue = _.isEmpty(calciumReceivedTillDateObservation) ? calciumReceivedTillDateObservation : calciumReceivedTillDateObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("10c5c998-8dad-4113-a97b-35ca5ae7d89a").greaterThan(calciumReceivedTillDateValue).matches();
  
  if(condition11 ){
    validationErrors.push("Calcium consumed cannot be greater than received");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "Calcium consumed cannot be greater than received"
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
                          "conceptName": "Calcium consumed till date",
                          "conceptUuid": "10c5c998-8dad-4113-a97b-35ca5ae7d89a",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Calcium received till date",
                          "conceptUuid": "a993d25a-0413-4ac9-a169-44735fc511ed"
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
          "name": "Did you receive THR from AWC last month?",
          "uuid": "28ed83a1-ba9a-4092-ad41-f13d56868fd4",
          "keyValues": [],
          "concept": {
            "name": "Did you receive THR from AWC last month",
            "uuid": "270ffe54-a6d8-4e34-8af4-8c3ff6e89a29",
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Did you receive egg from AWC last month?",
          "uuid": "bcfd9318-5223-4fce-82f6-bc90c89a6bb8",
          "keyValues": [],
          "concept": {
            "name": "Did you receive egg from AWC last month",
            "uuid": "aaac0257-2c9c-4438-b45b-8df679df1edf",
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
          "name": "Did you receive additional IFA for being high risk",
          "uuid": "b2231f9f-858a-4c2e-bf0e-e1d96b4f66a3",
          "keyValues": [],
          "concept": {
            "name": "Did you receive additional IFA for being high risk",
            "uuid": "89534073-7a0a-4aea-b764-cca08a4ea383",
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
              },
              {
                "name": "NA",
                "uuid": "a1da52a7-f587-4f8f-9349-2d4ee4dae563",
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
          "mandatory": false
        },
        {
          "name": "Did you receive additional THR (MSPY)?",
          "uuid": "b1b87b68-7ee3-47da-a7b6-c5bdf2b86385",
          "keyValues": [],
          "concept": {
            "name": "Did you receive additional THR (MSPY)?",
            "uuid": "914f2acc-d449-4911-a14f-82c4d51ad20a",
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
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Other details",
      "timed": false
    }
  ],
  "decisionRule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const validationResults = [];
  
  const isMaxVisitDateTimeGreaterThanToday = moment(programEncounter.maxVisitDateTime).isBefore(moment(), 'day');

  if (isMaxVisitDateTimeGreaterThanToday) {
    validationResults.push(imports.common.createValidationError("You cannot complete an overdue visit. Please cancel this visit."));  
  }
  
  return validationResults;
},
  "checklistsRule": "",
  "decisionConcepts": [
    {
      "name": "To be monitored by QRT",
      "uuid": "be0ab05f-b0f3-43ec-b598-fdde0679104a",
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
      "active": true,
      "keyValues": []
    },
    {
      "name": "High risk condition",
      "uuid": "9a7f284b-251d-459b-97d9-929ed280b3d3",
      "dataType": "Coded",
      "answers": [
        {
          "name": "Tuberculosis",
          "uuid": "34f5f1a8-8a03-47d0-a91b-2a0fe959fc10",
          "dataType": "NA",
          "answers": [],
          "order": 38,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Still birth",
          "uuid": "8c2f1e75-cf54-4761-887f-b06e4ffa6463",
          "dataType": "NA",
          "answers": [],
          "order": 16,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Gravida is more than or equal to 4",
          "uuid": "5a33dde5-f5f4-49ff-acc1-3d7ede26dc52",
          "dataType": "NA",
          "answers": [],
          "order": 4,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of miscarriage, still birth etc.",
          "uuid": "6fb9e48a-a0c7-4c33-b428-4fe4177470c9",
          "dataType": "NA",
          "answers": [],
          "order": 10,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Inter-pregnancy interval is less than 24 months",
          "uuid": "cf07926b-09b6-4c9e-91a6-ee1dbfc3efbe",
          "dataType": "NA",
          "answers": [],
          "order": 11,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Premature Birth",
          "uuid": "62a9a0f0-e2e5-4e0d-aee2-cd1704ea90e0",
          "dataType": "NA",
          "answers": [],
          "order": 20,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Moderate anemia",
          "uuid": "4f926120-e3ab-4a15-8468-99f09ba9ff74",
          "dataType": "NA",
          "answers": [],
          "order": 34,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Miscarriage/ Abortion",
          "uuid": "4c977b82-1405-4037-8cf2-b89597d42cfe",
          "dataType": "NA",
          "answers": [],
          "order": 15,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Diabetes/ Gestational Diabetes",
          "uuid": "9f6c206e-f04a-4a2a-b3ae-78edbffb0f62",
          "dataType": "NA",
          "answers": [],
          "order": 48,
          "active": true
        },
        {
          "name": "Obstetric History of Premature Birth",
          "uuid": "e0917073-6611-44ad-b8e8-a47d57930792",
          "dataType": "NA",
          "answers": [],
          "order": 29,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Thalassemia",
          "uuid": "83168c77-2a4d-4650-9ead-5c42f1c7f0c4",
          "dataType": "NA",
          "answers": [],
          "order": 42,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Height is less than 140cm",
          "uuid": "3f36ab23-e475-48d9-9bf9-556cab575303",
          "dataType": "NA",
          "answers": [],
          "order": 2,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Heart conditions",
          "uuid": "dea0c584-32a3-493a-be95-66588e01181a",
          "dataType": "NA",
          "answers": [],
          "order": 43,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Sickle cell anemia",
          "uuid": "4b0c2486-20ac-458b-b89a-28603715aeb2",
          "dataType": "NA",
          "answers": [],
          "order": 41,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Mild anemia",
          "uuid": "9fc70140-e56b-4fb3-9261-2831f0e439d3",
          "dataType": "NA",
          "answers": [],
          "order": 35,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Cesarean Section (LSCS)",
          "uuid": "0642557d-1bac-4de9-996e-63925329f3a1",
          "dataType": "NA",
          "answers": [],
          "order": 21,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age is less than 18 years",
          "uuid": "3daae4b4-0f28-461b-ad6c-040ca1b1fa28",
          "dataType": "NA",
          "answers": [],
          "order": 8,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Last Child death within 1 year",
          "uuid": "df107391-3e4a-4dc4-9536-692fe4d61a85",
          "dataType": "NA",
          "answers": [],
          "order": 32,
          "active": true
        },
        {
          "name": "HB is less than 7 g/dL",
          "uuid": "6e277f82-5822-4ac3-8a5a-d1ad21a79c00",
          "dataType": "NA",
          "answers": [],
          "order": 6,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Gravida 3 and Para 2",
          "uuid": "07cbfb35-3ebd-4844-9195-bea41587388f",
          "dataType": "NA",
          "answers": [],
          "order": 13,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Eclampsia",
          "uuid": "15fd0a58-9ce5-4a9e-b25f-bf4f4abe49b2",
          "dataType": "NA",
          "answers": [],
          "order": 27,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Syphillis",
          "uuid": "d9414d88-e0cf-4ffe-9cba-151d6879b773",
          "dataType": "NA",
          "answers": [],
          "order": 45,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Geographically high risk",
          "uuid": "3e21a6f4-6727-44b3-9b7e-148ce9ad77fd",
          "dataType": "NA",
          "answers": [],
          "order": 7,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Congenital malformation",
          "uuid": "085bd394-7475-4cc7-8833-4b85242171f7",
          "dataType": "NA",
          "answers": [],
          "order": 31,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age is greater than 35 years",
          "uuid": "ad71b3c0-4d95-4f2b-892c-75ab40cf6442",
          "dataType": "NA",
          "answers": [],
          "order": 5,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Postpartum Hemorrhage",
          "uuid": "af353a25-7c79-4f1b-9fe8-63b52a88387b",
          "dataType": "NA",
          "answers": [],
          "order": 26,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Pre-eclampsia",
          "uuid": "b95305a1-1831-49b7-a5a6-b4cb458a5d6f",
          "dataType": "NA",
          "answers": [],
          "order": 40,
          "abnormal": true,
          "active": true
        },
        {
          "name": "BMI less than 18.5",
          "uuid": "83c690ab-e319-49ff-aaa4-1eccef57337c",
          "dataType": "NA",
          "answers": [],
          "order": 12,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Hypothyroidism",
          "uuid": "1e527e8b-76ef-426d-aee7-a9002dc031d0",
          "dataType": "NA",
          "answers": [],
          "order": 44,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Eclampsia",
          "uuid": "ec01498d-db7d-4e3d-bd05-d7fcf106c634",
          "dataType": "NA",
          "answers": [],
          "order": 18,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Inadequate Weight Gain during Pregnancy",
          "uuid": "c844e580-e8a8-4251-b989-09bad1f4b015",
          "dataType": "NA",
          "answers": [],
          "order": 36,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Congenital malformation",
          "uuid": "1e167769-8cce-4e46-9ad9-cad964a1f048",
          "dataType": "NA",
          "answers": [],
          "order": 22,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age at marriage is less than 19 years",
          "uuid": "dd109240-9077-4aee-a807-a396328cfd98",
          "dataType": "NA",
          "answers": [],
          "order": 3,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Weight is less than 37kg",
          "uuid": "ee723b88-6094-40b2-8db2-16368ae66f4c",
          "dataType": "NA",
          "answers": [],
          "order": 1,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of HIV Positive",
          "uuid": "76107c0b-2c76-4f83-8b11-47bc326c5ad3",
          "dataType": "NA",
          "answers": [],
          "order": 47,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Miscarriage/ Abortion",
          "uuid": "5e9af579-773d-4de0-acf0-4c6b08e080da",
          "dataType": "NA",
          "answers": [],
          "order": 24,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Severe anemia",
          "uuid": "922fa8df-c11f-4c3f-bd2c-290079c19cd2",
          "dataType": "NA",
          "answers": [],
          "order": 33,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Height is less than 140 cm",
          "uuid": "91381321-7638-470f-b1e8-f1148af205a7",
          "dataType": "NA",
          "answers": [],
          "order": 9,
          "active": true
        },
        {
          "name": "Asthma",
          "uuid": "11228d39-49f1-4a44-9bbf-6c673c208326",
          "dataType": "NA",
          "answers": [],
          "order": 39,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Hypertension",
          "uuid": "621462ed-23da-4b73-b590-4af8ccf34b45",
          "dataType": "NA",
          "answers": [],
          "order": 23,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Still birth",
          "uuid": "cf5e4912-c013-4913-9d8e-05029b187e8a",
          "dataType": "NA",
          "answers": [],
          "order": 25,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Other pre-morbidity conditions",
          "uuid": "9f771423-6205-42db-8428-293ac0ad9b13",
          "dataType": "NA",
          "answers": [],
          "order": 46,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Pregnancy induced morbidity conditions",
          "uuid": "7f2d5f3e-1542-4ace-acb1-b8b27d818df3",
          "dataType": "NA",
          "answers": [],
          "order": 14,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Cesarean Section (LSCS)",
          "uuid": "30893aeb-73d4-4844-80bd-eb2d8ff0aa93",
          "dataType": "NA",
          "answers": [],
          "order": 30,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Obstructed labour",
          "uuid": "f47509b2-8c9f-496c-9843-a7f5c4859197",
          "dataType": "NA",
          "answers": [],
          "order": 28,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstructed labour",
          "uuid": "a2755462-a9a5-4094-a99e-2961beb9ee78",
          "dataType": "NA",
          "answers": [],
          "order": 19,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Red flag as per MCP card",
          "uuid": "b9b4ac92-2aea-43d0-9d1c-bc7fd5026c44",
          "dataType": "NA",
          "answers": [],
          "order": 0,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Postpartum Hemorrhage",
          "uuid": "74f75a6f-1859-4f63-9d23-13fa882b4153",
          "dataType": "NA",
          "answers": [],
          "order": 17,
          "abnormal": true,
          "active": true
        }
      ],
      "active": true,
      "keyValues": []
    },
    {
      "name": "Clinically high risk",
      "uuid": "959cc421-380b-409b-8007-270c35d1e543",
      "dataType": "Coded",
      "answers": [
        {
          "name": "Congenital malformation",
          "uuid": "1e167769-8cce-4e46-9ad9-cad964a1f048",
          "dataType": "NA",
          "answers": [],
          "order": 24,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Premature Birth",
          "uuid": "62a9a0f0-e2e5-4e0d-aee2-cd1704ea90e0",
          "dataType": "NA",
          "answers": [],
          "order": 21,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Mild anemia",
          "uuid": "9fc70140-e56b-4fb3-9261-2831f0e439d3",
          "dataType": "NA",
          "answers": [],
          "order": 15,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Postpartum Hemorrhage",
          "uuid": "74f75a6f-1859-4f63-9d23-13fa882b4153",
          "dataType": "NA",
          "answers": [],
          "order": 18,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Gravida 3 and Para 2",
          "uuid": "07cbfb35-3ebd-4844-9195-bea41587388f",
          "dataType": "NA",
          "answers": [],
          "order": 29,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Severe anemia",
          "uuid": "922fa8df-c11f-4c3f-bd2c-290079c19cd2",
          "dataType": "NA",
          "answers": [],
          "order": 13,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Inadequate Weight Gain during Pregnancy",
          "uuid": "c844e580-e8a8-4251-b989-09bad1f4b015",
          "dataType": "NA",
          "answers": [],
          "order": 28,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Gravida is more than or equal to 4",
          "uuid": "5a33dde5-f5f4-49ff-acc1-3d7ede26dc52",
          "dataType": "NA",
          "answers": [],
          "order": 10,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstructed labour",
          "uuid": "a2755462-a9a5-4094-a99e-2961beb9ee78",
          "dataType": "NA",
          "answers": [],
          "order": 20,
          "abnormal": true,
          "active": true
        },
        {
          "name": "BMI less than 18.5",
          "uuid": "83c690ab-e319-49ff-aaa4-1eccef57337c",
          "dataType": "NA",
          "answers": [],
          "order": 27,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Yes",
          "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
          "dataType": "NA",
          "answers": [],
          "order": 30,
          "abnormal": true,
          "active": true
        },
        {
          "name": "No",
          "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
          "dataType": "NA",
          "answers": [],
          "order": 31,
          "active": true
        },
        {
          "name": "Height Less than 147 cm",
          "uuid": "fa9c831b-3532-4f9e-bc53-3282a2bb8428",
          "dataType": "NA",
          "answers": [],
          "order": 4,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of miscarriage, still birth etc.",
          "uuid": "6fb9e48a-a0c7-4c33-b428-4fe4177470c9",
          "dataType": "NA",
          "answers": [],
          "order": 11,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Last Child death within 1 year",
          "uuid": "df107391-3e4a-4dc4-9536-692fe4d61a85",
          "dataType": "NA",
          "answers": [],
          "order": 25,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Miscarriage/ Abortion",
          "uuid": "4c977b82-1405-4037-8cf2-b89597d42cfe",
          "dataType": "NA",
          "answers": [],
          "order": 16,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age is greater than 35 years",
          "uuid": "ad71b3c0-4d95-4f2b-892c-75ab40cf6442",
          "dataType": "NA",
          "answers": [],
          "order": 8,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Height is less than 140 cm",
          "uuid": "91381321-7638-470f-b1e8-f1148af205a7",
          "dataType": "NA",
          "answers": [],
          "order": 9,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Eclampsia",
          "uuid": "ec01498d-db7d-4e3d-bd05-d7fcf106c634",
          "dataType": "NA",
          "answers": [],
          "order": 19,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Inter-pregnancy interval is less than 24 months",
          "uuid": "cf07926b-09b6-4c9e-91a6-ee1dbfc3efbe",
          "dataType": "NA",
          "answers": [],
          "order": 12,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Weight Less than 37 kg",
          "uuid": "ddabf8cd-4b21-4d4b-a1bb-2be6554a6946",
          "dataType": "NA",
          "answers": [],
          "order": 6,
          "abnormal": true,
          "active": true
        },
        {
          "name": "HB Less than 7.0 g/dl",
          "uuid": "dc50229d-1fd6-4497-942b-ffb7789c3dce",
          "dataType": "NA",
          "answers": [],
          "order": 3,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age at marriage Less than 19 years",
          "uuid": "790970df-5ea2-4e67-bbf2-0f0cd53c5107",
          "dataType": "NA",
          "answers": [],
          "order": 0,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age greater than 35 yrs",
          "uuid": "2833e464-d721-4d45-96cb-0cabff149e91",
          "dataType": "NA",
          "answers": [],
          "order": 1,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age is less than 18 years",
          "uuid": "3daae4b4-0f28-461b-ad6c-040ca1b1fa28",
          "dataType": "NA",
          "answers": [],
          "order": 7,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Less than 18 years marriage",
          "uuid": "887a2300-9a2a-4ff0-bb5c-5d1f69b96d10",
          "dataType": "NA",
          "answers": [],
          "order": 5,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Still birth",
          "uuid": "8c2f1e75-cf54-4761-887f-b06e4ffa6463",
          "dataType": "NA",
          "answers": [],
          "order": 17,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Cesarean Section (LSCS)",
          "uuid": "0642557d-1bac-4de9-996e-63925329f3a1",
          "dataType": "NA",
          "answers": [],
          "order": 23,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Pregnancy induced morbidity conditions",
          "uuid": "7f2d5f3e-1542-4ace-acb1-b8b27d818df3",
          "dataType": "NA",
          "answers": [],
          "order": 22,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Pregnancy induced morbidity conditions list",
          "uuid": "12d99265-c769-4236-aff5-fcba73976396",
          "dataType": "Coded",
          "answers": [
            {
              "name": "No pre-morbidity conditions",
              "uuid": "56bf6a03-bb0f-4d90-b975-9ae03cd67b70",
              "dataType": "NA",
              "answers": [],
              "order": 11,
              "unique": true,
              "active": true
            },
            {
              "name": "Diabetes/ Gestational Diabetes",
              "uuid": "9f6c206e-f04a-4a2a-b3ae-78edbffb0f62",
              "dataType": "NA",
              "answers": [],
              "order": 1,
              "active": true
            },
            {
              "name": "Malaria Positive",
              "uuid": "681a29be-6127-451a-9617-ac62a242d082",
              "dataType": "NA",
              "answers": [],
              "order": 12,
              "active": true
            },
            {
              "name": "Tuberculosis",
              "uuid": "34f5f1a8-8a03-47d0-a91b-2a0fe959fc10",
              "dataType": "NA",
              "answers": [],
              "order": 2,
              "active": true
            },
            {
              "name": "Hypothyroidism",
              "uuid": "1e527e8b-76ef-426d-aee7-a9002dc031d0",
              "dataType": "NA",
              "answers": [],
              "order": 8,
              "active": true
            },
            {
              "name": "Heart conditions",
              "uuid": "dea0c584-32a3-493a-be95-66588e01181a",
              "dataType": "NA",
              "answers": [],
              "order": 7,
              "active": true
            },
            {
              "name": "Syphillis",
              "uuid": "d9414d88-e0cf-4ffe-9cba-151d6879b773",
              "dataType": "NA",
              "answers": [],
              "order": 9,
              "active": true
            },
            {
              "name": "Pre-eclampsia",
              "uuid": "b95305a1-1831-49b7-a5a6-b4cb458a5d6f",
              "dataType": "NA",
              "answers": [],
              "order": 4,
              "active": true
            },
            {
              "name": "Thalassemia",
              "uuid": "83168c77-2a4d-4650-9ead-5c42f1c7f0c4",
              "dataType": "NA",
              "answers": [],
              "order": 6,
              "active": true
            },
            {
              "name": "Asthma",
              "uuid": "11228d39-49f1-4a44-9bbf-6c673c208326",
              "dataType": "NA",
              "answers": [],
              "order": 3,
              "active": true
            },
            {
              "name": "Sickle cell anemia",
              "uuid": "4b0c2486-20ac-458b-b89a-28603715aeb2",
              "dataType": "NA",
              "answers": [],
              "order": 5,
              "active": true
            },
            {
              "name": "Hypertension",
              "uuid": "621462ed-23da-4b73-b590-4af8ccf34b45",
              "dataType": "NA",
              "answers": [],
              "order": 0,
              "active": true
            },
            {
              "name": "Other pre-morbidity conditions",
              "uuid": "9f771423-6205-42db-8428-293ac0ad9b13",
              "dataType": "NA",
              "answers": [],
              "order": 10,
              "active": true
            }
          ],
          "order": 26,
          "active": true
        },
        {
          "name": "Moderate anemia",
          "uuid": "4f926120-e3ab-4a15-8468-99f09ba9ff74",
          "dataType": "NA",
          "answers": [],
          "order": 14,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Gravida more than equal to 3",
          "uuid": "8acebfb6-637d-4dcb-aba8-6df52e8a7655",
          "dataType": "NA",
          "answers": [],
          "order": 2,
          "abnormal": true,
          "active": true
        }
      ],
      "active": true,
      "keyValues": []
    }
  ]
}