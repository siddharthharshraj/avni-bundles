{
  "name": "Household Registration",
  "uuid": "706b06b4-f01c-460d-81ba-53f56a5b5892",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "868470ae-e27c-46a0-8bcb-c38b5804a2f2",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Visit Date",
          "uuid": "cb21fdb0-f702-428d-a74c-8b2c338e06cf",
          "keyValues": [],
          "concept": {
            "name": "Visit Date",
            "uuid": "d4510141-1d11-4048-83f6-d6449060fd74",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Who Conduct the Survey?",
          "uuid": "1c3f568f-965d-47ac-a898-148ecb1d7115",
          "keyValues": [],
          "concept": {
            "name": "Who Conduct the Survey?",
            "uuid": "2627cc6f-626b-4999-9bd0-67456ac36065",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const user = params.user;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  if(user){
  value = user.name;
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
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
  "decisionConcepts": []
}