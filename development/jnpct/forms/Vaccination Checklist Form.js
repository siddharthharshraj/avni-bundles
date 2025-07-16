{
  "name": "Vaccination Checklist Form",
  "uuid": "9222dd4c-1d80-40f0-8ca7-5637ad7ceb6b",
  "formType": "ChecklistItem",
  "formElementGroups": [
    {
      "uuid": "ad496f31-fc01-4214-9058-b66e24631b83",
      "name": "Vaccination details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Whether Vaccination applicable",
          "uuid": "91893eb5-61c9-44e3-9f60-01103a8abfc7",
          "keyValues": [],
          "concept": {
            "name": "Whether Vaccination applicable",
            "uuid": "2a131802-7135-45b2-9068-0b24826cce76",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const checklistItem = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({checklistItem, formElement});
  const itemName = checklistItem.detail.concept.name;
        if(itemName === "IPV") {
            statusBuilder.show().whenItem(true).is.truthy;
        } else {
            statusBuilder.show().whenItem(false).is.truthy;
        }
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Place of Vaccination",
          "uuid": "2272d688-9230-4e70-beca-837e0a6abac8",
          "keyValues": [],
          "concept": {
            "name": "Place of Vaccination",
            "uuid": "dbabdd03-ec18-4968-96c9-aede646a7192",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Private Hospital",
                "uuid": "5ab46f09-23a8-439b-9e8e-484b56220753",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Urban Health Centre",
                "uuid": "bcc940bc-1a39-4762-9d38-9f46407b066e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Government hospital",
                "uuid": "253e2ee0-df53-4aa9-8363-81d46a59c425",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "AWC",
                "uuid": "95e9c50a-f51f-45be-9842-a4f14b4b710c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const checklistItem = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({checklistItem, formElement});
 const itemName = checklistItem.detail.concept.name;
        if(itemName === "IPV") {
 statusBuilder.show().when.valueInChecklistItem("Whether Vaccination applicable").is.yes;
        } else {
            statusBuilder.show().whenItem(true).is.truthy;
        }
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Specify Other",
          "uuid": "04c650c2-eea0-4c66-9d32-9c78e46a195e",
          "keyValues": [],
          "concept": {
            "name": "Other place of vaccination",
            "uuid": "94bbf2d1-7334-454e-8e42-3a81fcda8959",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const checklistItem = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({checklistItem, formElement});
   statusBuilder.show().when.valueInChecklistItem("Place of Vaccination").containsAnswerConceptName("Other");
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Vaccination details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}