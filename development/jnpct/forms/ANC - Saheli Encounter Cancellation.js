{
  "name": "ANC - Saheli Encounter Cancellation",
  "uuid": "09125bb2-b1d9-4569-9070-e3c52ec48a12",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "5ec7f941-f469-44b9-bd6b-b2a049b415e2",
      "name": "Cancel",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Cancel reason",
          "uuid": "bc61516f-1b85-48c6-b888-79ec2f6e84d9",
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
          "mandatory": true
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
console.log('Started--->');
    const hasExitedProgram = programEncounter => programEncounter.programEnrolment.programExitDateTime;
        const deliveryDate = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Date of delivery');


    const encounterScheduleANC = [
        {"name": "ANC - Saheli 2", "earliest": 150, "max": 157},
        {"name": "ANC - Saheli 3", "earliest": 210, "max": 217},
        {"name": "ANC - Saheli 4", "earliest": 240, "max": 247},
        {"name": "ANC - Saheli 5", "earliest": 255, "max": 262},
        {"name": "ANC - Saheli 6", "earliest": 270, "max": 277}
    ];


    const lmpDate = programEncounter.programEnrolment.getObservationValue('Last menstrual period');
    const highRiskANC = programEncounter.getObservationReadableValue('Is the mother at high risk');
    console.log('highRisk--->', highRiskANC);
    console.log('earliest--->', programEncounter.earliestVisitDateTime);

    let visitDate = programEncounter.cancelDateTime;
    //|| getEarliestEncounterDate(programEncounter)


    if (!hasExitedProgram(programEncounter) && _.isEqual(deliveryDate,undefined)) {
        var encounterSchedule = encounterScheduleANC;

        var schedule = _.chain(encounterSchedule)
            .filter(e => imports.moment(visitDate)
                .isSameOrBefore(imports.moment(lmpDate).add(e.earliest, 'days').toDate(), 'date') === true)
            .filter(e => (programEncounter.programEnrolment.hasEncounter('ANC - Saheli', e.name)) === false)
            .first()
            .value();

        if (!_.isEmpty(schedule)) {
            console.log('schedule', schedule);

            let earliestVisitDate;
            let maxVisitDate;

            if (_.isEqual(highRiskANC, 'Yes')) {
            console.log('highRiskANC check---->', highRiskANC);
                earliestVisitDate = imports.moment(programEncounter.earliestVisitDateTime).add(15, 'days').toDate();
                maxVisitDate = imports.moment(programEncounter.earliestVisitDateTime).add(18, 'days').toDate();
                var encName = programEncounter.name;
                var newEncName = (encName.match(/\\d/g)).join("");
                var encName = 'ANC - Saheli ';

                scheduleBuilder.add({
                    name: encName.concat(parseInt(newEncName) + 1),
                    encounterType: 'ANC - Saheli',
                    earliestDate: earliestVisitDate,
                    maxDate: maxVisitDate
                });

            } else {
             console.log('highRiskANC  else check---->');
                earliestVisitDate = imports.moment(lmpDate).add(schedule.earliest, 'days').toDate();
                maxVisitDate = imports.moment(lmpDate).add(schedule.max, 'days').toDate();


                scheduleBuilder.add({
                    name: schedule.name,
                    encounterType: 'ANC - Saheli',
                    earliestDate: earliestVisitDate,
                    maxDate: maxVisitDate
                });
            }


        }
    }
  
      if (deliveryDate){
      scheduleBuilder.add({
                name: 'Mother PNC -Saheli',
                encounterType: 'Mother PNC -Saheli',
                earliestDate: programEncounter.cancelDateTime,
                maxDate: imports.moment(programEncounter.cancelDateTime).add(3, 'days').toDate()
            });
      }
    
    
    return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}