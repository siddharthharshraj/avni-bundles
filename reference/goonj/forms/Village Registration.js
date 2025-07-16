{
  "name": "Village Registration",
  "uuid": "c3d90e78-a3b1-43fb-8f03-96eb2463d8fe",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "556cdb63-0179-4066-922f-6f45d2bf4df7",
      "name": "Nothing",
      "displayOrder": 1,
      "formElements": [],
      "display": "Nothing",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "62031466-a23c-4a76-a52e-312181436d95",
      "name": "_",
      "displayOrder": 2,
      "formElements": [],
      "display": "_",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "ba14ac35-263f-4cfd-8afe-172026eaae7b",
      "name": "‎",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "‎​Please Proceed To Next Page",
          "uuid": "e3497695-91cb-484a-8f61-2c4f0ee0ea32",
          "keyValues": [],
          "concept": {
            "name": "dummy",
            "uuid": "92f359cd-a199-4820-8638-f37fa9a0472b",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
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
  
  visibility = !(true);
  
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
                        "lhs": {},
                        "rhs": {}
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Account  name",
          "uuid": "98625bb5-de99-4626-bdce-9871a71e19df",
          "keyValues": [],
          "concept": {
            "name": "Account  name",
            "uuid": "2978117c-a297-4171-99c6-23c3522ca0f8",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Block",
          "uuid": "db1ab735-962f-421b-af58-d26e315074bf",
          "keyValues": [],
          "concept": {
            "name": "Other Block",
            "uuid": "e2d35dee-c34f-4f54-a68b-f32ee81835b6",
            "dataType": "Text",
            "answers": [],
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
  let visibility = false;

  const isDefined = individual && 
                    individual.lowestAddressLevel && 
                    (Array.isArray(individual.lowestAddressLevel.locationMappings) && 
                     !_.isEmpty(individual.lowestAddressLevel.locationMappings) || 
                     !_.isEmpty(individual.lowestAddressLevel.titleLineage));

  if (isDefined) {
        let block = undefined;

        if (
            Array.isArray(individual.lowestAddressLevel.locationMappings) &&
            !_.isEmpty(individual.lowestAddressLevel.locationMappings) &&
            individual.lowestAddressLevel.locationMappings[0] &&
            individual.lowestAddressLevel.locationMappings[0].parent &&
            individual.lowestAddressLevel.locationMappings[0].parent.name
        ) {
            block = individual.lowestAddressLevel.locationMappings[0].parent.name;
        } else if (
            individual.lowestAddressLevel &&
            individual.lowestAddressLevel.titleLineage
        ) {
            const titleParts = _.split(individual.lowestAddressLevel.titleLineage, ', ');
            block = titleParts.length > 2 ? titleParts[2] : undefined;
        }

        visibility = block === 'Other';
    }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "mandatory": true
        },
        {
          "name": "Other Village",
          "uuid": "824a8295-3c12-4e9a-a302-c6f6beb3e772",
          "keyValues": [],
          "concept": {
            "name": "Other Village",
            "uuid": "16b4db7c-e0a8-41f1-ac67-07470a762d9f",
            "dataType": "Text",
            "answers": [],
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
  let visibility = false;
  
  const isDefined = individual && 
                    individual.lowestAddressLevel && 
                    (Array.isArray(individual.lowestAddressLevel.locationMappings) && 
                     !_.isEmpty(individual.lowestAddressLevel.locationMappings) || 
                     !_.isEmpty(individual.lowestAddressLevel.titleLineage));

  if (isDefined) {
      let village = undefined;
  
      if (
        Array.isArray(individual.lowestAddressLevel.locationMappings) &&
        !_.isEmpty(individual.lowestAddressLevel.locationMappings) &&
        individual.lowestAddressLevel.locationMappings[0] &&
        individual.lowestAddressLevel.locationMappings[0].child &&
        individual.lowestAddressLevel.locationMappings[0].child.name
      ) {
        village = individual.lowestAddressLevel.locationMappings[0].child.name;
      } else if (
        individual.lowestAddressLevel &&
        individual.lowestAddressLevel.titleLineage
      ) {
        const titleParts = _.split(individual.lowestAddressLevel.titleLineage, ', ');
        village = titleParts.length > 3 ? titleParts[3] : undefined;
      }
      

  
      visibility = village === 'Other';
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "mandatory": true
        },
        {
          "name": "Organization Name",
          "uuid": "e94d79e1-1006-45bf-86a4-4eeb621cb969",
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
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("8f735d4d-bbd3-4190-bf05-72574fda5a93").notDefined.matches();
  
  visibility = condition11 ;
  if(condition11 ){
    value = "Goonj";  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {
                  "details": {
                    "value": "Goonj"
                  },
                  "actionType": "value"
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
                          "scope": "registration",
                          "conceptName": "Organization Name",
                          "conceptUuid": "8f735d4d-bbd3-4190-bf05-72574fda5a93",
                          "conceptDataType": "Text"
                        },
                        "rhs": {},
                        "operator": "notDefined"
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
          "name": "Gram Panchayat",
          "uuid": "86e652cc-b780-482b-bbbd-05b283add039",
          "keyValues": [],
          "concept": {
            "name": "Gram Panchayat Name",
            "uuid": "abd267d7-2c9f-4d72-aabe-fc59ce4c877f",
            "dataType": "Text",
            "answers": [],
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
  
  const villages = individualService.getSubjectsInLocation(individual.lowestAddressLevel, 'Village');


if(villages && villages.length > 0){
    console.log("Inside Error");
    validationErrors.push("Already Village is avaiable");
}     
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    
     function toStartCase(str) {
        return str
        .trim()
        .toLowerCase()
        .split(/[\\s]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    } 

    return formElementGroup.formElements.map((formElement) => {
        if(individual) {
            if(individual.lowestAddressLevel && individual.lowestAddressLevel.name === 'Other') {
                const otherVillageName =
                individual.getObservationReadableValue('16b4db7c-e0a8-41f1-ac67-07470a762d9f');
                if (otherVillageName) {
                    individual.firstName = toStartCase(otherVillageName);
                }
            }
            else if(individual.lowestAddressLevel) {
                individual.firstName = toStartCase(individual.lowestAddressLevel.name);
            }
        }
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Geography information",
      "timed": false
    },
    {
      "uuid": "39b952b2-ef9e-463a-92fd-1e452ac6488e",
      "name": "Nothing",
      "displayOrder": 5,
      "formElements": [],
      "display": "Nothing",
      "voided": true,
      "timed": false
    }
  ],
  "decisionRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const _ = imports.lodash;
  const validationResults = [];
  const individualService = params.services.individualService;

  function toStartCase(str) {
    return str
    .trim()
    .toLowerCase()
    .split(/[\\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  }  

  const isLocationMatch = (e1,e2,location) => {
    const {uuid,name} = location;
    const loc1 = e1.getObservationReadableValue(uuid) || "";
    const loc2 = e2.getObservationReadableValue(uuid) || "";
    console.log(`value of ${name} ${loc1} ${loc2}`);
    return toStartCase(loc1) === toStartCase(loc2)
  }

  const OtherLocations = [
    {name:"Other Block",uuid:"e2d35dee-c34f-4f54-a68b-f32ee81835b6"},
    {name:"Other Village",uuid:"16b4db7c-e0a8-41f1-ac67-07470a762d9f"}
  ]  


  
  let villages = individualService.getSubjectsInLocation(individual.lowestAddressLevel, 'Village');




  if(villages && villages.length > 0){
    villages =  villages.filter(({voided,uuid})=>!voided && (uuid!=individual.uuid));
    if(villages.length > 0){
      let isPresent = true;
      const otherBlock = individual.getObservationReadableValue("e2d35dee-c34f-4f54-a68b-f32ee81835b6");
      const otherVillage =  individual.getObservationReadableValue("16b4db7c-e0a8-41f1-ac67-07470a762d9f");
      if(otherBlock || otherVillage){
        villages = villages.filter(village=> isLocationMatch(village,individual,OtherLocations[0]) &&  isLocationMatch(village,individual,OtherLocations[1]))
        if(villages.length > 0){
          isPresent = true;
        }else{
          isPresent = false;
        }
      }
      if(isPresent){
        validationResults.push(imports.common.createValidationError("Village for specified geographical location already exists."));
      }
    }
  }                                                              

  return validationResults;
},
  "checklistsRule": "",
  "decisionConcepts": []
}