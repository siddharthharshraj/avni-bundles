{
  "name": "Abortion - Saheli",
  "uuid": "9cc09aad-1285-447c-9328-ba4a7481f4a9",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "21c49e86-601e-41ff-b668-6bc651a45d10",
      "name": "Basic Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Date of Abortion/MTP",
          "uuid": "611547ce-0bc6-4a30-8e15-65af45d0ba74",
          "keyValues": [],
          "concept": {
            "name": "Date of Abortion/MTP",
            "uuid": "7ee9f366-ab54-4056-a3a9-37c9a5ea69ca",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Whether Abortion or MTP",
          "uuid": "ef80358c-1d0e-4ac4-9bd2-7d591d7275d4",
          "keyValues": [],
          "concept": {
            "name": "Whether Abortion or MTP",
            "uuid": "5e63efa3-2fea-4cbd-bc0d-cabdb1a70471",
            "dataType": "Coded",
            "answers": [
              {
                "name": "MTP",
                "uuid": "25c486d0-db89-41ba-b151-962fd75f83c6",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Abortion",
                "uuid": "4ca3e92a-5871-4146-9271-6c35558d5a92",
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
          "name": "Type of Abortion",
          "uuid": "39fa9eea-5101-4936-961f-18d378e62f06",
          "keyValues": [],
          "concept": {
            "name": "Type of Abortion",
            "uuid": "a5775008-5ac7-433f-b8bf-ca4b91efb9be",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Spontaneous",
                "uuid": "4946e637-0b4f-4eae-a19a-fbe064e83bb8",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Induced",
                "uuid": "13d96f0b-e8d3-4a3c-9691-0ce98a413efa",
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
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter("Whether Abortion or MTP")
            .containsAnswerConceptName("Abortion");
 return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Period of gestation in weeks at the time of Abortion/MTP",
          "uuid": "71342dfd-dc94-40d4-a326-c84f414b1fbe",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Period of gestation in weeks at the time of Abortion/MTP",
            "uuid": "d0c0173f-fb19-4735-98b3-5e190c646e54",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
   
const dateOfAbortion = programEncounter.getObservationValue('Date of Abortion/MTP');
const lmpDate = programEncounter.programEnrolment.getObservationValue('Last menstrual period');
       
  
const value = imports
.common.weeksBetween(dateOfAbortion, lmpDate);

return new imports.rulesConfig.FormElementStatus(formElement.uuid, true, _.round(value));

},
          "mandatory": false
        },
        {
          "name": "Place of Abortion",
          "uuid": "4acb0d08-419f-4946-9123-bdf7f0fd046d",
          "keyValues": [],
          "concept": {
            "name": "Place of Abortion",
            "uuid": "1d3250bb-ddee-46b3-8936-35ce2300b426",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Home",
                "uuid": "8cfae1cd-3e75-40e9-9244-6d083c0d86f7",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Institutional",
                "uuid": "caf4ec71-8339-47ec-8e9b-d7a99d2443f7",
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
 statusBuilder.show().when.valueInEncounter("Whether Abortion or MTP")
            .containsAnswerConceptName("Abortion");
 return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Date of discharge from hospital",
          "uuid": "975f2eb5-f980-48c2-a19f-4e252ef7ad5d",
          "keyValues": [],
          "concept": {
            "name": "Date Of Discharge For A/M",
            "uuid": "e09d26e0-1774-441b-bc05-7bb50f60a948",
            "dataType": "Date",
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
   statusBuilder.show().when.valueInEncounter("Whether Abortion or MTP")
            .containsAnswerConceptName("MTP")
            .or.when.valueInEncounter("Place of Abortion")
            .containsAnswerConceptName("Institutional");
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Post Abortion/MTP Complications",
          "uuid": "dafdd907-efc6-481e-9fd3-7fba4ae074a6",
          "keyValues": [],
          "concept": {
            "name": "Post Abortion/MTP Complications",
            "uuid": "c25875ea-43fa-4158-9f1c-93748f28afbe",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Fever",
                "uuid": "bfa4858e-ea7b-4e59-b0f0-c28316748f9a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Cesearean incision problems",
                "uuid": "dff0c9ea-de8f-486b-9cbf-b10557ec637b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Abdominal Problem",
                "uuid": "02fa01a5-d78d-443f-80ed-3473002027ed",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Per Vaginal Bleeding",
                "uuid": "dd6cb19b-bd3c-4733-a8cd-04ccf2e4c4f6",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Feeling Hot or chills",
                "uuid": "5a986073-3af9-4836-abca-ea492b1de6e3",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "None",
                "uuid": "540cc15d-2ad4-496c-8514-64031f08290a",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "unique": true,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Urinaltion Difficulties",
                "uuid": "d34039cf-84b4-4b16-83c2-26ab7d86ca04",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Vaginal Problem",
                "uuid": "91894b12-f191-4cf5-a836-3b565e978353",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Abdominal pain",
                "uuid": "334cad4d-faf0-4b01-992d-b9a9bdc23631",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "MultiSelect",
          "mandatory": false
        },
        {
          "name": "Other Post Abortion/MTP complication",
          "uuid": "f75f6ccb-261e-45f0-88a2-fdb054fdab00",
          "keyValues": [],
          "concept": {
            "name": "Other Post Abortion/MTP complication",
            "uuid": "c934d6f6-4dd9-40ce-a155-f46b72d2491c",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
 statusBuilder.show().when.valueInEncounter("Post Abortion/MTP Complications")
            .containsAnswerConceptName("Other");
   return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Basic Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": ""use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
        programEncounter
    });

    const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;

    const encounterScheduleAbortionFollowup = [
        {"name": "Abortion followup - Saheli 1", "earliest": 1, "max": 2},
        {"name": "Abortion followup - Saheli 2", "earliest": 3, "max": 4},
        {"name": "Abortion followup - Saheli 3", "earliest": 5, "max": 6},
        {"name": "Abortion followup - Saheli 4", "earliest": 7, "max": 8},
        {"name": "Abortion followup - Saheli 5", "earliest": 14, "max": 15},
        {"name": "Abortion followup - Saheli 6", "earliest": 28, "max": 29},
        {"name": "Abortion followup - Saheli 7", "earliest": 42, "max": 43}
    ];

    const abortionDate = programEncounter.getObservationValue('Date of Abortion/MTP');
    let visitDate = programEncounter.encounterDateTime;

    if (!hasExitedProgram(programEncounter)) {
        var schedule = _.chain(encounterScheduleAbortionFollowup)
            .filter(e => imports.moment(visitDate)
                .isSameOrBefore(imports.moment(abortionDate).add(e.max, 'days').toDate(), 'date') === true)
            .filter(e => (programEncounter.programEnrolment.hasEncounter('Abortion followup - Saheli', e.name)) === false)
            .first()
            .value();

        if (!_.isEmpty(schedule)) {
            console.log('schedule', schedule);
            const earliestVisitDate = imports.moment(abortionDate).add(schedule.earliest, 'days').toDate();
            const maxVisitDate = imports.moment(abortionDate).add(schedule.max, 'days').toDate();

            scheduleBuilder.add({
                name: schedule.name,
                encounterType: 'Abortion followup - Saheli',
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