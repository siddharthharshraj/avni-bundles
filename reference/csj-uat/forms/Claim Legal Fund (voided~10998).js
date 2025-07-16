{
  "name": "Claim Legal Fund (voided~10998)",
  "uuid": "b29f678a-b622-452e-b87a-9e2ae5829e55",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "05d574f4-a167-4e3a-ab2a-621af4f3d9a1",
      "name": "LEGAL FUND",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "LEGAL FUND",
          "uuid": "d7a9580d-7de4-4ddd-b32b-8cf54ad83742",
          "keyValues": [],
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
          "name": "Date of receipt",
          "uuid": "975f1180-4377-43ba-9920-b28ff16984f2",
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
          "parentFormElementUuid": "d7a9580d-7de4-4ddd-b32b-8cf54ad83742",
          "mandatory": true
        },
        {
          "name": "Amount",
          "uuid": "3179bead-39af-4ff6-9df0-23aa30aa2032",
          "keyValues": [],
          "concept": {
            "name": "Amount - Legal Fund",
            "uuid": "498f42be-21dc-4b03-a2ed-5761d327583f",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "parentFormElementUuid": "d7a9580d-7de4-4ddd-b32b-8cf54ad83742",
          "mandatory": true
        },
        {
          "name": "Stage at which taken",
          "uuid": "a20ead68-e0d7-489d-a86c-03f239c7dfbf",
          "keyValues": [],
          "concept": {
            "name": "Stage at which taken - Legal Fund",
            "uuid": "02a93e4e-1ce1-42d0-9c08-89baf75ea6d5",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "parentFormElementUuid": "d7a9580d-7de4-4ddd-b32b-8cf54ad83742",
          "mandatory": true
        },
        {
          "name": "Upload receipt",
          "uuid": "df204db6-63a2-4412-a477-8e4180e76ffb",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Upload receipt - Legal Fund",
            "uuid": "46c5bfa8-4d88-4b69-b7c1-5b1b78ae99a3",
            "dataType": "File",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "parentFormElementUuid": "d7a9580d-7de4-4ddd-b32b-8cf54ad83742",
          "mandatory": true
        }
      ],
      "display": "LEGAL FUND",
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