{
  "name": "Case Disposed",
  "uuid": "d8d7bdfa-d251-479b-bfe9-28127cedbbae",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "f800f50c-bae6-4e30-ba44-e5cf55c45e50",
      "name": "Disposed Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Whether resolved in ADR or Litigation",
          "uuid": "4cfa5eb6-7d77-4bef-b279-0b8f8f41cda1",
          "keyValues": [],
          "concept": {
            "name": "Whether resolved in ADR or Litigation",
            "uuid": "82542721-68dd-4eb4-a629-c491cbb5f71c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "ADR",
                "uuid": "771a1716-2c50-44ae-b21e-4f11a149e2b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Litigation",
                "uuid": "ad0cf695-624e-469e-98e2-820f497fc3b0",
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

({ params, imports }) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individual = encounter.individual;
  
 let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
  
  if (caseStatusDetails.length > 0) {
    let natureOfCase = caseStatusDetails[0].getObservationValue("252f4c55-d113-4951-8ebb-eed01b9ccbb9");
    const allowedCases = 
    {
      '99768dab-bf4e-4332-bcd9-3e48e7a2b0db': "Civil / labour / consumer / revenue / family appeal",
      'd251937a-cbfb-442b-8f0b-8b58907dcdc0': "Civil / labour / consumer / revenue / family fresh filing"
    }
    
    

    visibility = Object.keys(allowedCases).includes(natureOfCase);
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Date of resolution",
          "uuid": "4a582fec-b8b7-47e6-85ca-d26e510228bc",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of resolution",
            "uuid": "208e0170-07b9-4562-a699-1885c4f6eb39",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 

({ params, imports }) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individual = encounter.individual;

  let selectedDate = encounter.getObservationValue("208e0170-07b9-4562-a699-1885c4f6eb39");

  
  let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
  

  if (caseStatusDetails.length > 0) {
    let natureOfCase = caseStatusDetails[0].getObservationValue("252f4c55-d113-4951-8ebb-eed01b9ccbb9");

    const allowedCases = {
      '99768dab-bf4e-4332-bcd9-3e48e7a2b0db': "Civil / labour / consumer / revenue / family appeal",
      'd251937a-cbfb-442b-8f0b-8b58907dcdc0': "Civil / labour / consumer / revenue / family fresh filing"
    };


    if (selectedDate) {
      const currentDate = moment().startOf('day');
      selectedDate = moment(selectedDate).startOf('day');

      if (selectedDate.isAfter(currentDate)) {
        validationErrors.push("Invalid date: Future dates are not allowed");
      }
    }

    const condition11 = new imports.rulesConfig.RuleCondition({ encounter, formElement })
      .when
      .valueInEncounter("82542721-68dd-4eb4-a629-c491cbb5f71c")
      .containsAnswerConceptName("771a1716-2c50-44ae-b21e-4f11a149e2b7")
      .matches();

    visibility = condition11 && Object.keys(allowedCases).includes(natureOfCase);
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Date of judgment - Civil Case Type",
          "uuid": "049395f4-6b52-4f65-a1ac-6897767a2f53",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of judgment - Civil Case Type",
            "uuid": "aebe2d7c-d123-453e-a8cd-960f5a488d80",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 

({ params, imports }) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individual = encounter.individual;
  let selectedDate = encounter.getObservationValue("aebe2d7c-d123-453e-a8cd-960f5a488d80");

   
  let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
  

  if (caseStatusDetails.length > 0) {
    let natureOfCase = caseStatusDetails[0].getObservationValue("252f4c55-d113-4951-8ebb-eed01b9ccbb9");

    const allowedCases = {
      '99768dab-bf4e-4332-bcd9-3e48e7a2b0db': "Civil / labour / consumer / revenue / family appeal",
      'd251937a-cbfb-442b-8f0b-8b58907dcdc0': "Civil / labour / consumer / revenue / family fresh filing"
    };


    if (selectedDate) {
      const currentDate = moment().startOf('day');
      selectedDate = moment(selectedDate).startOf('day');

      if (selectedDate.isAfter(currentDate)) {
        validationErrors.push("Invalid date: Future dates are not allowed");
      }
    }

    const condition11 = new imports.rulesConfig.RuleCondition({ encounter, formElement })
      .when
      .valueInEncounter("82542721-68dd-4eb4-a629-c491cbb5f71c")
      .containsAnswerConceptName("ad0cf695-624e-469e-98e2-820f497fc3b0")
      .matches();

    visibility = condition11 && Object.keys(allowedCases).includes(natureOfCase);
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Outcome of Litigation",
          "uuid": "2cabfcec-0935-4715-8fc5-8b818b78886e",
          "keyValues": [],
          "concept": {
            "name": "Outcome of Litigation",
            "uuid": "3a7161d3-5a04-4397-a3a0-42b81ba49a2f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Favourable",
                "uuid": "d3e0de85-9949-4082-bdaa-444aafda5e61",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Unfavourable",
                "uuid": "9648dd32-ca28-4b4d-8c34-cd06459a82e2",
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
          "rule" : 

({ params, imports }) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individual = encounter.individual;

   
  let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
  

  if (caseStatusDetails.length > 0) {
    let natureOfCase = caseStatusDetails[0].getObservationValue("252f4c55-d113-4951-8ebb-eed01b9ccbb9");

    const allowedCases = {
      '99768dab-bf4e-4332-bcd9-3e48e7a2b0db': "Civil / labour / consumer / revenue / family appeal",
      'd251937a-cbfb-442b-8f0b-8b58907dcdc0': "Civil / labour / consumer / revenue / family fresh filing"
    };

    const condition11 = new imports.rulesConfig.RuleCondition({ encounter, formElement })
      .when
      .valueInEncounter("82542721-68dd-4eb4-a629-c491cbb5f71c")
      .containsAnswerConceptName("ad0cf695-624e-469e-98e2-820f497fc3b0")
      .matches();

    visibility = condition11 && Object.keys(allowedCases).includes(natureOfCase);
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Date of judgment :Criminal Prosecution Case Type",
          "uuid": "628b3c3e-d48c-4c33-aa77-3261cc6728d6",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of judgment :Criminal Prosecution Case Type",
            "uuid": "ede46976-68d5-4f10-9ed5-c9b3ac3d667f",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 

({ params, imports }) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individual = encounter.individual;
  let selectedDate = encounter.getObservationValue("ede46976-68d5-4f10-9ed5-c9b3ac3d667f");

   
  let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
  

  if (caseStatusDetails.length > 0) {
    let natureOfCase = caseStatusDetails[0].getObservationValue("252f4c55-d113-4951-8ebb-eed01b9ccbb9");

    const allowedCases = {
      'a3d1b65d-0e00-4e78-9cf2-0bbd29e77642': "Criminal prosecution fresh filing",
      'ad47420b-5a60-42f0-9a49-60011af2bfd5': "Criminal prosecution appeal"
    };


    if (selectedDate) {
      const currentDate = moment().startOf('day');
      selectedDate = moment(selectedDate).startOf('day');

      if (selectedDate.isAfter(currentDate)) {
        validationErrors.push("Invalid date: Future dates are not allowed");
      }
    }


    visibility = Object.keys(allowedCases).includes(natureOfCase);
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Outcome : Criminal Prosecution Case Type",
          "uuid": "30948ba8-308e-4c04-af4c-26046c70322f",
          "keyValues": [],
          "concept": {
            "name": "Outcome : Criminal Prosecution Case Type",
            "uuid": "78ca5ccf-e115-40e8-8772-49f9ae2a14a4",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Conviction",
                "uuid": "439dda4e-88b2-41f4-8f96-ca031f2bd84f",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Acquittal",
                "uuid": "4c54f192-5bba-423f-bd15-0686c4ebeea7",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 

({ params, imports }) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individual = encounter.individual;

   
  let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
  

  if (caseStatusDetails.length > 0) {
    let natureOfCase = caseStatusDetails[0].getObservationValue("252f4c55-d113-4951-8ebb-eed01b9ccbb9");

    const allowedCases = {
      'a3d1b65d-0e00-4e78-9cf2-0bbd29e77642': "Criminal prosecution fresh filing",
      'ad47420b-5a60-42f0-9a49-60011af2bfd5': "Criminal prosecution appeal"
    };

    visibility = Object.keys(allowedCases).includes(natureOfCase);
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Date of judgment : Criminal Defence Case Type",
          "uuid": "ffd149f8-ef91-47bb-85d2-ea90dfd89a61",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of judgment : Criminal Defence Case Type",
            "uuid": "4113b91a-ed91-40e3-b9ff-68de4c2ff234",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 

({ params, imports }) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individual = encounter.individual;
  let selectedDate = encounter.getObservationValue("4113b91a-ed91-40e3-b9ff-68de4c2ff234");

   
  let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
  

  if (caseStatusDetails.length > 0) {
    let natureOfCase = caseStatusDetails[0].getObservationValue("252f4c55-d113-4951-8ebb-eed01b9ccbb9");

    const allowedCases = {
      '0fc2f7cb-ab3e-4474-8d85-c4e40917409f': "Criminal defence fresh filing",
      '477c325d-ae7b-4219-97f7-54b84b82edf5': "Criminal Defence fresh appeal"
    };


    if (selectedDate) {
      const currentDate = moment().startOf('day');
      selectedDate = moment(selectedDate).startOf('day');

      if (selectedDate.isAfter(currentDate)) {
        validationErrors.push("Invalid date: Future dates are not allowed");
      }
    }


    visibility = Object.keys(allowedCases).includes(natureOfCase);
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Outcome : Criminal Defence Case Type",
          "uuid": "c5264086-fb95-4e59-89a7-6450fc35103b",
          "keyValues": [],
          "concept": {
            "name": "Outcome : Criminal Defence Case Type",
            "uuid": "b27b4f23-d55e-41b4-9988-5e9cf14e5273",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Conviction",
                "uuid": "439dda4e-88b2-41f4-8f96-ca031f2bd84f",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Acquittal",
                "uuid": "4c54f192-5bba-423f-bd15-0686c4ebeea7",
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

({ params, imports }) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individual = encounter.individual;

   
  let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
  

  if (caseStatusDetails.length > 0) {
    let natureOfCase = caseStatusDetails[0].getObservationValue("252f4c55-d113-4951-8ebb-eed01b9ccbb9");

    const allowedCases = {
      '0fc2f7cb-ab3e-4474-8d85-c4e40917409f': "Criminal defence fresh filing",
      '477c325d-ae7b-4219-97f7-54b84b82edf5': "Criminal Defence fresh appeal"
    };

    visibility = Object.keys(allowedCases).includes(natureOfCase);
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Date of judgment Bail or HC",
          "uuid": "79f16324-ac79-4565-b0c4-f0ffc3881891",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of judgment Bail or HC",
            "uuid": "e4e4434b-67aa-45c9-bcb6-ae657edd31f2",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 

({ params, imports }) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individual = encounter.individual;
  let selectedDate = encounter.getObservationValue("e4e4434b-67aa-45c9-bcb6-ae657edd31f2");

  
  let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
  

  if (caseStatusDetails.length > 0) {
    let natureOfCase = caseStatusDetails[0].getObservationValue("252f4c55-d113-4951-8ebb-eed01b9ccbb9");

    const allowedCases = {
      '4ab86dad-0ddf-4479-bf29-1c99a0a7579f': "Bail fresh filing",
      'd92cfcaf-90ed-4a18-bb2b-e7804a66c1a7': "Bail cancellation",
      'a15c03bd-497c-44ca-930f-419b4163a3a0': "High Court writ / special powers / inherent powers"
    };

    if (selectedDate) {
      const currentDate = moment().startOf('day');
      selectedDate = moment(selectedDate).startOf('day');

      if (selectedDate.isAfter(currentDate)) {
        validationErrors.push("Invalid date: Future dates are not allowed");
      }
    }


    visibility = Object.keys(allowedCases).includes(natureOfCase);
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Outcome Bail or HC Judgment",
          "uuid": "d52953f0-27ed-4643-9fba-5792c55e8d9d",
          "keyValues": [],
          "concept": {
            "name": "Outcome Bail or HC Judgment",
            "uuid": "6bd4d0ca-3f3c-42f0-a44c-d8644bda8f43",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Not favourable",
                "uuid": "3da59067-ad39-4631-bb3e-df1051bf275d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Favourable",
                "uuid": "d3e0de85-9949-4082-bdaa-444aafda5e61",
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
          "rule" : 

({ params, imports }) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const individual = encounter.individual;

   
  let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
  

  if (caseStatusDetails.length > 0) {
    let natureOfCase = caseStatusDetails[0].getObservationValue("252f4c55-d113-4951-8ebb-eed01b9ccbb9");

    const allowedCases = {
      '4ab86dad-0ddf-4479-bf29-1c99a0a7579f': "Bail fresh filing",
      'd92cfcaf-90ed-4a18-bb2b-e7804a66c1a7': "Bail cancellation",
      'a15c03bd-497c-44ca-930f-419b4163a3a0': "High Court writ / special powers / inherent powers"
    };


    visibility = Object.keys(allowedCases).includes(natureOfCase);
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Whether challenging decision?",
          "uuid": "625f787f-77a2-4e39-8826-ece3ac827ab1",
          "keyValues": [],
          "concept": {
            "name": "Whether challenging decision?",
            "uuid": "8027bb53-dcdf-4bb0-b1cd-13c5f580585c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "03ead610-1596-4a1f-b57d-07792c6e66b6",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("82542721-68dd-4eb4-a629-c491cbb5f71c").containsAnswerConceptName("ad0cf695-624e-469e-98e2-820f497fc3b0").and.when.valueInEncounter("3a7161d3-5a04-4397-a3a0-42b81ba49a2f").containsAnswerConceptName("9648dd32-ca28-4b4d-8c34-cd06459a82e2").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("78ca5ccf-e115-40e8-8772-49f9ae2a14a4").containsAnswerConceptName("4c54f192-5bba-423f-bd15-0686c4ebeea7").or.when.valueInEncounter("b27b4f23-d55e-41b4-9988-5e9cf14e5273").containsAnswerConceptName("439dda4e-88b2-41f4-8f96-ca031f2bd84f").or.when.valueInEncounter("6bd4d0ca-3f3c-42f0-a44c-d8644bda8f43").containsAnswerConceptName("3da59067-ad39-4631-bb3e-df1051bf275d").matches();
  
  visibility = condition11 || condition21 ;
  
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
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Whether resolved in ADR or Litigation",
                          "conceptUuid": "82542721-68dd-4eb4-a629-c491cbb5f71c",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Litigation"
                          ],
                          "answerConceptUuids": [
                            "ad0cf695-624e-469e-98e2-820f497fc3b0"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Outcome of Litigation",
                          "conceptUuid": "3a7161d3-5a04-4397-a3a0-42b81ba49a2f",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Unfavourable"
                          ],
                          "answerConceptUuids": [
                            "9648dd32-ca28-4b4d-8c34-cd06459a82e2"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Outcome : Criminal Prosecution Case Type",
                          "conceptUuid": "78ca5ccf-e115-40e8-8772-49f9ae2a14a4",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Acquittal"
                          ],
                          "answerConceptUuids": [
                            "4c54f192-5bba-423f-bd15-0686c4ebeea7"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Outcome : Criminal Defence Case Type",
                          "conceptUuid": "b27b4f23-d55e-41b4-9988-5e9cf14e5273",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Conviction"
                          ],
                          "answerConceptUuids": [
                            "439dda4e-88b2-41f4-8f96-ca031f2bd84f"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Outcome Bail or HC Judgment",
                          "conceptUuid": "6bd4d0ca-3f3c-42f0-a44c-d8644bda8f43",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Not favourable"
                          ],
                          "answerConceptUuids": [
                            "3da59067-ad39-4631-bb3e-df1051bf275d"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "or"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Reason",
          "uuid": "3593a283-9d78-491a-a44e-7d9fa2170ee7",
          "keyValues": [],
          "concept": {
            "name": "Reason",
            "uuid": "2f069762-4058-4aaf-bbe8-3542befd3466",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("8027bb53-dcdf-4bb0-b1cd-13c5f580585c").containsAnswerConceptName("03ead610-1596-4a1f-b57d-07792c6e66b6").matches();
  
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
                          "conceptName": "Whether challenging decision?",
                          "conceptUuid": "8027bb53-dcdf-4bb0-b1cd-13c5f580585c",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "03ead610-1596-4a1f-b57d-07792c6e66b6"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Description of outcome",
          "uuid": "a4387bec-f1bf-4802-8d1e-5ec4556a9b04",
          "keyValues": [],
          "concept": {
            "name": "Description of outcome",
            "uuid": "ad4bc1d5-1774-4f57-9875-476bbca763c8",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Description of strategies used",
          "uuid": "d2b5ea7c-4d10-4d2c-afad-4141d476d146",
          "keyValues": [],
          "concept": {
            "name": "Description of strategies used",
            "uuid": "6b7df3d6-393d-4656-8fa2-bbc14abb7714",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Disposed Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}