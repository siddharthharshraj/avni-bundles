{
  "name": "Screening Form Encounter Cancellation",
  "uuid": "ddf60ec5-a1d1-4344-80bc-b6df53ba04a9",
  "formType": "IndividualEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "5e87010f-e231-4a83-a3a1-aa6aa852d9b2",
      "name": "Reason for cancellation",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Individual Present?",
          "uuid": "df1255ae-10ee-434e-8189-7a262ac5b7b8",
          "keyValues": [],
          "concept": {
            "name": "Individual Present?",
            "uuid": "082125ec-6ae1-4118-afb7-1bd9d2879dd9",
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
          "name": "Why Not Available?",
          "uuid": "ad1d8653-0ae9-45af-85e7-30e09e31c396",
          "keyValues": [],
          "concept": {
            "name": "Why Not Available?",
            "uuid": "123de45c-ec4a-437e-8aff-acefa7ae5c2f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Went to Relative or Other Place",
                "uuid": "fcdab654-2c0c-4434-ad38-3513020030b1",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Death",
                "uuid": "d6fe7cf5-8212-40d2-b03d-c736c52cf12a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Not Known",
                "uuid": "f24bb867-8d97-47c4-90ac-5ab5300fabfd",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Temporarily Migrated",
                "uuid": "8816a006-f6cc-4335-82f9-da8b86ddfef9",
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
          "mandatory": true
        },
        {
          "name": "When Will Visit Again?",
          "uuid": "fbd85da9-eec3-435e-ad37-0261b8def09d",
          "keyValues": [],
          "concept": {
            "name": "When Will Visit Again?",
            "uuid": "6433f8a8-df3f-4b3f-baad-f3526ea9e6cc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "After 30 Days",
                "uuid": "35d6519b-6b1c-491d-93de-8ea39c5fd9ea",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "After 7 Days",
                "uuid": "08dbb009-7fdb-4d95-bec8-e2d21a3fc093",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "After 15 Days",
                "uuid": "33313ec7-fa46-42cc-af0d-971b80bb975f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInCancelEncounter("123de45c-ec4a-437e-8aff-acefa7ae5c2f").containsAnswerConceptName("fcdab654-2c0c-4434-ad38-3513020030b1").matches();
  
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
                          "scope": "cancelEncounter",
                          "conceptName": "Why Not Available?",
                          "conceptUuid": "123de45c-ec4a-437e-8aff-acefa7ae5c2f",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Went to Relative or Other Place"
                          ],
                          "answerConceptUuids": [
                            "fcdab654-2c0c-4434-ad38-3513020030b1"
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
      "display": "Reason for cancellation",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}