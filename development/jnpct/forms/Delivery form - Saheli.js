{
  "name": "Delivery form - Saheli",
  "uuid": "44320f17-a8b8-4c32-a12d-357f9bc84cb4",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "1b90550f-23f7-4d37-98b2-bd36a9a5c077",
      "name": "Service Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Date of delivery",
          "uuid": "49881414-39c9-4672-b3ac-1c7f04945749",
          "keyValues": [],
          "concept": {
            "name": "Date of delivery",
            "uuid": "d1effb17-12e7-42b4-8791-8a7c4a7c1a64",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Place of delivery",
          "uuid": "85a9c81a-9d8d-4449-bd6b-0ab6b919b322",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Not yet decided"
              ]
            }
          ],
          "concept": {
            "name": "Place of delivery",
            "uuid": "95ee3ade-e926-4f8e-a6b9-6c4086a4db3a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Not yet decided",
                "uuid": "ec8a2653-e9cc-4912-8a3b-24701ba7ad09",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Hospital",
                "uuid": "fcca20e2-f837-4b78-a52f-1d187bca389a",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "On the way",
                "uuid": "0c773b70-4b20-4713-a45c-c0f3b39db87f",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Home",
                "uuid": "8cfae1cd-3e75-40e9-9244-6d083c0d86f7",
                "dataType": "NA",
                "answers": [],
                "order": 1,
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
          "name": "Delivery pack used ?",
          "uuid": "62c239fd-e36a-46eb-b54a-30569605c13e",
          "keyValues": [],
          "concept": {
            "name": "Delivery pack used ?",
            "uuid": "ab201e49-cf1c-44c0-8a86-0545a2d57227",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter("Place of delivery")
            .containsAnswerConceptName("Home");
   return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Date of discharge",
          "uuid": "27764517-389e-46ff-ba1f-8b1eeb87d7b8",
          "keyValues": [],
          "concept": {
            "name": "Date of discharge",
            "uuid": "94f0dddd-0b11-45d7-8aae-7ba9f08b3bb4",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter("Place of delivery")
            .containsAnswerConceptName("Hospital");
return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Number of days stayed at the hospital",
          "uuid": "9ce99457-7fa0-49a0-ac24-7187ef3511d0",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Number of days stayed at the hospital",
            "uuid": "a2c7a7b3-ef6d-42d1-8d4b-b8b140625c4c",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
 
 const days = imports.moment(programEncounter.getObservationReadableValue('Date of discharge'))
      .diff(programEncounter.getObservationReadableValue('Date of delivery'), 'days');
 const value = isFinite(days) ? days : undefined;
 const visibility = new imports.rulesConfig
 .RuleCondition({programEncounter}).valueInEncounter("Place of delivery").containsAnswerConceptName("Hospital").matches();
    
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value);

},
          "mandatory": false
        },
        {
          "name": "Week of Gestation",
          "uuid": "a8a760d5-77d8-4335-966a-d9bceb9594f1",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Week of Gestation",
            "uuid": "f38349e4-afad-4bed-897b-dfb32d8c4c08",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter("Delivery outcome")
           .containsAnswerConceptNameOtherThan("Still Birth");
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Gender of Newborn1",
          "uuid": "e2a61b44-63a6-4b3f-a73b-2a3c3965cab8",
          "keyValues": [],
          "concept": {
            "name": "Gender of Newborn1",
            "uuid": "d3de7fbb-9851-41b8-9b6a-4c183f4986ea",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Female",
                "uuid": "440b037b-0b17-49ff-ae03-9f8a49741149",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Male",
                "uuid": "e506b4b5-fb45-4901-948f-a3827a1510eb",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
   statusBuilder.show().when.valueInEncounter("Delivery outcome")
           .containsAnswerConceptNameOtherThan("Still Birth");
return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Weight of Newborn1",
          "uuid": "0f529602-7bbc-49c5-b1f4-af88f57485ad",
          "keyValues": [],
          "concept": {
            "name": "Weight of Newborn1",
            "uuid": "f0a5edd9-5250-4f27-bc0d-0536b13c8a25",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 2.5,
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
    statusBuilder.show().when.valueInEncounter("Delivery outcome")
           .containsAnswerConceptNameOtherThan("Still Birth");
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Gender of Newborn2",
          "uuid": "4b156262-414f-4ced-a318-17c7d220a9e8",
          "keyValues": [],
          "concept": {
            "name": "Gender of Newborn2",
            "uuid": "3f0c5c4e-40bd-476d-a0ae-3a7e19c78c83",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Female",
                "uuid": "440b037b-0b17-49ff-ae03-9f8a49741149",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Male",
                "uuid": "e506b4b5-fb45-4901-948f-a3827a1510eb",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter("Number of babies")
              .defined.and.greaterThan(1);
    return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Weight of Newborn2",
          "uuid": "0c1fbdc1-85e2-41f2-888c-203e8e94c146",
          "keyValues": [],
          "concept": {
            "name": "Weight of Newborn2",
            "uuid": "b24b1d7d-5c08-495e-a8fc-e0c2c854d694",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 2.5,
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter("Number of babies")
              .defined.and.greaterThan(1);
    return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Gender of Newborn3",
          "uuid": "d4534c0e-5cf7-464c-a069-f056052ed5b4",
          "keyValues": [],
          "concept": {
            "name": "Gender of Newborn3",
            "uuid": "8dda0b63-3d60-4a09-888b-e40683c32776",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Female",
                "uuid": "440b037b-0b17-49ff-ae03-9f8a49741149",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Male",
                "uuid": "e506b4b5-fb45-4901-948f-a3827a1510eb",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter("Number of babies")
              .defined.and.greaterThan(2);
    return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Weight of Newborn3",
          "uuid": "c18fab69-31f8-455e-bcd4-1d157f69e1e7",
          "keyValues": [],
          "concept": {
            "name": "Weight of Newborn3",
            "uuid": "fe7784c0-61ef-481a-98be-7ebeff7cfdde",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 2.5,
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter("Number of babies")
              .defined.and.greaterThan(2);
    return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Number of Stillborn babies",
          "uuid": "9bd774ed-af16-43e3-abbe-0f0599277d78",
          "keyValues": [],
          "concept": {
            "name": "Number of Stillborn babies",
            "uuid": "a738b2ba-84a9-4e4f-9e0c-0f2bbafc44b0",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
    statusBuilder.show().when.valueInEncounter("Delivery outcome")
            .containsAnswerConceptName("Still Birth");
return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Gender of Stillborn1",
          "uuid": "cc5591da-ce7c-4c74-9e33-fdfd9ee1d067",
          "keyValues": [],
          "concept": {
            "name": "Gender of Stillborn1",
            "uuid": "f35f29b3-5c6e-4b8e-a2d9-3847a7f4af3d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Female",
                "uuid": "440b037b-0b17-49ff-ae03-9f8a49741149",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Male",
                "uuid": "e506b4b5-fb45-4901-948f-a3827a1510eb",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
    statusBuilder.show().when.valueInEncounter("Delivery outcome")
            .containsAnswerConceptName("Still Birth");
return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Weight of Stillborn1",
          "uuid": "3e1beaa9-8ef7-4c89-9bdf-e6efbaea0052",
          "keyValues": [],
          "concept": {
            "name": "Weight of Stillborn1",
            "uuid": "69114ef1-3fd1-4a57-b58d-c6e7169fd65c",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 2.5,
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
    statusBuilder.show().when.valueInEncounter("Delivery outcome")
            .containsAnswerConceptName("Still Birth");
return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Gender of Stillborn2",
          "uuid": "6a30f660-bc36-4218-ac2a-b4bca2048f68",
          "keyValues": [],
          "concept": {
            "name": "Gender of Stillborn2",
            "uuid": "ac7d6e60-93c2-4227-b9fa-87ede2c8af96",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Male",
                "uuid": "e506b4b5-fb45-4901-948f-a3827a1510eb",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Female",
                "uuid": "440b037b-0b17-49ff-ae03-9f8a49741149",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter("Number of Stillborn babies")
             .defined.and.greaterThan(1);
 return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Weight of Stillborn2",
          "uuid": "cb9a7a51-4d00-4a02-81cb-7caf2bc42a60",
          "keyValues": [],
          "concept": {
            "name": "Weight of Stillborn2",
            "uuid": "bed2de93-e2ea-4677-8301-2e6b1173b248",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 2.5,
            "active": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter("Number of Stillborn babies")
             .defined.and.greaterThan(1);
 return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Gender of Stillborn3",
          "uuid": "7df30f81-e686-49f9-8f10-bc9614eee8d8",
          "keyValues": [],
          "concept": {
            "name": "Gender of Stillborn3",
            "uuid": "e28df31b-1434-4dc5-8a65-baa6eb8e30cc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Female",
                "uuid": "440b037b-0b17-49ff-ae03-9f8a49741149",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Male",
                "uuid": "e506b4b5-fb45-4901-948f-a3827a1510eb",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter("Number of Stillborn babies")
             .defined.and.greaterThan(2);
 return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Weight of Stillborn3",
          "uuid": "b5e3c372-75c3-478f-9203-4f431e217f27",
          "keyValues": [],
          "concept": {
            "name": "Weight of Stillborn3",
            "uuid": "46601220-c8f7-4e1a-bab2-8176ca92f130",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 2.5,
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter("Number of Stillborn babies")
             .defined.and.greaterThan(2);
 return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Mother with high risk",
          "uuid": "a816f1c6-5ef4-4990-a286-d7a20815b9ba",
          "keyValues": [],
          "concept": {
            "name": "Mother with high risk",
            "uuid": "96147a70-1bd0-4210-8260-56c956bf05da",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 18,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Did beneficiary inform to Aarogya Saheli?",
          "uuid": "4826d644-505b-4ced-acc3-2f91dcdf43d0",
          "keyValues": [],
          "concept": {
            "name": "Did beneficiary inform to Aarogya Saheli?",
            "uuid": "55075e60-068a-46e9-8d12-663a3d9784df",
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
          "displayOrder": 19,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Aarogya Saheli present durinng the time of delivery?",
          "uuid": "2d0a98f4-e911-411a-9889-43882d75c300",
          "keyValues": [],
          "concept": {
            "name": "Aarogya Saheli present durinng the time of delivery?",
            "uuid": "df02e753-a400-436b-870b-97482d131e06",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 20,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Medical Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
    const programEncounter = params.entity;
    const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
        programEncounter
    });

    const encounterSchedulePNC = [
        {"name": "Mother PNC -Saheli 1", "earliest": 1, "max": 1},
        {"name": "Mother PNC -Saheli 2", "earliest": 3, "max": 4},
        {"name": "Mother PNC -Saheli 3", "earliest": 5, "max": 6},
        {"name": "Mother PNC -Saheli 4", "earliest": 7, "max": 8},
        {"name": "Mother PNC -Saheli 5", "earliest": 14, "max": 15},
        {"name": "Mother PNC -Saheli 6", "earliest": 28, "max": 29},
        {"name": "Mother PNC -Saheli 7", "earliest": 42, "max": 43}
    ];

    const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;

    const deliveryDate = programEncounter.getObservationValue('Date of delivery');

    if (!hasExitedProgram(programEncounter)) {
        let visitDate = programEncounter.encounterDateTime;

        var schedule = _.chain(encounterSchedulePNC)
            .filter(e => imports.moment(visitDate)
                .isSameOrBefore(imports.moment(deliveryDate).add(e.max, 'days').toDate(), 'date') === true)
            .filter(e => (programEncounter.programEnrolment.hasEncounter('Mother PNC -Saheli', e.name)) === false)
            .first()
            .value();

        if (!_.isEmpty(schedule)) {
            const earliestVisitDate = imports.moment(deliveryDate).add(schedule.earliest, 'days').toDate();
            const maxVisitDate = imports.moment(deliveryDate).add(schedule.max, 'days').toDate();

            scheduleBuilder.add({
                name: schedule.name,
                encounterType: 'Mother PNC -Saheli',
                earliestDate: earliestVisitDate,
                maxDate: maxVisitDate
            });
        }
    }





    return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}