{
  "name": "Mamta divas Encounter Cancellation",
  "uuid": "01c30ebe-0c2b-4152-b363-f3d1e55b7d4e",
  "formType": "IndividualEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "c356a5b7-fce5-4dab-9286-71db13056984",
      "name": "Reason",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Reason of cancellation",
          "uuid": "71ef007a-57e0-4574-a8b1-201e054bfc23",
          "keyValues": [],
          "concept": {
            "name": "Dummy",
            "uuid": "d9681935-ee06-48d6-b853-48e5498c81a4",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Reason of cancellation",
          "uuid": "e000d61c-252f-49b6-996f-192ce518bf41",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Hospitalization",
                "Child Death",
                "Maternal Death",
                "Out of Village",
                "Permanent Migration"
              ]
            }
          ],
          "concept": {
            "name": "Visit cancel reason",
            "uuid": "0066a0f7-c087-40f4-ae44-a3e931967767",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Field Worker is on Leave",
                "uuid": "378d582c-8da6-4ec4-a676-f05fae2f2f7b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Hospitalization",
                "uuid": "47a1cc61-cc0d-446c-b021-31207c16e572",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Child Death",
                "uuid": "cbb0969c-c7fe-4ce4-b8a2-670c4e3c5039",
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
                "order": 7,
                "active": true
              },
              {
                "name": "Maternal Death",
                "uuid": "655722fa-5764-432b-8559-ec9948369178",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Temporary migration",
                "uuid": "5c8c4ffe-d818-4d9f-9341-fc6ffdf58f8a",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Out of Village",
                "uuid": "52e2c882-e44f-4915-b099-e4138207d84c",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Permanent Migration",
                "uuid": "edc26b08-3b8c-42f1-bc45-77b4649b3d86",
                "dataType": "NA",
                "answers": [],
                "order": 1,
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
      "rule" : 
({params, imports}) => {
    const formElementGroup = params.formElementGroup;
    return formElementGroup.formElements.map(({uuid}) => {
        return new imports.rulesConfig.FormElementStatus(uuid, true, null);
    });
},
      "display": "Reason",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "
"use strict";
({ params, imports }) => {
  const encounter = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    encounter
  });
  //add new visit schedule object to scheduleBuilder
  
   const monthlyDate = imports.moment(encounter.earliestVisitDateTime).add(1,'months').endOf('month').startOf('day').toDate();
   
  const monthName= imports.moment(monthlyDate).format('MMMM');

    if (monthlyDate) {
        scheduleBuilder.add({
            name: `Mamta divas- ${monthName}`,
            encounterType: 'Mamta divas',
            earliestDate: monthlyDate,
            maxDate: imports.moment(monthlyDate).add(7, 'days').toDate()
        });
    }
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}