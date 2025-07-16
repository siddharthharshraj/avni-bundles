{
  "name": "NRC (voided~3776)",
  "uuid": "e06e8cd2-8a81-433a-ac1a-9db781ae67ac",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "24e29eba-3291-4ced-9611-d348f0120ae0",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Date of admission in NRC",
          "uuid": "fd9d9fed-462c-4288-acbe-ee7aa51709a0",
          "keyValues": [],
          "concept": {
            "name": "Date of admission in NRC",
            "uuid": "27d927f3-39e2-49d9-8609-bb8aa49a00ec",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  
  let dateOfAdmission = programEncounter.getObservationReadableValue('Date of admission in NRC');
  let dateOfReferral = programEncounter.findLatestObservationInEntireEnrolment('Date of referral');

  if(dateOfReferral) {
    dateOfReferral = dateOfReferral.getValue();
  }
  let visitDate = programEncounter.encounterDateTime;  
  let dob = programEncounter.programEnrolment.individual.dateOfBirth;
  
  
   if( dateOfAdmission && dateOfReferral && imports.moment(dateOfAdmission).isBefore(dateOfReferral, 'date')){
 statusBuilder.validationError("Date of admission in NRC cannot be before referral date in QRT form");
 }
 
  if( dateOfAdmission && imports.moment(dateOfAdmission).isBefore(dob, 'date')){
 statusBuilder.validationError("Date of admission in NRC cannot be before child's date of birth");
 }
 
 if( dateOfAdmission && imports.moment(dateOfAdmission).isAfter(visitDate, 'date')){
 statusBuilder.validationError("Date of admission in NRC cannot be after today's date");
 }

  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "NRC Name",
          "uuid": "bc1f6de2-ab9c-438b-aa9d-3d528d5f9f00",
          "keyValues": [],
          "concept": {
            "name": "NRC Name",
            "uuid": "562e84c3-a96c-4978-a5c3-1ff8bba1f635",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Badbil NRC",
                "uuid": "c9d00738-6f39-4f47-a03b-035b563a469d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Sundergarh (Bonai, Rourkela & Sundergarh)",
                "uuid": "1b68add3-920b-47cb-8a65-d9f949ac7bfb",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Mayurbhanj (Karanjia, Betanoti, Kaptipada & Baripada)",
                "uuid": "27a39533-8691-4543-9558-75c27851ce92",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Rayagada (Rayagada & Gunpur)",
                "uuid": "996e4fb2-d960-4290-aa9b-ae1c802c029d",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Keonjhar (Harichandanapur, Badbil, Banspal & Keonjhar)",
                "uuid": "93307180-fab8-43f7-8a79-596e7973b9b9",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Nabrangpur (Umerkote & Nabrangpur)",
                "uuid": "918127b8-1ddb-441b-b748-e76f418dd2a4",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Banspal NRC",
                "uuid": "4c3b65e6-7d6f-488a-a9f5-0d2ca314b945",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Koenjhar NRC",
                "uuid": "021c2127-977c-49dc-8bbe-d481de4b5d46",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Harichandanpur NRC",
                "uuid": "f2420a82-17e5-4c8e-929e-712501bea4cc",
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
          "name": "Criteria for admission",
          "uuid": "d4a4659e-17f9-48d8-b154-0e68774089e4",
          "keyValues": [],
          "concept": {
            "name": "Criteria for admission",
            "uuid": "0630ec1d-45bb-48fd-ba4a-0cae8ac3329a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Weight for height",
                "uuid": "086a8367-37de-4daa-b242-9d83ee814853",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other medical complication",
                "uuid": "97381570-77b1-4cb6-8c4b-7509f097d956",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "MUAC",
                "uuid": "e42f6cc7-125b-4836-9d04-22a3523ac7d4",
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
          "mandatory": false
        },
        {
          "name": "Other medical complication",
          "uuid": "0c221325-7cb7-4745-8978-94455b62d322",
          "keyValues": [],
          "concept": {
            "name": "Other medical complications",
            "uuid": "ea74b584-6139-4006-8be2-e1421d5f4163",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("0630ec1d-45bb-48fd-ba4a-0cae8ac3329a").containsAnswerConceptName("97381570-77b1-4cb6-8c4b-7509f097d956").matches();
  
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
                          "conceptName": "Criteria for admission",
                          "conceptUuid": "0630ec1d-45bb-48fd-ba4a-0cae8ac3329a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other medical complication"
                          ],
                          "answerConceptUuids": [
                            "97381570-77b1-4cb6-8c4b-7509f097d956"
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
          "name": "Accompanied by",
          "uuid": "00ba9fff-fcc4-4088-9872-0f5b890aacd6",
          "keyValues": [],
          "concept": {
            "name": "Accompanied by",
            "uuid": "62b01aa7-7515-4732-bad9-0fb599a70bea",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Mother plus other family member",
                "uuid": "53e10230-4751-429d-b34f-24b1c26b3766",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other family member",
                "uuid": "f0857f1e-4a0b-4ac8-bc55-fd8d57eded92",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Mother",
                "uuid": "4ba7d3d3-ba31-4553-b7ab-6fefdff67481",
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
          "name": "Exit type",
          "uuid": "1afbf027-0d7c-45d7-8eaa-f1d6302a5ecc",
          "keyValues": [],
          "concept": {
            "name": "Exit type",
            "uuid": "95a1d93d-285a-475f-bd88-fdbbf48f1613",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Referred to higher facility",
                "uuid": "6c32265e-281a-4aba-895a-205c16e5b33f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Left Against Medical Advice",
                "uuid": "2f58bad7-a5f2-467b-a3d4-e43868e589de",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Cured and discharged",
                "uuid": "386053f2-b495-44b6-95ca-bcd52b0282ef",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Defaulter",
                "uuid": "f9ba64b3-021d-411f-aa1c-84ae82f79047",
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
          "mandatory": true
        },
        {
          "name": "Date of discharge from NRC",
          "uuid": "26a1c115-9d66-41f8-a667-fecee20ce9e0",
          "keyValues": [],
          "concept": {
            "name": "Date of discharge from NRC",
            "uuid": "71e84ef3-4f1d-4814-84fc-3672b3a72423",
            "dataType": "Date",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("95a1d93d-285a-475f-bd88-fdbbf48f1613").containsAnswerConceptName("386053f2-b495-44b6-95ca-bcd52b0282ef").matches();
  
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
                          "conceptName": "Exit type",
                          "conceptUuid": "95a1d93d-285a-475f-bd88-fdbbf48f1613",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Cured and discharged"
                          ],
                          "answerConceptUuids": [
                            "386053f2-b495-44b6-95ca-bcd52b0282ef"
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