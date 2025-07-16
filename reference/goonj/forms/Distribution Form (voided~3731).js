{
  "name": "Distribution Form (voided~3731)",
  "uuid": "045bf98f-b2d5-4947-98b1-6522d337d17b",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "2c976fc9-54e9-4085-91c7-7d70ad0961f4",
      "name": "Dispatch details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Dispatch status id",
          "uuid": "10388702-9533-42e3-9dc7-a06b9b3ba273",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Dispatch status id (Dispatch)",
            "uuid": "fc7c0e1c-463f-4a94-a999-b1a6eedb9145",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
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
  
   const dispatchEncounter = encounter.individual.getEncounters(true).filter((enc) => enc.encounterType.name === 'Dispatch' );
   value = dispatchEncounter[0].getObservationReadableValue('Dispatch Status Id');
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Village",
          "uuid": "a2b4585c-6049-4e66-aaf9-c587ca204f6e",
          "keyValues": [],
          "concept": {
            "name": "Location",
            "uuid": "164971fe-2166-4b06-b215-926fba6362ef",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "47a9e070-090d-46f8-8f06-834c193b8bec"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ]
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Dispatch status id",
          "uuid": "326bde05-459b-49ef-b188-02ffa8358354",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Dispatch Status Id",
            "uuid": "132868ab-811a-401e-9fd3-7c87f5512436",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  const _ = imports.lodash;
  const firstDispatchEncounter = _.find(encounter.individual.encounters, enc => enc.encounterType.name === 'Dispatch');

  if(firstDispatchEncounter) {
    const dispatchStatusIdValue = firstDispatchEncounter.getObservationReadableValue('132868ab-811a-401e-9fd3-7c87f5512436');
    
    statusBuilder.value(dispatchStatusIdValue);
  }
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Dispatch Status Name",
          "uuid": "80302ad6-6d0b-4e23-b9a2-78f0e4a117f3",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Dispatch Status Name",
            "uuid": "c5bf896e-a2a5-434f-8d7c-dedf7bab7f0d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  const _ = imports.lodash;
  const firstDispatchEncounter = _.find(encounter.individual.encounters, enc => enc.encounterType.name === 'Dispatch');

  if(firstDispatchEncounter) {
    const dispatchStatusIdValue = firstDispatchEncounter.getObservationReadableValue('c5bf896e-a2a5-434f-8d7c-dedf7bab7f0d');
    
    statusBuilder.value(dispatchStatusIdValue);
  }
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Village",
          "uuid": "eae70968-d4ce-41ae-9fbf-37c240af5c60",
          "keyValues": [],
          "concept": {
            "name": "Village (voided~207375)",
            "uuid": "1f22b2fd-7279-4b6d-a92d-9a7415a8b14b",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Account name",
          "uuid": "a3d6b75d-d879-4f9b-b45b-fcaa42aa829d",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Account name (voided~220045)",
            "uuid": "c5a1871d-d549-4db1-9408-98505fba6cb0",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
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
  
   const dispatchEncounter = encounter.individual.getEncounters(true).filter((enc) => enc.encounterType.name === 'Dispatch' );
   value = dispatchEncounter[0].getObservationReadableValue('Account  name');
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Dispatch details",
      "timed": false
    },
    {
      "uuid": "4a2210d9-84d4-466c-b9a8-27ad20fe922f",
      "name": "Address",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "District",
          "uuid": "b574e1ef-0254-4b23-9cbd-8b6ddec71154",
          "keyValues": [],
          "concept": {
            "name": "District (voided~207373)",
            "uuid": "d4ff2fa9-2b0f-47c4-a470-d385075c6cae",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Value 2",
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Value 3",
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Value 1",
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Block",
          "uuid": "03b8f5d7-4fe5-4555-8870-47de7782f1c7",
          "keyValues": [],
          "concept": {
            "name": "Block (voided~220544)",
            "uuid": "9c54278a-c0d7-4c2a-881e-a2aef170164a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Value 3",
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Value 1",
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Value 2",
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "State",
          "uuid": "45305f2a-98de-4e56-9013-b5eed9bf4463",
          "keyValues": [],
          "concept": {
            "name": "State List",
            "uuid": "1fe23613-1dab-41b3-9ef1-e5eaa7556e7c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Palghar",
                "uuid": "1095009d-66d7-4e10-8757-9cf2e420f182",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "active": true
              },
              {
                "name": "Amravati",
                "uuid": "cab0ab57-4b58-46f3-af63-cca6937afcad",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Hingoli",
                "uuid": "d051d482-5615-4020-abca-61b5aa0bc18b",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Mumbai",
                "uuid": "f118b9aa-cc6d-4228-bf0a-a5f438eb0cf2",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Akola",
                "uuid": "d5b57e3f-196b-459c-b4f1-eb12f0f86546",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Nashik",
                "uuid": "203dbdd0-7484-44e0-8aea-6a70e4482e6b",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Latur",
                "uuid": "086b6b23-e4a6-416c-a3b9-d5074c589cd2",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Raigad",
                "uuid": "a54afa32-c8c4-4b4d-9087-17908bc08ab9",
                "dataType": "NA",
                "answers": [],
                "order": 26,
                "active": true
              },
              {
                "name": "Thane",
                "uuid": "4f746cbf-fa51-4b34-aa2a-29369bf81d7d",
                "dataType": "NA",
                "answers": [],
                "order": 32,
                "active": true
              },
              {
                "name": "Aurangabad",
                "uuid": "a3be2255-6ed1-45eb-a20e-ed0ca98c8b1a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Buldhana",
                "uuid": "22fbfd7b-7e2d-4e37-8259-431d75d2cd90",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Satara",
                "uuid": "13025832-19f6-42cb-a5e5-41e023591f4f",
                "dataType": "NA",
                "answers": [],
                "order": 29,
                "active": true
              },
              {
                "name": "Nanded",
                "uuid": "9e23a1b5-8b98-4681-8ad7-6e488d7ce4b1",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "Bhandara",
                "uuid": "e15c4581-5b88-42f1-81a7-fb022e237c16",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Parbhani",
                "uuid": "0f1dd513-fafb-46ed-a1dc-5d64039af00a",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "active": true
              },
              {
                "name": "Wardha",
                "uuid": "8a6f702f-09cd-4394-8bed-70c136836234",
                "dataType": "NA",
                "answers": [],
                "order": 33,
                "active": true
              },
              {
                "name": "Ratnagiri",
                "uuid": "c63d31e0-19b4-4bfb-9259-aeac7daa1c9f",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "active": true
              },
              {
                "name": "Nagpur",
                "uuid": "77ee790e-1f54-4e85-9afb-cdaaad609163",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Yavatmal",
                "uuid": "5c930fcf-871d-4c2e-bdf8-ab485c7c47f1",
                "dataType": "NA",
                "answers": [],
                "order": 35,
                "active": true
              },
              {
                "name": "Kolhapur",
                "uuid": "13fb0691-9d20-4e56-beb2-131d57d3e26f",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Sindhudurg",
                "uuid": "6b45db64-9e84-4bbd-b7f7-861505262667",
                "dataType": "NA",
                "answers": [],
                "order": 30,
                "active": true
              },
              {
                "name": "Pune",
                "uuid": "6a16f52a-ca5d-42cd-9e15-197dd563490c",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "active": true
              },
              {
                "name": "Osmanabad",
                "uuid": "913c34ac-f70f-4ea7-b771-1a70c55ad9ee",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "active": true
              },
              {
                "name": "Sangli",
                "uuid": "700882bb-c9bc-409e-ad3c-fb1fcd719abf",
                "dataType": "NA",
                "answers": [],
                "order": 28,
                "active": true
              },
              {
                "name": "Solapur",
                "uuid": "126a8580-ac82-4bae-8fa0-867debafcb70",
                "dataType": "NA",
                "answers": [],
                "order": 31,
                "active": true
              },
              {
                "name": "Washim",
                "uuid": "fb40f2d8-4db7-41e3-92ef-c0e6148fe3bd",
                "dataType": "NA",
                "answers": [],
                "order": 34,
                "active": true
              },
              {
                "name": "Mumbai Suburban",
                "uuid": "d64dcae8-9aab-4481-8eba-02e6d7e55ac6",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Beed",
                "uuid": "b1927eaf-250b-4dce-b00c-d4529c28b7ec",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Gondia",
                "uuid": "3484a0f4-1171-4c7a-99ae-294990cbea08",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Gadchiroli",
                "uuid": "c77eaf9a-cffd-4f25-9679-ca18cc096284",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Chandrapur",
                "uuid": "8db22631-bc11-49af-b300-9b7caace0253",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Nandurbar",
                "uuid": "dca8d7dc-5719-4bc3-9cf1-818a0bed7101",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Jalna",
                "uuid": "2c68cc11-e2ed-4092-b40b-32186237f456",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Ahmednagar",
                "uuid": "7f728f06-f0b5-4d24-b4b1-2adb14ac809b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Dhule",
                "uuid": "375c6f56-2a0d-467f-924a-97dd188c4717",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Jalgaon",
                "uuid": "12defede-b654-451c-af9b-e56f9d47b3b0",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "District",
          "uuid": "f9f93164-e8ca-4373-88da-6585302e495e",
          "keyValues": [],
          "concept": {
            "name": "District List",
            "uuid": "5fb8cc74-8a4c-4430-90d3-5bb73c7a7081",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Sangmeshwar",
                "uuid": "28cdef4e-50d4-49b5-b205-2e939d39b30a",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Dapoli",
                "uuid": "6797c0d8-1056-4745-9326-073efd09e5aa",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Lanja",
                "uuid": "15429ed8-df6c-4b40-a10e-59f0e53f98fa",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Rajapur",
                "uuid": "5021b731-8510-4614-a5e5-751bad5e9b3c",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Khed",
                "uuid": "63803c4f-ebc2-4953-8438-63fa60975ff4",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Mandangad",
                "uuid": "0c94aec6-9452-43dc-8f05-6b705aab6d79",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Guhagar",
                "uuid": "37db2866-58dd-4e02-9084-96283706aee0",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Ratnagiri",
                "uuid": "c63d31e0-19b4-4bfb-9259-aeac7daa1c9f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Chipalun",
                "uuid": "f7bf1ead-7c86-47b6-94ed-b0bd649ff30e",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Block",
          "uuid": "7e502acf-4918-4943-b834-dd3e7b3f37fc",
          "keyValues": [],
          "concept": {
            "name": "Block List (voided~220546)",
            "uuid": "cef9bdf9-8fe3-4496-82bd-1db359c238f1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Math Kh.",
                "uuid": "0afbcb29-78d5-4c1e-9640-114fea946bfa",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "active": true
              },
              {
                "name": "Kond Tiware",
                "uuid": "a06dae46-a92d-4b57-b3a2-6b49483e0256",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Kodavali",
                "uuid": "ec1ea3e0-67e7-4278-ba7a-24cd4822728c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Kondhe Tarf Rajapur",
                "uuid": "cfe38412-9c95-4ba3-b3b7-c7bdf550b610",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Kunbiwadi",
                "uuid": "6f9feff2-7248-4437-8d8a-6cf63178a5f4",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Kondsar Kh.",
                "uuid": "29df26ba-5950-4d18-b00a-6e79da3a7000",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Manjarewadi",
                "uuid": "694ac906-a21d-4e7f-a2c9-ce91663b2615",
                "dataType": "NA",
                "answers": [],
                "order": 26,
                "active": true
              },
              {
                "name": "Mandavkarwadi",
                "uuid": "55106f1b-848c-48a3-aa05-7bdfb93ee651",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "active": true
              },
              {
                "name": "Malewadi",
                "uuid": "301b306d-c09a-4c03-b672-cc4f694a0da2",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "active": true
              },
              {
                "name": "Kumbhavade",
                "uuid": "f4a1efc2-5c3b-47c5-8931-f120285cadae",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Kuveshi",
                "uuid": "75cc3c5e-f736-45c6-86b1-1abb3d0347d1",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Kombhe",
                "uuid": "b4d6c893-a16e-4c05-a585-c733524e9020",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Chavhanwadi",
                "uuid": "4b282857-8c38-4b7f-b758-caea35481872",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Madban",
                "uuid": "1704a6d5-0646-4125-b439-625bbe57ec07",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Kolamb",
                "uuid": "a95421f5-9f3f-4197-942d-2c2ebbe86438",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Kolwankhadi",
                "uuid": "440f1b87-d84d-44fa-be9e-e95d13d50f92",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Kondwadi",
                "uuid": "ba43e65b-6db9-495f-8d74-9a637cfd57dd",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Kondvashiwadi",
                "uuid": "bb59e2dc-3281-4823-8c4d-b1c49759d079",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Kondivale",
                "uuid": "8dc4496a-15c0-4de2-8e17-80dc4cdfbf97",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Kondye Tarf Saundal",
                "uuid": "ac1e7c61-e5c2-4058-a33e-40ef850b8fb5",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Madheliwadi",
                "uuid": "82ae0ba9-a88c-4509-87f3-c35c7ffe1d22",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Kond Dasur",
                "uuid": "e09c9d74-27c0-45fc-b132-ea0c68e1e7bd",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Mahalunge",
                "uuid": "59cb9a1a-e368-44f0-9210-ef5b32f94627",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Kotapur",
                "uuid": "ab195e7c-f14d-4bf0-97bd-fe67d76c44b4",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Majre Juve",
                "uuid": "0cbc5087-0493-4cb8-9e4a-cb892c486363",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "active": true
              },
              {
                "name": "Kondsar Bk.",
                "uuid": "4cacd35b-10c9-46b5-82e4-7c4b1175e684",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Madhaliwadi (N.V.)",
                "uuid": "988e76e9-6c56-4629-9782-ad7397192998",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "Mandrul",
                "uuid": "88557ddc-3511-41ff-814d-d775bd3c52a8",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "State",
          "uuid": "9f045f60-4e83-434a-9f2e-9f02baceb502",
          "keyValues": [],
          "concept": {
            "name": "State",
            "uuid": "fdcb1ae2-505d-4784-993f-1de9d5e2ba60",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "3410e7a2-cefe-4fc7-94b4-6631656c548c"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ]
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "District",
          "uuid": "b94197a7-2626-469d-945a-b724dba5d95c",
          "keyValues": [],
          "concept": {
            "name": "District",
            "uuid": "667a4546-f08e-434b-9f4c-60e285061313",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "3410e7a2-cefe-4fc7-94b4-6631656c548c"
                ]
              }
            ]
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Village",
          "uuid": "6809623c-3742-4539-b43b-595a1dfa78ee",
          "keyValues": [],
          "concept": {
            "name": "Village (voided~207375)",
            "uuid": "1f22b2fd-7279-4b6d-a92d-9a7415a8b14b",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Address",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "1a48160f-02ae-485e-8abc-65bedd8d4b32",
      "name": "Distribution Related Details",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Distribution date",
          "uuid": "b7f4fb4d-d655-4cfd-bd06-fe38162ea517",
          "keyValues": [],
          "concept": {
            "name": "Distribution Date",
            "uuid": "cef5b862-672e-4e94-8ebc-3299a55f416f",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  let visitDate = encounter.encounterDateTime;
  const distriutionDate = encounter.getObservationReadableValue('Distribution Date');
  
    // Changes start

  let dispatchReceivedDateObservation = encounter.individual.findLatestObservationFromEncounters('78f9d6cb-356e-45dc-90d5-216185784fe6', encounter);
  let dispatchReceivedDateValue = _.isEmpty(dispatchReceivedDateObservation) ? dispatchReceivedDateObservation : dispatchReceivedDateObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("cef5b862-672e-4e94-8ebc-3299a55f416f").lessThan(dispatchReceivedDateValue, 'ms').matches();
  
  if(condition11 ){
      statusBuilder.validationError("Date cannot be before Dispatch received date.");
}
  
  // Changes end  

if(imports.moment(distriutionDate).isAfter(visitDate, 'date'))
  statusBuilder.validationError("Distribution date cannot be in future");
 
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Activities Done",
          "uuid": "ba9fd58f-7cc8-415b-a424-aefc063ed60f",
          "keyValues": [],
          "concept": {
            "name": "Activities Done (voided~220049)",
            "uuid": "c8dcffcf-a58a-4b0d-85cb-0d8c8d0dcfb2",
            "dataType": "Encounter",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "encounterTypeUUID",
                "value": "639605f9-a202-48dd-b42f-082dc2d172ff"
              },
              {
                "key": "encounterScope",
                "value": "Within Subject"
              },
              {
                "key": "encounterIdentifier",
                "value": "{Type of Initiative} {Activity sub type} {Location}-{Mohalla / Area}[{Activity Start Date} to {Activity End Date}]"
              }
            ],
            "voided": true
          },
          "displayOrder": 2,
          "type": "MultiSelect",
          "rule" : 
({ params, imports }) => {
    const encounter = params.entity;
    const formElement = params.formElement;
    const _ = imports.lodash;
    const activities = _.chain(encounter.individual.getEncounters(true))
        .map(_.identity)
        .filter(enc => enc.encounterType.name === 'Activity')
        .value();
    const visibility = activities.length > 0;

    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null, [], []);
},
          "mandatory": false
        },
        {
          "name": "Village",
          "uuid": "4211ff30-27b5-4e5b-9141-1e6fb2b7fb5c",
          "keyValues": [],
          "concept": {
            "name": "Location",
            "uuid": "164971fe-2166-4b06-b215-926fba6362ef",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "47a9e070-090d-46f8-8f06-834c193b8bec"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ]
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Village",
          "uuid": "4df598a0-114c-4913-b5b1-f054c42b8752",
          "keyValues": [],
          "concept": {
            "name": "Location",
            "uuid": "164971fe-2166-4b06-b215-926fba6362ef",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "47a9e070-090d-46f8-8f06-834c193b8bec"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ]
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Target Community",
          "uuid": "dc0111f3-e6a4-4b0a-b371-22a08b46753d",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Third Gender"
              ]
            }
          ],
          "concept": {
            "name": "Target Community",
            "uuid": "8c87be17-2564-41d2-a6a4-1239e06ef9d2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Mentally Challenged",
                "uuid": "c40880c6-cac6-4fd8-b30c-395f532d0a9c",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Adivasis",
                "uuid": "0211094b-254a-4120-bd3f-940731663eb4",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Devdasi community",
                "uuid": "1b6229ca-3360-4ba8-b858-1048f64f8d6b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Senior Citizens",
                "uuid": "b4f90cb7-1cd7-4f72-aba0-49f961fc27ea",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "active": true
              },
              {
                "name": "Tailor Cutting",
                "uuid": "a3e19465-bebb-427a-8df2-7d58e28c5091",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "active": true
              },
              {
                "name": "PWD",
                "uuid": "dc6278fa-b9f5-457d-b5a4-807189ac26e6",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "HIV affected",
                "uuid": "8df338a9-de53-4c13-8dd5-b869c3d45f2d",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Embroidery workers",
                "uuid": "0016afc5-47a2-46e0-867d-75ac3b0edfa0",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Rohingya community",
                "uuid": "508b8292-894a-4ed2-b090-96283dccaff0",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Daily Wagers",
                "uuid": "a45cf0ac-7200-49a2-be31-a7317aaa46b6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Adolescents",
                "uuid": "7cf699d9-0a47-4111-95ce-b0c5df581762",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Agricultural Related",
                "uuid": "84adcd3a-c177-418e-88ea-ca3a1cdb56f5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Rickshaw Pullers",
                "uuid": "43803088-d89d-425e-991f-1343ddbd66c4",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Fisher community",
                "uuid": "10d355b7-d81e-4937-8a5c-39e30c4e130b",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Tribal Community",
                "uuid": "3fdad012-1109-4684-907c-0a268e6d1e9b",
                "dataType": "NA",
                "answers": [],
                "order": 29,
                "active": true
              },
              {
                "name": "Tea garden workers",
                "uuid": "0640170e-b58f-4aac-a30c-01f5ad908a0a",
                "dataType": "NA",
                "answers": [],
                "order": 26,
                "active": true
              },
              {
                "name": "Artisans",
                "uuid": "73d1cedb-66f4-425b-9da4-7b22e87df967",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Third Gender",
                "uuid": "e179e806-3487-433e-ba5f-9b341db3ed20",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "active": true
              },
              {
                "name": "Leprosy affected",
                "uuid": "4af95ec9-9da1-4367-a2fa-2a8392822cc8",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Children",
                "uuid": "d46b9822-d3c3-492d-a2a3-9ab623cfd802",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Construction workers",
                "uuid": "bc660964-f0c1-422a-a275-c308bbc86a9e",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Unorganized sector",
                "uuid": "cf177b27-87c3-4dc1-8255-68ffe549b9f4",
                "dataType": "NA",
                "answers": [],
                "order": 30,
                "active": true
              },
              {
                "name": "Transgenders",
                "uuid": "bb9b146f-d1df-49d9-82eb-dab38c2bc8c8",
                "dataType": "NA",
                "answers": [],
                "order": 28,
                "active": true
              },
              {
                "name": "Street Vendors",
                "uuid": "c792d850-6ff6-46d6-b62b-1f7a91c3952f",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "active": true
              },
              {
                "name": "Sex Workers",
                "uuid": "c913f919-19bb-4789-948f-1ce239452da2",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "active": true
              },
              {
                "name": "Weavers",
                "uuid": "95867a1b-bb19-469e-b21c-313016f3725d",
                "dataType": "NA",
                "answers": [],
                "order": 31,
                "active": true
              },
              {
                "name": "lohar",
                "uuid": "8585d735-9b9e-4801-adc8-c9c8c0b89518",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Migrant workers",
                "uuid": "0ee9a1f6-c598-47ae-9c84-64aae903cc9b",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Widows",
                "uuid": "e0c9a937-415b-4bcc-be63-e7a41fa3c0d6",
                "dataType": "NA",
                "answers": [],
                "order": 32,
                "active": true
              },
              {
                "name": "Differently Abled",
                "uuid": "81f059e7-7a88-4e9e-883e-a9bfb8ef468a",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Health workers and sweepers",
                "uuid": "a87c0a89-9a65-43ab-8f94-daee22093c3b",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Puppeteers",
                "uuid": "7720a9df-4c19-437d-8c47-0b55183af349",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "None",
                "uuid": "ba835221-04c0-4e55-a08f-e6e25bb6719c",
                "dataType": "NA",
                "answers": [],
                "order": 33,
                "unique": true,
                "active": true
              },
              {
                "name": "Ragpickers",
                "uuid": "27818169-2925-4895-b4ea-6cc30cedc5b0",
                "dataType": "NA",
                "answers": [],
                "order": 19,
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
          "name": "Target community",
          "uuid": "8422bb5c-5f52-4f4c-8634-b46946f23856",
          "keyValues": [],
          "concept": {
            "name": "Target community (voided~207382)",
            "uuid": "ac3b21a6-cf77-4e9a-81c7-7f7f65e795c6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Health Workers and Sweepers",
                "uuid": "024b3031-b7f3-4441-9ae0-95bfc4c2f853",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Weavers",
                "uuid": "95867a1b-bb19-469e-b21c-313016f3725d",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Artisans",
                "uuid": "73d1cedb-66f4-425b-9da4-7b22e87df967",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Sex Workers",
                "uuid": "c913f919-19bb-4789-948f-1ce239452da2",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "PWD",
                "uuid": "dc6278fa-b9f5-457d-b5a4-807189ac26e6",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Third gender",
                "uuid": "81e83f81-0372-425a-b96f-c012ebe0b5b0",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Widows",
                "uuid": "e0c9a937-415b-4bcc-be63-e7a41fa3c0d6",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Daily Wagers",
                "uuid": "a45cf0ac-7200-49a2-be31-a7317aaa46b6",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Mentally Challenged",
                "uuid": "c40880c6-cac6-4fd8-b30c-395f532d0a9c",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "HIV affected",
                "uuid": "8df338a9-de53-4c13-8dd5-b869c3d45f2d",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Devdasi Community",
                "uuid": "218a5dfb-0a0d-40b6-9a75-ee7a79623454",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Ragpickers",
                "uuid": "27818169-2925-4895-b4ea-6cc30cedc5b0",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Leprosy affected",
                "uuid": "4af95ec9-9da1-4367-a2fa-2a8392822cc8",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Tribal community",
                "uuid": "83d940c4-43c4-4f06-82d8-d4315b884617",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Tea garden workers",
                "uuid": "0640170e-b58f-4aac-a30c-01f5ad908a0a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Senior Citizens",
                "uuid": "b4f90cb7-1cd7-4f72-aba0-49f961fc27ea",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Agricultural Related",
                "uuid": "84adcd3a-c177-418e-88ea-ca3a1cdb56f5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Fishery Community",
                "uuid": "3b2e8baf-a7aa-4969-b6fe-0027e4343e25",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Type of Initiative",
          "uuid": "d1f02602-c810-487f-94bf-f007f7ef1749",
          "keyValues": [],
          "concept": {
            "name": "Type of Initiative",
            "uuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "CFW-S2S",
                "uuid": "4db0c307-9053-4bd4-b917-580d00e43f1d",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "CFW-Rahat",
                "uuid": "231a6748-7677-4eb1-8a37-15a0ab207d67",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Specific Initiative",
                "uuid": "54d27687-374e-4988-ad81-e4d26bf02bf3",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Only S2S",
                "uuid": "abbd4c79-e71e-403d-b263-e49259180f5f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "NJPC",
                "uuid": "6404fcaf-31de-4322-9620-c1b958f9c548",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Only Rahat",
                "uuid": "118ad0b3-0e16-46f2-902c-15722d6047c9",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Only NJPC",
                "uuid": "6b5b0f34-c925-4ff8-bbf8-a72baf4e0f32",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "CFW-NJPC",
                "uuid": "820b5991-7002-4be5-89db-f1a4e10d4cd6",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Only CFW",
                "uuid": "18aee17d-bc4e-4e84-b5bd-df28961acf77",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "S2S",
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Education and Health",
                "uuid": "00e97494-a65b-482b-b919-aab58d52e5b8",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Rahat",
                "uuid": "cbf0805f-aac1-40b9-b78c-1c568b86ef24",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "CFW",
                "uuid": "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Vaapsi",
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                "dataType": "NA",
                "answers": [],
                "order": 8,
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
          "name": "Type of disaster",
          "uuid": "4876ae04-561f-472e-b3bb-5f0b414faa45",
          "keyValues": [],
          "concept": {
            "name": "Type of Disaster",
            "uuid": "b35f7845-dd49-42fc-9131-0f529b1d3ee3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Cyclone",
                "uuid": "318bd723-ecb6-444b-aae3-5490db65a376",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "unique": true,
                "active": true
              },
              {
                "name": "Not Applicable",
                "uuid": "ca098686-79b0-4219-8f33-479363f8a69a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Fire",
                "uuid": "0ec26543-d62f-4dd9-a8f9-e2a033c1f1c4",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "unique": true,
                "active": true
              },
              {
                "name": "Storm",
                "uuid": "a4b90e21-95cc-4772-a1ec-c3f474279326",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "unique": true,
                "active": true
              },
              {
                "name": "Winter",
                "uuid": "a359a1d4-5a81-491d-84bd-aac0f819555f",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "unique": true,
                "active": true
              },
              {
                "name": "Landslides",
                "uuid": "e037aeb5-e82c-41cb-96a8-45cb1e031126",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "unique": true,
                "active": true
              },
              {
                "name": "Earthquake",
                "uuid": "b121c9c4-ca7e-4dbd-814e-f4a10be4fd79",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "unique": true,
                "active": true
              },
              {
                "name": "Floods",
                "uuid": "5512bd22-4810-461b-8bc2-79e1ccfb4011",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "unique": true,
                "active": true
              },
              {
                "name": "Drought",
                "uuid": "1b0285e1-0bc8-4461-b8cd-22e4b62d960f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "unique": true,
                "active": true
              },
              {
                "name": "Cloudburst",
                "uuid": "079f7101-6b67-46bf-b09e-c0aff429b943",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "unique": true,
                "active": true
              },
              {
                "name": "Flash Flood",
                "uuid": "5ffe578b-9cf5-464b-aeb9-a4454e3b297d",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "unique": true,
                "active": true
              },
              {
                "name": "Riots",
                "uuid": "b3dd4f42-f85f-47f3-93ba-0d818c3f7462",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "unique": true,
                "active": true
              },
              {
                "name": "Tsunami",
                "uuid": "9d7d7bc1-0c39-4d2d-afaf-4f4f53f6fc8f",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "unique": true,
                "active": true
              },
              {
                "name": "Covid",
                "uuid": "e3e281eb-d4eb-4c95-92a2-f72ff229884d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "unique": true,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnyAnswerConceptName("231a6748-7677-4eb1-8a37-15a0ab207d67","cbf0805f-aac1-40b9-b78c-1c568b86ef24").matches();
  
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
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "CFW-Rahat",
                            "Rahat"
                          ],
                          "answerConceptUuids": [
                            "231a6748-7677-4eb1-8a37-15a0ab207d67",
                            "cbf0805f-aac1-40b9-b78c-1c568b86ef24"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
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
          "name": "Activities done",
          "uuid": "11710c4b-0ba8-4d22-9a75-dbce6e490b1a",
          "keyValues": [],
          "concept": {
            "name": "Activities Done (voided~220049)",
            "uuid": "c8dcffcf-a58a-4b0d-85cb-0d8c8d0dcfb2",
            "dataType": "Encounter",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "encounterTypeUUID",
                "value": "639605f9-a202-48dd-b42f-082dc2d172ff"
              },
              {
                "key": "encounterScope",
                "value": "Within Subject"
              },
              {
                "key": "encounterIdentifier",
                "value": "{Type of Initiative} {Activity sub type} {Location}-{Mohalla / Area}[{Activity Start Date} to {Activity End Date}]"
              }
            ],
            "voided": true
          },
          "displayOrder": 9,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "POC ID",
          "uuid": "d69e7abc-28cb-4b42-bb9f-a2f3032bc120",
          "keyValues": [],
          "concept": {
            "name": "POC ID",
            "uuid": "72fb3bcf-c852-4fa6-a95d-6446bc7018d1",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Remarks",
          "uuid": "aa228975-be40-4b94-8560-c4fa5a1a5f95",
          "keyValues": [],
          "concept": {
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Images",
          "uuid": "4d514129-c4b6-41eb-8acb-65f80b43357e",
          "keyValues": [
            {
              "key": "imageQuality",
              "value": 1
            }
          ],
          "concept": {
            "name": "Distribution Images",
            "uuid": "1c4eb3f2-4d1e-4618-aaae-74475c5d8e08",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Distribution Related Details",
      "timed": false
    },
    {
      "uuid": "8969dd8e-442c-405b-a49c-557cd0a1f88d",
      "name": "Dispatched Materials distributed",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Type of material from received",
          "uuid": "cc7507dd-243d-4760-9c9a-f3235e637331",
          "keyValues": [],
          "concept": {
            "name": "Type of material from received (voided~207589)",
            "uuid": "4745383c-21f3-4650-9358-10ab387f7728",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Purchased item",
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Kit",
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Contributed item",
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Dispatched Materials distributed",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "f43e6596-19d0-4084-8e44-6dc9e15111a6",
      "name": "Materials distributed",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Materials",
          "uuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            },
            {
              "key": "disableManualActions",
              "value": true
            }
          ],
          "concept": {
            "name": "Materials",
            "uuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
  ({params, imports}) => {
    const encounter = params.entity;
    const formElement = params.formElement;
    const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
    const _ = imports.lodash;
    const firstDispatchEncounter = _.find(encounter.individual.encounters, enc => enc.encounterType.name === 'Dispatch');
    const conceptsToCopy = ['f25402e3-8d6c-4436-ba81-ad7b4f97131e','ef2f247e-209f-4a8a-9fc5-4b27264d0cec',
                            '384789ec-1f69-4407-932c-9451d4e05a51','44cd43e1-d2a7-46e4-92f3-1fcf3508f8aa',
                            'e7963e9a-f0ac-4666-af69-173e4e8bbcf6','53b13383-40de-4b5e-ab9f-94d0ec216c89',
                            '944cb7a1-a537-4e4f-bd15-74db621abefa','1b637749-2537-42d5-a5a4-b7e522967855',
                            'aaede45f-53ca-40dc-a349-feca810810f5','318902e6-f7a5-4e70-8f5f-72b83f3ccb22'];
    
    if(firstDispatchEncounter) {
      const materialsDispatchedValue = firstDispatchEncounter.getObservationValue('267fbb23-4168-4fb1-9bce-6b0d5f378c46');
      const valueArray = _.map(materialsDispatchedValue, groupObservations => _.pick(groupObservations.toResource, conceptsToCopy));
      statusBuilder.value(valueArray);
    }
    return statusBuilder.build();
  },
          "mandatory": false
        },
        {
          "name": "Type of material",
          "uuid": "6dff44be-188d-4daf-8fc5-2c1994e195bb",
          "keyValues": [],
          "concept": {
            "name": "Type of material received (voided~207594)",
            "uuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Purchased item",
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Kit",
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Contributed item",
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Type of material",
          "uuid": "0564203c-55a8-41aa-b829-348059270e78",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Type of Material (voided~207317)",
            "uuid": "274a5e34-2cc8-46f9-9e1f-a0044e7397fc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Contributed item",
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Kit",
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Purchased item",
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Type of material",
          "uuid": "40565b64-ac03-45d2-aa58-132825b479fb",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Type Of Material",
            "uuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Bulk Material",
                "uuid": "11c11e55-7604-4f38-9f4f-3560e116e76e",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Contributed item",
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Goonj product",
                "uuid": "73e4cab9-b0d5-49a8-9cf2-c42f41523143",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Kit",
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Purchased item",
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Contributed track",
                "uuid": "6f6eb1de-88c4-4df2-a8ae-997a339a78c5",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": false
        },
        {
          "name": "Dispatch Line Item Id",
          "uuid": "11a77c03-03e5-4ea9-9af5-239305f1a9e8",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Dispatch Line Item Id",
            "uuid": "44cd43e1-d2a7-46e4-92f3-1fcf3508f8aa",
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
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": false
        },
        {
          "name": "Type",
          "uuid": "0f56eada-e5e0-486d-9c6d-699a4a6de592",
          "keyValues": [],
          "concept": {
            "name": "Type (Kit)",
            "uuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Marriage Kits",
                "uuid": "7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "S2S (GBG)",
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Dance Drama",
                "uuid": "a865aa62-8fe4-4303-9394-2d06926fff43",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "S2S – AW",
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Tent House",
                "uuid": "c1ba7eed-7cac-47b2-974b-0c0ff9a954bb",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "S2S (Non-GBG)",
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "My Pad Woman",
                "uuid": "92f513a6-a892-4c06-8a30-a5252f4fccf4",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Volunteer",
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c",
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
                "order": 14,
                "active": true
              },
              {
                "name": "New Born Baby",
                "uuid": "eecf1fe0-c01d-4a37-97f5-80894be39bd1",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Vaapsi",
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Toiletry",
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Parlur",
                "uuid": "dcc2441b-11ee-494d-9606-7db2edbd9a55",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "CFW",
                "uuid": "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Office",
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Kit type",
          "uuid": "1aa26d5a-cc93-427a-80af-b039f5a3933a",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Kit Type",
            "uuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
            "dataType": "Coded",
            "answers": [
              {
                "name": "S2S (Non-GBG)",
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "S2S",
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "S2S (GBG)",
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Dance drama",
                "uuid": "9d4f0cc8-0be2-4c2c-9485-696650f0e0c3",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Toiletry",
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "CFW",
                "uuid": "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
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
                "order": 15,
                "active": true
              },
              {
                "name": "Volunteer",
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Parlor",
                "uuid": "b716454c-9604-439e-9100-a28aa15aa3de",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Marriage kits",
                "uuid": "e246e9b5-e7b9-42f0-be1c-daf4a4393a36",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "My pad woman",
                "uuid": "aeb9a11d-c672-451d-ac13-5c97bc6523d9",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "New born baby",
                "uuid": "9bb7c536-ab34-420c-b60c-8a844892e65b",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "S2S – AW",
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Office",
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Vaapsi",
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Tent house",
                "uuid": "603883db-ea5b-4c46-b1a7-78618e052268",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "CBE",
                "uuid": "8c48b5ae-0b0a-45b8-bc61-93f370c56fff",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Sub type",
          "uuid": "dbb34527-7ee2-4c1a-9043-31cd48451d10",
          "keyValues": [],
          "concept": {
            "name": "Sub-type",
            "uuid": "3d8277db-2656-4413-b4e6-0aefb2cb692c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Puncture Repair Kit",
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Marriage Kits (M)",
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Carpenter Kit",
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "A",
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Cobbler Kit",
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Labour Kit",
                "uuid": "4a29b8af-dc91-44b8-b820-586568a02870",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Painter Kit",
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Marriage Kits (F)",
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Tea Shop Kit",
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Egg Shop Kit",
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Plumbing Kit",
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Ironing Kit",
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Kirana Shop Kit",
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Barber Kit",
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Mason Kit",
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Electrician Kit",
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Farmer Kit",
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "C",
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "B",
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd","971c7a76-d296-4d47-9a90-47a612ceb4ca","7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd").matches();
  
  if(condition11 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1","4a29b8af-dc91-44b8-b820-586568a02870"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = condition14 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Painter Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)",
                      "Labour Kit"
                    ],
                    "answerUuidsToSkip": [
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                      "4a29b8af-dc91-44b8-b820-586568a02870"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type (Kit)",
                          "conceptUuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type (Kit)",
                          "conceptUuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Painter Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Labour Kit"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "4a29b8af-dc91-44b8-b820-586568a02870"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type (Kit)",
                          "conceptUuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Marriage Kits"
                          ],
                          "answerConceptUuids": [
                            "7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type (Kit)",
                          "conceptUuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW",
                            "Vaapsi",
                            "Marriage Kits"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                            "7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Sub type",
          "uuid": "c6a2727b-e20f-4b3a-b5f4-620cbf33ae20",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Sub type",
            "uuid": "1b637749-2537-42d5-a5a4-b7e522967855",
            "dataType": "Coded",
            "answers": [
              {
                "name": "L",
                "uuid": "ceefacdd-14b0-408f-b1cb-d6c3651299ff",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Plumbing Kit",
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "X",
                "uuid": "687c20b4-617a-4ae6-ac46-e686aa1283f1",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "C",
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "NA",
                "uuid": "a98a4e9d-e110-433d-94a6-d471c0157a75",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Marriage Kits (M)",
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Barber Kit",
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "B",
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Puncture Repair Kit",
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Marriage Kits (F)",
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Carpenter Kit",
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Cobbler Kit",
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Ironing Kit",
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Mason Kit",
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Labor Kit",
                "uuid": "90d580bd-f76c-4633-bb5b-4b92bc057c86",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Farmer Kit",
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Egg Shop Kit",
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Tea Shop Kit",
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "A",
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Painter Kit",
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Electrician Kit",
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Kirana Shop Kit",
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd","971c7a76-d296-4d47-9a90-47a612ceb4ca","e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
  visibility = condition11 ;
    if(condition12 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW",
                            "Vaapsi",
                            "Marriage kits"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Painter Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Labour Kit",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)"
                    ],
                    "answerUuidsToSkip": [
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Painter Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Labour Kit"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "4a29b8af-dc91-44b8-b820-586568a02870"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Marriage kits"
                          ],
                          "answerConceptUuids": [
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Contributed item",
          "uuid": "51f0572f-59a9-4c3d-bbff-3f9d81f54c51",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Contributed Item",
            "uuid": "ef2f247e-209f-4a8a-9fc5-4b27264d0cec",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": false
        },
        {
          "name": "Kit Name",
          "uuid": "079fe079-3337-41fd-b3fb-6391ddbf94ea",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Kit Name",
            "uuid": "318902e6-f7a5-4e70-8f5f-72b83f3ccb22",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": false
        },
        {
          "name": "Kit Type",
          "uuid": "e302ecd8-aef5-45bf-8493-0f2d5da61dde",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Kit Type",
            "uuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
            "dataType": "Coded",
            "answers": [
              {
                "name": "S2S (Non-GBG)",
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "S2S",
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "S2S (GBG)",
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Dance drama",
                "uuid": "9d4f0cc8-0be2-4c2c-9485-696650f0e0c3",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Toiletry",
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "CFW",
                "uuid": "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
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
                "order": 15,
                "active": true
              },
              {
                "name": "Volunteer",
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Parlor",
                "uuid": "b716454c-9604-439e-9100-a28aa15aa3de",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Marriage kits",
                "uuid": "e246e9b5-e7b9-42f0-be1c-daf4a4393a36",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "My pad woman",
                "uuid": "aeb9a11d-c672-451d-ac13-5c97bc6523d9",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "New born baby",
                "uuid": "9bb7c536-ab34-420c-b60c-8a844892e65b",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "S2S – AW",
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Office",
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Vaapsi",
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Tent house",
                "uuid": "603883db-ea5b-4c46-b1a7-78618e052268",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "CBE",
                "uuid": "8c48b5ae-0b0a-45b8-bc61-93f370c56fff",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 12,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": false
        },
        {
          "name": "Sub type",
          "uuid": "0a7c1138-5720-4d87-8775-65d437017bbd",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Sub type",
            "uuid": "1b637749-2537-42d5-a5a4-b7e522967855",
            "dataType": "Coded",
            "answers": [
              {
                "name": "L",
                "uuid": "ceefacdd-14b0-408f-b1cb-d6c3651299ff",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Plumbing Kit",
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "X",
                "uuid": "687c20b4-617a-4ae6-ac46-e686aa1283f1",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "C",
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "NA",
                "uuid": "a98a4e9d-e110-433d-94a6-d471c0157a75",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Marriage Kits (M)",
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Barber Kit",
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "B",
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Puncture Repair Kit",
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Marriage Kits (F)",
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Carpenter Kit",
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Cobbler Kit",
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Ironing Kit",
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Mason Kit",
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Labor Kit",
                "uuid": "90d580bd-f76c-4633-bb5b-4b92bc057c86",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Farmer Kit",
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Egg Shop Kit",
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Tea Shop Kit",
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "A",
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Painter Kit",
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Electrician Kit",
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Kirana Shop Kit",
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 13,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd","971c7a76-d296-4d47-9a90-47a612ceb4ca","e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
  visibility = condition11 ;
    if(condition12 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit Type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW",
                            "Vaapsi",
                            "Marriage kits"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Painter Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Labour Kit",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)"
                    ],
                    "answerUuidsToSkip": [
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit Type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Painter Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Labour Kit"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "4a29b8af-dc91-44b8-b820-586568a02870"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit Type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Marriage kits"
                          ],
                          "answerConceptUuids": [
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit Type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": false
        },
        {
          "name": "Material name",
          "uuid": "56e763dc-7f64-41ac-8f81-5510453da7be",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Material Name",
            "uuid": "aaede45f-53ca-40dc-a349-feca810810f5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","73e4cab9-b0d5-49a8-9cf2-c42f41523143","6f6eb1de-88c4-4df2-a8ae-997a339a78c5","11c11e55-7604-4f38-9f4f-3560e116e76e").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item",
                            "Goonj product",
                            "Contributed track",
                            "Bulk Material"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "73e4cab9-b0d5-49a8-9cf2-c42f41523143",
                            "6f6eb1de-88c4-4df2-a8ae-997a339a78c5",
                            "11c11e55-7604-4f38-9f4f-3560e116e76e"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": false
        },
        {
          "name": "Kit Id",
          "uuid": "457a449f-e5c1-47a0-af05-0cf8f4ce30f0",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Kit Id",
            "uuid": "e7963e9a-f0ac-4666-af69-173e4e8bbcf6",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 15,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": false
        },
        {
          "name": "Material Id",
          "uuid": "db54e3f7-e335-408e-b817-8ea24f009566",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Material Id",
            "uuid": "53b13383-40de-4b5e-ab9f-94d0ec216c89",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "keyValues": []
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","73e4cab9-b0d5-49a8-9cf2-c42f41523143","11c11e55-7604-4f38-9f4f-3560e116e76e","6f6eb1de-88c4-4df2-a8ae-997a339a78c5").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item",
                            "Goonj product",
                            "Bulk Material",
                            "Contributed track"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "73e4cab9-b0d5-49a8-9cf2-c42f41523143",
                            "11c11e55-7604-4f38-9f4f-3560e116e76e",
                            "6f6eb1de-88c4-4df2-a8ae-997a339a78c5"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": false
        },
        {
          "name": "Purchased /High value",
          "uuid": "4309df3f-8901-4f13-b24a-023707441a78",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Purchased /High Value",
            "uuid": "8f2ce1e6-f2f9-4ce3-94c8-8b1f761a3b95",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 17,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Distribution to",
          "uuid": "488a8bee-63c1-43e5-82a4-baac2e0f106c",
          "keyValues": [],
          "concept": {
            "name": "Distribution to (voided~207597)",
            "uuid": "db851d57-7457-4a12-9192-f75caf9fd54e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Family",
                "uuid": "c3481a91-ff17-46ce-ac78-7e7f2a1a483b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Individual",
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 18,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Quantity",
          "uuid": "bbe0c504-b175-496f-a95f-51e607598ad9",
          "keyValues": [],
          "concept": {
            "name": "Quantities",
            "uuid": "723422d4-ffe1-4a1d-a40e-30bea9ab1487",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 19,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  let quantityFromDispatch = encounter.getObservationValue('Net Quantity');
  let quantityFromNonKit = encounter.getObservationValue('Quantities');
  
  if (_.toNumber(quantityFromDispatch) < _.toNumber(quantityFromNonKit)) {
      return validationErrors;
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Net quantity",
          "uuid": "34d7055b-2887-448d-9b7b-5deed0818eec",
          "keyValues": [],
          "concept": {
            "name": "Net quantity (voided~207599)",
            "uuid": "b8f74c0a-7fd4-4f60-b997-03a7e0da2e26",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 20,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Contributed",
          "uuid": "453ddc46-b3f2-4482-81e1-38cb6295eead",
          "keyValues": [],
          "concept": {
            "name": "Contributed",
            "uuid": "d01e4097-3854-44f2-8706-ec36fceeadf9",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 21,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Purchase/High Value",
          "uuid": "8fcf8590-6850-456d-9811-59e447a1e0ae",
          "keyValues": [],
          "concept": {
            "name": "Purchase/High Value",
            "uuid": "dc5135d7-cd94-4c14-92fe-9b258c64f679",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 22,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Units",
          "uuid": "40ba4c47-40c8-4f56-aff5-0e045019cb61",
          "keyValues": [],
          "concept": {
            "name": "Units (voided~207602)",
            "uuid": "1adb71c7-cb19-45b5-acd4-7736c29e007c",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 23,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item",
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "604f6297-724c-48ec-9078-0d4356d45910"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Quantity",
          "uuid": "4c1a8c53-43d5-49f7-9114-d2c621414832",
          "keyValues": [],
          "concept": {
            "name": "Quantity number",
            "uuid": "b5585768-2b22-49a4-819c-50cab9395e30",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 24,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let validationErrors = [];
    const visibility = new imports.rulesConfig.RuleCondition({encounter, formElement})
        .when
        .questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex)
        .containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624", "604f6297-724c-48ec-9078-0d4356d45910", "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354")
        .matches();

    const getItemQuantityFrom = (encName, obsUUID, materialTypeConceptName, qantityConceptName) => {
        return _.filter(encounter.individual.getEncounters(), enc => enc.encounterType.name === encName)
            .flatMap(enc => enc.getObservationValue(obsUUID))
            .flatMap((obs) => {
                const values = obs.getReadableValue();
                const quantity = _.get(_.find(values, kv => kv[qantityConceptName]), qantityConceptName, 0);
                const typeOfMaterial = _.get(_.find(values, kv => kv[materialTypeConceptName]), materialTypeConceptName, '');
                return {[typeOfMaterial]: quantity}
            })
            .reduce((a, b) => {
                a['Contributed item'] = a['Contributed item'] + _.get(b, 'Contributed item', 0);
                a['Kit'] = a['Kit'] + _.get(b, 'Kit', 0);
                a['Purchased item'] = a['Purchased item'] + _.get(b, 'Purchased item', 0);
                return a;
            }, {'Contributed item': 0, 'Kit': 0, 'Purchased item': 0})
    };
    
    const totalQuantityDispatched = getItemQuantityFrom('Dispatch', '267fbb23-4168-4fb1-9bce-6b0d5f378c46', 'Type Of Material', 'Quantity (Dispatched)');
    const toatlQuantityDistributedEarlier = getItemQuantityFrom('Distribution', '3093c0f1-5e3f-47eb-92ed-0067b41b6f9c', 'Type Of Material', 'Quantity number');
    const currentQuestionGroupObservation = encounter.getObservationValue('3093c0f1-5e3f-47eb-92ed-0067b41b6f9c');
    if (currentQuestionGroupObservation) {
        const currentGroupObservations = currentQuestionGroupObservation[params.questionGroupIndex];
        const readableValues = currentGroupObservations.getReadableValue();
        const currentTypeOfMaterial = _.find(readableValues, kv => kv['Type Of Material'])['Type Of Material'];
        const currentQuantity = _.get(_.find(readableValues, kv => kv['Quantity number']), 'Quantity number', 0);
        const remainingQuantity = totalQuantityDispatched[currentTypeOfMaterial] - toatlQuantityDistributedEarlier[currentTypeOfMaterial];
        if (currentQuantity > remainingQuantity) {
            validationErrors.push(`Quantity cannot be greater than ${remainingQuantity}`);
        }
    }
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null, [], validationErrors);
}
,
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Total quantity distributed",
          "uuid": "400e75c2-cdf3-4de9-a7ca-f3bebafc20e9",
          "keyValues": [],
          "concept": {
            "name": "Quantity",
            "uuid": "bf591bee-f3a5-4481-9b01-ab40ca01c8b4",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 25,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let validationErrors = [];
    const visibility = new imports.rulesConfig.RuleCondition({encounter, formElement})
        .when
        .questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex)
        .containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624", "604f6297-724c-48ec-9078-0d4356d45910", "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
            "11c11e55-7604-4f38-9f4f-3560e116e76e", "6f6eb1de-88c4-4df2-a8ae-997a339a78c5", "73e4cab9-b0d5-49a8-9cf2-c42f41523143")
        .matches();

    const getItemQuantityFrom = (encName, obsUUID, dispatchLineItemIdKeyName, qantityConceptName) => {
        let result = _.filter(encounter.individual.getEncounters(), enc => enc.encounterType.name === encName && encounter.uuid !== enc.uuid)
            .flatMap(enc => enc.getObservationValue(obsUUID))
            .flatMap((obs) => {
               //  console.log('obs----->',obs);
                const values = obs.getReadableValue();
               //  console.log('values----->',values);
                const quantity = _.get(_.find(values, kv =>  kv[qantityConceptName]), qantityConceptName, 0);
               //  console.log('quantity----->',quantity);
                const dispatchLineItemId = _.get(_.find(values, kv => kv[dispatchLineItemIdKeyName]), dispatchLineItemIdKeyName, '');
               //  console.log('dispatchLineItemId----->',dispatchLineItemId);
                return {Id: dispatchLineItemId, qty: quantity};
            }).reduce(function(res, value) {
                if (!res[value.Id]) {
                    res[value.Id] = 0;
                }
                res[value.Id] += value.qty;
                return res;
        }, {});  
      //  console.log('result: ', result);
        return result;
    };

    const totalQuantityDispatched = getItemQuantityFrom('Dispatch receipt', '5dfb2f28-b866-4442-be01-0ed451c6aad9', 'Dispatch Line Item Id', 'Quantity');
    
    const toatlQuantityDistributedEarlier = getItemQuantityFrom('Distribution', '3093c0f1-5e3f-47eb-92ed-0067b41b6f9c', 'Dispatch Line Item Id', 'Quantity');
    
    const currentQuestionGroupObservation = encounter.getObservationValue('3093c0f1-5e3f-47eb-92ed-0067b41b6f9c');
  //  console.log('currentQuestionGroupObservation---->',currentQuestionGroupObservation);
    if (currentQuestionGroupObservation) {
        const currentGroupObservations = currentQuestionGroupObservation[params.questionGroupIndex];
        const readableValues = currentGroupObservations.getReadableValue();
        const currentTypeOfMaterial = _.find(readableValues, kv => kv['Dispatch Line Item Id'])['Dispatch Line Item Id'];
        const currentQuantity = _.get(_.find(readableValues, kv => kv['Quantity']), 'Quantity', 0);
       // console.log('currentTypeOfMaterial--->',currentTypeOfMaterial);
        
        let remainingQuantity = totalQuantityDispatched[currentTypeOfMaterial] - toatlQuantityDistributedEarlier[currentTypeOfMaterial];
        
        if( _.isNaN(remainingQuantity ) ){
            remainingQuantity = totalQuantityDispatched[currentTypeOfMaterial]
        } 
        
      //  console.log('totalQuantityDispatched---->',totalQuantityDispatched); -- NaN
      //  console.log('toatlQuantityDistributedEarlier---->',toatlQuantityDistributedEarlier);
      //  console.log('currentTypeOfMaterial---->',currentTypeOfMaterial);
      //  console.log('currentQuantity---->',currentQuantity);
      //  console.log('remainingQuantity---->',remainingQuantity);
        
        if (currentQuantity > remainingQuantity) {
            validationErrors.push(`Quantity cannot be greater than ${remainingQuantity}`);
        }
        const filledEntries = _.map(currentQuestionGroupObservation, groupObservations => _.mapValues(_.pick(groupObservations.toResource, ['bf591bee-f3a5-4481-9b01-ab40ca01c8b4']), (v) => _.toNumber(v)));
        const isAllQuantityZero = _.every(filledEntries, ['bf591bee-f3a5-4481-9b01-ab40ca01c8b4', 0]);
        if(isAllQuantityZero) {
            validationErrors.push("All quantities cannot be equal to zero.");
        }
    }


    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null, [], validationErrors);
},
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": true
        },
        {
          "name": "Unit",
          "uuid": "d6c74f14-5f60-47ee-a808-c907ef79054c",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Unit",
            "uuid": "384789ec-1f69-4407-932c-9451d4e05a51",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 26,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": false
        },
        {
          "name": "Distribution done to",
          "uuid": "184948a6-d727-4c57-9df4-0a8031126403",
          "keyValues": [],
          "concept": {
            "name": "Distribution done to",
            "uuid": "0aaf0e79-d027-4412-87be-62507fb69bbf",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Families",
                "uuid": "15707d6a-47f0-430e-a43f-0ced5205e05a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Individual",
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Family",
                "uuid": "c3481a91-ff17-46ce-ac78-7e7f2a1a483b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Individuals",
                "uuid": "495f1001-01c9-4057-ac84-8b003d35f48a",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": true
        },
        {
          "name": "Number of Families/Individuals",
          "uuid": "2b1d4441-9d38-4738-9c7a-f819e6ae4b39",
          "keyValues": [],
          "concept": {
            "name": "Number of distributions",
            "uuid": "663f2d2e-4a9a-4b3c-a421-d4939a0b700e",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 28,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
                      }
                    ],
                    "conjunction": "or"
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "mandatory": true
        },
        {
          "name": "Unit",
          "uuid": "9ed9216f-ef18-428f-ae86-d5f3c72a855a",
          "keyValues": [],
          "concept": {
            "name": "Units (voided~207619)",
            "uuid": "d974928a-742d-465c-924d-aab56ca4e101",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","604f6297-724c-48ec-9078-0d4356d45910","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit",
                            "Contributed item",
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                            "604f6297-724c-48ec-9078-0d4356d45910",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Total",
          "uuid": "1d11b594-809d-4585-a147-944628abe2dc",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Total",
            "uuid": "d5f535ba-8fa8-4504-b45f-6bd2f19dc02e",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 30,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let answersToSkip = [];
  let validationErrors = [];
  let value = 0;
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
//  let valueOfContributed = encounter.getObservationValue('Contributed');
//  let valueOfPurchase = encounter.getObservationValue('Purchase/High Value');
//  let valueOfUnits = encounter.getObservationValue('Units');
  
 // const totalUnitsDistributed = _.toNumber( valueOfContributed || 0 ) + _.toNumber( valueOfPurchase || 0 ) + _.toNumber( valueOfUnits ||0 );

  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Remarks",
          "uuid": "614ff5e5-012e-46f9-b01b-cefc8e6350fa",
          "keyValues": [],
          "concept": {
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit",
                            "Purchased item",
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "604f6297-724c-48ec-9078-0d4356d45910"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Images",
          "uuid": "52fd3b76-5a19-49e9-a490-51948769eda9",
          "keyValues": [],
          "concept": {
            "name": "Distribution Images",
            "uuid": "1c4eb3f2-4d1e-4618-aaae-74475c5d8e08",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 32,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit",
                            "Purchased item",
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "604f6297-724c-48ec-9078-0d4356d45910"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "07663121-ada1-4edb-bbd7-7ddf70ef2982",
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Materials distributed",
      "timed": false
    },
    {
      "uuid": "da537f37-e7aa-4862-84ba-75ce6f472b22",
      "name": "Kits",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Type",
          "uuid": "e230134b-a679-4769-96d8-d408333705b1",
          "keyValues": [],
          "concept": {
            "name": "Type",
            "uuid": "29a0c486-b23e-445c-9b89-0b2f5eb39682",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Office",
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Parlur",
                "uuid": "dcc2441b-11ee-494d-9606-7db2edbd9a55",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Tent House",
                "uuid": "c1ba7eed-7cac-47b2-974b-0c0ff9a954bb",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Dance Drama",
                "uuid": "a865aa62-8fe4-4303-9394-2d06926fff43",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "S2S (Non-GBG)",
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Vaapsi",
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "My Pad Woman",
                "uuid": "92f513a6-a892-4c06-8a30-a5252f4fccf4",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "New Born Baby",
                "uuid": "eecf1fe0-c01d-4a37-97f5-80894be39bd1",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "CFW",
                "uuid": "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "S2S (GBG)",
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Marriage Kits",
                "uuid": "7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Volunteer",
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Toiletry",
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "S2S – AW",
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b",
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Sub type",
          "uuid": "159a98ee-3ce9-47ee-922b-ae0777adc649",
          "keyValues": [],
          "concept": {
            "name": "Sub type (voided~207387)",
            "uuid": "72470239-07f4-4eab-969c-408d4e1e94f4",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Tea Shop Kit",
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Barber Kit",
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Ironing Kit",
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Kirana Shop Kit",
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Labor Kit",
                "uuid": "90d580bd-f76c-4633-bb5b-4b92bc057c86",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Cobbler Kit",
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Plumbing Kit",
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "C",
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "B",
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Marriage Kits (M)",
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Farmer Kit",
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "A",
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Mason Kit",
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Electrician Kit",
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Carpenter Kit",
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Marriage Kits (F)",
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Painter Kit",
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Puncture Repair Kit",
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Egg Shop Kit",
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Distribution to",
          "uuid": "0447f442-93f2-458d-9408-f4513a61b2cf",
          "keyValues": [],
          "concept": {
            "name": "Distribution to (voided~207390)",
            "uuid": "60aac647-9923-478d-b4a1-7197e2946065",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Family",
                "uuid": "c3481a91-ff17-46ce-ac78-7e7f2a1a483b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Individual",
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Net quantity",
          "uuid": "a58ea178-fa80-49a3-9f99-a478b1c8bab4",
          "keyValues": [],
          "concept": {
            "name": "Net quantity (voided~207565)",
            "uuid": "240d945b-dec8-4f52-9cf3-09d021e90d80",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Net Quantity",
          "uuid": "099e922d-09b7-453d-8f90-009308d404dc",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Net Quantity (voided~207391)",
            "uuid": "64839599-56e5-47d5-8254-70805ca4bad5",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Kits",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "8ed9d5e9-c6e6-4e57-94e0-a87f26847759",
      "name": "Non-Kit",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "Contributed (Non-Kit)",
          "uuid": "2ade2ac1-e3ac-4a5e-9498-f828c945f63d",
          "keyValues": [],
          "concept": {
            "name": "Contributed (Non-Kit)",
            "uuid": "b10e2de0-32a0-48e4-9eaf-ec333132f57e",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Purchase/High Value",
          "uuid": "a1b5c705-6ad3-4d35-bfee-d4fb5d2dcda4",
          "keyValues": [],
          "concept": {
            "name": "Purchase/High Value (voided~207392)",
            "uuid": "dc64755c-772e-4489-89c9-41e522798472",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Units",
          "uuid": "c24112cf-d3fa-4e8c-9075-ff89b0d13aab",
          "keyValues": [],
          "concept": {
            "name": "Units (voided~207393)",
            "uuid": "27b0631f-5cc7-4b03-80e3-498eeaa09bf7",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Distribution done to",
          "uuid": "e67bb87e-6c8a-461d-8b77-a608c629b6b5",
          "keyValues": [],
          "concept": {
            "name": "Distribution done to (voided~207394)",
            "uuid": "915e0fbd-5281-4f9e-beb5-d463b7b4c6fc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Family",
                "uuid": "c3481a91-ff17-46ce-ac78-7e7f2a1a483b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Individual",
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Quantity number",
          "uuid": "c6f71e98-905c-4a98-b011-4bd9696a9fee",
          "keyValues": [],
          "concept": {
            "name": "Quantity number (voided~207395)",
            "uuid": "013202c0-2a18-40fe-93be-2de9a635dacb",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Total",
          "uuid": "1a6cb3a8-5f9e-4cc9-952f-5ad28048ad55",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Total (voided~207568)",
            "uuid": "c5619838-d26c-49d0-95e6-1da026b2d127",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
   
  let valueOfContributed = encounter.getObservationValue('Contributed (Non-Kit)');
  let valueOfPurchase = encounter.getObservationValue('Purchase/High Value');
  let valueOfUnits = encounter.getObservationValue('Units');
  let valueOfQuantityNumber = encounter.getObservationValue('Quantity number');
  
  let total = _.toNumber(valueOfContributed || 0) + _.toNumber(valueOfPurchase || 0) + _.toNumber(valueOfUnits || 0) + _.toNumber(valueOfQuantityNumber || 0);
  
   return new imports.rulesConfig.FormElementStatus(formElement.uuid, true,total );
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Remarks",
          "uuid": "2c66fec8-57d2-4323-b6a8-8c75089ce3d8",
          "keyValues": [],
          "concept": {
            "name": "Remarks (voided~207569)",
            "uuid": "a9cf0d5d-602f-4a55-a3a4-27f2f80dee8d",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Images",
          "uuid": "5584f058-684b-47bc-b578-aebcce1f1ed8",
          "keyValues": [],
          "concept": {
            "name": "Images (voided~207571)",
            "uuid": "cee6abca-9feb-48ae-8922-c083239f3f1e",
            "dataType": "Image",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 8,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Images",
          "uuid": "7b2ddc5a-6c0c-41d5-a7fc-10a4dcebb42c",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Images (voided~207570)",
            "uuid": "f81be2c1-8355-458e-9c3d-3e9c6bdc552f",
            "dataType": "File",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("4745383c-21f3-4650-9358-10ab387f7728").containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "showFormElementGroup"
            }
          ],
          "conditions": [
            {
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "encounter",
                      "conceptName": "Type of material from received",
                      "conceptUuid": "4745383c-21f3-4650-9358-10ab387f7728",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Purchased item",
                        "Contributed item"
                      ],
                      "answerConceptUuids": [
                        "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                        "604f6297-724c-48ec-9078-0d4356d45910"
                      ]
                    },
                    "operator": "containsAnyAnswerConceptName"
                  }
                ]
              }
            }
          ]
        }
      ],
      "display": "Non-Kit",
      "voided": true,
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": [],
  "voided": true
}