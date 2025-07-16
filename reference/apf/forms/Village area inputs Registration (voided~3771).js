{
  "name": "Village area inputs Registration (voided~3771)",
  "uuid": "49e404dd-bc79-4803-a5ef-3bf4d108b1e5",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "32b8507d-a6eb-467e-a0ce-d1adeb817cb1",
      "name": "Note",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Note",
          "uuid": "024b196f-54a9-470b-9be7-24bb0d576735",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            },
            {
              "key": "ExcludedAnswers",
              "value": [
                "NA"
              ]
            }
          ],
          "concept": {
            "name": "Note",
            "uuid": "e1606b13-46a0-4be4-86df-5f11fd86b28b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "NA",
                "uuid": "a1da52a7-f587-4f8f-9349-2d4ee4dae563",
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
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  let villageName = individual.firstName;
  //let lowest\bAddressName = individual.lowestAddressLevel;
  
  //console.log('lowest\bAddressName',lowest\bAddressName);
  console.log('villageName',villageName);

  //visibility = lowest\bAddressName === villageName ;
  //if(visibility){
  //validationErrors.push("Village name should be same as village selected!");
  //}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Please use same name of the village for registration",
          "uuid": "a6f104b7-1e0a-4183-9a01-5c59c9c108bd",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            },
            {
              "key": "ExcludedAnswers",
              "value": [
                "NA"
              ]
            }
          ],
          "concept": {
            "name": "Please use same name of the village for registration",
            "uuid": "a1694196-05f1-4e19-b3f7-ad583a081bae",
            "dataType": "Coded",
            "answers": [
              {
                "name": "NA",
                "uuid": "a1da52a7-f587-4f8f-9349-2d4ee4dae563",
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
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  let villageName = individual.firstName;

  if(individual.lowestAddressLevel.name !== villageName){
  //visibility = true;
  validationErrors.push("Village name should be same as village selected!");
  }
  
  console.log('validationErrors',validationErrors);
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
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