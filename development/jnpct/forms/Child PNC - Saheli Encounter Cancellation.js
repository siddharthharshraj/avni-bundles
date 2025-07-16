{
  "name": "Child PNC - Saheli Encounter Cancellation",
  "uuid": "a2af575d-0d46-4fd1-a3e9-c98a22535c1a",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "fcf47aa4-98a3-4f63-8842-ebdcfc8ee7c4",
      "name": "Cancel",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Cancel reason",
          "uuid": "e5caecdb-192d-4bbe-9d76-07f5b9b3ab4f",
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
    const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;


    const birthWeight = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Birth Weight') || programEncounter.getObservationReadableValue('Birth Weight');

    const currentWeight = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Weight')
        || programEncounter.getObservationReadableValue('Weight');


    const birthDate = programEncounter.programEnrolment.individual.dateOfBirth;
    let visitDate = programEncounter.cancelDateTime;

    const encounterScheduleChildPNC = [

        {"name": "Child PNC - Saheli 2", "earliest": 3, "max": 4},
        {"name": "Child PNC - Saheli 3", "earliest": 5, "max": 6},
        {"name": "Child PNC - Saheli 4", "earliest": 7, "max": 8},
        {"name": "Child PNC - Saheli 5", "earliest": 10, "max": 11},
        {"name": "Child PNC - Saheli 6", "earliest": 14, "max": 15},
        {"name": "Child PNC - Saheli 7", "earliest": 21, "max": 22},
        {"name": "Child PNC - Saheli 8", "earliest": 28, "max": 29},
        {"name": "Child PNC - Saheli 9", "earliest": 35, "max": 36},
        {"name": "Child PNC - Saheli 10", "earliest": 42, "max": 43},
        {"name": "Child PNC - Saheli 11", "earliest": 49, "max": 50},
        {"name": "Child PNC - Saheli 12", "earliest": 60, "max": 61}
    ];


    if (!hasExitedProgram(programEncounter)) {

        if (currentWeight >= 3 || birthWeight >= 2.5) {
            console.log('normal------->');
            var schedule = _.chain(encounterScheduleChildPNC)
                .filter(e => imports.moment(visitDate)
                    .isSameOrBefore(imports.moment(birthDate).add(e.earliest, 'days').toDate(), 'date') === true)
                .filter(e => (programEncounter.programEnrolment.hasEncounter('Child PNC - Saheli', e.name)) === false)
                .first()
                .value();

            if (!_.isEmpty(schedule)) {
                console.log('schedule', schedule);
                const followupDate = imports.moment(birthDate).add(schedule.earliest, 'days').toDate();
                const followupOverdueDate = imports.moment(birthDate).add(schedule.max, 'days').toDate();

                scheduleBuilder.add({
                    name: schedule.name,
                    encounterType: 'Child PNC - Saheli',
                    earliestDate: followupDate,
                    maxDate: followupOverdueDate
                });
            }
        } else if (birthWeight < 2.5 && currentWeight < 3) {

            console.log('low birth');

            const followupDate = imports.moment(programEncounter.earliestVisitDateTime).add(3, 'days').toDate();
            const followupOverdueDate = imports.moment(followupDate).add(1, 'days').toDate();

            scheduleBuilder.add({
                name: 'Child PNC low birth - Saheli ',
                encounterType: 'Child PNC - Saheli',
                earliestDate: followupDate,
                maxDate: followupOverdueDate
            });

        }
        
        
          var encName = programEncounter.name;
        if (_.isEqual(encName, 'Child PNC - Saheli 12')) {
            let followupDate = imports.moment(birthDate).add(2, 'months').toDate();
            let followupOverdueDate = imports.moment(followupDate).add(7, 'days').toDate();

            scheduleBuilder.add({
                name: 'Child followup -Saheli',
                encounterType: 'Child followup - Saheli',
                earliestDate: followupDate,
                maxDate: followupOverdueDate
            });

        }

    }


    return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}