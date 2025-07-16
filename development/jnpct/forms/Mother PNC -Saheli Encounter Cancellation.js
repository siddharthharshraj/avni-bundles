{
  "name": "Mother PNC -Saheli Encounter Cancellation",
  "uuid": "b10abd48-b3e3-45fa-9f0d-e9017cd75ef3",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "41fba54c-1b23-42b7-9c56-c78c5bb673d1",
      "name": "Cancel",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Cancel reason",
          "uuid": "3da65f7e-c72f-479e-b9b4-4980bc8ff9ff",
          "keyValues": [],
          "concept": {
            "name": "Cancel reason",
            "uuid": "99f9dc54-3b3e-419a-8bfa-10bb155e6593",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Temporary migration",
                "uuid": "5c8c4ffe-d818-4d9f-9341-fc6ffdf58f8a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true,
                "keyValues": []
              },
              {
                "name": "Past visit",
                "uuid": "645f16ce-b92d-4d96-9fd3-1d51c6b30e81",
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
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Cancel",
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

    const encounterSchedulePNC = [
        {"name": "Mother PNC -Saheli 2", "earliest": 3, "max": 4},
        {"name": "Mother PNC -Saheli 3", "earliest": 5, "max": 6},
        {"name": "Mother PNC -Saheli 4", "earliest": 7, "max": 8},
        {"name": "Mother PNC -Saheli 5", "earliest": 14, "max": 15},
        {"name": "Mother PNC -Saheli 6", "earliest": 28, "max": 29},
        {"name": "Mother PNC -Saheli 7", "earliest": 42, "max": 43}
    ];

    const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;

    const deliveryDate = programEncounter.programEnrolment
            .getObservationReadableValueInEntireEnrolment('Date of delivery')
        || programEncounter.getObservationValue('Date of delivery');

    let visitDate = programEncounter.cancelDateTime;


    if (!hasExitedProgram(programEncounter)) {
        var schedule = _.chain(encounterSchedulePNC)
            .filter(e => imports.moment(visitDate)
                .isSameOrBefore(imports.moment(deliveryDate).add(e.earliest, 'days').toDate(), 'date') === true)
            .filter(e => (programEncounter.programEnrolment.hasEncounter('Mother PNC -Saheli', e.name)) === false)
            .first()
            .value();

        if (!_.isEmpty(schedule)) {
            const earliestVisitDate = imports.moment(deliveryDate).add(schedule.earliest, 'days').toDate();
            const maxVisitDate = imports.moment(deliveryDate).add(schedule.max, 'days').toDate();

            scheduleBuilder.add({
                name: schedule.name,
                encounterType: 'Mother PNC -Saheli',
                earliestDate: earliestVisitDate,
                maxDate: maxVisitDate
            });
        }
        
    }


    return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}