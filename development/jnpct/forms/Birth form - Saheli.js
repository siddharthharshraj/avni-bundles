{
  "name": "Birth form - Saheli",
  "uuid": "6c5da862-ea2f-4699-8d4a-deb2d2503e3c",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "9afd3e90-e9f1-4e94-bfaa-ea37f6e0a87d",
      "name": "Details at the time of birth",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Place of Birth",
          "uuid": "efcf68ba-0f58-412e-a882-f24ec5110c8b",
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
          "uuid": "a2e670cb-e900-41a9-9751-471f80e1b737",
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
          "uuid": "cba5dd85-7141-4b7a-8e6c-a50bf7991644",
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
          "mandatory": false
        },
        {
          "name": "Did the baby cry soon after birth?",
          "uuid": "69fd42c1-c6d0-4221-b248-1821faf1cf3b",
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
          "uuid": "fd42971a-8577-4d84-a791-50dd20f34fdc",
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
          "uuid": "45165c43-0c0b-48da-ac28-2b2bef7267c3",
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
          "uuid": "36fe6a78-1385-483a-9367-fed2a1e54a5a",
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
          "uuid": "30209160-732d-4f6e-87f8-45ee53fb7c36",
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
          "uuid": "391cfee0-1e9d-46b6-b9cc-aa6d9438ddfc",
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
      "uuid": "787e283d-2dda-4848-a490-1d12e701d642",
      "name": "Physical Examination",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Birth Defects",
          "uuid": "938cc09d-c340-49be-bd7e-fc70aa84f1ff",
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
          "mandatory": false
        },
        {
          "name": "Other Birth Defect",
          "uuid": "3d721f35-82a1-4d78-9819-28cc7a8e6cd8",
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
          "uuid": "18bfcad5-1ffc-4e7d-b5af-6794180b8508",
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
          "uuid": "af656c17-7c22-4347-a476-9b3a96c9fec4",
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
          "uuid": "558b59df-542b-4cbe-9dd2-05cd0bc1dfb0",
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
          "uuid": "f97aedcc-0c13-42d1-998a-a15bd06b7b7d",
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
          "uuid": "8d1f9967-0e5e-4924-8f84-e258898d33be",
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
          "uuid": "98b394a0-3a6a-4768-8236-6f7164614703",
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
          "uuid": "1925994e-5298-4225-bcc5-d712cfd98432",
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
          "mandatory": false
        },
        {
          "name": "Is blood coming out from any part of body ( cord ,head ,mouth, anus )?",
          "uuid": "0c618322-cfdd-41a7-956f-695a90e268ba",
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
          "mandatory": false
        }
      ],
      "display": "Physical Examination",
      "timed": false
    },
    {
      "uuid": "a162a17d-3632-42c9-8b06-089119acd693",
      "name": "Vitals",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Temperature",
          "uuid": "501b8fc1-0053-4333-aeab-dd6cde3287a1",
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
          "mandatory": false
        },
        {
          "name": "Respiratory Rate",
          "uuid": "fdeb3c8d-22fb-4f5b-814e-807902991889",
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
    },
    {
      "uuid": "d2331653-41ec-4799-82d8-d12956e8a23c",
      "name": "High risk",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Is the child at high risk?",
          "uuid": "ab7d4b88-1980-4f94-871c-89ce2b29602f",
          "keyValues": [],
          "concept": {
            "name": "Is the child at high risk",
            "uuid": "56d4f921-e3f0-4a07-9180-1e1c3eb33aee",
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
    const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;


    const birthWeight = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Birth Weight') || programEncounter.getObservationReadableValue('Birth Weight');

    const currentWeight = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Weight') || programEncounter.getObservationReadableValue('Weight');


    const birthDate = programEncounter.programEnrolment.individual.dateOfBirth;
    let visitDate = programEncounter.encounterDateTime;
    const encounterScheduleChildPNC = [

        {"name": "Child PNC - Saheli 1", "earliest": 1, "max": 2},
        {"name": "Child PNC - Saheli 2", "earliest": 3, "max": 4},
        {"name": "Child PNC - Saheli 3", "earliest": 5, "max": 6},
        {"name": "Child PNC - Saheli 4", "earliest": 7, "max": 8},
        {"name": "Child PNC - Saheli 5", "earliest": 10, "max": 11},
        {"name": "Child PNC - Saheli 6", "earliest": 14, "max": 15},
        {"name": "Child PNC - Saheli 7", "earliest": 21, "max": 22},
        {"name": "Child PNC - Saheli 8", "earliest": 28, "max": 29},
        {"name": "Child PNC - Saheli 9", "earliest": 35, "max": 36},
        {"name": "Child PNC - Saheli 10", "earliest": 42, "max": 43},
        {"name": "Child PNC - Saheli 11", "earliest": 49, "max": 50},
        {"name": "Child PNC - Saheli 12", "earliest": 60, "max": 61}
    ];

    var schedule = _.chain(encounterScheduleChildPNC)
        .filter(e => imports.moment(visitDate)
            .isSameOrBefore(imports.moment(birthDate).add(e.earliest, 'days').toDate(), 'date') === true)
        .filter(e => (programEncounter.programEnrolment.hasEncounter('Child PNC - Saheli', e.name)) === false)
        .first()
        .value();

    if (!_.isEmpty(schedule) && !hasExitedProgram(programEncounter)) {
        let followupDate = imports.moment(birthDate).add(schedule.earliest, 'days').toDate();
        let followupOverdueDate = imports.moment(birthDate).add(schedule.max, 'days').toDate();

        if (currentWeight >= 3 || birthWeight > 2.5) {
            console.log('schedule--->', schedule);
            scheduleBuilder.add({
                name: schedule.name,
                encounterType: 'Child PNC - Saheli',
                earliestDate: followupDate,
                maxDate: followupOverdueDate
            });
        } else {
      
            scheduleBuilder.add({
                name: 'Child PNC low birth - Saheli ',
                encounterType: 'Child PNC - Saheli',
                earliestDate: programEncounter.encounterDateTime,
                maxDate: imports.moment(programEncounter.encounterDateTime).add(1, 'days').toDate()
            });
        }

    }

    const ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();
    if (ageOfChildInMonths >= 2) {
        let earliest = programEncounter.earliestVisitDateTime;
        let followupDate = imports.moment(earliest).toDate();
        let followupOverdueDate = imports.moment(followupDate).add(7, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });
    }

    return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}