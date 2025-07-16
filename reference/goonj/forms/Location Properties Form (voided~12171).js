{
  "name": "Location Properties Form (voided~12171)",
  "uuid": "905d37b8-e85d-48ea-adc6-a31e89abd9b6",
  "formType": "Location",
  "formElementGroups": [
    {
      "uuid": "c3a489f3-7049-47c6-8036-cfb34591e58a",
      "name": "Info",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Is Assessment Done?",
          "uuid": "7fbdbb25-ea9d-4d3a-9931-b5d85f479da2",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Assessment Date",
          "uuid": "2c458cdb-8463-41bf-b85b-2fef82af537f",
          "keyValues": [],
          "concept": {
            "name": "Assessment Date",
            "uuid": "c9871602-2104-4c92-8c99-800efffa533e",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
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
      "display": "Info",
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