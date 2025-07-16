{
  "name": "Child followup - Saheli Encounter Cancellation",
  "uuid": "698c73ab-e0e3-4759-9c1b-c1debd70fea1",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "0fd5547b-cb08-4804-a539-25f40ba4d191",
      "name": "Cancel",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Cancel reason",
          "uuid": "315de348-6839-4ead-bab9-b5d5aba586dd",
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

    const nutritionalStatus = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Nutritional status of child');
    const wfaStatus = programEncounter.programEnrolment.getObservationReadableValueInEntireEnrolment('Current nutritional status according to weight and age');
 console.log('wfaStatus---', wfaStatus);
 console.log('nutritionalStatus---', nutritionalStatus);

    const ageOfChildInMonths = programEncounter.programEnrolment.individual.getAgeInMonths();
  console.log('ageOfChildInMonths---', ageOfChildInMonths);

    const scheduleVisitsFollowupNormalWFA = () => {

        let earliest = programEncounter.cancelDateTime;

        console.log('earliest', earliest);
        const followupDate = imports.moment(earliest).add(1, 'months').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(7, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };
    const scheduleVisitsFollowupModUnderWeightWFA = () => {

        let earliest = programEncounter.cancelDateTime;

        console.log('earliest', earliest);
        const followupDate = imports.moment(earliest).add(15, 'days').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(3, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };
    const scheduleVisitsFollowupSeveUnderWeightWFA = () => {

        let earliest = programEncounter.cancelDateTime;

        console.log('earliest', earliest);
        const followupDate = imports.moment(earliest).add(7, 'days').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(1, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };


    const scheduleVisitsDuringChildFollowupNormal7To24 = () => {

        let earliest = programEncounter.cancelDateTime;

        console.log('earliest', earliest);
        let followupDate = imports.moment(earliest).add(1, 'months').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(7, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };
    const scheduleVisitsDuringChildFollowupMAM7To24 = () => {

        let earliest = programEncounter.cancelDateTime;

        console.log('earliest', earliest);
        let followupDate = imports.moment(earliest).add(15, 'days').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(3, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };
    const scheduleVisitsDuringChildFollowupSAM7To24 = () => {

        let earliest = programEncounter.cancelDateTime;

        console.log('earliest', earliest);
        let followupDate = imports.moment(earliest).add(7, 'days').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(1, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };


    const scheduleVisitsDuringChildFollowupNormal24To60 = () => {

        let earliest = programEncounter.cancelDateTime;

        console.log('earliest', earliest);
        let followupDate = imports.moment(earliest).add(1, 'months').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(7, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };
    const scheduleVisitsDuringChildFollowupMAM24To60 = () => {

        let earliest = programEncounter.cancelDateTime;

        console.log('earliest', earliest);
        let followupDate = imports.moment(earliest).add(15, 'days').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(3, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };
    const scheduleVisitsDuringChildFollowupSAM24To60 = () => {

        let earliest = programEncounter.cancelDateTime;

        console.log('earliest', earliest);
        let followupDate = imports.moment(earliest).add(7, 'days').toDate();
        let followupOverdueDate = imports.moment(followupDate).add(1, 'days').toDate();

        scheduleBuilder.add({
            name: 'Child followup -Saheli',
            encounterType: 'Child followup - Saheli',
            earliestDate: followupDate,
            maxDate: followupOverdueDate
        });

    };


    if (ageOfChildInMonths <= 6 && ageOfChildInMonths >= 2) {
 console.log('ageOfChildInMonths < =6---');
        switch (wfaStatus || nutritionalStatus) {
            case 'Normal':
                scheduleVisitsFollowupNormalWFA();
                break;
            case 'Moderately Underweight':
                scheduleVisitsFollowupModUnderWeightWFA();
                break;
            case 'Severely Underweight':
                scheduleVisitsFollowupSeveUnderWeightWFA();
                break;
        }


    } else if (ageOfChildInMonths >= 7 && ageOfChildInMonths < 24) {
console.log('ageOfChildInMonths. >=7---');
        switch (nutritionalStatus) {
            case 'Normal':
                scheduleVisitsDuringChildFollowupNormal7To24();
                break;
            case 'SAM' :
              case 'Severely Underweight':
                scheduleVisitsDuringChildFollowupSAM7To24();
                break;
            case 'MAM' :
             case 'Moderately Underweight':
                scheduleVisitsDuringChildFollowupMAM7To24();
                break;
        }
    } else if (ageOfChildInMonths >= 24 && ageOfChildInMonths <= 60) {
console.log('ageOfChildInMonths > 24---');
        switch (nutritionalStatus) {
            case 'Normal':
                scheduleVisitsDuringChildFollowupNormal24To60();
                break;
            case 'SAM' :
              case 'Severely Underweight':
                scheduleVisitsDuringChildFollowupSAM24To60();
                break;
            case 'MAM' :
            case 'Moderately Underweight':
                scheduleVisitsDuringChildFollowupMAM24To60();
                break;
        }
    }


    return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}