{
  "name": "PNC",
  "uuid": "c4123189-c7b6-49e1-bbf3-82b3127750b2",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "9c7416cf-f0ad-4413-86c2-9d212e6e9db7",
      "name": "Visit Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Which day after Delivery",
          "uuid": "b8bc48d9-e9bc-4eea-87f9-c37a66a2b55a",
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
  .diff(programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Date of delivery'), 'days');
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
      "uuid": "80b0e095-edac-4518-8440-d9778168aa7e",
      "name": "PNC Vitals",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "BP Systolic",
          "uuid": "880db983-0f70-4a91-be40-81b7d384e6d3",
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
          "uuid": "d2ce264b-523a-4efa-bd0f-36bf71e5e612",
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
          "uuid": "f7c91c42-9157-46ac-ac42-fa4e34499686",
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
          "uuid": "e4ccff8b-9928-40c8-8fb8-28af231aca6d",
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
      "uuid": "157fa13a-f5ad-401d-8f42-d11481df6764",
      "name": "Danger Signs",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Post-Partum Haemorrhage symptoms",
          "uuid": "2f2dc272-0421-42f6-aad2-187d4ea2a067",
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
          "uuid": "bf11b4c8-ac5d-4265-a1c6-9a2eee16a2e0",
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
          "uuid": "5e0052a2-3f78-4095-956f-b5a2ad3f796e",
          "keyValues": [],
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
          "uuid": "31595288-d1fc-4256-854a-b99535217f96",
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
          "uuid": "f1225dbb-6dae-493e-a978-a8b8492f061d",
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
          "uuid": "812557cf-110a-470b-933b-527ec9090c7e",
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
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
   statusBuilder.show().when.valueInEncounter('Episiotomy done?').containsAnswerConceptName('Yes');
 return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does feel hot or have the chills?",
          "uuid": "52b44d11-845a-4337-aeb2-faac89c19472",
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
          "displayOrder": 9,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Convulsions",
          "uuid": "2960f101-44e9-4a2c-81f9-1407fa9b6a55",
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
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Post partum dipression symptoms",
          "uuid": "f68c181b-c889-4a4e-bbf1-88a187c2170f",
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
          "displayOrder": 11,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Pain in hypogastrium?",
          "uuid": "a4babe9c-9a9b-4c31-b761-ca701d4fc5f0",
          "keyValues": [],
          "concept": {
            "name": "Pain in hypogastrium?",
            "uuid": "9cabab3b-b206-4b53-ac7b-9524517819a6",
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
          "displayOrder": 12,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Burning micturation?",
          "uuid": "40380a3a-53f0-4a4d-a7a2-8fc67488bc1f",
          "keyValues": [],
          "concept": {
            "name": "Burning micturation?",
            "uuid": "056689c5-ba68-4e85-b515-7c342769e47b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
    statusBuilder.show().when.valueInEncounter('Does she has bleeding now?').containsAnswerConceptName('Yes');
return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does she taking iron tablet?",
          "uuid": "b78aed33-860c-47b5-af52-04dab561a803",
          "keyValues": [],
          "concept": {
            "name": "Does she taking iron tablet?",
            "uuid": "b28d26ac-2337-4651-bb55-123b71ee39f3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
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
 statusBuilder.show().when.valueInEncounter("Does she taking iron tablet?").is.yes;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Does she taking calcium tablet?",
          "uuid": "436ed776-5a5a-4001-805e-8b0390a6c5d2",
          "keyValues": [],
          "concept": {
            "name": "Does she taking calcium tablet?",
            "uuid": "a34575f1-1373-48d1-b94a-2e1421bb3348",
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
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
   statusBuilder.show().when.valueInEncounter("Does she taking calcium tablet?").is.yes;
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Danger Signs",
      "timed": false
    },
    {
      "uuid": "70ff6d7c-50aa-4282-a357-2f2aa48bfcd0",
      "name": "Nutritional Counselling",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Diet Advice Dos",
          "uuid": "a1594a3f-e9b7-4eda-9a6f-39d6c9fbd1c3",
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
          "uuid": "f6a21214-0986-4da1-9c9e-8f2a6dfc2e6e",
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
          "uuid": "f758f5e6-25dd-4b1b-b91e-600c0a630fda",
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
      "uuid": "1a409181-888b-4407-89b1-0ed4ff10211e",
      "name": "General Counselling",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Rest and sleep advice Dos",
          "uuid": "ce222785-43d0-43c6-bf6a-807c8edc8f74",
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
          "uuid": "559ef34b-11f1-4012-bf70-8f28dfd58f5d",
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
      "uuid": "bb8d08de-a51c-4da3-b88d-f8aab57cd31f",
      "name": "Breast Feeding",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Breast Feeding advice",
          "uuid": "2e35ba40-0651-4792-9e97-ffdfc7897336",
          "keyValues": [],
          "concept": {
            "name": "Breast Feeding advice",
            "uuid": "77afb064-ad7d-44b8-be27-2686726cc409",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule": "",
          "mandatory": false
        }
      ],
      "display": "Breast Feeding",
      "timed": false
    },
    {
      "uuid": "7910a319-7d4a-4bb1-86e2-c7c94b6ce4f9",
      "name": "Hygiene",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "Hygiene advice",
          "uuid": "0b3c0cfa-e012-485a-ae25-6cc1ce3bb002",
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
    },
    {
      "uuid": "96c7f466-53c4-4cae-8fcf-c0ebf99f9664",
      "name": "Immunization and Family planning",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Immunization advice",
          "uuid": "27dda767-667b-41b9-80f0-3bca039b91ee",
          "keyValues": [],
          "concept": {
            "name": "Immunization advice",
            "uuid": "f860273e-29f0-4b44-9da2-a54e15ea12fe",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Family Planning advice Dos",
          "uuid": "abfb7954-a1f1-48f4-88d6-26961f14e3ca",
          "keyValues": [],
          "concept": {
            "name": "Family Planning advice Dos",
            "uuid": "79f8e116-6ce4-47d0-9580-99e718d2234f",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Family Planning advice Donts",
          "uuid": "f6a9d8ea-9ff4-4dfd-8b3d-971e75cde158",
          "keyValues": [],
          "concept": {
            "name": "Family Planning advice Donts",
            "uuid": "6438bcf0-ca7a-4235-a8e1-f17fe08720c5",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Immunization and Family planning",
      "timed": false
    }
  ],
  "decisionRule": "  "use strict";
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

        referralBuilder.addComplication("High Fever")
            .when.valueInEncounter("Temperature").greaterThan(37.5);

        referralBuilder.addComplication("Severe Anemia")
            .when.valueInEncounter("Hb % Level").lessThan(7);

        referralBuilder.addComplication("Moderate Anemia")
            .when.valueInEncounter("Hb % Level")
            .is.greaterThanOrEqualTo(7)
            .and.valueInEncounter("Hb % Level")
            .is.lessThanOrEqualTo(9.9);

        referralBuilder.addComplication("Mild Anemia")
            .when.valueInEncounter("Hb % Level")
            .is.greaterThanOrEqualTo(10)
            .and.valueInEncounter("Hb % Level")
            .is.lessThanOrEqualTo(10.9);

        referralBuilder.addComplication("Post-Partum Haemorrhage symptoms")
            .when.valueInEncounter("Post-Partum Haemorrhage symptoms")
            .containsAnyAnswerConceptName("Difficulty breathing", "Bad headache", "Blurred vision");

        referralBuilder.addComplication("Abdominal problems")
            .when.valueInEncounter("Any abdominal problems")
            .containsAnyAnswerConceptName("Uterus is soft or tender", "Abdominal pain");

        referralBuilder.addComplication("Vaginal problems")
            .when.valueInEncounter("Any vaginal problems")
            .containsAnyAnswerConceptName("Heavy bleeding per vaginum", "Bad-smelling lochia", "Infected perineum suture");

        referralBuilder.addComplication("Difficulties with urinating")
            .when.valueInEncounter("Any difficulties with urinating")
            .containsAnyAnswerConceptName("Difficulty passing urine", "Burning Urination");

        referralBuilder.addComplication("Breast-related problems")
            .when.valueInEncounter("Any breast problems")
            .containsAnyAnswerConceptName("Cracked Nipple", "Nipple hardness", "Breast hardness",
                "Breast engorgement", "Breast abcess", "Other");

        referralBuilder.addComplication("Incision area not normal")
            .when.valueInEncounter("How is the incision area?")
            .containsAnyAnswerConceptName("Indurated", "Looks Red", "Filled with pus", "Discharge from wound");

        referralBuilder.addComplication("Feels hot or have the chills")
            .when.valueInEncounter("Does feel hot or have the chills?").is.yes;

        referralBuilder.addComplication("Convulsions present")
            .when.valueInEncounter("Convulsions")
            .containsAnswerConceptName("Present");

        referralBuilder.addComplication("Post partum dipression symptoms")
            .when.valueInEncounter("Post partum dipression symptoms")
            .containsAnyAnswerConceptName("Insomnia", "Irritability", "Loss of appetite", "Weakness");

        referralBuilder.addComplication("PPH")
            .when.valueInEncounter("How many pads changed?")
            .containsAnyAnswerConceptName("6", "more");
    
    
     decisions.encounterDecisions.push(referralBuilder.getComplications());
  
    return decisions;
},
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const programEncounter = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEncounter
  });
  
  const encounterSchedulePNC = [
    {"name": "PNC 2", "earliest": 28, "max": 36},
    {"name": "PNC 3", "earliest": 50, "max": 61}
];

  const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;

  const deliveryDate = programEncounter.programEnrolment
  .getObservationReadableValueInEntireEnrolment('Date of delivery')
  || programEncounter.getObservationValue('Date of delivery');
  
  let visitDate = programEncounter.encounterDateTime;
  
  const resumeECFollowUp = () => {
    const allEnrolments = _.filter(programEncounter.programEnrolment.individual.nonVoidedEnrolments(),
     enl => _.isNil(enl.programExitDateTime));
    const ecEnrolment = _.find(allEnrolments, enl => enl.program.name === 'Eligible couple'
     && enl.voided === false && _.isNil(enl.programExitDateTime));
    if (ecEnrolment) {
        const nextDate = imports.moment(programEncounter.earliestVisitDateTime)
        .date(imports.moment(ecEnrolment.enrolmentDateTime).date());
        const earliestDate = imports.moment(deliveryDate).add(6, 'month').toDate();
        
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
      var schedule = _.chain(encounterSchedulePNC)
            .filter(e => imports.moment(visitDate)
            .isSameOrBefore(imports.moment(deliveryDate).add(e.earliest, 'days').toDate(), 'date') === true)
            .filter(e => (programEncounter.programEnrolment.hasEncounter('PNC', e.name)) === false)
            .first()
            .value();
    
      if (!_.isEmpty(schedule)) {
      const earliestVisitDate = imports.moment(deliveryDate).add(schedule.earliest, 'days').toDate();
      const maxVisitDate = imports.moment(deliveryDate).add(schedule.max, 'days').toDate();
       
         scheduleBuilder.add({
                name: schedule.name,
                encounterType: 'PNC',
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