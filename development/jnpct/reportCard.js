[
  {
    "uuid": "0a47424c-6d7b-40dd-9e98-38c70a834e31",
    "id": 2991,
    "name": "Test  (voided~2991)",
    "description": "Test",
    "color": "#ff0000",
    "nested": false,
    "count": 1,
    "standardReportCardType": "6be95028-1e1f-4d29-93a7-d4e562e0615a",
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": true
  },
  {
    "uuid": "2726f4a6-9cbc-4132-8137-829fa9d9502d",
    "id": 5181,
    "name": "Total Population ",
    "description": "",
    "color": "#ff0000",
    "nested": false,
    "count": 1,
    "standardReportCardType": "1fbcadf3-bf1a-439e-9e13-24adddfbf6c0",
    "standardReportCardInputSubjectTypes": [
      "2eaf9457-4cb5-4027-a9dc-6027948a30ba"
    ],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "18ebfc3a-16fb-4b64-be71-16a0ecf3f65a",
    "id": 5182,
    "name": "Total Population of more than 30 years of age ",
    "query" : 
({ params, imports }) => {
    const today = new Date();

    const thirtyYearsAgo = new Date();
    thirtyYearsAgo.setFullYear(today.getFullYear() - 30);

    const individualsOver30 = params.db.objects('Individual').filtered(
        "voided == false AND dateOfBirth < $0",
        thirtyYearsAgo
    );

    return individualsOver30;
}
,
    "description": "",
    "color": "#ff0000",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "a350a7ff-2b50-492c-920e-93b639401503",
    "id": 119,
    "name": "Children with Congenital Anomaly",
    "query" : 
({params, imports}) => {
    const isChildCongenitalAnamoly = (enrolment) => {
         const obs = enrolment.findLatestObservationInEntireEnrolment('Birth Defects');
         const condition1 = obs ? obs.getReadableValue() != 'None' : false;
         
         const obs1 = enrolment.findLatestObservationInEntireEnrolment("Is the infant's mouth cleft pallet seen?");
         const condition2 = obs1 ? obs1.getReadableValue() === 'Yes' : false;
         
     const obs2 = enrolment.findLatestObservationInEntireEnrolment('Is there visible tumor on back or on head of infant?');
         const condition3 = obs2 ? obs2.getReadableValue() === 'Yes' : false;
         
         const obs3 = enrolment.findLatestObservationInEntireEnrolment("Is foam coming from infant's mouth continuously?");
         const condition4 = obs3 ? obs3.getReadableValue() === 'Yes' : false;
                  
         return condition1 || condition2 || condition3 || condition4;
    };
    
    const isChildCongenitalAnamolyReg = (individual) => {
         const obs = individual.getObservationReadableValue('Specialy abled');
         return obs ? obs === 'Yes' : false;
    };

    return params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false).@count > 0`)
        .filter((individual) => individual.voided === false && (isChildCongenitalAnamolyReg(individual) || 
            _.some(individual.enrolments, enrolment => enrolment.program.name === 'Child' && isChildCongenitalAnamoly(enrolment))) )
},
    "description": "Children with Congenital Anomaly",
    "color": "#ff00f6",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "62304c78-26df-4fbc-9205-059e2315977b",
    "id": 120,
    "name": "Currently sick children",
    "query" : 
({params, imports}) => {
    const isChildSick = (enrolment) => {
         const obs = enrolment.findLatestObservationFromEncounters('Refer to the hospital for');    
         return obs ? obs.getReadableValue() != undefined : false;
    };
    
    return params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false).@count > 0`)
        .filter((individual) => individual.voided === false && (_.some(individual.enrolments, enrolment => enrolment.program.name === 'Child' && isChildSick(enrolment))) )
},
    "description": "Currently sick children",
    "color": "#00ff69",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "6d92c828-eae0-420a-8bd5-066a35a4e952",
    "id": 113,
    "name": "Children at 7 months in SAM",
    "query" : 
({params, imports}) => {
    const isUndernourished = (enrolment) => {
        const obs = enrolment.findLatestObservationInEntireEnrolment('Nutritional status of child');
        return obs ? _.includes(['SAM'], obs.getReadableValue()) : false;
    };
    return params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'Child Followup' and $encounter.voided = false and SUBQUERY($encounter.observations, $observation, $observation.concept.uuid = '3fb85722-fd53-43db-9e8b-d34767af9f7e').@count > 0).@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.voided === false && individual.getAgeInMonths() == 7 && _.some(individual.enrolments, enrolment => enrolment.program.name === 'Child' && isUndernourished(enrolment)))
},
    "description": "Children at 7 months in SAM",
    "color": "#ff3600",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "2cb554db-30a9-416d-8136-a18286917ed2",
    "id": 112,
    "name": "Children who migrated permanently",
    "query" : 
({params, imports}) => {
    return params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and  SUBQUERY($enrolment.programExitObservations, $observation, $observation.concept.uuid = '29238876-fbd8-4f39-b749-edb66024e25e' and ($observation.valueJSON contains 'edc26b08-3b8c-42f1-bc45-77b4649b3d86')).@count > 0 and $enrolment.voided = false and voided = false).@count > 0`)
},
    "description": "Children who migrated permanently",
    "color": "#8206f4",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "119ebdc9-2912-49ce-9a12-db0116d8cf73",
    "id": 116,
    "name": "At 13 months children completely immunised",
    "query" : 
({params, imports}) => {
    const isChildGettingImmunised = (enrolment) => {
        if (enrolment.hasChecklist) {
            const vaccineToCheck = ['BCG', 'Polio 0', 'Polio 1', 'Polio 2', 'Polio 3', 'Pentavalent 1', 'Pentavalent 2', 'Pentavalent 3', 'Measles 1', 'Measles 2', 'FIPV 1', 'FIPV 2', 'Rota 1', 'Rota 2'];
            const checklist = _.head(enrolment.getChecklists());
            return _.chain(checklist.items)
                .filter(({detail}) => _.includes(vaccineToCheck, detail.concept.name))
                .every(({completionDate}) => !_.isNil(completionDate))
                .value();
        }
        return false;
    };

    return params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false).@count > 0`)
        .filter((individual) => individual.voided === false && individual.getAgeInMonths() === 13 && _.some(individual.enrolments, enrolment => enrolment.program.name === 'Child' && isChildGettingImmunised(enrolment)))
},
    "description": "At 13 months children completely immunised",
    "color": "#02f684",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "2da0dbff-5e20-401d-a52e-43567102fe8e",
    "id": 227,
    "name": "Children whose kmc is ongoing",
    "query" : 
({params, imports}) => {
    const isKMC = (enrolment) => {
        const encounter = enrolment.lastFulfilledEncounter('Child PNC', 'Child PNC Cluster Incharge', 'Child PNC - Saheli');
        if (encounter === undefined) return false;

        const obs = encounter.getObservationReadableValue("If infant's weight is less than 2.5kg then did KMC?");

        return obs === 'Yes';
    };
    const weightCheck = (enrolment) => {
        const obs = enrolment.findLatestObservationInEntireEnrolment('Weight');
        return obs ? obs.getReadableValue() < 3 : false;
    };
    return params.db.objects('Individual')
        .filtered(`voided = false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'Child PNC' and $encounter.voided = false and SUBQUERY($encounter.observations, $observation, $observation.concept.uuid = 'd21d1844-362b-426c-a5d4-c45ab5fc1690').@count > 0).@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.enrolments.some(enrolment => isKMC(enrolment) && weightCheck(enrolment)))
},
    "description": "Children whose kmc is ongoing",
    "color": "#2196f3",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "e6c867e6-e19d-46c6-a9c0-ab75b3b388bc",
    "id": 223,
    "name": "Children whose weight less than 1.8kg",
    "query" : 
    ({params, imports}) => {
    
        const isLowBirthWeight = (enrolment) => {
            const weight = enrolment.findLatestObservationInEntireEnrolment('Weight');
            const observation = weight ? weight : enrolment.findLatestObservationInEntireEnrolment('Birth Weight');
            return observation ? observation.getReadableValue() < 1.8 : false;
        };
    
        const ageCheck = (enrolment) => {
            const age = enrolment.individual.getAgeInMonths();
            return age !== undefined && age <= 3;
        };
    
        return params.db.objects('Individual')
            .filtered(`voided = false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.observations, $observation, $observation.concept.uuid = 'c82cd1c8-d0a9-4237-b791-8d64e52b6c4a').@count > 0 and voided = false).@count > 0`)
            .filter((individual) =>  individual.enrolments.some(enrolment =>  isLowBirthWeight(enrolment) && ageCheck(enrolment)))
    },
    "description": "Children whose weight less than 1.8kg",
    "color": "#c62828",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "2d541219-d160-4643-bcde-0fd3b1c7bef5",
    "id": 229,
    "name": "High-risk ANC",
    "query" : 
({params, imports}) => {
    const isHighRisk = (enrolment) => {
        const obs = enrolment.findLatestObservationInEntireEnrolment('High Risk Conditions');
        return obs ? !_.isNull(obs) : false;
    };
    const deliveryAbortionCheck = (enrolment) => {
        const encounterTypes = ['Delivery Form', 'Abortion Form', 'Delivery - Saheli', 'Abortion - Saheli'];
        const ancEncounter = enrolment.hasEncounterOfType('ANC');

        return (
            !encounterTypes.some((encType) => enrolment.hasEncounterOfType(encType)) &&
            ancEncounter
        );
    };
    return params.db.objects('Individual')
        .filtered(`voided = false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Pregnancy' and $enrolment.programExitDateTime = null and $enrolment.voided = false).@count > 0`)
        .filter((individual) => _.some(individual.enrolments, enrolment =>  isHighRisk(enrolment) && deliveryAbortionCheck(enrolment)))

},
    "description": "High-risk ANC",
    "color": "#e53935",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "425825f2-4219-4753-aaa3-572d3898b568",
    "id": 230,
    "name": "Children who is in SAM grade since more than 3 months",
    "query" : 
({params, imports}) => {
   const isSAM = (enrolment) => {
  const encountersInLastThreeMonths = enrolment
    .getEncounters(true)
    .filter((e) => imports.moment().diff(imports.moment(e.encounterDateTime), "months", true) <= 3)
    .sort((a, b) => a.encounterDateTime - b.encounterDateTime);

  const statusArray = encountersInLastThreeMonths.map((e) => {
    const nutritionStatus = e.getObservationReadableValue('Nutritional status of child');
    return nutritionStatus === "SAM" ? 'SAM' : 'NA';
  });

  return statusArray.length > 0 && !statusArray.includes('NA');
};

    return params.db.objects('Individual')
        .filtered(`voided = false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'Child Followup' and $encounter.voided = false and SUBQUERY($encounter.observations, $observation, $observation.concept.uuid = '3fb85722-fd53-43db-9e8b-d34767af9f7e').@count > 0).@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.enrolments.some((enrolment) => isSAM(enrolment)));
},
    "description": "",
    "color": "#ff3d00",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "59ac3237-1df1-45ac-890a-6ceca7f2172f",
    "id": 228,
    "name": "ANC whose HB is 7 or less than 7 gm%",
    "query" : 

({params, imports}) => {
    const isLowHB = (enrolment) => {
        const hb = enrolment.findLatestObservationInEntireEnrolment('H.B');
        const hbByColorScale = enrolment.findLatestObservationInEntireEnrolment('HB measured by color scale');
        if (hb !== undefined) {
            return hb.getReadableValue() <= 7;
        } else if (hbByColorScale !== undefined) {
            return hbByColorScale.getReadableValue() <= 7;
        }
    };

     const deliveryAbortionCheck = (enrolment) => {
       return !enrolment.hasAnyOfEncounterTypes(['Delivery Form','Abortion Form'])
    };

    return params.db
        .objects('Individual')
        .filtered(`voided = false AND SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Pregnancy' AND $enrolment.programExitDateTime = null AND $enrolment.voided = false AND SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'ANC' AND $encounter.voided = false ).@count > 0 AND voided = false).@count > 0`)
        .filter((individual) => individual.enrolments.some((enrolment) => isLowHB(enrolment) && deliveryAbortionCheck(enrolment)));
}
,
    "description": "ANC whose HB is 7 or less than 7 gm%",
    "color": "#f50057",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "9730d265-be6f-4847-9b93-e3398467b1e2",
    "id": 334,
    "name": "High risk ANC-saheli",
    "query" : 

({ params, imports }) => {
    const isHighRisk = (enrolment) => {
        const encounter = enrolment.lastFulfilledEncounter('ANC - Saheli');
        if (encounter === undefined) return false;
        const obs = encounter.getObservationReadableValue('Is the mother at high risk');
        return obs === 'Yes';
    };

    const deliveryAbortionCheck = (enrolment) => {
        return !enrolment.hasAnyOfEncounterTypes(['Delivery - Saheli', 'Abortion - Saheli']);
    };

    return params.db
        .objects('Individual')
        .filtered(
            `voided = false AND SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Pregnancy' AND $enrolment.programExitDateTime = null AND $enrolment.voided = false AND SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'ANC - Saheli' AND $encounter.voided = false AND SUBQUERY($encounter.observations, $observation, $observation.concept.uuid = '963948d3-3dfe-4f7f-bd2f-ec807bb94b07').@count > 0).@count > 0 AND voided = false).@count > 0`
        )
        .filter((individual) =>
            individual.enrolments.some((enrolment) => isHighRisk(enrolment) && deliveryAbortionCheck(enrolment))
        );
},
    "description": "",
    "color": "#a345b7",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "15ecab4c-bea9-431d-8bca-0abb9eedf5ed",
    "id": 114,
    "name": "Total SAM Children",
    "query" : 
({params, imports}) => {
    const isUndernourished = (enrolment) => {
        const encounter = enrolment.lastFulfilledEncounter('Child Followup', 'Child followup - Saheli', 'Child Followup Cluster Incharge');
        if (encounter === undefined) return false;

        const obs = encounter.getObservationReadableValue('Nutritional status of child')
        return obs === 'SAM';
    };
    return params.db.objects('Individual')
        .filtered(`voided = false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'Child Followup' and $encounter.voided = false and SUBQUERY($encounter.observations, $observation, $observation.concept.uuid = '3fb85722-fd53-43db-9e8b-d34767af9f7e').@count > 0).@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.getAgeInMonths() > 6 && individual.getAgeInYears() < 6 && individual.enrolments.some( enrolment => isUndernourished(enrolment)))
}
,
    "description": "Total SAM Children",
    "color": "#c62828",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "c281f93f-7450-4f3a-80f0-f41f13ac38be",
    "id": 115,
    "name": "Total MAM children",
    "query" : 
({params, imports}) => {
    const isUndernourished = (enrolment) => {
        const encounter = enrolment.lastFulfilledEncounter('Child Followup', 'Child followup - Saheli', 'Child Followup Cluster Incharge');
if (encounter === undefined){
return false};
        const obs = encounter.getObservationReadableValue('Nutritional status of child')
        return obs === 'MAM';
    };
    return params.db.objects('Individual')
        .filtered(`voided = false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'Child Followup' and $encounter.voided = false and SUBQUERY($encounter.observations, $observation, $observation.concept.uuid = '3fb85722-fd53-43db-9e8b-d34767af9f7e').@count > 0).@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.getAgeInMonths() > 6 && individual.getAgeInYears() < 6 && individual.enrolments.some( enrolment => isUndernourished(enrolment)))
}
,
    "description": "Total MAM children",
    "color": "#fa8100",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "d146c79a-650e-4d55-8b92-cb526add3f22",
    "id": 225,
    "name": "Children as per red grade (0-6 months)",
    "query" : 
({params, imports}) => {
    const isUndernourished = (enrolment) => {
        const encounter = enrolment.lastFulfilledEncounter('Child Followup', 'Child followup - Saheli', 'Child Followup Cluster Incharge');
        if (encounter === undefined){
        return false};
        const obs = encounter.getObservationReadableValue('Current nutritional status according to weight and age');
   
        return obs === 'Severely Underweight';
    };
    return params.db.objects('Individual')
        .filtered(`voided = false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'Child Followup' and $encounter.voided = false and SUBQUERY($encounter.observations, $observation, $observation.concept.uuid = '68a6a336-4a91-468b-9b7d-ff37e637f5b7').@count > 0).@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.getAgeInMonths() < 7 && individual.enrolments.some( enrolment => isUndernourished(enrolment)))
},
    "description": "Children as per red grade",
    "color": "#ef5350",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "be69ff65-71d3-4038-a096-fcee527e0eb8",
    "id": 231,
    "name": "Children who is not weighed since two month from SAM AND MAM grade children",
    "query" : 
({params, imports}) => {
    const isSAM = (enrolment) => {
        const latestEncounter = enrolment.lastFulfilledEncounter('Child Followup', 'Child followup - Saheli', 'Child Followup Cluster Incharge');
        if (latestEncounter === undefined) return false;

        const nutritionStatus = latestEncounter.getObservationReadableValue('Nutritional status of child');
        const encDuration = imports.moment().diff(imports.moment(latestEncounter.encounterDateTime), "months", true);

        return nutritionStatus === 'SAM' || nutritionStatus === 'MAM' && encDuration > 2;
    };
    return params.db.objects('Individual')
        .filtered(`voided = false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'Child Followup' and $encounter.voided = false and SUBQUERY($encounter.observations, $observation, $observation.concept.uuid = '3fb85722-fd53-43db-9e8b-d34767af9f7e').@count > 0).@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.enrolments.some( enrolment =>  isSAM(enrolment)))
},
    "description": "Children who is not weighed since two month from SAM AND MAM grade children",
    "color": "#ff5252",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "fe4c4faf-45ea-45f1-a094-c7d1ac2fe09f",
    "id": 226,
    "name": "Children as per yellow grade (0-6 months)",
    "query" : 
({params, imports}) => {
    const isUndernourished = (enrolment) => {
        const encounter = enrolment.lastFulfilledEncounter('Child Followup', 'Child followup - Saheli', 'Child Followup Cluster Incharge');
        if (encounter === undefined) 
        {return false};
        const obs = encounter.getObservationReadableValue('Current nutritional status according to weight and age');
        return obs === 'Moderately Underweight';
    };
    return params.db.objects('Individual')
        .filtered(`voided = false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'Child Followup' and $encounter.voided = false and SUBQUERY($encounter.observations, $observation, $observation.concept.uuid = '68a6a336-4a91-468b-9b7d-ff37e637f5b7').@count > 0).@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.getAgeInMonths() < 7 && individual.enrolments.some( enrolment => isUndernourished(enrolment)))
},
    "description": "Children as per yellow grade",
    "color": "#ffd740",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "6566299b-55ea-4fb8-a07a-96c832a9f179",
    "id": 224,
    "name": "List of child death",
    "query" : 
({params, imports}) => {
    return params.db.objects('Individual')
        .filtered(`voided = false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and  SUBQUERY($enrolment.programExitObservations, $observation, $observation.concept.uuid = '29238876-fbd8-4f39-b749-edb66024e25e' and ($observation.valueJSON contains 'cbb0969c-c7fe-4ce4-b8a2-670c4e3c5039')).@count > 0 and $enrolment.voided = false and voided = false).@count > 0`)
},
    "description": "List of child death ",
    "color": "#9e9e9e",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "8e1135ac-b611-4e9e-96fe-38c495d291d9",
    "id": 110,
    "name": "Low birth weight children  (List of non exited and non voided children with birth weight less than 2 kg)",
    "query" : 
({params, imports}) => {
    const isLowBirthWeight = (enrolment) => {
        const obs = enrolment.findLatestObservationInEntireEnrolment('Birth Weight');
        return obs ? obs.getReadableValue() < 2.0 : false;
    };
    return params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.observations, $observation, $observation.concept.uuid = 'c82cd1c8-d0a9-4237-b791-8d64e52b6c4a').@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.voided === false && _.some(individual.enrolments, enrolment => enrolment.program.name === 'Child' && isLowBirthWeight(enrolment)))
},
    "description": "Low Birth weight Children",
    "color": "#1aea44",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "fd190f33-3719-4173-9a12-afc881b4b9b3",
    "id": 111,
    "name": "Children who died",
    "query" : 
({params, imports}) => {
    return params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and  SUBQUERY($enrolment.programExitObservations, $observation, $observation.concept.uuid = '29238876-fbd8-4f39-b749-edb66024e25e' and ($observation.valueJSON contains 'cbb0969c-c7fe-4ce4-b8a2-670c4e3c5039')).@count > 0 and $enrolment.voided = false and voided = false).@count > 0`)
},
    "description": "Children who died",
    "color": "#06eaf5",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  }
]