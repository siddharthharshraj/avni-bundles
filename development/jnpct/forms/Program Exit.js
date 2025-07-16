{
  "name": "Program Exit",
  "uuid": "3db7f626-bc87-4cd1-b897-486c9d431905",
  "formType": "ProgramExit",
  "formElementGroups": [
    {
      "uuid": "fb36ac6d-3b7e-440b-b902-14cfb3c6aa4c",
      "name": "Exit Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Reason for exit",
          "uuid": "98987f7d-4b41-4db0-81c8-4d7929f8ab6c",
          "keyValues": [],
          "concept": {
            "name": "Reason for exit",
            "uuid": "29238876-fbd8-4f39-b749-edb66024e25e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Not in eligible criteria",
                "uuid": "6cf784a5-90e9-4761-a588-6043c75c52c9",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Permanent Migration",
                "uuid": "edc26b08-3b8c-42f1-bc45-77b4649b3d86",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Maternal Death",
                "uuid": "655722fa-5764-432b-8559-ec9948369178",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Child Death",
                "uuid": "cbb0969c-c7fe-4ce4-b8a2-670c4e3c5039",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Program Completion",
                "uuid": "e98549d0-16fb-4e12-bc18-9a603cd2eb8d",
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
  const programExit = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new 
  imports.rulesConfig.FormElementStatusBuilder({programExit, formElement});
  const programName = programExit.program.name;

    if(programName === 'Child')
        statusBuilder.skipAnswers("Maternal Death");
    else if(programName === 'Pregnancy' || programName === 'Eligible couple')
        statusBuilder.skipAnswers("Child Death");
        
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Other reason (Please specify)",
          "uuid": "9eee85f1-927e-412a-afd4-53c04492d64b",
          "keyValues": [],
          "concept": {
            "name": "Other reason for Program exit",
            "uuid": "8c371fc7-ba33-4b37-871f-e3fb2505ce65",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programExit = params.entity;
  const formElement = params.formElement;
  const exitReason = programExit.findExitObservation('Reason for exit');
  const readableValue = _.isNil(exitReason) ? undefined : exitReason.getReadableValue();
  
  let isVisible = false;
if (readableValue == 'Other') 
  isVisible = true;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, isVisible, null);
},
          "mandatory": true
        },
        {
          "name": "Place of death",
          "uuid": "61d3c729-c42e-44ce-91a4-74359714e70d",
          "keyValues": [],
          "concept": {
            "name": "Place of death",
            "uuid": "dde645f5-0f70-45e9-a670-b7190c86c981",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Home",
                "uuid": "8cfae1cd-3e75-40e9-9244-6d083c0d86f7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "On the way",
                "uuid": "0c773b70-4b20-4713-a45c-c0f3b39db87f",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Hospital",
                "uuid": "fcca20e2-f837-4b78-a52f-1d187bca389a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programExit = params.entity;
  const formElement = params.formElement;
  const exitReason = programExit.findExitObservation('Reason for exit');
  const readableValue = _.isNil(exitReason) ? undefined : exitReason.getReadableValue();
  
  let isVisible = false;
if (readableValue == 'Child Death' || readableValue == 'Maternal Death') 
  isVisible = true;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, isVisible, null);
},
          "mandatory": false
        },
        {
          "name": "Date of death",
          "uuid": "b885df99-c53c-4e97-ba2f-874fb6a1504e",
          "keyValues": [],
          "concept": {
            "name": "Date of death",
            "uuid": "3b269f11-ed0a-4636-8273-da0259783214",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programExit = params.entity;
  const formElement = params.formElement;
  const exitReason = programExit.findExitObservation('Reason for exit');
  const readableValue = _.isNil(exitReason) ? undefined : exitReason.getReadableValue();
  
  let isVisible = false;
if (readableValue == 'Child Death' || readableValue == 'Maternal Death') 
  isVisible = true;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, isVisible, null);
},
          "mandatory": false
        },
        {
          "name": "Reason of death",
          "uuid": "f808662b-8f0f-4aff-b97f-afd6e9b74a5f",
          "keyValues": [],
          "concept": {
            "name": "Reason of death",
            "uuid": "7c88aea6-dfed-451e-a086-881e2dcfd85f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Birth",
                "uuid": "09843fd1-7122-480a-8a46-613eaffb9fe5",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Preterm",
                "uuid": "7f9eac8f-5383-4def-b180-70e7221bcc91",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Malnutrition",
                "uuid": "1ec7fd82-07a9-4adb-89a4-f5a8c1fbebd5",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Prolong labour",
                "uuid": "7f736089-d245-4116-aa9d-70219a4e1e70",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Sepsis",
                "uuid": "a6a6df4b-b516-4467-a7a9-d3345dc768a2",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Unsafe abortion",
                "uuid": "11ff102f-5825-4593-9c79-bbb4015fbd15",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Asphyxia",
                "uuid": "68383d44-5205-40c3-8cbb-17f37d4ab92f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Socially neglected",
                "uuid": "b4f96ea7-0d97-49ab-893f-2d68ae4ce003",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Birth injury",
                "uuid": "eff57b87-cccb-48c2-9548-8e164a9e8fda",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Eclampsia",
                "uuid": "0453529c-fa0b-4e1b-b629-bc2d01a0d495",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "Malaria",
                "uuid": "59bbe194-20a5-484f-8fc8-7c29bf97aefb",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Maleria",
                "uuid": "39e916c8-214f-477b-b7c3-167403a92c4c",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Diarrhea",
                "uuid": "cca7b3c9-53e3-4c5e-840d-b30509d31e1f",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Delay",
                "uuid": "66228873-248d-4f80-a2f8-125b13ab5538",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Low birth weight",
                "uuid": "9b7e8550-7ad7-4a7a-b223-eec5a900c289",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Pnuemonia",
                "uuid": "416a71eb-fdc3-4ddc-b77b-32bf4b0f3228",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Congenital abnormalities",
                "uuid": "312ff540-e4f7-4c29-8529-f0c8f90714df",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Obstructed labour",
                "uuid": "8705af3c-6466-424b-964c-3017b3865dc0",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "APH",
                "uuid": "56331346-a084-4205-88e1-acc7fcb9faee",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "PPH",
                "uuid": "6308907f-0238-4916-bbda-d44e8b439b63",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              }
            ],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 5,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const programExit = params.entity;
  const formElement = params.formElement;
 
  const exitReason = programExit.findExitObservation('Reason for exit');
  const readableValue = _.isNil(exitReason) ? undefined : exitReason.getReadableValue();
  
  const programName = programExit.program.name;

let isVisible = false;
if (readableValue == 'Child Death' || readableValue == 'Maternal Death') 
  isVisible = true;
  
const status = new imports.rulesConfig.FormElementStatus(formElement.uuid, isVisible);
 
  if(programName === 'Child')
    status.answersToSkip = [formElement.getAnswerWithConceptName("APH"),
    formElement.getAnswerWithConceptName("PPH")
    ,formElement.getAnswerWithConceptName("Sepsis")
    ,formElement.getAnswerWithConceptName("Unsafe abortion")
    ,formElement.getAnswerWithConceptName("Obstructed labour")
    ,formElement.getAnswerWithConceptName("Prolong labour")
    ,formElement.getAnswerWithConceptName("Eclampsia")
    ,formElement.getAnswerWithConceptName("Delay")];
else if(programName === 'Pregnancy' || programName === 'Eligible couple')
  status.answersToSkip = [formElement.getAnswerWithConceptName("Low birth weight"),
    formElement.getAnswerWithConceptName("Birth")
    ,formElement.getAnswerWithConceptName("Birth injury")
    ,formElement.getAnswerWithConceptName("Asphyxia")
    ,formElement.getAnswerWithConceptName("Preterm")
    ,formElement.getAnswerWithConceptName("Diarrhea")
    ,formElement.getAnswerWithConceptName("Pnuemonia")
    ,formElement.getAnswerWithConceptName("Malnutrition")
    ,formElement.getAnswerWithConceptName("Congenital abnormalities")
    ,formElement.getAnswerWithConceptName("Socially neglected")
    ,formElement.getAnswerWithConceptName("Malaria")];       
 
  return status;
},
          "mandatory": false
        },
        {
          "name": "Other Reason of Exit",
          "uuid": "66060f09-cccc-422d-b472-f655699437de",
          "keyValues": [],
          "concept": {
            "name": "Other Reason of Exit",
            "uuid": "6b01a38e-58b9-4f6f-8a5c-4d046ec86e83",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Exit Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}