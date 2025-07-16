{
  "name": "NCD Program Exit",
  "uuid": "a1283e17-4c0f-4552-a343-2ad10f7c67ce",
  "formType": "ProgramExit",
  "formElementGroups": [
    {
      "uuid": "9f1e233d-4891-4c46-9af7-f5d68bc4bd10",
      "name": "Reason for Exit",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Reason for Exit",
          "uuid": "3dd331e3-bded-47fe-aeaf-564b4a9b93c5",
          "keyValues": [],
          "concept": {
            "name": "Reason for Exit NCD",
            "uuid": "1892aadb-dee1-4820-a402-a49fe6e87d4f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Death",
                "uuid": "d6fe7cf5-8212-40d2-b03d-c736c52cf12a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Temporarily Migrated",
                "uuid": "8816a006-f6cc-4335-82f9-da8b86ddfef9",
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
          "name": "Other Reason for Exit,Please Specify",
          "uuid": "ceedddd7-e65f-4751-8b8e-c09e201a49eb",
          "keyValues": [],
          "concept": {
            "name": "Other Reason for NCD Exit,Please Specify",
            "uuid": "065f01e6-1e1b-4df8-9e7e-bfe375305769",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInExit("1892aadb-dee1-4820-a402-a49fe6e87d4f").containsAnswerConceptName("c802a91a-7b34-4416-be89-4197227ded2b").matches();
  
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
                          "scope": "exit",
                          "conceptName": "Reason for Exit NCD",
                          "conceptUuid": "1892aadb-dee1-4820-a402-a49fe6e87d4f",
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
      "display": "Reason for Exit",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}