{
  "name": "Claim Legal Fund Encounter (voided~11062)",
  "uuid": "3480a548-5fa4-4aeb-b9b5-475430cfc718",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "7ffc94fa-92f8-47df-9e46-83dd8f65477b",
      "name": "Claim Legal Fund",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Claim Legal Fund",
          "uuid": "50ebbaf1-f7cc-4f4d-8a8a-a1af824000e1",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "LEGAL FUND ENCOUNTER",
            "uuid": "22a96d47-8121-455b-b5e0-8fa7c5da1c4e",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Date of Receipt",
          "uuid": "2dd592e6-0be6-4895-befa-90901c0282d8",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of receipt - Legal Fund",
            "uuid": "d2869f1e-4e6c-4b5c-815d-1d96a08889cd",
            "dataType": "Date",
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
  const questionGroupIndex = params.questionGroupIndex;
  let dateofReceipt = encounter.getObservationValue('22a96d47-8121-455b-b5e0-8fa7c5da1c4e');
  
  if(dateofReceipt && dateofReceipt.length > 0){

    let currentQuestionGroup = dateofReceipt[questionGroupIndex]
    let selectedDate = currentQuestionGroup.findObservationByConceptUUID('d2869f1e-4e6c-4b5c-815d-1d96a08889cd');

    if(selectedDate) {
      const currentDate = moment().startOf('day');
      selectedDate = moment(selectedDate.getValue()).startOf('day');
      if(selectedDate.isAfter(currentDate)){
          validationErrors.push("Invalid date: Future dates are not allowed");
      }
    } 
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "50ebbaf1-f7cc-4f4d-8a8a-a1af824000e1",
          "mandatory": true
        }
      ],
      "display": "Claim Legal Fund",
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