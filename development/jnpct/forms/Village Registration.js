{
  "name": "Village Registration",
  "uuid": "2fcbd259-ec0a-4ede-9db0-a60992e68a7c",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "7afe70e0-ef08-4fd7-8443-56205cd4d6bd",
      "name": "Dummy",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "dummy",
          "uuid": "5f22438a-a016-47ca-aa1c-85b58a1d6579",
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
          "mandatory": false
        }
      ],
      "rule" : 
({params, imports}) => {
    const formElementGroup = params.formElementGroup;
    return formElementGroup.formElements.map(({uuid}) => {
        return new imports.rulesConfig.FormElementStatus(uuid, false, null);
    });
},
      "display": "Dummy",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "
"use strict";
({ params, imports }) => {
  const individual = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    individual
  });
  //add new visit schedule object to scheduleBuilder
  
  const allEnc = individual.encounters || [];
  
   const monthlyDate = imports.moment(individual.registrationDate).endOf('month').toDate();
   const monthName= imports.moment(monthlyDate).format('MMMM');

    if (allEnc.length === 0) {
        scheduleBuilder.add({
            name: `Mamta divas- ${monthName}`,
            encounterType: 'Mamta divas',
            earliestDate: imports.moment(monthlyDate).startOf('day').toDate(),
            maxDate: imports.moment(monthlyDate).add(7, 'days').startOf('day').toDate()
        });
    }
    
    
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}