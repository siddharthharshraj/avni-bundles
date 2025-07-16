[
  {
    "name": "Pregnancy",
    "uuid": "26d3e45e-7174-433f-b4a7-db1524648252",
    "colour": "darkmagenta",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return individual.isFemale() && individual.getAgeInYears() > 15;
},
    "enrolmentSummaryRule" : 
({params, imports}) =>  {
    const summaries = [];
    const programEnrolment = params.programEnrolment;
    
    const lmp = programEnrolment.findLatestObservationInEntireEnrolment("Last menstrual period").getReadableValue();

       // var lmpDate = moment(lmp);
        var currentDate = imports.moment();
               
        var months = imports.moment(currentDate).diff(lmp, 'months');
        if (!_.isNil(months)) {
            summaries.push({name: 'Pregnancy Month', value: months});
        }

    const highRiskEnrolment  = programEnrolment.findLatestObservationFromEncounters('High Risk Conditions') ||           
          programEnrolment.findObservationInEntireEnrolment('High Risk Conditions');
  if (highRiskEnrolment) {
      summaries.push({name: 'High Risk Conditions', value: highRiskEnrolment.getValue()});
    }

    const ironTab = programEnrolment
    .getObservationsForConceptName('IF YES THEN WRITE NUMBER OF TABLET SWALLOWED');
        if (!_.isEmpty(ironTab)) {
          const value = ironTab.map(({encounterDateTime, obs}) =>
           (`${imports.moment(encounterDateTime).format("DD-MM-YYYY")}: ${obs}`)).join(", ");
            summaries.push({name: "Iron Tablet Consumed", value: value})
        }

        const calciumTab = programEnrolment
        .getObservationsForConceptName('IF YES THEN WRITE NUMBER OF CALCIUM TABLET SWALLOWED');
        if (!_.isEmpty(calciumTab)) {
            const value = calciumTab.map(({encounterDateTime, obs}) => 
              (`${imports.moment(encounterDateTime).format("DD-MM-YYYY")}: ${obs}`)).join(", ");
            summaries.push({name: "Calcium Tablet Consumed", value: value})
        }

        const sickleCellTest = programEnrolment.
        findLatestObservationFromEncounters("IF YES, result of sickle cell test");
        const sickleCellTestResult = sickleCellTest && sickleCellTest.getReadableValue();
        if (!_.isNil(sickleCellTestResult)) {
            summaries.push({name: 'Sickle Cell Result', value: sickleCellTestResult});
        }

        const hb = programEnrolment.getObservationsForConceptName('H.B');
        if (!_.isEmpty(hb)) {
            const value = hb.map(({encounterDateTime, obs}) => 
            (`${imports.moment(encounterDateTime).format("DD-MM-YYYY")}: ${obs}`)).join(", ");
            summaries.push({name: "HB", value: value})
        }

        const bpSystolic = programEnrolment.getObservationsForConceptName("B.P - Systolic");
        const bpDiastolic = programEnrolment.getObservationsForConceptName("B.P - Diastolic"); 
        
        if (!_.isEmpty(bpSystolic) && !_.isEmpty(bpDiastolic)) {            
            var value = [];
            bpSystolic.forEach(element => {
                let display = imports.moment(element.encounterDateTime).format("DD-MM-YYYY") + ': ' + element.obs; 
                value.push(display);
            });
            bpDiastolic.forEach(element => {
                for (var i = 0; i < bpSystolic.length ; i++) {                    
                    if(_.isEqual(bpSystolic[i].encounterDateTime, element.encounterDateTime)){
                        let display =  value[i] + '|' + element.obs;
                        value[i] = display;
                    } 
                }               
            });

            summaries.push({name: "Blood Pressure", value: value})
        }


    const muacCount = programEnrolment.getObservationsForConceptName('MUAC (in cms)');
        if (!_.isEmpty(muacCount)) {
          const value = muacCount.map(({encounterDateTime, obs}) => 
        (`${imports.moment(encounterDateTime).format("DD-MM-YYYY")}: ${obs}`)).join(", ");
        summaries.push({name: "MUAC", value: value})
      }

    return summaries;
},
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "showGrowthChart": false,
    "manualEnrolmentEligibilityCheckRule": null,
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  },
  {
    "name": "Eligible couple",
    "uuid": "4d56583f-76a7-4027-9d3d-6adc5a34a4b3",
    "colour": "orangered",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
    return individual.isFemale() && individual.getAgeInYears() > 15;
},
    "enrolmentSummaryRule" : 
({params, imports}) =>  {
    const summaries = [];
    const programEnrolment = params.programEnrolment;

    
    const height = programEnrolment.findLatestObservationFromEncounters("Height");
        if (height && height.getReadableValue()) {
            summaries.push({name: 'Height', value: height.getReadableValue()});
        }

        const we = programEnrolment.getObservationsForConceptName('Weight');
        if (!_.isEmpty(we)) {
            const value = we.map(({encounterDateTime, obs}) => 
            (`${imports.moment(encounterDateTime).format("DD-MM-YYYY")}: ${obs}`)).join(", ");
            summaries.push({name: "weight", value: value})
        }

        const muac = programEnrolment.getObservationsForConceptName('MUAC (in cms)');
        if (!_.isEmpty(muac)) {
            const value = muac.map(({encounterDateTime, obs}) =>
             (`${imports.moment(encounterDateTime).format("DD-MM-YYYY")}: ${obs}`)).join(", ");
            summaries.push({name: "MUAC", value: value})
        }

        const allEnc = _.filter(programEnrolment.nonVoidedEncounters(), enc => !_.isNil(enc.encounterDateTime));

        const latestEnc = _.last(_.sortBy(allEnc, encounter => encounter.encounterDateTime));
        const obs = latestEnc && _.find(latestEnc.observations, obs => obs.concept.name === 'LMP Date');
        if (!_.isNil(obs)) {
            const lmpDate= imports.moment(obs.getReadableValue()).format('DD-MM-YYYY');
            summaries.push({name: 'LMP', value: lmpDate});
        }

    
    return summaries;
},
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "showGrowthChart": false,
    "manualEnrolmentEligibilityCheckRule": null,
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  },
  {
    "name": "Child",
    "uuid": "b54328b6-3e9a-4df7-915e-5b54cd772d43",
    "colour": "darkorange",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return individual.getAgeInYears() <= 5;
},
    "enrolmentSummaryRule" : 
({params, imports}) =>  {
    const summaries = [];
    const programEnrolment = params.programEnrolment;
    
    const muac = programEnrolment.findLatestObservationFromEncounters("MUAC of child");

        if (muac && muac.getReadableValue()) {
            summaries.push({name: 'MUAC', value: muac.getReadableValue()});
        }


        const weight = programEnrolment.findLatestObservationFromEncounters("Weight");
        if (weight && weight.getReadableValue()) {
            summaries.push({name: 'Weight', value: weight.getReadableValue()});
        }

        const height = programEnrolment.findLatestObservationInEntireEnrolment("Height");
        if (height && height.getReadableValue()) {
            summaries.push({name: 'Height', value: height.getReadableValue()});
        }

        const nutriStatus = programEnrolment
        .findLatestObservationFromEncounters("Current nutritional status according to weight and age");
        if (nutriStatus && nutriStatus.getReadableValue()) {
            summaries.push({name: 'Current nutritional status according to weight and age',
             value: nutriStatus.getReadableValue()});
        }
        
        const nutriStatusOfChild = programEnrolment
        .findLatestObservationFromEncounters("Nutritional status of child");
        if (nutriStatusOfChild && nutriStatusOfChild.getReadableValue()) {
            summaries.push({name: 'Nutritional status of child',
             value: nutriStatusOfChild.getReadableValue()});
        }
        
   return summaries;
},
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "showGrowthChart": true,
    "manualEnrolmentEligibilityCheckRule": null,
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  },
  {
    "name": "NCD Program",
    "uuid": "e05b88c9-65f9-4a6c-a73f-72f21d4339dd",
    "colour": "#ff0000",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment; 
  return individual.getAgeInYears() >= 30;
},
    "enrolmentSummaryRule": "",
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "showGrowthChart": false,
    "manualEnrolmentEligibilityCheckRule": "",
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  }
]