{
  "name": "Village Assessment Encounter Form",
  "uuid": "a2687eec-8161-425e-9745-e3fb0554ae3b",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "10b21b40-0a2c-484c-b090-ef33c6759c69",
      "name": "Census Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Number of Male residents",
          "uuid": "6d330d5a-4d5a-4c30-8eb4-fe32dc1107c5",
          "keyValues": [],
          "concept": {
            "name": "Number of Male residents",
            "uuid": "496ef25c-c797-489a-ad95-0b74a8dd0838",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Census Details",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "29bc78e0-d222-4d66-ace8-d07ba7616639",
      "name": "Demographic information",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Population (approximate)",
          "uuid": "82781071-ddaa-4e6a-a1f0-318211d7e649",
          "keyValues": [],
          "concept": {
            "name": "Population",
            "uuid": "ca5575f7-e11c-4917-b291-a0c4ec88c33f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "500-1000",
                "uuid": "b9285313-2488-49de-be21-0f2f52c4f623",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "1000-5000",
                "uuid": "114e16fc-d589-43b7-9564-d8fef4ea501d",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "<500",
                "uuid": "9733c22a-1a80-4058-9a6f-f72d5b56dc73",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": ">5000",
                "uuid": "0277ebfa-a55f-4653-b6f7-a69988a5faa0",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
          "name": "Households",
          "uuid": "f4927d7a-f2d7-4d23-a10f-1d210ee0bed9",
          "keyValues": [],
          "concept": {
            "name": "Households",
            "uuid": "83c0fdbf-43cb-470d-af30-478d31eb2786",
            "dataType": "Coded",
            "answers": [
              {
                "name": "50-100",
                "uuid": "9363412a-872f-4ad8-8887-30b4c1ad60a0",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": ">500",
                "uuid": "da6fb88e-4fd7-4be3-a6e0-4e60d0a3445a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "100-500",
                "uuid": "b80349be-4055-4f50-9146-0d0e57b2d976",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "<50",
                "uuid": "843fd664-5afe-45d1-a801-95ec4a0e0235",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Demographic information",
      "timed": false
    },
    {
      "uuid": "765bf792-dc13-4cb6-9154-11b2573e349a",
      "name": "Community Details",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Community Types",
          "uuid": "16dbecc0-0387-49d7-8465-f740923644b7",
          "keyValues": [],
          "concept": {
            "name": "Community Types",
            "uuid": "fb43296b-9bbc-4cfc-9668-e9764be5ca42",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Construction Workers",
                "uuid": "dc154c12-b594-459d-8f53-7b5e0a04eb5e",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Private Sector Employees",
                "uuid": "4072445b-370e-447c-a249-329cc83f0c52",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Farmers",
                "uuid": "13f1642b-2d34-401b-9dc8-188fe365bf47",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Missed Out Communities",
                "uuid": "17bbd941-a6d3-4729-8f8d-3928c5331f76",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "Silicosis Patient",
                    "uuid": "5842c985-284f-4887-aaf5-cd469111a81c",
                    "dataType": "NA",
                    "answers": [],
                    "order": 4,
                    "active": true
                  },
                  {
                    "name": "Sex workers",
                    "uuid": "9160545f-e051-4d6f-b2c2-fcb2d17ac533",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "HIV Patients",
                    "uuid": "fc9319be-272a-4651-9d43-06ad9cd442e3",
                    "dataType": "NA",
                    "answers": [],
                    "order": 3,
                    "active": true
                  },
                  {
                    "name": "Other",
                    "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                    "dataType": "NA",
                    "answers": [],
                    "order": 6,
                    "active": true
                  },
                  {
                    "name": "Transgenders",
                    "uuid": "bb9b146f-d1df-49d9-82eb-dab38c2bc8c8",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  },
                  {
                    "name": "Leprosy Patients",
                    "uuid": "0aadd471-cbc5-4f08-a053-f16204189c9e",
                    "dataType": "NA",
                    "answers": [],
                    "order": 2,
                    "active": true
                  },
                  {
                    "name": "Artisans",
                    "uuid": "73d1cedb-66f4-425b-9da4-7b22e87df967",
                    "dataType": "NA",
                    "answers": [],
                    "order": 5,
                    "active": true
                  }
                ],
                "order": 12,
                "active": true
              },
              {
                "name": "Daily Wage Workers",
                "uuid": "f1c15574-6802-4358-ad22-cbe4e3038eb1",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Government Employees",
                "uuid": "5b746982-c42d-46dd-a7aa-1ddf84862bd1",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Agricultural Labourers",
                "uuid": "b1d97768-c4b4-42b8-ae28-7e872a6a8ac2",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Weavers / Handloom Workers",
                "uuid": "a9aed7ef-ca77-410c-8395-d32850f68516",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Fishermen",
                "uuid": "d811b297-104e-46fc-864e-5317bc056ad2",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Scheduled Tribe",
                "uuid": "1af456ea-b84d-41d5-972d-52f134e33599",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Industrial Workers",
                "uuid": "841e1dea-b929-4a38-9cdc-ba8ef2627666",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Migrant Community",
                "uuid": "5f3d5be1-288d-484d-ac7b-d8deb363e5d5",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "Nomadic/Displaced",
                    "uuid": "263fdbce-40cc-4ca0-96cb-bba62cbbaeb2",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "Work-Based",
                    "uuid": "51853a79-68a9-4241-baf6-38b4c289a514",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  }
                ],
                "order": 11,
                "active": true
              },
              {
                "name": "Artisans / Handicraft Workers",
                "uuid": "a8efe4ce-094c-4fdc-b718-d4d3da7218a5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
          "name": "Schedule Tribe Type",
          "uuid": "ac324b1f-7227-432d-9e3a-843148efa988",
          "keyValues": [],
          "concept": {
            "name": "schedule tribe type",
            "uuid": "26018a42-6d69-418e-a73f-ac8c169f3a7b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Tharu",
                "uuid": "ae3f809e-5315-44ab-b6e0-61cd1cf984ef",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Ho",
                "uuid": "f8ef3367-bc39-4baf-bc70-18e707d4dc8a",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Meena",
                "uuid": "110a54e4-c191-4cce-a8a9-75af467a8f16",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Munda",
                "uuid": "861b19dc-c59a-43ff-87df-2351535af76b",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Khasi",
                "uuid": "3cdc5f9b-bbd7-4d35-9c93-a4af91a9318a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Bhil",
                "uuid": "ee9a09a9-61cb-45b4-a67a-6a17020aa1d8",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Baiga",
                "uuid": "f0b5a15a-7315-40c6-8ab1-75430ad175af",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Dongria Kondh",
                "uuid": "a2976f1d-91f7-40d4-a00a-d60203ab7a2f",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Kui",
                "uuid": "fe828276-fe36-4c7b-8307-087fbf3b9251",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "Chakma",
                "uuid": "15223fd2-a804-4ff0-b69a-0d0d787e678d",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Toto",
                "uuid": "b4aa91cf-e524-4531-bba4-284631adca81",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Oraon",
                "uuid": "0dc50f5d-6b23-4108-b0a1-701e80f5fd9f",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Lepchaw",
                "uuid": "3b4b3c7f-b905-40f6-9373-d0594d6373bf",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Koya",
                "uuid": "05af3568-8bc2-492e-8bb4-fcb1a61d009c",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Bodo",
                "uuid": "4a37a9c8-ece3-408e-a78d-85205c5a1e3f",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Santhal",
                "uuid": "bf7daa0c-843b-4676-ba4d-a170b7b51d29",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Saura",
                "uuid": "0e6f7b15-06e1-43df-bdb8-7cf64e023f6b",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Gond",
                "uuid": "502edfcc-2858-4fbc-8a69-27624c78e25d",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Siddi",
                "uuid": "b3c15b45-b30e-49a2-a310-ea48a330e860",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Garo",
                "uuid": "fa1844d8-87bf-4a1d-be0a-2157befdb9ab",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Rabha",
                "uuid": "a340af0e-b8b7-4ade-9f6a-9f863209d86d",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("fb43296b-9bbc-4cfc-9668-e9764be5ca42").containsAnswerConceptName("1af456ea-b84d-41d5-972d-52f134e33599").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Major Communities",
                          "conceptUuid": "fb43296b-9bbc-4cfc-9668-e9764be5ca42",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Scheduled Tribe"
                          ],
                          "answerConceptUuids": [
                            "1af456ea-b84d-41d5-972d-52f134e33599"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Other Schedule Tribe",
          "uuid": "375a0a83-a617-42d4-83f1-9a7b31d8b66d",
          "keyValues": [],
          "concept": {
            "name": "other schedule tribe",
            "uuid": "2474e9d2-b8dc-4295-819f-4ce9655b0b11",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("26018a42-6d69-418e-a73f-ac8c169f3a7b").containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "schedule tribe type",
                          "conceptUuid": "26018a42-6d69-418e-a73f-ac8c169f3a7b",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Migrant Community",
          "uuid": "e86ab3bf-2e20-4ec2-b331-f1fc8cda518d",
          "keyValues": [],
          "concept": {
            "name": "Migrant Community",
            "uuid": "5f3d5be1-288d-484d-ac7b-d8deb363e5d5",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Nomadic/Displaced",
                "uuid": "263fdbce-40cc-4ca0-96cb-bba62cbbaeb2",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Work-Based",
                "uuid": "51853a79-68a9-4241-baf6-38b4c289a514",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("fb43296b-9bbc-4cfc-9668-e9764be5ca42").containsAnswerConceptName("5f3d5be1-288d-484d-ac7b-d8deb363e5d5").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Missed Out Communities",
          "uuid": "0f914837-304c-4488-87b7-1adcf3bac744",
          "keyValues": [],
          "concept": {
            "name": "Missed Out Communities",
            "uuid": "17bbd941-a6d3-4729-8f8d-3928c5331f76",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Silicosis Patient",
                "uuid": "5842c985-284f-4887-aaf5-cd469111a81c",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Sex workers",
                "uuid": "9160545f-e051-4d6f-b2c2-fcb2d17ac533",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "HIV Patients",
                "uuid": "fc9319be-272a-4651-9d43-06ad9cd442e3",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Transgenders",
                "uuid": "bb9b146f-d1df-49d9-82eb-dab38c2bc8c8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Leprosy Patients",
                "uuid": "0aadd471-cbc5-4f08-a053-f16204189c9e",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Artisans",
                "uuid": "73d1cedb-66f4-425b-9da4-7b22e87df967",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 5,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("fb43296b-9bbc-4cfc-9668-e9764be5ca42").containsAnswerConceptName("17bbd941-a6d3-4729-8f8d-3928c5331f76").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other Missed Out Communities",
          "uuid": "dc8c77b2-1741-4da8-8196-38fad2f4709c",
          "keyValues": [],
          "concept": {
            "name": "Other Missed Out Communities",
            "uuid": "08a43a82-c5b0-41ee-abbe-5fa48c18e3ad",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("17bbd941-a6d3-4729-8f8d-3928c5331f76").containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Missed Out Communities",
                          "conceptUuid": "17bbd941-a6d3-4729-8f8d-3928c5331f76",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Brief Description of The Community Culture and Other Important Aspects Observed By You",
          "uuid": "f90e2675-fc88-4a1f-8b54-ca8002f8a52c",
          "keyValues": [],
          "concept": {
            "name": "Community Culture and Aspects",
            "uuid": "49972842-5716-42f1-9783-b7eff30e3b1d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Select the top three occupations in this village",
          "uuid": "cbfac907-0539-4130-bc7c-2a7c8af2266d",
          "keyValues": [],
          "concept": {
            "name": "Select the top three occupations in this village",
            "uuid": "c58fa8fb-606a-4714-aa5a-95b7036efaca",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Labor & Daily Wage Work",
                "uuid": "75c26640-722b-4123-bd2d-989b27127a61",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Banjara / Trading Community",
                "uuid": "a0a67e84-e00d-4b7d-9684-c28a1ed461b0",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Livestock & Animal Husbandry",
                "uuid": "f57f7db9-bd08-4df2-8bba-1e2c61ab142f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Hunting & Gathering",
                "uuid": "9a08fa2a-dedf-44e8-8ec0-fb7d6f84d1e2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Handicrafts / Artisans",
                "uuid": "a1c330da-6b53-422c-b4db-274fce7598b5",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Agriculture & Allied Activities",
                "uuid": "3cbb2149-8379-4620-bb2a-9325c295bf52",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Weaving & Textile",
                "uuid": "58d676ee-3a0a-4a7c-bd8b-e193d9e31146",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Performing Arts (Folk Dance, Music)",
                "uuid": "fdecb849-4370-42d7-897f-9c5eb86037c6",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 8,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c58fa8fb-606a-4714-aa5a-95b7036efaca").defined.matches();
  
  if(condition11 ){
      const answer = encounter.getObservationReadableValue("c58fa8fb-606a-4714-aa5a-95b7036efaca");  
      
      if(answer.length > 3) {
          validationErrors.push("Please provide maximum 3 answers");
      }
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other Occupation",
          "uuid": "bbce0d38-e01f-4bd4-bdca-a27d3185401b",
          "keyValues": [],
          "concept": {
            "name": "Other Occupation",
            "uuid": "b8bf80f1-1d0e-4ccc-87cb-b5f273eb8d60",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c58fa8fb-606a-4714-aa5a-95b7036efaca").containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Main Occupations",
                          "conceptUuid": "c58fa8fb-606a-4714-aa5a-95b7036efaca",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Any Migration Patterns?",
          "uuid": "417a53b1-b85e-4ded-9358-6263731ed7de",
          "keyValues": [],
          "concept": {
            "name": "Any Migration Patterns",
            "uuid": "ee29af76-bcdc-4381-ab54-69a38d327af3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
                "dataType": "NA",
                "answers": [],
                "order": 0,
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
          "name": "Disaster Vulnerability?",
          "uuid": "4eb7d734-f742-433e-819a-a04a7a2b1701",
          "keyValues": [],
          "concept": {
            "name": "Disaster Vulnerability?",
            "uuid": "62c90c8c-9ea1-494e-a433-09e81ff10c97",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Community Details",
      "timed": false
    },
    {
      "uuid": "4df09730-ad28-42cb-93be-acb38e4ab511",
      "name": "Infrastructure & basic details",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Population (approximate)",
          "uuid": "9037be12-a8d3-4670-961c-8dae34b7dc38",
          "keyValues": [],
          "concept": {
            "name": "Population",
            "uuid": "ca5575f7-e11c-4917-b291-a0c4ec88c33f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "500-1000",
                "uuid": "b9285313-2488-49de-be21-0f2f52c4f623",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "1000-5000",
                "uuid": "114e16fc-d589-43b7-9564-d8fef4ea501d",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "<500",
                "uuid": "9733c22a-1a80-4058-9a6f-f72d5b56dc73",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": ">5000",
                "uuid": "0277ebfa-a55f-4653-b6f7-a69988a5faa0",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Households",
          "uuid": "a4ea77f0-0679-43d2-bdc5-d4eeb9db132f",
          "keyValues": [],
          "concept": {
            "name": "Households",
            "uuid": "83c0fdbf-43cb-470d-af30-478d31eb2786",
            "dataType": "Coded",
            "answers": [
              {
                "name": "50-100",
                "uuid": "9363412a-872f-4ad8-8887-30b4c1ad60a0",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": ">500",
                "uuid": "da6fb88e-4fd7-4be3-a6e0-4e60d0a3445a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "100-500",
                "uuid": "b80349be-4055-4f50-9146-0d0e57b2d976",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "<50",
                "uuid": "843fd664-5afe-45d1-a801-95ec4a0e0235",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Major Communities",
          "uuid": "b4c00298-b4c9-4e4c-a7df-45ea20a45321",
          "keyValues": [],
          "concept": {
            "name": "Community Types",
            "uuid": "fb43296b-9bbc-4cfc-9668-e9764be5ca42",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Construction Workers",
                "uuid": "dc154c12-b594-459d-8f53-7b5e0a04eb5e",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Private Sector Employees",
                "uuid": "4072445b-370e-447c-a249-329cc83f0c52",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Farmers",
                "uuid": "13f1642b-2d34-401b-9dc8-188fe365bf47",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Missed Out Communities",
                "uuid": "17bbd941-a6d3-4729-8f8d-3928c5331f76",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "Silicosis Patient",
                    "uuid": "5842c985-284f-4887-aaf5-cd469111a81c",
                    "dataType": "NA",
                    "answers": [],
                    "order": 4,
                    "active": true
                  },
                  {
                    "name": "Sex workers",
                    "uuid": "9160545f-e051-4d6f-b2c2-fcb2d17ac533",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "HIV Patients",
                    "uuid": "fc9319be-272a-4651-9d43-06ad9cd442e3",
                    "dataType": "NA",
                    "answers": [],
                    "order": 3,
                    "active": true
                  },
                  {
                    "name": "Other",
                    "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                    "dataType": "NA",
                    "answers": [],
                    "order": 6,
                    "active": true
                  },
                  {
                    "name": "Transgenders",
                    "uuid": "bb9b146f-d1df-49d9-82eb-dab38c2bc8c8",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  },
                  {
                    "name": "Leprosy Patients",
                    "uuid": "0aadd471-cbc5-4f08-a053-f16204189c9e",
                    "dataType": "NA",
                    "answers": [],
                    "order": 2,
                    "active": true
                  },
                  {
                    "name": "Artisans",
                    "uuid": "73d1cedb-66f4-425b-9da4-7b22e87df967",
                    "dataType": "NA",
                    "answers": [],
                    "order": 5,
                    "active": true
                  }
                ],
                "order": 12,
                "active": true
              },
              {
                "name": "Daily Wage Workers",
                "uuid": "f1c15574-6802-4358-ad22-cbe4e3038eb1",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Government Employees",
                "uuid": "5b746982-c42d-46dd-a7aa-1ddf84862bd1",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Agricultural Labourers",
                "uuid": "b1d97768-c4b4-42b8-ae28-7e872a6a8ac2",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Weavers / Handloom Workers",
                "uuid": "a9aed7ef-ca77-410c-8395-d32850f68516",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Fishermen",
                "uuid": "d811b297-104e-46fc-864e-5317bc056ad2",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Scheduled Tribe",
                "uuid": "1af456ea-b84d-41d5-972d-52f134e33599",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Industrial Workers",
                "uuid": "841e1dea-b929-4a38-9cdc-ba8ef2627666",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Migrant Community",
                "uuid": "5f3d5be1-288d-484d-ac7b-d8deb363e5d5",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "Nomadic/Displaced",
                    "uuid": "263fdbce-40cc-4ca0-96cb-bba62cbbaeb2",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "Work-Based",
                    "uuid": "51853a79-68a9-4241-baf6-38b4c289a514",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  }
                ],
                "order": 11,
                "active": true
              },
              {
                "name": "Artisans / Handicraft Workers",
                "uuid": "a8efe4ce-094c-4fdc-b718-d4d3da7218a5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Schedule Tribe Type",
          "uuid": "a7e1e4ef-e6d9-4417-9583-4deff442e69e",
          "keyValues": [],
          "concept": {
            "name": "schedule tribe type",
            "uuid": "26018a42-6d69-418e-a73f-ac8c169f3a7b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Tharu",
                "uuid": "ae3f809e-5315-44ab-b6e0-61cd1cf984ef",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Ho",
                "uuid": "f8ef3367-bc39-4baf-bc70-18e707d4dc8a",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Meena",
                "uuid": "110a54e4-c191-4cce-a8a9-75af467a8f16",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Munda",
                "uuid": "861b19dc-c59a-43ff-87df-2351535af76b",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Khasi",
                "uuid": "3cdc5f9b-bbd7-4d35-9c93-a4af91a9318a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Bhil",
                "uuid": "ee9a09a9-61cb-45b4-a67a-6a17020aa1d8",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Baiga",
                "uuid": "f0b5a15a-7315-40c6-8ab1-75430ad175af",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Dongria Kondh",
                "uuid": "a2976f1d-91f7-40d4-a00a-d60203ab7a2f",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Kui",
                "uuid": "fe828276-fe36-4c7b-8307-087fbf3b9251",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "Chakma",
                "uuid": "15223fd2-a804-4ff0-b69a-0d0d787e678d",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Toto",
                "uuid": "b4aa91cf-e524-4531-bba4-284631adca81",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Oraon",
                "uuid": "0dc50f5d-6b23-4108-b0a1-701e80f5fd9f",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Lepchaw",
                "uuid": "3b4b3c7f-b905-40f6-9373-d0594d6373bf",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Koya",
                "uuid": "05af3568-8bc2-492e-8bb4-fcb1a61d009c",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Bodo",
                "uuid": "4a37a9c8-ece3-408e-a78d-85205c5a1e3f",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Santhal",
                "uuid": "bf7daa0c-843b-4676-ba4d-a170b7b51d29",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Saura",
                "uuid": "0e6f7b15-06e1-43df-bdb8-7cf64e023f6b",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Gond",
                "uuid": "502edfcc-2858-4fbc-8a69-27624c78e25d",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Siddi",
                "uuid": "b3c15b45-b30e-49a2-a310-ea48a330e860",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Garo",
                "uuid": "fa1844d8-87bf-4a1d-be0a-2157befdb9ab",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Rabha",
                "uuid": "a340af0e-b8b7-4ade-9f6a-9f863209d86d",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("fb43296b-9bbc-4cfc-9668-e9764be5ca42").containsAnswerConceptName("1af456ea-b84d-41d5-972d-52f134e33599").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Major Communities",
                          "conceptUuid": "fb43296b-9bbc-4cfc-9668-e9764be5ca42",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Scheduled Tribe"
                          ],
                          "answerConceptUuids": [
                            "1af456ea-b84d-41d5-972d-52f134e33599"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Schedule Tribe",
          "uuid": "708ed7d7-080b-4cc4-9865-74faaed69a39",
          "keyValues": [],
          "concept": {
            "name": "other schedule tribe",
            "uuid": "2474e9d2-b8dc-4295-819f-4ce9655b0b11",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("26018a42-6d69-418e-a73f-ac8c169f3a7b").containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "schedule tribe type",
                          "conceptUuid": "26018a42-6d69-418e-a73f-ac8c169f3a7b",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Migrant Community",
          "uuid": "b6f2b832-7ce0-4665-a73b-ae01558870f1",
          "keyValues": [],
          "concept": {
            "name": "Migrant Community",
            "uuid": "5f3d5be1-288d-484d-ac7b-d8deb363e5d5",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Nomadic/Displaced",
                "uuid": "263fdbce-40cc-4ca0-96cb-bba62cbbaeb2",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Work-Based",
                "uuid": "51853a79-68a9-4241-baf6-38b4c289a514",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Missed Out Communities",
          "uuid": "49cac728-2ef7-40ad-aac2-30d2e8f21146",
          "keyValues": [],
          "concept": {
            "name": "Missed Out Communities",
            "uuid": "17bbd941-a6d3-4729-8f8d-3928c5331f76",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Silicosis Patient",
                "uuid": "5842c985-284f-4887-aaf5-cd469111a81c",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Sex workers",
                "uuid": "9160545f-e051-4d6f-b2c2-fcb2d17ac533",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "HIV Patients",
                "uuid": "fc9319be-272a-4651-9d43-06ad9cd442e3",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Transgenders",
                "uuid": "bb9b146f-d1df-49d9-82eb-dab38c2bc8c8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Leprosy Patients",
                "uuid": "0aadd471-cbc5-4f08-a053-f16204189c9e",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Artisans",
                "uuid": "73d1cedb-66f4-425b-9da4-7b22e87df967",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Missed Out Communities",
          "uuid": "e3da9999-3f37-4aa0-a630-6c286052168a",
          "keyValues": [],
          "concept": {
            "name": "Other Missed Out Communities",
            "uuid": "08a43a82-c5b0-41ee-abbe-5fa48c18e3ad",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("17bbd941-a6d3-4729-8f8d-3928c5331f76").containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Missed Out Communities",
                          "conceptUuid": "17bbd941-a6d3-4729-8f8d-3928c5331f76",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Brief Description of The Community Culture and Other Important Aspects Observed By You",
          "uuid": "0e2e8fa2-4a4f-4cc7-b4a9-f1006f9794af",
          "keyValues": [],
          "concept": {
            "name": "Community Culture and Aspects",
            "uuid": "49972842-5716-42f1-9783-b7eff30e3b1d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Main Occupations",
          "uuid": "8dd04f17-c6d0-4a36-9754-ade6954a500e",
          "keyValues": [],
          "concept": {
            "name": "Select the top three occupations in this village",
            "uuid": "c58fa8fb-606a-4714-aa5a-95b7036efaca",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Labor & Daily Wage Work",
                "uuid": "75c26640-722b-4123-bd2d-989b27127a61",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Banjara / Trading Community",
                "uuid": "a0a67e84-e00d-4b7d-9684-c28a1ed461b0",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Livestock & Animal Husbandry",
                "uuid": "f57f7db9-bd08-4df2-8bba-1e2c61ab142f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Hunting & Gathering",
                "uuid": "9a08fa2a-dedf-44e8-8ec0-fb7d6f84d1e2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Handicrafts / Artisans",
                "uuid": "a1c330da-6b53-422c-b4db-274fce7598b5",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Agriculture & Allied Activities",
                "uuid": "3cbb2149-8379-4620-bb2a-9325c295bf52",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Weaving & Textile",
                "uuid": "58d676ee-3a0a-4a7c-bd8b-e193d9e31146",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Performing Arts (Folk Dance, Music)",
                "uuid": "fdecb849-4370-42d7-897f-9c5eb86037c6",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 10,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Occupation",
          "uuid": "72e98ef1-6f4a-4266-b841-a390b0df0456",
          "keyValues": [],
          "concept": {
            "name": "Other Occupation",
            "uuid": "b8bf80f1-1d0e-4ccc-87cb-b5f273eb8d60",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c58fa8fb-606a-4714-aa5a-95b7036efaca").containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Main Occupations",
                          "conceptUuid": "c58fa8fb-606a-4714-aa5a-95b7036efaca",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Any Migration Patterns?",
          "uuid": "232aa987-dc4c-4ed7-b7c6-c26368202d05",
          "keyValues": [],
          "concept": {
            "name": "Any Migration Patterns",
            "uuid": "ee29af76-bcdc-4381-ab54-69a38d327af3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
                "dataType": "NA",
                "answers": [],
                "order": 0,
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
          "name": "Disaster Vulnerability?",
          "uuid": "120283a1-83e2-4d48-9cef-953233888d95",
          "keyValues": [],
          "concept": {
            "name": "Disaster Vulnerability?",
            "uuid": "62c90c8c-9ea1-494e-a433-09e81ff10c97",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Details of Disaster Vulnerability",
          "uuid": "d67aebd9-26cc-4de6-acf2-15c571a13a77",
          "keyValues": [],
          "concept": {
            "name": "Details of Disaster Vulnerability",
            "uuid": "e0c6b0cc-7111-46b8-84c4-9bb59a85f407",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 14,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("62c90c8c-9ea1-494e-a433-09e81ff10c97").containsAnswerConceptName("303d5ad1-ffa2-4096-ba7c-a86876ca9d12").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Disaster Vulnerability?",
                          "conceptUuid": "62c90c8c-9ea1-494e-a433-09e81ff10c97",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "303d5ad1-ffa2-4096-ba7c-a86876ca9d12"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Available Drinking Water Sources",
          "uuid": "e313b9f8-85af-441f-9b82-b073c08ce77f",
          "keyValues": [],
          "concept": {
            "name": "Available Drinking Water Sources",
            "uuid": "5c77128c-e684-4182-99b4-986510c392d8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Well",
                "uuid": "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "River/Pond",
                "uuid": "e16eb815-df2e-489b-b571-dd2c35927632",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Piped Water",
                "uuid": "9940604d-7036-4ddc-9151-0e5613842f83",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Borewell",
                "uuid": "84e56498-2ef7-45b1-be9e-3e502d08e4f0",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 15,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Other available Drinking Water Sources",
          "uuid": "ae2bc427-f356-464c-91a6-9f0855a05e4c",
          "keyValues": [],
          "concept": {
            "name": "Other available Drinking Water Sources",
            "uuid": "1c0c34e2-7ec0-4a7a-b8da-ca35f3efa1f0",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 16,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c77128c-e684-4182-99b4-986510c392d8").containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Primary Drinking Water Source",
                          "conceptUuid": "5c77128c-e684-4182-99b4-986510c392d8",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Is drinking water available year-round?",
          "uuid": "2a938603-36fe-4c5d-9440-9b56f903722a",
          "keyValues": [],
          "concept": {
            "name": "Is drinking water available year-round?",
            "uuid": "c434f9a6-6308-4cda-b2f3-a58ddb47da38",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Type of Road Connectivity",
          "uuid": "db6d19ed-06d8-4c28-be27-4c56660d445b",
          "keyValues": [],
          "concept": {
            "name": "Type of Road Connectivity",
            "uuid": "f3e401e1-712c-43d6-808f-77c997b38cdb",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Gravel/Dirt",
                "uuid": "bcaa403c-be8f-4b97-84f0-e60867185d9a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Paved",
                "uuid": "7827ac5f-8465-4662-b9bf-0e514ee4eead",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No Road",
                "uuid": "5b301da0-dbc6-4658-8424-cb6e9703ae81",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 18,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Type of Road Connectivity",
          "uuid": "9b4d385d-2669-4b2c-929d-df151905095c",
          "keyValues": [],
          "concept": {
            "name": "Type of Road Connectivity",
            "uuid": "f3e401e1-712c-43d6-808f-77c997b38cdb",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Gravel/Dirt",
                "uuid": "bcaa403c-be8f-4b97-84f0-e60867185d9a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Paved",
                "uuid": "7827ac5f-8465-4662-b9bf-0e514ee4eead",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No Road",
                "uuid": "5b301da0-dbc6-4658-8424-cb6e9703ae81",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 19,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Public Transport Availability",
          "uuid": "a5f24f68-7550-474b-9f34-44053a1155cb",
          "keyValues": [],
          "concept": {
            "name": "Public Transport Availability",
            "uuid": "714e0107-0f8a-4ab9-b564-f2503511dc39",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Regular",
                "uuid": "0a8b9e9a-84eb-4829-9c58-091a8827ff4d",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Not Available",
                "uuid": "e1f66ad7-7070-4d21-930d-29372b5e1159",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Occasional",
                "uuid": "4ec22149-b2d2-435c-a161-d1209d60a1f7",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 20,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Nearest Primary School",
          "uuid": "6466fc47-81bf-4e6e-ac72-3df5da3493b9",
          "keyValues": [],
          "concept": {
            "name": "Nearest Primary School",
            "uuid": "e9a8d309-f78d-406f-a807-adbc3bca3200",
            "dataType": "Coded",
            "answers": [
              {
                "name": ">5 km",
                "uuid": "1ca3bc67-4d64-4ef3-ac25-b0777cb25f3d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "<2 km",
                "uuid": "cf9b4ce3-2526-4768-939b-6f7cb1aeca82",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "2-5 km",
                "uuid": "e3d49ccb-2221-4c3a-8c9f-549890153c9e",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Within Village",
                "uuid": "23a260c5-245f-48d7-8af2-604f2f5545dc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 21,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Availability of ASHA/Health Worker",
          "uuid": "7a0ee76c-d98b-4886-9e4c-4f359b8037f5",
          "keyValues": [],
          "concept": {
            "name": "Availability of ASHA/Health Worker",
            "uuid": "30cc5574-ba4a-462c-add1-23a01f1245f9",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 22,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Nearest Health Facility",
          "uuid": "36bb8f18-3b0f-4b5f-ac73-19ade1de7630",
          "keyValues": [],
          "concept": {
            "name": "Nearest Health Facility",
            "uuid": "678c1f38-27cb-449f-8cb0-ccbc3c2f4616",
            "dataType": "Coded",
            "answers": [
              {
                "name": "None",
                "uuid": "ba835221-04c0-4e55-a08f-e6e25bb6719c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "unique": true,
                "active": true
              },
              {
                "name": "Private Clinic",
                "uuid": "4dc9f36f-23a7-4a71-850a-224721ce4b9b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Primary Health Center",
                "uuid": "e1fde7d1-3576-4759-ab6b-b629428dc6e5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Sub-Center",
                "uuid": "d4f524b7-cbf6-432c-88d4-089390bf0d6c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 23,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Common Health Issues",
          "uuid": "f7b1c40b-5701-461f-ba8a-cfa4586390d7",
          "keyValues": [],
          "concept": {
            "name": "Common Health Issues",
            "uuid": "ea8c5fd6-71f8-4f50-a24b-4fcd172ec1e8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Typhoid",
                "uuid": "2495e6a2-7f3d-4a86-9a00-6f307be2a239",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Malnutrition",
                "uuid": "761be3c9-8c15-4b59-99b2-880bb5cce559",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Tuberculosis",
                "uuid": "03947563-dac5-4770-b545-481c4e229825",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Cancer",
                "uuid": "ab990230-aecf-41d1-be05-a2691c4019f9",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Cholera",
                "uuid": "ac0fdcdb-48ea-4d4d-be47-4a937eeb71d0",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Waterborne Diseases",
                "uuid": "74b8582b-11c5-4926-8e67-0b5cb8e87232",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Poor menstrual hygiene",
                "uuid": "b7d2c002-9006-4234-b500-405168ce0d24",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "HIV",
                "uuid": "c1823911-05e8-4a42-aa99-1b77605cec0b",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Maternal Health",
                "uuid": "24d6a068-066c-47df-94eb-bc9b7da64168",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Silcosis",
                "uuid": "905c19bf-b60d-44f6-b66a-e4d98b7bec6b",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Anemia",
                "uuid": "4609b23b-0eab-45aa-a1a5-cedc55e1d790",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Chikungunya",
                "uuid": "6035eefd-4e87-4e75-b21b-5a3b98163e35",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Malaria",
                "uuid": "84208c03-9602-437e-8616-bff854982a9e",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Dengue",
                "uuid": "ca9b358f-6da1-483a-af4c-6096fe8b0a2c",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 24,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Other Health Issues",
          "uuid": "cd66512e-3999-4bb1-b6b6-aa90374f199f",
          "keyValues": [],
          "concept": {
            "name": "Other Health Issues",
            "uuid": "049a8310-207d-468d-aa03-01ec1e282a40",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 25,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ea8c5fd6-71f8-4f50-a24b-4fcd172ec1e8").containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Common Health Issues",
                          "conceptUuid": "ea8c5fd6-71f8-4f50-a24b-4fcd172ec1e8",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Any NGO is working there?",
          "uuid": "920736ca-2d51-44b9-823c-a20584330ccd",
          "keyValues": [],
          "concept": {
            "name": "Any NGO is working there?",
            "uuid": "19bec586-93ab-47f9-9ef6-08a41742adb4",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 26,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Name of NGO",
          "uuid": "0538c68c-44f5-4c78-8363-a25d71908157",
          "keyValues": [],
          "concept": {
            "name": "Name of NGO",
            "uuid": "bc923dbe-dd46-48b4-b719-a1fc6e4c485a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 27,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("19bec586-93ab-47f9-9ef6-08a41742adb4").containsAnswerConceptName("303d5ad1-ffa2-4096-ba7c-a86876ca9d12").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Any NGO is working there?",
                          "conceptUuid": "19bec586-93ab-47f9-9ef6-08a41742adb4",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "303d5ad1-ffa2-4096-ba7c-a86876ca9d12"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Presence of SHGs (Self-Help Groups)",
          "uuid": "03c8ce28-23bc-4b77-9f14-ad58ab0aab49",
          "keyValues": [],
          "concept": {
            "name": "Presence of SHGs",
            "uuid": "bd34eac8-7086-4ce2-abcf-89b806844665",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 28,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Names of SHGs",
          "uuid": "0fceccdd-0ccc-40d9-8faa-6abf5c210f74",
          "keyValues": [],
          "concept": {
            "name": "Names of SHGs",
            "uuid": "b4c8f40f-1e35-49b0-a461-ae3e095f9f95",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 29,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("bd34eac8-7086-4ce2-abcf-89b806844665").containsAnswerConceptName("303d5ad1-ffa2-4096-ba7c-a86876ca9d12").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Presence of SHGs",
                          "conceptUuid": "bd34eac8-7086-4ce2-abcf-89b806844665",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "303d5ad1-ffa2-4096-ba7c-a86876ca9d12"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": false
        },
        {
          "name": "Biggest Challenges Faced by the Village (Rank Top 3)",
          "uuid": "e590c049-ee2a-47b7-a527-41e7751b6948",
          "keyValues": [],
          "concept": {
            "name": "Biggest Challenges Faced by the Village",
            "uuid": "52340496-30d3-4d2f-8c71-f29108ef5fda",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Lack of Irrigation Facilities for Farmers",
                "uuid": "7c494ade-d488-4bf3-a4d6-cfae170be2b0",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Migration of Youth to Cities",
                "uuid": "282da639-e28d-4dcc-a8da-eda2375afb35",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Poor Roads & Connectivity",
                "uuid": "fbebacfe-f8e5-4389-a449-0fffdcf70f02",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Poor Healthcare Facilities",
                "uuid": "4610308f-458b-4cb3-9071-cf002de4142b",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Education Gaps & Lack of Schools",
                "uuid": "ba448088-da67-4fad-af43-8d34aeaacbd0",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Lack of Water",
                "uuid": "13afaa79-cb55-4d42-952e-3d8d37736f46",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Deforestation & Environmental Issues",
                "uuid": "cc1f0968-a75f-40e5-a486-918f6d3aff11",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Poor Sanitation & Waste Management",
                "uuid": "0a48dc8f-8bbf-4501-8885-ef0cb3713346",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Unemployment & Lack of Job Opportunities",
                "uuid": "e506e31a-4a10-4b9d-956a-3f4bfa3e47f1",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 30,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("52340496-30d3-4d2f-8c71-f29108ef5fda").defined.matches();
  
  if(condition11 ){
      const answer = encounter.getObservationReadableValue("Biggest Challenges Faced by the Village");  
      
      if(answer.length!==3){
          validationErrors.push("Please provide three answers");
      }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other Biggest Challenges",
          "uuid": "b0f620fa-907e-486b-84cc-19c6f9d401ba",
          "keyValues": [],
          "concept": {
            "name": "Other Biggest Challenges",
            "uuid": "dce8869f-d77a-4072-bd86-675bd88b4195",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 31,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("52340496-30d3-4d2f-8c71-f29108ef5fda").containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Biggest Challenges Faced by the Village",
                          "conceptUuid": "52340496-30d3-4d2f-8c71-f29108ef5fda",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "What Kind of Work is Needed?",
          "uuid": "6f4e0ce1-bf30-4936-b925-6497fcaa0b86",
          "keyValues": [],
          "concept": {
            "name": "What Kind of Work is Needed?",
            "uuid": "94fb42ee-5940-4472-ac95-e3f377ff3c39",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Rural Development/Community Assets Development",
                "uuid": "8cd268c9-ec39-42b9-a821-c335e0809f10",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Infrastructure Development",
                "uuid": "0f678bde-b26d-4948-9a40-4d59659788e3",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Water & Sanitation",
                "uuid": "e502a412-543f-4442-afed-755a0fb9271b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Livelihood Support",
                "uuid": "e0089787-8825-46f0-bf7c-811904863375",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Women’s Health",
                "uuid": "aee9cb88-3faf-4a1e-9073-2dcf31719103",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Education",
                "uuid": "44fbe13a-a45b-47fe-be31-b791ce46c1cb",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 32,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Other Work Needed",
          "uuid": "befda9db-a141-4aa7-8bf7-dae33d3ec697",
          "keyValues": [],
          "concept": {
            "name": "Other Work Needed",
            "uuid": "2bb09e63-c8f1-49bf-9dd6-4009f9bb18ac",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 33,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("94fb42ee-5940-4472-ac95-e3f377ff3c39").containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "What Kind of Work is Needed?",
                          "conceptUuid": "94fb42ee-5940-4472-ac95-e3f377ff3c39",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Previous Work in This Village?",
          "uuid": "816de480-f243-46a2-9e55-0b6cce489e43",
          "keyValues": [],
          "concept": {
            "name": "Previous Work in This Village?",
            "uuid": "642d5b6d-c5a3-4c7e-8552-b9dc048ee714",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 34,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Detail of previous work",
          "uuid": "12113d73-7947-42bb-a908-b74d00630321",
          "keyValues": [],
          "concept": {
            "name": "Detail of previous work",
            "uuid": "64520152-2df6-4abe-9330-18c626bedfc7",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 35,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("642d5b6d-c5a3-4c7e-8552-b9dc048ee714").containsAnswerConceptName("303d5ad1-ffa2-4096-ba7c-a86876ca9d12").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Previous Work in This Village?",
                          "conceptUuid": "642d5b6d-c5a3-4c7e-8552-b9dc048ee714",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "303d5ad1-ffa2-4096-ba7c-a86876ca9d12"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Preferred quarter for working",
          "uuid": "56a55706-12a7-4fa0-8c1f-6f78dbf7718e",
          "keyValues": [],
          "concept": {
            "name": "Preferred quarter for working",
            "uuid": "8d33076f-cfd5-41b9-a233-f6b89fcc417f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "January–March",
                "uuid": "8d2d2e42-dc85-4320-8862-1ff966ba8dc7",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "October–December",
                "uuid": "820bfabb-6bbb-4b36-a8a6-b63b1734e6a3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "April–June",
                "uuid": "4af87e34-a6f1-410b-96b4-48cc21ae6c99",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "July–September",
                "uuid": "de7871cc-b5b0-488f-b087-0935c4d38a35",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 36,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Emergency Contact Name",
          "uuid": "19c1d01c-dd01-4541-8e44-a69d41c8322c",
          "keyValues": [],
          "concept": {
            "name": "Emergency Contact Name",
            "uuid": "9e5b6c81-82e3-43af-9b1b-59b840cf7f60",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 37,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[A-Za-z ]+$",
            "descriptionKey": "Input must contain only alphabets!"
          },
          "mandatory": true
        },
        {
          "name": "Emergency Contact Number",
          "uuid": "c780c8aa-26f4-4814-89fd-2d3adb11bb1c",
          "keyValues": [],
          "concept": {
            "name": "Emergency Contact Number",
            "uuid": "4459e712-b942-4527-8c88-852a90c2ff0e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 38,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "provide valid number without +91"
          },
          "mandatory": true
        },
        {
          "name": "Source of Data (Select 2 option)",
          "uuid": "7dbd6051-bdbf-4564-9c90-6db0c1bbfc8b",
          "keyValues": [],
          "concept": {
            "name": "Source of Data",
            "uuid": "3d21abcf-ef54-493c-8424-ea09fe0bdd9b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "ASHA Worker",
                "uuid": "643801a6-3495-4bc6-9b64-a8559c60a55b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Anganwadi Center",
                "uuid": "82e8ad09-8323-4eb5-8c36-6c5665581fab",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Gram Panchayat",
                "uuid": "e716b999-70a3-46e6-a6ce-fa41af07b7d2",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Government School",
                "uuid": "4288291c-759b-4241-bdb3-de4dca65afd2",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Primary Health Center (PHC) / Sub-Center",
                "uuid": "266cb503-dbed-4a1c-9f3f-4ea18b20c607",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Revenue Department",
                "uuid": "94730d21-8f45-49e7-a677-8dd123cb4136",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Block Development Office",
                "uuid": "f1be93f0-81ba-49a5-840d-d9c9aa13046d",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Census of India",
                "uuid": "9e3c2f3c-d155-47a3-bc4d-0c453c1d1650",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 39,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("3d21abcf-ef54-493c-8424-ea09fe0bdd9b").defined.matches();
  
  if(condition11 ){
      const answer = encounter.getObservationReadableValue("3d21abcf-ef54-493c-8424-ea09fe0bdd9b");  
      
      if(answer.length!==2){
          validationErrors.push("Please provide two answers");
      }
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Source of Data",
          "uuid": "67931445-14f2-4609-94f7-1823702bacb7",
          "keyValues": [],
          "concept": {
            "name": "Other Source of Data",
            "uuid": "182ee5d3-4544-45ab-8456-a34e70377cc0",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 40,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("3d21abcf-ef54-493c-8424-ea09fe0bdd9b").containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Source of Data",
                          "conceptUuid": "3d21abcf-ef54-493c-8424-ea09fe0bdd9b",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Primary Drinking Water Source",
          "uuid": "5f6efde1-55ed-43c3-8911-5fa61be65041",
          "keyValues": [],
          "concept": {
            "name": "Available Drinking Water Sources",
            "uuid": "5c77128c-e684-4182-99b4-986510c392d8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Well",
                "uuid": "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "River/Pond",
                "uuid": "e16eb815-df2e-489b-b571-dd2c35927632",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Piped Water",
                "uuid": "9940604d-7036-4ddc-9151-0e5613842f83",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Borewell",
                "uuid": "84e56498-2ef7-45b1-be9e-3e502d08e4f0",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 41,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Infrastructure & basic details",
      "timed": false
    },
    {
      "uuid": "4c007fe2-441f-4ee0-8913-97298a0cd02f",
      "name": "Data source & surveyor details",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Source of Data (Select minimum 1 option or maximum 2 option)",
          "uuid": "19387741-b75e-4054-9533-3a3e0025513b",
          "keyValues": [],
          "concept": {
            "name": "Source of Data",
            "uuid": "3d21abcf-ef54-493c-8424-ea09fe0bdd9b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "ASHA Worker",
                "uuid": "643801a6-3495-4bc6-9b64-a8559c60a55b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Anganwadi Center",
                "uuid": "82e8ad09-8323-4eb5-8c36-6c5665581fab",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Gram Panchayat",
                "uuid": "e716b999-70a3-46e6-a6ce-fa41af07b7d2",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Government School",
                "uuid": "4288291c-759b-4241-bdb3-de4dca65afd2",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Primary Health Center (PHC) / Sub-Center",
                "uuid": "266cb503-dbed-4a1c-9f3f-4ea18b20c607",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Revenue Department",
                "uuid": "94730d21-8f45-49e7-a677-8dd123cb4136",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Block Development Office",
                "uuid": "f1be93f0-81ba-49a5-840d-d9c9aa13046d",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Census of India",
                "uuid": "9e3c2f3c-d155-47a3-bc4d-0c453c1d1650",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("3d21abcf-ef54-493c-8424-ea09fe0bdd9b").defined.matches();
  
  if(condition11 ){
      const answer = encounter.getObservationReadableValue("3d21abcf-ef54-493c-8424-ea09fe0bdd9b");  
      
      if(answer.length < 1 || answer.length > 2) {
          validationErrors.push("Please provide minimum 1 and maximum 2 answers");
      }
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other Source of Data",
          "uuid": "780f1b12-017b-4ad2-88c1-0d3a655ad28b",
          "keyValues": [],
          "concept": {
            "name": "Other Source of Data",
            "uuid": "182ee5d3-4544-45ab-8456-a34e70377cc0",
            "dataType": "Text",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("3d21abcf-ef54-493c-8424-ea09fe0bdd9b").containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Source of Data",
                          "conceptUuid": "3d21abcf-ef54-493c-8424-ea09fe0bdd9b",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Name of Surveyor",
          "uuid": "b5697786-f695-4c6b-9757-0555eef13eb7",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Name of Surveyor",
            "uuid": "62e46ab7-a829-4e66-946b-ba21b468d99b",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
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
  
  const name = params.user.name;
  value = name;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Date of Survey",
          "uuid": "34afdac0-5103-4717-af7c-959076c00faa",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            },
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Date of Survey",
            "uuid": "5e078416-587c-4ad8-93e6-37cd6e7df8b6",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
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
  
  const encounterDate = encounter.encounterDateTime;
   if (encounterDate) {    
     value = moment(encounterDate).format('YYYY-MM-DD'); } 
   else {   
   value = moment().format('YYYY-MM-DD');     
 }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Organization Name",
          "uuid": "a617b494-1ba3-4ddf-8db9-635c2b06a282",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Organization Name",
            "uuid": "8f735d4d-bbd3-4190-bf05-72574fda5a93",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({ params, imports }) => {
  const user = params.user;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const uuidToFind = "2978117c-a297-4171-99c6-23c3522ca0f8";
  const requiredSubjectTypeUUID = "461abfde-8767-41f3-993e-b68599999f07";

  try {
    const syncSettings = JSON.parse(user.syncSettings);
    const subjectSettings = syncSettings.subjectTypeSyncSettings || [];
    const matchingItem = subjectSettings.find(item => 
      item.subjectTypeUUID === requiredSubjectTypeUUID && (
        (item.syncConcept1 === uuidToFind && Array.isArray(item.syncConcept1Values) && item.syncConcept1Values.length > 0)||
        (item.syncConcept2 === uuidToFind && Array.isArray(item.syncConcept2Values) && item.syncConcept2Values.length > 0)
      )
    );
    
    if (matchingItem) {
      const values = matchingItem.syncConcept1 === uuidToFind
        ? matchingItem.syncConcept1Values
        : matchingItem.syncConcept2Values;
      
      const hasGoonj = values.some(val => val.toLowerCase().includes('goonj'));
      
      // If there's exactly one value AND it doesn't contain "Goonj" → Use that value
      // In all other cases → Use "Goonj"
      if (values.length === 1 && !hasGoonj) {
        value = values[0];
      } else {
        value = 'Goonj';
      }
      
      console.log('FERule - Organization name set to:', value);
    }
  } catch (error) {
    console.log('FERule - Error processing sync settings:', error.message);
  }
  
  return new imports.rulesConfig.FormElementStatus(
    formElement.uuid,
    visibility,
    value,
    answersToSkip,
    validationErrors
  );
},
          "mandatory": false
        }
      ],
      "display": "Data source & surveyor details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "editFormRule": ""use strict";
({params, imports}) => {
    const {entity, form, services, entityContext, myUserGroups, user, db} = params;
    const moment = imports.moment;
    
    // Reload the encounter from the database to get all properties
    const encounterReloaded = db.objects('Encounter').filtered('uuid = $0', entity.uuid)[0];
    console.log('EditFormRule - Info:', JSON.stringify({
        entityUUID: entity.uuid,
        encounterFound: encounterReloaded ? true : false,
        createdByUUID: encounterReloaded ? encounterReloaded.createdByUUID : null,
        userUUID: user.userUUID
    }));
    
    const userGroups = myUserGroups
      .map((grp) => grp.groupName);
    
    const isUserFieldUser = userGroups.includes('Field Users');
    const isUserFieldSupervisor = userGroups.includes('Field Supervisor');
    
    // Get createdByUUID from the reloaded encounter
    const createdBy = encounterReloaded ? encounterReloaded.createdByUUID : null;
    
    const sameUser = createdBy === user.userUUID;
    
    // Allow Field Supervisors to edit any record, but Field Users can only edit their own
    const userCanEdit = (isUserFieldSupervisor || isUserFieldUser) && sameUser;
    
    // Parse encounterDateTime properly and check if it's within 3 days
    const currentDate = moment();
    const encounterDate = moment(entity.encounterDateTime);
    const thresholdDate = encounterDate.clone().add(3, 'days');
    const isEncounterDateWithinThreeDays = thresholdDate.isSameOrAfter(currentDate, 'day');
    
    const editableValue = userCanEdit && isEncounterDateWithinThreeDays;
    
    console.log('EditFormRule - Decision:', JSON.stringify({
        groups: userGroups,
        isFieldUser: isUserFieldUser,
        isFieldSupervisor: isUserFieldSupervisor,
        sameUser: sameUser,
        withinTimeLimit: isEncounterDateWithinThreeDays,
        editable: editableValue,
        reason: !editableValue ? 
            (!userCanEdit ? 'Not authorized to edit this record' : 
             !isEncounterDateWithinThreeDays ? 'Encounter date is past 3 days' : 'Unknown reason') : 
            'Editable'
    }));
    
    const output = {
      editable: {
        value: editableValue,
        messageKey: 'Edit access denied:Encounter date is past 3 days or You are not allowed to edit other users data'
      } 
    }; 
    
    return output;
},
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}