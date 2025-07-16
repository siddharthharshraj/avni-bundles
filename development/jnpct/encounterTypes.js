[
  {
    "name": "Child PNC Cluster Incharge",
    "uuid": "95dedf71-5709-46f0-b4e8-b6d91b9b05e0",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Birth Form",
    "uuid": "7101cfc3-1e1c-4535-adbb-871179f9ddd8",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Child Followup Cluster Incharge",
    "uuid": "3310a91d-a1b2-4e09-9caf-af25346bf1f5",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Abortion Followup",
    "uuid": "d029ef9a-04ca-4364-b447-9a2c1f0e2fa9",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "ANC Cluster Incharge",
    "uuid": "f883c6c3-3ced-415e-a1cb-750ddd57f18a",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Child PNC",
    "uuid": "9de58542-d280-4041-b879-5e7a5ff83fc2",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    const ageInMonths = individual.getAgeInMonths();
      return ageInMonths < 2;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Eligible Couple Followup",
    "uuid": "c487771e-738b-41f2-852e-d60c25d8afea",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Child Followup",
    "uuid": "3348db59-a01d-447e-a4b6-0d369023152d",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    const ageInMonths = individual.getAgeInMonths();
      return ageInMonths > 2;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "PNC",
    "uuid": "a2e2aee7-5226-4a94-9cec-00e5bfa137a4",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  let visibility = true;
  const individual = params.entity;
  const enrolments = individual.enrolments;
  const pregnancyEnrolment = _.find(enrolments, enl => enl.program.name === 'Pregnancy');
  
  const delivery = pregnancyEnrolment.hasEncounterOfType('Delivery Form');  
   
  console.log('delivery',delivery);  
   if(delivery)
      visibility = true;
    else visibility = false;
      
  return visibility;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Abortion followup - Saheli",
    "uuid": "6aa8f9be-2dee-4b0c-b745-8c8e2381489c",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Child PNC - Saheli",
    "uuid": "e7659ebf-8dfa-401c-810a-45d722f92ab2",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Birth form - Saheli",
    "uuid": "7af02f29-1146-4ddc-92f9-7a67c3769d70",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Mamta divas child (voided~1004)",
    "uuid": "28305547-0d78-444c-8253-311d00c605d6",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "ANC - Saheli",
    "uuid": "f077765b-4c1f-4e3c-9e83-855d2bcf7ddc",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Mother PNC -Saheli",
    "uuid": "89a937a9-37a7-4ce7-878e-be8ba9f4e61a",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Mamta divas mother (voided~1005)",
    "uuid": "100f021d-2612-4b64-baf1-06d596c9413c",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  let visibility = true;
    const allEnl = individual.enrolments || [];

    let pregEnl = [];

    let filterEnl = enl => {
        if (_.isEqual(enl.program.name, 'Pregnancy')) {
            pregEnl = enl;
        }
    };
    allEnl.forEach(filterEnl);
    let encounter = (enc) => {
        
        if (_.isEqual(enc.encounterType.name, 'Delivery - Saheli')) {
            visibility = false;
        }
    };

    if (pregEnl.length !== 0) {
        pregEnl.encounters.forEach(encounter)
    }
    return visibility;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Abortion - Saheli",
    "uuid": "5613b6ff-8dbb-4d18-8488-12df3584d455",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  let visibility = true;
    const allEnl = individual.enrolments || [];

    let pregEnl = [];

    let filterEnl = enl => {
        if (_.isEqual(enl.program.name, 'Pregnancy')) {
            pregEnl = enl;
        }
    };
    allEnl.forEach(filterEnl);
    let encounter = (enc) => {
        
        if (_.isEqual(enc.encounterType.name, 'Abortion - Saheli')) {
            visibility = false;
        }
    };

    if (pregEnl.length !== 0) {
        pregEnl.encounters.forEach(encounter)
    }
    return visibility;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Child followup - Saheli",
    "uuid": "ca4bb866-091e-4479-9311-73ecf08fee5d",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return true;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "ANC",
    "uuid": "0a0504d7-a420-4b00-ab03-c620071efa41",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  let visibility = true;
  const individual = params.entity;
  const enrolments = individual.enrolments;
  const pregnancyEnrolment = _.find(enrolments, enl => enl.program.name === 'Pregnancy');
  
  if (!_.isEmpty(pregnancyEnrolment)) {
  const delivery = pregnancyEnrolment.hasEncounterOfType('Delivery Form');  
  const abortion = pregnancyEnrolment.hasEncounterOfType('Abortion Form');
  
  if(delivery || abortion){
      visibility = false;
      }
  }
      
  return visibility;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Delivery Form",
    "uuid": "f1dbb45f-ed4a-4696-a68d-23cce75afc6f",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  let visibility = true;
  const individual = params.entity;
  const enrolments = individual.enrolments;
  const pregnancyEnrolment = _.find(enrolments, enl => enl.program.name === 'Pregnancy' && enl.programExitDateTime == null);
  
  if (!_.isEmpty(pregnancyEnrolment)) {
  const delivery = pregnancyEnrolment.hasEncounterOfType('Delivery Form');  
  const abortion = pregnancyEnrolment.hasEncounterOfType('Abortion Form');
  
  if(delivery || abortion){
      visibility = false;
      }
  }
      
  return visibility;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Abortion Form",
    "uuid": "ec4af29e-049d-4e3a-aef1-b660b74706ff",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  let visibility = true;
  const individual = params.entity;
  const enrolments = individual.enrolments;
  const pregnancyEnrolment = _.find(enrolments, enl => enl.program.name === 'Pregnancy' && enl.programExitDateTime == null);
  
  if (!_.isEmpty(pregnancyEnrolment)) {
  const delivery = pregnancyEnrolment.hasEncounterOfType('Delivery Form');  
  const abortion = pregnancyEnrolment.hasEncounterOfType('Abortion Form');
  
  if(delivery || abortion){
      visibility = false;
      }
  }
      
  return visibility;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "NCD Followup",
    "uuid": "1d2c3407-799e-4a12-965b-d97d5c520efd",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Screening Form",
    "uuid": "dc6619e4-3cb4-4364-88a3-ef1f90010aff",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  let eligibility = false;
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual}).when.ageInYears.greaterThanOrEqualTo(30).matches();
  const programEnrolments = individual.enrolments.filter(enrl => enrl.program.name === 'NCD Program');
  
  if (programEnrolments.length === 0 && condition11) {
    eligibility = true;
  }
  
  return eligibility;
},
    "active": true,
    "immutable": false
  }
]