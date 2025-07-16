{
  "name": "Birth Form",
  "uuid": "f410de41-c0cc-4bac-a5a2-2e98d10572e9",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "3c600d17-72b2-4810-86e5-9f521236d011",
      "name": "Details at the time of birth",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Place of Birth",
          "uuid": "ff9a3919-69b6-498d-a18b-e4bb0089218d",
          "keyValues": [],
          "concept": {
            "name": "Place of Birth",
            "uuid": "a9002492-13f9-4778-8082-2d8d58862912",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Private Hospital",
                "uuid": "5ab46f09-23a8-439b-9e8e-484b56220753",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "SRH",
                "uuid": "55520393-af5d-406b-b734-8810e2164d15",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Home",
                "uuid": "8cfae1cd-3e75-40e9-9244-6d083c0d86f7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Regional Hospital",
                "uuid": "acc0c7ac-7bda-445b-af7c-21f50985d0c2",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "During Transportation like Ambulance etc.",
                "uuid": "8c916f17-930e-45d1-a26f-d4fea6cab6e6",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Primary Health Center",
                "uuid": "33b9bd66-6e40-4d7c-93f6-0b5103fff319",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "District hospital",
                "uuid": "46c1a845-b80b-43f7-8652-f0bdb9cac337",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Subcenter",
                "uuid": "b830bf12-ae8f-45ab-bfa2-fc3267c91af3",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Community health center",
                "uuid": "5d493f15-99d8-4fc3-a1fd-72a89a32d1fd",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true,
                "keyValues": []
              },
              {
                "name": "State hospital",
                "uuid": "0097d74d-c046-4504-9efe-e9811f6363af",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Birth Weight",
          "uuid": "e8f903e7-643e-4835-8f22-7dfa3206f078",
          "keyValues": [],
          "concept": {
            "name": "Birth Weight",
            "uuid": "c82cd1c8-d0a9-4237-b791-8d64e52b6c4a",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 2.5,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Gestational age category at birth",
          "uuid": "337757cb-49d2-4f92-ad21-e3a690b3c7e6",
          "keyValues": [],
          "concept": {
            "name": "Gestational age category at birth",
            "uuid": "01168515-86a6-4ddf-beb9-13c80ff2aaa1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Very Preterm",
                "uuid": "739eaf36-9d2d-4804-bbee-9c953299da96",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Full term (37 weeks & above)",
                "uuid": "c80713af-1586-4335-aaea-31cf0c4f05eb",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Preterm (28 - 36 Weeks)",
                "uuid": "3c165447-1fff-4dfe-90fd-c1642f9fccff",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Very preterm (less than 28 weeks)",
                "uuid": "85613113-b9ee-4528-9f26-888c545f2cfe",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true,
                "keyValues": []
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Did the baby cry soon after birth?",
          "uuid": "b0d617d3-55c2-453d-b641-50dd966b60f7",
          "keyValues": [],
          "concept": {
            "name": "Did the baby cry soon after birth?",
            "uuid": "dffe45ff-7784-4fb9-96a0-83fa0ed4420d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Delay Cry",
                "uuid": "712ab679-0248-47a8-878b-5aa942d22f89",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Cry",
                "uuid": "f480f17e-f46a-469d-9f85-fe8fbb7b073e",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "No Cry",
                "uuid": "9979eea6-1ad7-42c4-9d09-ca8ae3b71364",
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
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Did breast feeding start within 1 hour of birth?",
          "uuid": "6bcc6558-e097-4b75-a598-7bdafd1dc74a",
          "keyValues": [],
          "concept": {
            "name": "Did breast feeding start within 1 hour of birth?",
            "uuid": "90086c0d-33a6-4044-b3e8-bbef93796517",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "When did breast feeding start?",
          "uuid": "2d3bbf5a-554d-4fcc-bba9-5e089a01638b",
          "keyValues": [],
          "concept": {
            "name": "When did breast feeding start?",
            "uuid": "38ca808e-8247-4c89-aee2-494262b2cc43",
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
 statusBuilder.show().when.valueInEncounter("Did breast feeding start within 1 hour of birth?").is.no;
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Was colostrum given?",
          "uuid": "749926cf-52f5-419c-8e59-eebc6fc85329",
          "keyValues": [],
          "concept": {
            "name": "Was colostrum given?",
            "uuid": "5f42d5e5-8405-40ae-ab2f-77b5992e7359",
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
          "name": "Was any kind of sweet liquid tried to child?",
          "uuid": "89a294a2-2698-497e-873e-a6d918a3b0db",
          "keyValues": [],
          "concept": {
            "name": "Was any kind of sweet liquid tried to child?",
            "uuid": "4a24ed38-5d6c-4c77-8574-aed4ccaa4537",
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
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Was child wrapped in 3-4 folded clothes?",
          "uuid": "7592f9f7-8cf1-4f2d-9901-ee291fdfe8cf",
          "keyValues": [],
          "concept": {
            "name": "Was child wrapped in 3-4 folded clothes?",
            "uuid": "37a2e804-b377-4a94-8628-252a6ae83b67",
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
        }
      ],
      "display": "Details at the time of birth",
      "timed": false
    },
    {
      "uuid": "1de92f1d-ae08-4ce6-859d-0796f4ee1713",
      "name": "Physical Examination",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Birth Defects",
          "uuid": "0f167db7-5133-4bc4-9c4c-4a0e0a28f1be",
          "keyValues": [],
          "concept": {
            "name": "Birth Defects",
            "uuid": "a6ad7816-154d-4007-8fb5-ef36ed19af95",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Club foot",
                "uuid": "776026cf-fb20-4d3b-8138-f19cc9588874",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Umblical Hernia",
                "uuid": "b72e894e-eb1a-427c-96d1-7bf467338f43",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Neural tube defects, Imperforated Anus",
                "uuid": "d066186b-9781-4a63-9dc1-3bcdefdd0378",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Inguinal Hernia",
                "uuid": "a6fcdf9d-9f38-4d45-a32a-0abf56311751",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "abnormal": true,
                "active": true
              },
              {
                "name": "None",
                "uuid": "540cc15d-2ad4-496c-8514-64031f08290a",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "unique": true,
                "active": true
              },
              {
                "name": "Congenital Heart Disease",
                "uuid": "13235232-6081-428b-ad3a-b6621e18127d",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Cleft Palate",
                "uuid": "2f4cadfd-6887-4efe-b8e0-4297f2baab80",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Cleft Lip",
                "uuid": "129219e9-93b2-41d3-8b1b-0f1e829ea239",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
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
          "name": "Other Birth Defect",
          "uuid": "fb2df593-f09d-4f5a-a7c9-90d1d16506fa",
          "keyValues": [],
          "concept": {
            "name": "Other Birth Defect",
            "uuid": "959ad8b6-2388-4b15-8bce-bd511fb97815",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  statusBuilder.show().when.valueInEncounter("Birth Defects").containsAnswerConceptName("Other");
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Colour of child",
          "uuid": "a480265a-7b1c-49bc-b5d2-a4237e679b1e",
          "keyValues": [],
          "concept": {
            "name": "Colour of child",
            "uuid": "35870e21-f4a7-4df1-980a-b77954928f66",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Completely pink",
                "uuid": "98c3bab3-d500-4de0-9412-b10b99190627",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Body pink but hands and feet blue/pale",
                "uuid": "ec30ab42-7105-4b2e-8d59-94920b3a3d3a",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Blue/Pale",
                "uuid": "dd46bef9-6bb7-4062-b10a-62f5c8a76000",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Icterus present within 24 hrs of birth?",
          "uuid": "ec9bbf15-47c0-47f5-8c43-6f9b11b161f1",
          "keyValues": [],
          "concept": {
            "name": "Icterus present within 24 hrs of birth?",
            "uuid": "b0306743-3879-46f0-b963-f41447d1891b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Present",
                "uuid": "69f28ae9-7ef7-4602-a575-69034521d02a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Absent",
                "uuid": "cdd86de1-ff2c-4fe9-b49f-b2a3975def41",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is child breathing regularly?",
          "uuid": "7db29f53-99c9-4092-aa36-2fa76a7f0b16",
          "keyValues": [],
          "concept": {
            "name": "Is child breathing regularly?",
            "uuid": "397e9057-446b-4076-8676-92b79281601b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "16092a1e-4a02-4ffd-a3a9-47f07f147a12",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is there life threatening abnormality?",
          "uuid": "b76fd4fa-5663-4563-8370-9e9779f3e860",
          "keyValues": [],
          "concept": {
            "name": "Is there life threatening abnormality?",
            "uuid": "92264531-33df-4ad3-97ce-89ef2a9eb514",
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
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is foam coming out from child's mouth?",
          "uuid": "4717e787-4535-4102-bb1e-64d400f06bba",
          "keyValues": [],
          "concept": {
            "name": "Is foam coming out from child's mouth?",
            "uuid": "9f3a91ea-7e87-4cb7-b40c-426d20adc737",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "3a9fe9a1-a866-47ed-b75c-c0071ea22d97",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
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
          "name": "Is any kind of cyst or tumor present on neck, back and on lower back?",
          "uuid": "4e084005-51f6-4dfb-8cea-e4092e528201",
          "keyValues": [],
          "concept": {
            "name": "Is any kind of cyst or tumor present on neck, back and on lower back?",
            "uuid": "737ae4e7-f38a-4aef-a6aa-d9ad1642494a",
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
          "name": "Is umbelical cord of newborn tied properly?",
          "uuid": "692910e5-500d-4017-bd0a-4ca51955c4af",
          "keyValues": [],
          "concept": {
            "name": "Is umbelical cord of newborn tied properly?",
            "uuid": "e1711f03-e9ff-4356-b018-5f08c1ee6207",
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
                "abnormal": true,
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
          "name": "Is blood coming out from any part of body ( cord ,head ,mouth, anus )?",
          "uuid": "86f6c11c-cd8b-4d6d-8b83-b4b521517416",
          "keyValues": [],
          "concept": {
            "name": "Is blood coming out from any part of body?",
            "uuid": "09573558-edb4-41c6-a2a7-55484158c96e",
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
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Physical Examination",
      "timed": false
    },
    {
      "uuid": "9c3e8a9c-52d4-41f5-8d6a-935a3432709d",
      "name": "Vitals",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Temperature",
          "uuid": "033a828a-4cb2-4c57-8e58-6cbd6861b696",
          "keyValues": [],
          "concept": {
            "name": "Temperature of infant",
            "uuid": "b0b2e912-5433-4594-8d86-2098c57d671a",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 35.5,
            "highNormal": 37.5,
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Respiratory Rate",
          "uuid": "c56de068-60ca-4bdb-921f-51b7d20e4b55",
          "keyValues": [],
          "concept": {
            "name": "Child Respiratory Rate",
            "uuid": "20401dea-a7ee-480a-8980-6cb419f732fe",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 30,
            "highNormal": 59.9,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Vitals",
      "timed": false
    }
  ],
  "decisionRule": ""use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const decisions = params.decisions;
   
   const complicationsBuilder = new imports.rulesConfig.complicationsBuilder({
        programEncounter: programEncounter,
        complicationsConcept: "High Risk Child"
    });
    
    complicationsBuilder.addComplication("Low birth weight")
            .when.valueInEncounter("Birth Weight").lessThan(2);


        complicationsBuilder.addComplication("Baby did not breast feed within 1 hour of birth")
        .when.valueInEncounter("Did breast feeding start within 1 hour of birth?").is.no;

        complicationsBuilder.addComplication("Icterus present")
        .when.valueInEncounter("Icterus present within 24 hrs of birth?")
        .containsAnswerConceptName("Present"); 

       complicationsBuilder.addComplication("Gestational age at birth is not in term")
        .when.valueInEncounter("Gestational age category at birth")
        .containsAnyAnswerConceptName("Preterm (28 - 36 Weeks)","Very preterm (less than 28 weeks)");

        complicationsBuilder.addComplication("Baby did not cry soon after birth")
        .when.valueInEncounter("Did the baby cry soon after birth?")
        .containsAnyAnswerConceptName("Delay Cry","No Cry");

        complicationsBuilder.addComplication("Birth Defects")
        .when.valueInEncounter('Birth Defects')
        .containsAnyAnswerConceptName("Cleft Lip","Cleft Palate","Umblical Hernia",
        "Inguinal Hernia","Congenital Heart Disease","Neural tube defects, Imperforated Anus",
        "Club foot","Other");

        complicationsBuilder.addComplication("Colour of child is not normal")
        .when.valueInEncounter("Colour of child")
        .containsAnyAnswerConceptName("Blue/Pale","Body pink but hands and feet blue/pale");

        complicationsBuilder.addComplication("High temperature")
        .when.valueInEncounter("Temperature of infant").is.greaterThan(37.5);
    
    decisions.encounterDecisions.push(complicationsBuilder.getComplications());
  
  const referralBuilder = new imports.rulesConfig.complicationsBuilder({
        programEncounter: programEncounter,
        complicationsConcept: "Refer to the hospital for"
    });
    
    const age = programEncounter.programEnrolment.individual.getAgeInMonths();

        
        referralBuilder.addComplication("Life threatening abnormality")
        .when.valueInEncounter('Is there life threatening abnormality?')
        .is.yes;

        referralBuilder.addComplication("Foam coming out from child's mouth")
        .when.valueInEncounter("Is foam coming out from child's mouth?")
        .is.yes;

        referralBuilder.addComplication("Refer child to hospital immediately and keep child warm in clothes")
        .when.valueInEncounter('Was child wrapped in 3-4 folded clothes?')
        .is.no;

        referralBuilder.addComplication("Blood is coming from body part")
        .when.valueInEncounter('Is blood coming out from any part of body?')
        .is.yes;

       referralBuilder.addComplication("High respiratory rate")
            .when.valueInEncounter("Child Respiratory Rate")
            .is.greaterThan(50).and.whenItem(age < 13).is.truthy
            .and.whenItem(age > 2).is.truthy;

        referralBuilder.addComplication("High respiratory rate")
            .when.valueInEncounter("Child Respiratory Rate")
            .is.greaterThan(60).and.whenItem(age < 2).is.truthy;
    
  decisions.encounterDecisions.push(referralBuilder.getComplications());


   
   
       return decisions;
},
  "visitScheduleRule": ""use strict";
({params, imports}) => {
\tconst programEncounter = params.entity;
\tconst scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
\t\tprogramEncounter
\t});
\tconst hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;

\tlet birthWeight = programEncounter.programEnrolment
\t\t\t.getObservationReadableValueInEntireEnrolment('Birth Weight')
\t\t|| programEncounter.getObservationReadableValue('Birth Weight');

\tconst ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();
\tconst birthDate = programEncounter.programEnrolment.individual.dateOfBirth;
\tlet visitDate = programEncounter.encounterDateTime;

\tconst encounterScheduleChildPNC = [
\t\t{"name": "Child PNC 1", "earliest": 0, "max": 8},
\t\t{"name": "Child PNC 2", "earliest": 28, "max": 36},
\t\t{"name": "Child PNC 3", "earliest": 50, "max": 61}
\t];

\tconst scheduleChildPNCVisitsNormal = () => {

\t\tvar schedule = _.chain(encounterScheduleChildPNC)
\t\t\t.filter(e => imports.moment(visitDate)
\t\t\t\t.isSameOrBefore(imports.moment(birthDate).add(e.earliest, 'days').toDate(), 'date') === true)
\t\t\t.filter(e => (programEncounter.programEnrolment.hasEncounter('Child PNC', e.name)) === false)
\t\t\t.first()
\t\t\t.value();
\t\t\t
\t\tif (!_.isEmpty(schedule)) {
\t\t\tconst followupDate = imports.moment(birthDate).add(schedule.earliest, 'days').toDate();
\t\t\tconst followupOverdueDate = imports.moment(followupDate).add(schedule.max, 'days').toDate();

\t\t\tscheduleBuilder.add({
\t\t\t\tname: schedule.name,
\t\t\t\tencounterType: 'Child PNC',
\t\t\t\tearliestDate: followupDate,
\t\t\t\tmaxDate: followupOverdueDate
\t\t\t});
\t\t}
\t};

\tconst schedulePNCVisitsDuringBirth = () => {

\t\tif (!hasExitedProgram(programEncounter)) {
\t\t\tscheduleChildPNCVisitsNormal(programEncounter, scheduleBuilder);

\t\t\tif (ageOfChildInMonths >= 2) {
\t\t\t\tif (programEncounter.programEnrolment.hasEncounter('Child Followup', 'Child Followup-1')) return;
\t\t\t\telse if (imports.moment(visitDate)
\t\t\t\t\t.isSameOrBefore(imports.moment(birthDate).add(110, 'days').toDate(), 'date')) {

\t\t\t\t\tscheduleBuilder.add({
\t\t\t\t\t\tname: 'Child Followup-1',
\t\t\t\t\t\tencounterType: 'Child Followup',
\t\t\t\t\t\tearliestDate: imports.moment(birthDate).add(110, 'days').toDate(),
\t\t\t\t\t\tmaxDate: imports.moment(visitDate).add(120, 'days').toDate()
\t\t\t\t\t});
\t\t\t\t}
\t\t\t}
\t\t}
\t};

\tif (birthWeight < 2) {
\t\tif (ageOfChildInMonths < 2) {

\t\t\tscheduleBuilder.add({
\t\t\t\tname: 'Child PNC',
\t\t\t\tencounterType: 'Child PNC',
\t\t\t\tearliestDate: visitDate,
\t\t\t\tmaxDate: imports.moment(visitDate).add(4, 'days').toDate()
\t\t\t});

\t\t\tscheduleBuilder.add({
\t\t\t\tname: 'Child PNC Cluster Incharge-1',
\t\t\t\tencounterType: 'Child PNC Cluster Incharge',
\t\t\t\tearliestDate: visitDate,
\t\t\t\tmaxDate: imports.moment(visitDate).add(8, 'days').toDate()
\t\t\t});


\t\t}
\t} else {
\t        
\t\tschedulePNCVisitsDuringBirth();
\t}

\treturn scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}