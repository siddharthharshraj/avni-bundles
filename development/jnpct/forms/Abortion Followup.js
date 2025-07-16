{
  "name": "Abortion Followup",
  "uuid": "20e3c4e9-1e58-4a11-ba5c-9f3c745c7ef7",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "736661c5-aac0-48ef-bdb8-8462db73860c",
      "name": "Visit Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Which Day after Abortion?",
          "uuid": "3d38b4f8-2697-4bd1-bda2-561877b3d1db",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Which day after Delivery",
            "uuid": "14db9754-cb53-4948-ab69-ea18956bf8da",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  
  const days = imports.moment(programEncounter.encounterDateTime) 
        .diff(programEncounter.programEnrolment
        .getObservationReadableValueInEntireEnrolment('Date of Abortion/MTP'), 'days');
  const value = isFinite(days) ? days : undefined;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, true, value);
},
          "mandatory": true
        }
      ],
      "display": "Visit Details",
      "timed": false
    },
    {
      "uuid": "25e0dfc5-b206-478c-9dff-a35cf3c2f072",
      "name": "PNC Vitals",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "BP Systolic",
          "uuid": "e436fe77-2a18-4601-bfbf-7ccacdb1e737",
          "keyValues": [],
          "concept": {
            "name": "BP Systolic",
            "uuid": "9bdb7db1-b1ac-477c-a278-e130c077fc77",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 20,
            "highAbsolute": 190,
            "lowNormal": 90,
            "highNormal": 140,
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Bp Diastolic",
          "uuid": "0014d9e3-fffe-4627-a1c9-053e2fc3744f",
          "keyValues": [],
          "concept": {
            "name": "BP Diastolic",
            "uuid": "a5998291-545a-4de2-861e-e307354f462c",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 10,
            "highAbsolute": 120,
            "lowNormal": 50,
            "highNormal": 90,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Temperature",
          "uuid": "ae3328a3-a39b-45e7-b370-0b4e4b37d3f6",
          "keyValues": [],
          "concept": {
            "name": "Temperature",
            "uuid": "51f90d12-e4fb-4cb9-89d4-0c0b45629dbe",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 35.5,
            "highNormal": 37.5,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Hb % Level",
          "uuid": "27d42d35-46e4-4df7-b9be-70645c66debd",
          "keyValues": [],
          "concept": {
            "name": "Hb % Level",
            "uuid": "9f6eb23b-9e82-47da-b22b-290a840365df",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 11,
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "PNC Vitals",
      "timed": false
    },
    {
      "uuid": "c6634add-c1a6-40cd-b6e3-7506f88fa81b",
      "name": "Danger Signs",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Post-Partum Haemorrhage symptoms",
          "uuid": "6099f9a1-cebd-41d8-936a-bf70961ec21e",
          "keyValues": [],
          "concept": {
            "name": "Post-Partum Haemorrhage symptoms",
            "uuid": "3d99ab9e-9cf5-4db2-a8e9-e5054242dcd2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Bad headache",
                "uuid": "845f450f-7863-458b-a27e-935f4ec7ad5c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Blurred vision",
                "uuid": "b794dcd7-1983-4296-bc5a-ab29d9f49392",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Difficulty breathing",
                "uuid": "39ae8b52-1f43-4254-b4f2-957d9aedf3b8",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No problem",
                "uuid": "e33d0f2e-944b-4320-b5da-f1d7b70bfda0",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "unique": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any abdominal problems",
          "uuid": "3081e791-8f6d-4121-b53a-c7fb10801970",
          "keyValues": [],
          "concept": {
            "name": "Any abdominal problems",
            "uuid": "eb34a8a4-34e3-469f-9458-4ebe488ae1a8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Uterus is soft or tender",
                "uuid": "36e5c95d-f0e3-4c3c-9378-21d3a3eeb4f3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No problem",
                "uuid": "e33d0f2e-944b-4320-b5da-f1d7b70bfda0",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "unique": true,
                "active": true
              },
              {
                "name": "Abdominal pain",
                "uuid": "334cad4d-faf0-4b01-992d-b9a9bdc23631",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any vaginal problems",
          "uuid": "2cea627d-b24a-4ad4-ac15-749eb4cfb316",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Infected perineum suture"
              ]
            }
          ],
          "concept": {
            "name": "Any vaginal problems",
            "uuid": "97584ff6-7545-4220-9bbe-5b1f1a59566c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Bad smelling lochia",
                "uuid": "95760457-175d-4131-bd1f-c1ff166f3d04",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Infected perineum suture",
                "uuid": "fb97bb1d-0906-420b-92d4-c0e32f5de281",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Heavy bleeding per vaginum",
                "uuid": "f819f73c-2098-463f-b05e-e6bdda02a899",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No problem",
                "uuid": "e33d0f2e-944b-4320-b5da-f1d7b70bfda0",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "unique": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any difficulties with urinating",
          "uuid": "f3837b4d-f7d9-4ede-b9d2-1576a6a420a1",
          "keyValues": [],
          "concept": {
            "name": "Any difficulties with urinating",
            "uuid": "585e291e-1f3d-41fa-b6f4-3dcd96cf1560",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Difficulty passing urine",
                "uuid": "f8bb75ab-8bec-4439-8019-e4217448fb2d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No difficulties",
                "uuid": "092b3d79-ab79-4e75-b679-d6e53d55428d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "unique": true,
                "active": true
              },
              {
                "name": "Burning Urination",
                "uuid": "c10f577c-926f-4a61-a49b-19e62411ee66",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any breast problems",
          "uuid": "009e6cd0-8180-4033-a13f-5fb1d7e15595",
          "keyValues": [],
          "concept": {
            "name": "Any breast problems",
            "uuid": "092b60b6-9df8-4186-ba94-8487163152da",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Cracked Nipple",
                "uuid": "4e805b00-dc83-4b54-8bd5-8abc1847ba75",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Breast hardness",
                "uuid": "95b8c000-0128-4051-a97f-d16e209a8e73",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Nipple hardness",
                "uuid": "e708ccc1-53d3-4cf0-92df-9883f9601749",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Breast engorgement",
                "uuid": "d529ba9a-a050-4efc-b7ea-77127fff2144",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No problem",
                "uuid": "e33d0f2e-944b-4320-b5da-f1d7b70bfda0",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "unique": true,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Breast abcess",
                "uuid": "c05c0ba4-f36d-4011-9d26-ff749bf4fef5",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 5,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Other breast related problems",
          "uuid": "44a9c788-d94d-4d1e-9bcb-bfcfc62484ae",
          "keyValues": [],
          "concept": {
            "name": "Other breast related problems",
            "uuid": "10d266f5-6cff-47b6-a486-fe4e91ad58ad",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Does feel hot or have the chills?",
          "uuid": "582d630b-a8a1-4172-a151-33d53120c8d9",
          "keyValues": [],
          "concept": {
            "name": "Does feel hot or have the chills?",
            "uuid": "426b8f0f-b57b-4d2e-964b-b1838d2159c5",
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
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Convulsions",
          "uuid": "d5d12e4a-c67d-43b3-9370-5098510f9452",
          "keyValues": [],
          "concept": {
            "name": "Convulsions",
            "uuid": "1c0e744f-33cb-4792-be6c-6e6ddd178bfe",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Absent",
                "uuid": "cdd86de1-ff2c-4fe9-b49f-b2a3975def41",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Present",
                "uuid": "69f28ae9-7ef7-4602-a575-69034521d02a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Post partum dipression symptoms",
          "uuid": "9b2e05f0-3cce-4a5b-b2b5-061b0184cc55",
          "keyValues": [],
          "concept": {
            "name": "Post partum dipression symptoms",
            "uuid": "cfec5288-ca3e-48c3-a1f2-332038ad2241",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No problem",
                "uuid": "e33d0f2e-944b-4320-b5da-f1d7b70bfda0",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Irritability",
                "uuid": "6ffc3067-f0fc-41e6-9d83-e105574b2487",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Insomnia",
                "uuid": "e831dc25-ba61-4759-8526-02ef7a6ce2b3",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Loss of Appetite",
                "uuid": "8538aa63-f570-4003-9c4e-449764309e7c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Weakness",
                "uuid": "85a88662-40de-4e0c-b123-6022230df8be",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "MultiSelect",
          "mandatory": true
        }
      ],
      "display": "Danger Signs",
      "timed": false
    },
    {
      "uuid": "ffdb96d7-e84b-4d70-a758-f52703a7a5e9",
      "name": "Nutritional Counselling",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Diet Advice Dos",
          "uuid": "5b6665a6-4e4a-4c93-997e-e9ba1aaa3330",
          "keyValues": [],
          "concept": {
            "name": "Diet Advice Do's",
            "uuid": "5d5b9e5d-0d66-4138-b6a4-c3c7ba321960",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Diet Advice Donts",
          "uuid": "11bce9ff-3c85-45b5-8dae-32ca374c44c7",
          "keyValues": [],
          "concept": {
            "name": "Diet Advice Don'ts",
            "uuid": "7cdd0689-e7fc-43c2-b4fb-ef168fb7d9b0",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Supplementary nutritional therapy",
          "uuid": "3cad3c12-156c-4cf3-9b2b-7e8b9a96c194",
          "keyValues": [],
          "concept": {
            "name": "Supplementary nutritional therapy (advice)",
            "uuid": "e6b81ecb-6261-4ea7-822b-efbd84b16ecd",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Nutritional Counselling",
      "timed": false
    },
    {
      "uuid": "a0f352fb-0cbe-4bce-9320-e19549b93827",
      "name": "General Counselling",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Rest and sleep advice Dos",
          "uuid": "6b7fe1a3-8cdf-4209-adc0-6be859e56c35",
          "keyValues": [],
          "concept": {
            "name": "Rest and sleep advice Dos",
            "uuid": "0b18da58-4e5d-4af0-ad82-c2cb67175e1a",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Rest and sleep advice Donts",
          "uuid": "354dd381-630b-48f5-bdbc-573f502705a6",
          "keyValues": [],
          "concept": {
            "name": "Rest and sleep advice Donts",
            "uuid": "368bf985-a91a-4c88-a8f7-7bd7b5a70e42",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "General Counselling",
      "timed": false
    },
    {
      "uuid": "5b7a7ead-dc80-4a09-81e3-eac079489506",
      "name": "Hygiene",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Hygiene advice",
          "uuid": "3ce85f8b-6fd9-49a0-ad0c-e4ee76ad0ee9",
          "keyValues": [],
          "concept": {
            "name": "Hygiene advice",
            "uuid": "cddc0438-74a1-4bcb-843c-34a47da7c1e4",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Hygiene",
      "timed": false
    }
  ],
  "decisionRule": ""use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const decisions = params.decisions;
    
    const referralBuilder = new imports.rulesConfig.complicationsBuilder({
        programEncounter: programEncounter,
        complicationsConcept: "Refer to the hospital for"
    });
    
    referralBuilder.addComplication("Low Systolic")
               .when.valueInEncounter("BP Systolic").lessThan(90);

       referralBuilder.addComplication("High Systolic")
               .when.valueInEncounter("BP Systolic").greaterThan(140);

       referralBuilder.addComplication("Low Diastolic")
               .when.valueInEncounter("BP Diastolic").lessThan(60);

       referralBuilder.addComplication("High Diastolic")
              .when.valueInEncounter("BP Diastolic").greaterThan(90);

       referralBuilder.addComplication("High Temperature")
           .when.valueInEncounter("Temperature").greaterThan(37.5);

       referralBuilder.addComplication("Abnormal Hb")
            .when.valueInEncounter("Hb % Level").lessThan(8);

       referralBuilder.addComplication("Post-Partum Haemorrhage symptoms")
            .when.valueInEncounter("Post-Partum Haemorrhage symptoms")
            .containsAnyAnswerConceptName("Difficulty breathing", "Bad headache", "Blurred vision");

       referralBuilder.addComplication("Abdominal problems")
           .when.valueInEncounter("Any abdominal problems")
           .containsAnyAnswerConceptName("Uterus is soft or tender", "Abdominal pain");

      referralBuilder.addComplication("Vaginal problems")
           .when.valueInEncounter("Any vaginal problems")
           .containsAnyAnswerConceptName("Heavy bleeding per vaginum", "Bad-smelling lochia",
            "Infected perineum suture");

      referralBuilder.addComplication("Any difficulties with urinating")
            .when.valueInEncounter("Any difficulties with urinating")
            .containsAnyAnswerConceptName("Difficulty passing urine", "Burning Urination");

     referralBuilder.addComplication("Breast-related problems")
             .when.valueInEncounter("Any breast problems")
             .containsAnyAnswerConceptName("Cracked Nipple", "Nipple hardness", "Breast hardness",
             "Breast engorgement", "Breast abcess","Other");

     referralBuilder.addComplication("Does feel hot or have the chills?")
            .when.valueInEncounter("Does feel hot or have the chills?").is.yes;

    referralBuilder.addComplication("Convulsions")
             .when.valueInEncounter("Convulsions")
             .containsAnswerConceptName("Present");

    referralBuilder.addComplication("Post partum dipression symptoms")
        .when.valueInEncounter("Post partum dipression symptoms")
        .containsAnyAnswerConceptName("Insomnia", "Irritability", "Loss of appetite", "Weakness");

   decisions.encounterDecisions.push(referralBuilder.getComplications());
  
    
      return decisions;
},
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const programEncounter = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEncounter
  });
const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;

const encounterScheduleAbortionFollowup = [
    {"name": "Abortion Followup Visit-2", "earliest": 28, "max": 36},
    {"name": "Abortion Followup Visit-3", "earliest": 50, "max": 61}
];

const abortionDate = programEncounter.getObservationValue('Date of Abortion/MTP');
let visitDate = programEncounter.encounterDateTime ;
   
const resumeECFollowUp = () => {
    const allEnrolments = _.filter(programEncounter.programEnrolment.individual.nonVoidedEnrolments(),
     enl => _.isNil(enl.programExitDateTime));
    const ecEnrolment = _.find(allEnrolments, enl => enl.program.name === 'Eligible couple'
     && enl.voided === false && _.isNil(enl.programExitDateTime));
    if (ecEnrolment) {
        const nextDate = imports.moment(programEncounter.earliestVisitDateTime)
        .date(imports.moment(ecEnrolment.enrolmentDateTime).date());
        const earliestDate = nextDate.isSameOrAfter(imports.moment()) ? nextDate.toDate() : 
        nextDate.add(1, 'month').toDate();
        
        scheduleBuilder.add({
            name: "Eligible Couple Followup",
            encounterType: "Eligible Couple Followup",
            earliestDate: earliestDate,
            maxDate: imports.moment(earliestDate).add(15, 'days').toDate(),
            programEnrolment: ecEnrolment
        });
    }
};

    if (!hasExitedProgram(programEncounter)) {
        var schedule = _.chain(encounterScheduleAbortionFollowup)
        .filter(e => imports.moment(visitDate)
        .isSameOrBefore(imports.moment(abortionDate).add(e.max, 'days').toDate(), 'date') === true)
        .filter(e => (programEncounter.programEnrolment.hasEncounter('Abortion Followup', e.name)) === false)
        .first()
        .value();       

        if (!_.isEmpty(schedule)) {
         console.log('schedule', schedule);
         const earliestVisitDate = imports.moment(abortionDate).add(schedule.earliest, 'days').toDate();
         const maxVisitDate = imports.moment(abortionDate).add(schedule.max, 'days').toDate();    
            
         scheduleBuilder.add({
                name: schedule.name,
                encounterType: 'Abortion Followup',
                earliestDate: earliestVisitDate,
                maxDate: maxVisitDate
            });
        }
        
        resumeECFollowUp();
    } 
    
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}