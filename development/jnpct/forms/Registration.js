{
  "name": "Registration",
  "uuid": "c22664a8-81ba-4442-956d-3e812a6d7bca",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "b470d24b-c4f4-467b-910b-e0f5fbffb9bb",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Marital status",
          "uuid": "770a06ac-31d5-4bdc-85b4-8daeedcede9e",
          "keyValues": [],
          "concept": {
            "name": "Marital status",
            "uuid": "a20a030b-9bef-4ef8-ba8a-88e2b23c1478",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Unmarried",
                "uuid": "65e1cf2b-7e67-4cf7-8360-ab4483a124dc",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "None",
                "uuid": "540cc15d-2ad4-496c-8514-64031f08290a",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Widow",
                "uuid": "b93a8892-7407-4ebb-baf6-f5e6487772ab",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Separated",
                "uuid": "5558ecd1-91ab-4d53-aba6-20940862be15",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Divorced",
                "uuid": "1b152618-fdd8-44d0-8fe0-813015941a59",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Married",
                "uuid": "63d6930e-94d0-4797-b780-ce5afbf36494",
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
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInMonths.lessThanOrEqualTo(12).matches();
  
  visibility = !(condition11 );
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "hideFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "ageInMonths"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 12
                        },
                        "operator": "lessThanOrEqualTo"
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
          "name": "Mother",
          "uuid": "678d8c84-1e33-45d2-b25f-18fecc7f2932",
          "keyValues": [],
          "concept": {
            "name": "Mother Subject",
            "uuid": "758db109-85ef-4dbf-8f40-6ede4a856845",
            "dataType": "Subject",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "2eaf9457-4cb5-4027-a9dc-6027948a30ba"
              }
            ]
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const formElement = params.formElement;
    const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({individual, formElement});
    const individualService = params.services.individualService;

    function eligibleMother(mother) {
      return mother && mother.isFemale() && mother.getAgeInYears() > 15;
    }
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInYears.lessThanOrEqualTo(1).matches();
  statusBuilder.show().whenItem(condition11).is.truthy;
  
  const subjects = individualService.getSubjectsInLocation(individual.lowestAddressLevel, 'Individual');
  let mothersToReturn = subjects.filter(mother => eligibleMother(mother));
  const uuids = _.map(mothersToReturn, ({uuid}) => uuid);
  statusBuilder.showAnswers(...uuids);
  
  let selectedSubject = individual.getObservationReadableValue('Mother Subject');
  
  if(selectedSubject != undefined){
        let showCondition = !_.includes(uuids,selectedSubject);
        statusBuilder.validationError("Selected Individual cannot be mother").whenItem(showCondition).is.truthy;
    }
  
  
 return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Number of family members",
          "uuid": "3b2e9bff-eb4c-4d84-accd-9d74e5edd67e",
          "keyValues": [],
          "concept": {
            "name": "Number of family members",
            "uuid": "a01c2055-7483-4a19-98c1-80fdf955b50c",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 99,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Number of family members');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Who is decision making person in family",
          "uuid": "ab1a7479-35b4-4469-93f6-94fcfe91996c",
          "keyValues": [],
          "concept": {
            "name": "Who is decision making person in family",
            "uuid": "f4028968-bbac-4a66-8fe7-df081321414f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Wife",
                "uuid": "4a875fa9-e02c-49d7-814e-d39bd1bec075",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Father-in-law",
                "uuid": "08258f9a-4cd4-4ccb-8c31-549033f34a3e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Mother-in-law",
                "uuid": "edba6b48-d111-4379-81df-20f5d547904c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Husband",
                "uuid": "7d24f498-bd92-4f6e-9408-de1c154dbfc2",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Brother",
                "uuid": "b7d4cfd4-7bd4-4e12-bd9b-5a4f4427bc20",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Father",
                "uuid": "60bd2230-5ada-451a-a020-532d48173a8c",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Mother",
                "uuid": "b232bcab-0b3f-4d56-ae8b-e0267f0a6738",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService; 
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Who is decision making person in family');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Ration card",
          "uuid": "8644b68d-81ef-41c3-9c28-55f9ae33328b",
          "keyValues": [],
          "concept": {
            "name": "Ration card",
            "uuid": "8eb5a6ce-7b8a-45cc-a066-fcceca3708f7",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No card",
                "uuid": "82f8fd3e-9024-47ed-9676-e3a6623c6a1b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "APL",
                "uuid": "0ac51bb8-7833-49b6-9762-02345b926b13",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "BPL",
                "uuid": "5e22cc0f-dbd2-4d40-9ffb-d26097db0aa7",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Antyodaya",
                "uuid": "d2b69d2a-6ddd-4563-9368-65970ccd3d0a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Ration card');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Caste",
          "uuid": "bd8811a7-3d02-45c4-ac3e-a3a017ea9341",
          "keyValues": [],
          "concept": {
            "name": "Caste",
            "uuid": "ba25ac4c-784a-4723-8e15-a965a0d63b50",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Tribal",
                "uuid": "b1b1e23d-f2ba-45ce-bd59-0d994ed5312c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Non-Tribal",
                "uuid": "ef561b47-ab7f-4c76-97ed-548084a80bc6",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Caste');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Subcaste",
          "uuid": "7c6f8ba5-8015-4b85-bdeb-212dcca7a160",
          "keyValues": [],
          "concept": {
            "name": "Subcaste",
            "uuid": "5f20070c-1cfe-4e0b-b0db-70dffee99394",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Warli",
                "uuid": "13d0cf3b-faf3-484f-ba72-e2b736d54884",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Kolcha",
                "uuid": "ba09d6cc-fa79-47e9-b978-f19f181b19bd",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Kukna",
                "uuid": "042750d6-aee9-4895-b59c-4b84b913c4b9",
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
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;

  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("ba25ac4c-784a-4723-8e15-a965a0d63b50").containsAnswerConceptName("b1b1e23d-f2ba-45ce-bd59-0d994ed5312c").matches();
  
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Subcaste');
       visibility = filterMother.getObservationReadableValue('Caste') == 'Tribal';
  }
  
  visibility = condition11;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Religion",
          "uuid": "826a15fb-258b-41e5-a329-f7f7e084d85f",
          "keyValues": [],
          "concept": {
            "name": "Religion",
            "uuid": "b9c9d807-7064-46fd-8dc7-1640345dc8cb",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Hindu",
                "uuid": "45b92952-4869-4acb-9271-c4af9ba80cd0",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Christian",
                "uuid": "434b1a46-a446-444f-84f9-3dd3611b98ab",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Muslim",
                "uuid": "5f760e6d-41b9-4c08-bb06-10943d1907b3",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Religion');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Satipati family",
          "uuid": "d7710e31-173a-4547-bed3-4c5b3de14599",
          "keyValues": [],
          "concept": {
            "name": "Satipati family",
            "uuid": "4e90fc18-7bf1-4722-87c3-f3b2bd5d1d7d",
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
          "displayOrder": 9,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Addiction",
          "uuid": "0dedd3e8-7bb8-44ba-8322-602db8012de5",
          "keyValues": [],
          "concept": {
            "name": "Addiction",
            "uuid": "0a668e5b-f3c2-4fc6-8589-d2abda26658b",
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
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInMonths.lessThanOrEqualTo(12).matches();
  
  visibility = !(condition11 );
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "hideFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "ageInMonths"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 12
                        },
                        "operator": "lessThanOrEqualTo"
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
          "name": "Addiction - Please specify",
          "uuid": "ce47c898-0f17-40f7-80c2-4d7a83ce267b",
          "keyValues": [],
          "concept": {
            "name": "Addiction - Please specify",
            "uuid": "e0a3086c-8d69-479e-bf44-258bc27b8105",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Smoking",
                "uuid": "df2a4228-0b25-4409-b7b6-3f1d658afbfe",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Drinking",
                "uuid": "22dbce79-98d7-45e7-9558-70a3def70049",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Tobacco",
                "uuid": "17c5ff62-4fcd-493f-a0a5-63c44b9de1de",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Ghuthka",
                "uuid": "97bff119-bff4-4015-9289-d9a0b9e62826",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Alcohol",
                "uuid": "6e4444c4-2f4b-4913-88f9-7edc3e862ba8",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true,
                "keyValues": []
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({individual, formElement});
  statusBuilder.show().when.valueInRegistration("Addiction").is.yes;
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Very poor family",
          "uuid": "6d62de04-bdb6-4728-9e32-ce45d9bac129",
          "keyValues": [],
          "concept": {
            "name": "Very poor family",
            "uuid": "89fe78b2-20a9-45f1-90e3-119a7bc95ce3",
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
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Very poor family');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Occupation of mother",
          "uuid": "c60b9c11-c6cd-4fd3-a202-bf0512bd4bcb",
          "keyValues": [],
          "concept": {
            "name": "Occupation of mother",
            "uuid": "6f03e969-f0bf-4438-a528-5d2ce3b70e15",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Farmer",
                "uuid": "7b0b419e-853e-44ac-b34e-cce7cd2f16ee",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Labour",
                "uuid": "ebeb96c7-2c88-42f1-ac85-1654ad50fa77",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "House-wife",
                "uuid": "bead5c9a-5517-4a47-95b2-41b5b7671f2f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Service",
                "uuid": "5d96f31a-8e34-4637-af9f-bbe90126d944",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Occupation of mother');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Occupation of husband/father",
          "uuid": "e5315158-8257-49c0-bdf6-13d66d4cc53b",
          "keyValues": [],
          "concept": {
            "name": "Occupation of husband/father",
            "uuid": "65a5101b-38fc-4962-876e-e0f8b9ba4cec",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Farmer",
                "uuid": "7b0b419e-853e-44ac-b34e-cce7cd2f16ee",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Service",
                "uuid": "5d96f31a-8e34-4637-af9f-bbe90126d944",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Labour",
                "uuid": "ebeb96c7-2c88-42f1-ac85-1654ad50fa77",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Occupation of husband/father');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Mother's education",
          "uuid": "940bcc92-47a8-4f79-b27f-15a3231e5e75",
          "keyValues": [],
          "concept": {
            "name": "Mother's education",
            "uuid": "e42f5b28-bee4-4a01-aff0-922d823d0075",
            "dataType": "Coded",
            "answers": [
              {
                "name": "5-7",
                "uuid": "a2a5c9f9-a2a8-4c40-9f2c-c75853cf7a0a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "1-4",
                "uuid": "9a41b0dc-9d29-4c0b-b5c4-4448e85fd294",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "None",
                "uuid": "540cc15d-2ad4-496c-8514-64031f08290a",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Diploma",
                "uuid": "878eedbf-2faf-458e-b7e9-80d68b489d82",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Graduate",
                "uuid": "3fd40981-dc62-40c3-96af-88af490b7de5",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Illiterate",
                "uuid": "4222d716-6754-46cf-ad3d-0689ee84ac7e",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "11-12",
                "uuid": "1fdd3349-f1d3-4d9f-8de5-0f02dd0bb0d4",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "8-10",
                "uuid": "86e04bd9-134b-49c0-9f65-fde49e750554",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Post - graduate",
                "uuid": "287bc24d-fcd8-4781-ae5e-b11882130b51",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue("Mother's education");
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Mobile number",
          "uuid": "f1d84e47-6017-4a18-b909-ee0ece2e33f7",
          "keyValues": [],
          "concept": {
            "name": "Mobile number",
            "uuid": "881d9628-eb4f-4056-ae10-09e4ef71cae4",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Mobile number');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "validFormat": {
            "regex": "^[0-9]{10}$",
            "descriptionKey": "Required10Digits"
          },
          "mandatory": false
        },
        {
          "name": "Specialy abled",
          "uuid": "afeb9ee9-7423-436d-973b-53f32a4d2a62",
          "keyValues": [],
          "concept": {
            "name": "Specialy abled",
            "uuid": "5f0b2fa0-ed20-4d6b-a8b5-3fed09dac067",
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
          "displayOrder": 17,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Specially abled - Please specify",
          "uuid": "10cffd1e-db4f-449d-9cf5-8b8e7fb6f81a",
          "keyValues": [],
          "concept": {
            "name": "Specially abled - Please specify",
            "uuid": "a154508a-9d8b-49d9-9d78-b61cbc9daf7f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Cerebral Palsy",
                "uuid": "01542811-e0dd-418b-aec2-9bc6c568cb11",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Deaf& autistic",
                "uuid": "7cf78e74-8887-4fd5-ac08-46150fb7ef27",
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
                "name": "Inborn deaf",
                "uuid": "89c79bab-bfe6-4c6d-a75c-02127ae80c53",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Club foot",
                "uuid": "776026cf-fb20-4d3b-8138-f19cc9588874",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Congenital abnormality of heart",
                "uuid": "fe57fffc-0d8e-426c-aaa9-fb085ff9172a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 18,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({individual, formElement});
  statusBuilder.show().when.valueInRegistration("Specialy abled").is.yes;
    return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Any long-term illnesses",
          "uuid": "87f91861-f71b-4689-abce-fcda31db2ae2",
          "keyValues": [],
          "concept": {
            "name": "Any long-term illnesses",
            "uuid": "d009887c-6d29-4c47-9e34-21e3b9298f44",
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
          "displayOrder": 19,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInMonths.lessThanOrEqualTo(12).matches();
  
  visibility = !(condition11 );
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "hideFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "ageInMonths"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 12
                        },
                        "operator": "lessThanOrEqualTo"
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
          "name": "Long-term illness - Please specify",
          "uuid": "6dbb497a-43cb-4f8c-b7f4-ac970c9df796",
          "keyValues": [],
          "concept": {
            "name": "Long-term illness - Please specify",
            "uuid": "7fa81959-a016-4569-920d-47dee242b27a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "HTN",
                "uuid": "981078eb-8d78-42d8-a9c8-953fe0b33368",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Epilepsy",
                "uuid": "8bf5ea0f-acd5-467c-90f7-f3a944e72ab6",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "T.B.",
                "uuid": "dafee4a5-8763-4751-b319-0ecf0b281c9e",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Leprosy",
                "uuid": "76d9fb3a-32a5-47dd-a27b-d0405349b51d",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Diabetes",
                "uuid": "02204d98-3965-4c63-a2a4-0cb5616bed0d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "HIV",
                "uuid": "5f36cda2-c586-42fb-ac71-bb3822fd82c3",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Paralysis",
                "uuid": "4ceb0a80-49c4-47b6-b16f-0cb70c07aa28",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Mental condition",
                "uuid": "9e56638e-5052-4306-96a1-3adb21a41f9e",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Cancer",
                "uuid": "0ab8a346-2521-4be4-b3d8-5c454cd337c9",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Thalassemia",
                "uuid": "215f25fd-802c-4a93-884a-311d81bcefc5",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Sickle Cell",
                "uuid": "f5910969-8c69-4e0f-8192-df382700cca0",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 20,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({individual, formElement});
  statusBuilder.show().when.valueInRegistration("Any long-term illnesses").is.yes;
    return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Toilet facility present",
          "uuid": "4fce85a7-cf35-41bd-b232-02ffc46791cb",
          "keyValues": [],
          "concept": {
            "name": "Toilet facility present",
            "uuid": "54105452-1752-4661-9d30-2d99bd2d04fa",
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
          "displayOrder": 21,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Toilet facility present');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Using the toilet regularly",
          "uuid": "c12f8d4b-7b9f-4564-b645-ff94d8fab9e8",
          "keyValues": [],
          "concept": {
            "name": "Using the toilet regularly",
            "uuid": "59db93f0-0963-4e49-87b6-485efb705561",
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
          "displayOrder": 22,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("54105452-1752-4661-9d30-2d99bd2d04fa").containsAnswerConceptName("3a9fe9a1-a866-47ed-b75c-c0071ea22d97").matches();
  
  visibility = condition11 ;
  
  const individualService = params.services.individualService;
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Using the toilet regularly');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Source of drinking water",
          "uuid": "8bbd207b-90eb-49e0-82e1-b8f914eab552",
          "keyValues": [],
          "concept": {
            "name": "Source of drinking water",
            "uuid": "789733c4-42ba-4da3-89e6-71da227cf4c2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Well",
                "uuid": "de4b5bc6-942d-43ca-b79e-c6ba255e2cd9",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Hand pump",
                "uuid": "cc15c301-8f38-47cb-a1fd-d4de3d71bd2f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "River",
                "uuid": "14e7e330-677c-4a79-b1b8-ce815e0841b1",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 23,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individualService = params.services.individualService;
  const mother = individual.getObservationReadableValue('Mother Subject');
  if(mother != undefined){
       const filterMother = individualService.getSubjectByUUID(mother);
       value = filterMother.getObservationReadableValue('Source of drinking water');
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Do you have PMJAY card?",
          "uuid": "b60eb9b6-9d95-4f13-877a-d497538c00f7",
          "keyValues": [],
          "concept": {
            "name": "Do you have PMJAY card",
            "uuid": "9aa27617-43e6-4ba2-860c-04d428c57c36",
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
          "displayOrder": 24,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInMonths.lessThanOrEqualTo(12).matches();
  
  visibility = !(condition11 );
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "hideFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "ageInMonths"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 12
                        },
                        "operator": "lessThanOrEqualTo"
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
          "name": "Aadhaar card",
          "uuid": "11e2b227-1fb1-4e4b-b306-429564b31937",
          "keyValues": [],
          "concept": {
            "name": "Aadhaar card",
            "uuid": "7170eabd-6f4f-4e30-b22e-85b20a4d854f",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 25,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[0-9]{12}$",
            "descriptionKey": "Required12Digits"
          },
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}