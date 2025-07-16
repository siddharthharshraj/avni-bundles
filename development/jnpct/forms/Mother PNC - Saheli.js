{
  "name": "Mother PNC - Saheli",
  "uuid": "9ea427bb-41ad-4b2e-99d1-680784e93e8a",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "fcf50942-133c-498b-924d-fba868c080c5",
      "name": "Visit Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Which day after Delivery",
          "uuid": "e141a4bc-40c0-437e-a05a-eebd2a475779",
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
      "uuid": "45f88193-6b2a-46a6-af78-b1548166c03c",
      "name": "PNC Vitals",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "BP Systolic",
          "uuid": "fa2dbb29-e233-4bc3-ba6f-8ce768787d23",
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
          "uuid": "86d7d2ec-dd9a-4bf3-a193-e1a6b160cd8e",
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
          "uuid": "01de5e91-fd05-4271-9e5d-039315177a91",
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
          "uuid": "fb87d4af-5e7d-4b59-9cfd-3e1be818e2f2",
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
      "uuid": "e2d7de6f-85a4-4898-b81e-25b2f112106a",
      "name": "Danger Signs",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Post-Partum Haemorrhage symptoms",
          "uuid": "86a7894a-2c5a-445e-9b89-f33b4364348a",
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
          "uuid": "1ebfcad4-f158-4fc8-96d5-01bbcbc93964",
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
          "mandatory": false
        },
        {
          "name": "Any vaginal problems",
          "uuid": "293f1b0c-a550-4c34-afcf-02ac92263614",
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
          "mandatory": false
        },
        {
          "name": "Any difficulties with urinating",
          "uuid": "713f6476-cc78-44d1-805f-87074c432383",
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
          "mandatory": false
        },
        {
          "name": "Any breast problems",
          "uuid": "4664718a-ba63-4b4b-884a-60130ed28712",
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
          "uuid": "47a7a0d0-079f-44bb-bdd8-4daf6354c7ec",
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
          "mandatory": false
        },
        {
          "name": "Does feel hot or have the chills?",
          "uuid": "ec2ed612-6c14-475d-a337-5ffdc0d09ab6",
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
          "mandatory": false
        },
        {
          "name": "Convulsions",
          "uuid": "72b762a6-9521-4691-980b-d191f8e4aeae",
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
          "uuid": "2b947586-4953-4fbf-8860-22813954a354",
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
          "mandatory": false
        },
        {
          "name": "Pain in hypogastrium?",
          "uuid": "f7501c5b-9324-468b-abde-ba9b077882f5",
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
          "uuid": "a78f7f4e-7f0c-495a-98f4-a9e50424a07e",
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
          "uuid": "4499cb32-3f22-48d6-91f1-73a6dddad586",
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
          "uuid": "93ef1db0-0da6-4e95-b137-c07512624573",
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
      "uuid": "f746fc20-e3d1-4227-9f8a-33871b0ae58f",
      "name": "Nutritional Counselling",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Diet Advice Dos",
          "uuid": "89198f33-a9aa-44fc-98f9-4261b801d1b6",
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
          "uuid": "3a8b0c24-f986-470e-90c7-4ffabfcf79c3",
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
          "uuid": "f96380e9-c48e-4e7b-b91d-18bd1fe6ea3d",
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
      "uuid": "395d6543-7183-40d9-b268-27be5b861e7c",
      "name": "General Counselling",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Rest and sleep advice Dos",
          "uuid": "9c7f392e-01d7-4886-96d8-2d64b684b3ad",
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
          "uuid": "e2be78d6-6d12-49df-8f2d-3dee028e8fbf",
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
      "uuid": "68b87f50-3101-4cc8-b0ee-148fe424cf12",
      "name": "Breast Feeding",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Breast Feeding advice",
          "uuid": "01f74aa5-3423-4651-a5fc-5f11b84fbd47",
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
      "uuid": "4f25471b-fff1-44f2-adc0-aa940b22a86d",
      "name": "Hygiene",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "Hygiene advice",
          "uuid": "01ce22c1-8163-47df-80ae-fa16b84ad727",
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
      "uuid": "8cc52368-368d-4a80-93b8-69c1c5a1bf01",
      "name": "Immunization and Family planning",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Immunization advice",
          "uuid": "a8f7d6f6-13b2-4cd9-9467-dea0fd726c98",
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
          "uuid": "f0555133-e36c-456c-aa4c-e3b7f61e2399",
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
          "uuid": "2bb42a95-5146-4970-acce-c99de731d2ec",
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
    },
    {
      "uuid": "d07f572d-f0f9-4b27-9468-bdaa5a561896",
      "name": "High risk",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Is the mother at high risk?",
          "uuid": "cebda773-cd14-4d83-a47f-d80a357151ce",
          "keyValues": [],
          "concept": {
            "name": "Is the mother at high risk",
            "uuid": "963948d3-3dfe-4f7f-bd2f-ec807bb94b07",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "High risk",
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

    const encounterSchedulePNC = [
        {"name": "Mother PNC -Saheli 2", "earliest": 3, "max": 4},
        {"name": "Mother PNC -Saheli 3", "earliest": 5, "max": 6},
        {"name": "Mother PNC -Saheli 4", "earliest": 7, "max": 8},
        {"name": "Mother PNC -Saheli 5", "earliest": 14, "max": 15},
        {"name": "Mother PNC -Saheli 6", "earliest": 28, "max": 29},
        {"name": "Mother PNC -Saheli 7", "earliest": 42, "max": 43}
    ];

    const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;

    const deliveryDate = programEncounter.programEnrolment
            .getObservationReadableValueInEntireEnrolment('Date of delivery')
        || programEncounter.getObservationValue('Date of delivery');

    let visitDate = programEncounter.encounterDateTime;


    if (!hasExitedProgram(programEncounter)) {
        var schedule = _.chain(encounterSchedulePNC)
            .filter(e => imports.moment(visitDate)
                .isSameOrBefore(imports.moment(deliveryDate).add(e.earliest, 'days').toDate(), 'date') === true)
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