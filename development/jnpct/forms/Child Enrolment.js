{
  "name": "Child Enrolment",
  "uuid": "95796c7b-cb70-48f5-893f-c0c8afbc3785",
  "formType": "ProgramEnrolment",
  "formElementGroups": [
    {
      "uuid": "8f414a71-9e61-4cc7-90c5-88d6b5971e57",
      "name": "Basic Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Is child getting registered at Birth",
          "uuid": "bde7552d-a2ba-4b6b-95e8-a6e49404d213",
          "keyValues": [],
          "concept": {
            "name": "Is child getting registered at Birth",
            "uuid": "f1a9ede3-1b9b-4b1a-a8fb-6a3bb8f1cc19",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Current Weight",
          "uuid": "eba270f1-8496-49a6-a876-a6b6c9f6fe5c",
          "keyValues": [],
          "concept": {
            "name": "Weight",
            "uuid": "bab98eac-14a5-43c4-80ff-ccdb8c3ddf1b",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 300,
            "lowNormal": 1,
            "highNormal": 100,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEnrolment, formElement});
  statusBuilder.show().when.valueInEnrolment('Is child getting registered at Birth')
            .containsAnswerConceptName("No"); 
return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Birth Weight",
          "uuid": "34fbf867-e97b-4c14-ba62-5a4d1bb80dfe",
          "keyValues": [],
          "concept": {
            "name": "Birth Weight",
            "uuid": "c82cd1c8-d0a9-4237-b791-8d64e52b6c4a",
            "dataType": "Numeric",
            "answers": [],
            "lowNormal": 2.5,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEnrolment, formElement});
  statusBuilder.show().when.valueInEnrolment('Is child getting registered at Birth')
            .containsAnswerConceptName("Yes");
 return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Basic Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule" : 
({params, imports}) => {
  let vaccination = params.checklistDetails.find(cd => cd.name === 'Vaccination');
  if (vaccination === undefined) return [];
  const vaccinationList = {
    baseDate: params.entity.individual.dateOfBirth,
    detail: {uuid: vaccination.uuid},
    items: vaccination.items.map(vi => ({
      detail: {uuid: vi.uuid}
    }))
  };
  return [vaccinationList];
},
  "decisionConcepts": []
}