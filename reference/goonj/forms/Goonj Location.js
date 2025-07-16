{
  "name": "Goonj Location",
  "uuid": "0919999b-c859-4f89-8219-0a66388af6e7",
  "formType": "Location",
  "formElementGroups": [
    {
      "uuid": "5789c521-4d0a-48bb-b4c9-16bd2cdaa3a2",
      "name": "Goonj Location Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Village Code",
          "uuid": "9554d176-dff3-4b06-9e78-1d6cc07b4a5d",
          "keyValues": [],
          "concept": {
            "name": "Village Code",
            "uuid": "6f78932a-d503-49fe-b8aa-ccd541ffa66a",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Block Code",
          "uuid": "a257169b-8d42-4dda-acdc-61c9e89d23bf",
          "keyValues": [],
          "concept": {
            "name": "Block Code",
            "uuid": "115d2ce2-e810-4745-bf9b-d4ac7ffe6565",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "District Code",
          "uuid": "837494a3-c039-4024-a366-97302e509c2d",
          "keyValues": [],
          "concept": {
            "name": "District Code",
            "uuid": "297e2f95-2fb1-4fa9-a090-74ae7faa0b2e",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "State Code",
          "uuid": "f42cd6ec-d030-4d88-944d-212e24d8ff9f",
          "keyValues": [],
          "concept": {
            "name": "State Code",
            "uuid": "d035fa05-abf6-4771-915a-7ea5c308a612",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Is Assessment Done?",
          "uuid": "3ce36f8f-69d6-4158-911e-7666c97d4b3f",
          "keyValues": [],
          "concept": {
            "name": "Is Assessment Done?",
            "uuid": "348a795a-bbae-4353-be30-db9ae106d4f3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
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
          "name": "Assessment Date",
          "uuid": "14f5ccf2-2e7d-44bc-894a-a205dffc6686",
          "keyValues": [],
          "concept": {
            "name": "Assessment Date",
            "uuid": "c9871602-2104-4c92-8c99-800efffa533e",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const undefined = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({undefined, formElement}).when.valueInRegistration("348a795a-bbae-4353-be30-db9ae106d4f3").containsAnswerConceptName("303d5ad1-ffa2-4096-ba7c-a86876ca9d12").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Is Assessment Done?",
                          "conceptUuid": "348a795a-bbae-4353-be30-db9ae106d4f3",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "303d5ad1-ffa2-4096-ba7c-a86876ca9d12"
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
      "display": "Goonj Location Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}