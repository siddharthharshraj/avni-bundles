{
  "name": "Pregnancy Enrolment",
  "uuid": "d40e8aa2-8cae-4b09-ad30-2da6c1690206",
  "formType": "ProgramEnrolment",
  "formElementGroups": [
    {
      "uuid": "0d62e733-7b12-42d5-b98f-6a4516996e08",
      "name": "Basic Information",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "LMP",
          "uuid": "1721e31c-fda6-499e-8408-e918fdfd6ecf",
          "keyValues": [],
          "concept": {
            "name": "Last menstrual period",
            "uuid": "0cf252ba-e6b4-4209-903b-4b6d48cd7070",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("0cf252ba-e6b4-4209-903b-4b6d48cd7070").defined.matches();
  
  if(condition11 ){
    value = imports.motherCalculations.estimatedDateOfDelivery(programEnrolment);
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        }
      ],
      "display": "Basic Information",
      "timed": false
    },
    {
      "uuid": "4275613d-833c-4b65-97b9-2fe488d4f7d6",
      "name": "Medical History",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Previous history of disease",
          "uuid": "b620d496-f046-427f-90ef-d56c9ed63e24",
          "keyValues": [],
          "concept": {
            "name": "Previous history of disease",
            "uuid": "8bee6542-cd1e-4bd8-b0d4-5a88575fcb1c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other",
                "uuid": "c802a91a-7b34-4416-be89-4197227ded2b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "abnormal": true,
                "active": true
              },
              {
                "name": "None",
                "uuid": "540cc15d-2ad4-496c-8514-64031f08290a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "unique": true,
                "active": true
              },
              {
                "name": "Asthama",
                "uuid": "83a00220-667a-4d7a-97d2-5e659aa7e54a",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Heart disease",
                "uuid": "ba147cdd-ecb8-47d7-a6eb-d3d5797aae34",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Blood Pressure",
                "uuid": "0a961dda-bd33-4f02-bc55-8cd41d34aeb0",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Diabetes",
                "uuid": "02204d98-3965-4c63-a2a4-0cb5616bed0d",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Tuberculosis",
                "uuid": "75353c7b-d664-4b5c-87d9-0dbe7c413fdc",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Other previous history of disease - Please specify",
          "uuid": "e4dde0c3-71fe-46cf-bb24-8e4f31d1c701",
          "keyValues": [],
          "concept": {
            "name": "Other previous history of disease - Please specify",
            "uuid": "b5e0662c-7412-4fd1-9a6b-4f0f8c62afc1",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEnrolment, formElement});
 statusBuilder.show().when.valueInEnrolment("Previous history of disease").containsAnswerConceptName("Other");
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Medical History",
      "timed": false
    },
    {
      "uuid": "0c7d44b7-387b-49d2-a9eb-dd7d87a8e577",
      "name": "Pregnancy History",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Gravida",
          "uuid": "5da6291c-67ec-42ac-a566-f173a3a3453f",
          "keyValues": [],
          "concept": {
            "name": "Gravida",
            "uuid": "bec0e4d4-8daf-4956-8906-0f579b4cf628",
            "dataType": "Coded",
            "answers": [
              {
                "name": "5",
                "uuid": "3555dd4d-4f4f-4779-ac9f-ffaed73ed33e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "abnormal": true,
                "active": true
              },
              {
                "name": "2",
                "uuid": "5b0b2111-2f93-4a91-bf2f-a838e68532fa",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "6 AND ABOVE",
                "uuid": "5dc7f00a-b93e-4b7b-863d-827c9349d390",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "abnormal": true,
                "active": true
              },
              {
                "name": "5 and more",
                "uuid": "f35057ee-e4a5-4d92-a2f4-347bbe4f86c0",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "abnormal": true,
                "active": true,
                "keyValues": []
              },
              {
                "name": "3",
                "uuid": "ecf27357-4e52-48af-95c8-178853e9c6d9",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "1",
                "uuid": "ccc99207-9a72-417f-ac7d-e735e565789b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "4",
                "uuid": "0e91716e-435d-49cd-b842-621e804101b4",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
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
          "name": "Parity",
          "uuid": "27cded88-492f-4fa8-9706-be2bafa99f7a",
          "keyValues": [],
          "concept": {
            "name": "Parity",
            "uuid": "3d4d2ff8-6fce-43df-bfbb-40aba8b10f43",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Number of Abortion",
          "uuid": "e052a944-390c-449c-9efa-176859e1d3a1",
          "keyValues": [],
          "concept": {
            "name": "Number of Abortion",
            "uuid": "3bf33915-bc67-4431-86eb-a38905be62cf",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEnrolment, formElement});
  statusBuilder.show().when.valueInEnrolment("Gravida").containsAnswerConceptNameOtherThan("1");
 return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Number of live childrens",
          "uuid": "ef5214d1-26a2-4a30-a52b-a6879096d1e1",
          "keyValues": [],
          "concept": {
            "name": "Number of live childrens",
            "uuid": "9acef9b8-8212-49c0-b421-824f9314f319",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEnrolment, formElement});   statusBuilder.show().when.valueInEnrolment("Gravida").containsAnswerConceptNameOtherThan("1");
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Male",
          "uuid": "038a674f-e534-4b80-9376-d84cdec53984",
          "keyValues": [],
          "concept": {
            "name": "MALE",
            "uuid": "76333e77-9ff5-4caf-9a87-021e915f0e9f",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEnrolment, formElement});
  statusBuilder.show().when.valueInEnrolment("Number of live childrens").is.greaterThan(0);
 return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Female",
          "uuid": "d25d3fe3-d713-4643-ba7d-33e98fd7d7e7",
          "keyValues": [],
          "concept": {
            "name": "FEMALE",
            "uuid": "2a523870-c948-4418-8283-902c3494b607",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEnrolment, formElement});
   statusBuilder.show().when.valueInEnrolment("Number of live childrens").is.greaterThan(0);
return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Result of last delivery",
          "uuid": "54e526d4-36ef-47e1-8253-c7d3004a06bf",
          "keyValues": [],
          "concept": {
            "name": "Result of last delivery",
            "uuid": "4c8e7665-30f1-4f65-b76e-b9132904ed69",
            "dataType": "Coded",
            "answers": [
              {
                "name": "MTP",
                "uuid": "25c486d0-db89-41ba-b151-962fd75f83c6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Live Birth",
                "uuid": "5ea13e9e-ef47-4635-9f20-d3dbf8e516d6",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Still Birth",
                "uuid": "4fcec28a-a56e-4049-8b84-67bab4863d91",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Abortion",
                "uuid": "4ca3e92a-5871-4146-9271-6c35558d5a92",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "abnormal": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEnrolment, formElement});   statusBuilder.show().when.valueInEnrolment("Gravida").containsAnswerConceptNameOtherThan("1");
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Age of Youngest child",
          "uuid": "83179a86-bc39-434c-9a78-369157c1d284",
          "keyValues": [
            {
              "key": "durationOptions",
              "value": [
                "months"
              ]
            }
          ],
          "concept": {
            "name": "Age of Youngest child",
            "uuid": "4e89f7b0-0b3d-4902-8f78-6d45ac5614a9",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEnrolment, formElement});
  statusBuilder.show().when.valueInEnrolment("Number of live childrens").is.greaterThan(0);
  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Place of last delivery",
          "uuid": "e69dffe1-819b-4140-916b-3c73940560d5",
          "keyValues": [],
          "concept": {
            "name": "Place of last delivery",
            "uuid": "8e28efd9-7bc8-4870-929d-867ad9367962",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Home",
                "uuid": "8cfae1cd-3e75-40e9-9244-6d083c0d86f7",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "On the way",
                "uuid": "0c773b70-4b20-4713-a45c-c0f3b39db87f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Hospital",
                "uuid": "fcca20e2-f837-4b78-a52f-1d187bca389a",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEnrolment, formElement});
 statusBuilder.show().when.valueInEnrolment("Gravida").containsAnswerConceptNameOtherThan("1");
   return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "Risk in the last pregnancy",
          "uuid": "7b252441-63e9-4674-a795-f8db4196856b",
          "keyValues": [],
          "concept": {
            "name": "Risk in the last pregnancy",
            "uuid": "9b7af000-0354-4036-a7ab-1f07b43346df",
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
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEnrolment, formElement});
 statusBuilder.show().when.valueInEnrolment("Gravida").containsAnswerConceptNameOtherThan("1");
  return statusBuilder.build();
},
          "mandatory": true
        },
        {
          "name": "What kind of risk occurred",
          "uuid": "7fcba7da-d23d-43b9-b303-64a8e9f0ad54",
          "keyValues": [],
          "concept": {
            "name": "what kind of risk occurred",
            "uuid": "9f8e78d6-72fc-4f03-9dd9-3ec7f28639df",
            "dataType": "Coded",
            "answers": [
              {
                "name": "SICKLE CELL",
                "uuid": "1487d377-e15e-46fe-9cf5-ac38b1482cce",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "abnormal": true,
                "active": true
              },
              {
                "name": "PIH",
                "uuid": "a29fc05e-3a4c-44b3-bb9e-827d0a6d0977",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "abnormal": true,
                "active": true
              },
              {
                "name": "LSCS",
                "uuid": "dd010499-0458-4154-8c92-c0e1a989521d",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "abnormal": true,
                "active": true
              },
              {
                "name": "ANEMIA",
                "uuid": "623eddd1-a8f0-4a57-99be-a924fc7e7f34",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "abnormal": true,
                "active": true
              },
              {
                "name": "APH",
                "uuid": "56331346-a084-4205-88e1-acc7fcb9faee",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "abnormal": true,
                "active": true
              },
              {
                "name": "ECLAMPSIA",
                "uuid": "116ba998-263c-49c5-a30e-ad8bfdbd2727",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "abnormal": true,
                "active": true
              },
              {
                "name": "Prolong labour",
                "uuid": "7f736089-d245-4116-aa9d-70219a4e1e70",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "abnormal": true,
                "active": true
              },
              {
                "name": "TWINS",
                "uuid": "9f920a32-dad3-423a-a044-de72db342eec",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "abnormal": true,
                "active": true
              },
              {
                "name": "MALPRESENTATION",
                "uuid": "02aa1fd0-4101-4166-8f91-e6abeed12a96",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "abnormal": true,
                "active": true
              },
              {
                "name": "BURNING MICTURATION",
                "uuid": "9d8b6f28-6854-4992-9c83-00f50b592309",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "abnormal": true,
                "active": true
              },
              {
                "name": "None",
                "uuid": "540cc15d-2ad4-496c-8514-64031f08290a",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "unique": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEnrolment, formElement});
 statusBuilder.show().when.valueInEnrolment("Risk in the last pregnancy").is.yes;
  return statusBuilder.build();
},
          "mandatory": true
        }
      ],
      "display": "Pregnancy History",
      "timed": false
    }
  ],
  "decisionRule": "
  "use strict";
({params, imports}) => {
    const programEnrolment = params.entity;
    const decisions = params.decisions;
     const complicationsBuilder = new imports.rulesConfig.complicationsBuilder({
        programEnrolment: programEnrolment,
        complicationsConcept: "High Risk"
    });

        complicationsBuilder
            .addComplication("Underage Pregnancy")
            .when.ageInYears.is.lessThan(18);

        complicationsBuilder
            .addComplication("Old age Pregnancy")
            .when.ageInYears.is.greaterThanOrEqualTo(35);

        complicationsBuilder
            .addComplication("Previous history of disease")
            .when.valueInEnrolment('Previous history of disease')
            .containsAnyAnswerConceptName("Tuberculosis", "Blood Pressure",
                "Heart disease", "Diabetes", "Asthama", "Other");

        complicationsBuilder
            .addComplication("Gravida is more than 5")
            .when.valueInEnrolment('Gravida')
            .containsAnswerConceptName("5 and more");

        complicationsBuilder
            .addComplication("Result of last delivery")
            .when.valueInEnrolment('Result of last delivery')
            .containsAnyAnswerConceptName("Still Birth", "MTP", "Abortion");

        complicationsBuilder
            .addComplication("Prolong labour")
            .when.valueInEnrolment('what kind of risk occurred')
            .containsAnswerConceptName("Prolong labour");

        complicationsBuilder
            .addComplication("LSCS")
            .when.valueInEnrolment('what kind of risk occurred')
            .containsAnswerConceptName("LSCS");

        complicationsBuilder
            .addComplication("ANEMIA")
            .when.valueInEnrolment('what kind of risk occurred')
            .containsAnswerConceptName("ANEMIA");

        complicationsBuilder
            .addComplication("ECLAMPSIA")
            .when.valueInEnrolment('what kind of risk occurred')
            .containsAnswerConceptName("ECLAMPSIA");

        complicationsBuilder
            .addComplication("PIH")
            .when.valueInEnrolment('what kind of risk occurred')
            .containsAnswerConceptName("PIH");

        complicationsBuilder
            .addComplication("SICKLE CELL")
            .when.valueInEnrolment('what kind of risk occurred')
            .containsAnswerConceptName("SICKLE CELL");

        complicationsBuilder
            .addComplication("APH")
            .when.valueInEnrolment('what kind of risk occurred')
            .containsAnswerConceptName("APH");

        complicationsBuilder
            .addComplication("MALPRESENTATION")
            .when.valueInEnrolment('what kind of risk occurred')
            .containsAnswerConceptName("MALPRESENTATION");

        complicationsBuilder
            .addComplication("TWINS")
            .when.valueInEnrolment('what kind of risk occurred')
            .containsAnswerConceptName("TWINS");

        complicationsBuilder
            .addComplication("BURNING MICTURATION")
            .when.valueInEnrolment('what kind of risk occurred')
            .containsAnswerConceptName("BURNING MICTURATION");
            
       decisions.enrolmentDecisions.push(complicationsBuilder.getComplications());
            
    return decisions;
},
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const programEnrolment = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEnrolment
  });

  const allEnc=programEnrolment.encounters || [];

const getEarliestDate = (programEnrolment) =>
    imports.moment(programEnrolment.enrolmentDateTime)
        .startOf("day")
        .toDate();
        
const encounterScheduleANCClusterIncharge = [
    {"name": "ANC Cluster Incharge-1", "earliest": 148, "max": 169},
    {"name": "ANC Cluster Incharge-2", "earliest": 204, "max": 225}
];

 const scheduleANCClusterInchargeVisits = () => {
    const lmpDate = programEnrolment.getObservationValue('Last menstrual period');
    
    var schedule = _.chain(encounterScheduleANCClusterIncharge)
      .filter(e => imports.moment(getEarliestDate(programEnrolment))
      .isSameOrBefore(imports.moment(lmpDate).add(e.earliest, 'days').toDate(), 'date') === true)
      .filter(e => (programEnrolment.hasEncounter('ANC Cluster Incharge', e.name)) === false)
      .first()
      .value();      
        
    if (!_.isEmpty(schedule)) {
        console.log('schedule', schedule.name);
       
       const visitDate = imports.moment(lmpDate).add(schedule.earliest, 'days').toDate();
       const maxVisitDate = imports.moment(visitDate).add(21, 'days').toDate();
        
        scheduleBuilder.add({
            name: schedule.name,
            encounterType: 'ANC Cluster Incharge',
            earliestDate: visitDate,
            maxDate: maxVisitDate
        });
    }

};
if (allEnc.length==0){
  let enrolmentHighRisk = programEnrolment.getObservationValue('High Risk');
        let maxDateOffset = 15;
        if (enrolmentHighRisk) {
            maxDateOffset = 8;
            scheduleANCClusterInchargeVisits();
        }

       scheduleBuilder.add({
            name: 'ANC 1',
            encounterType: 'ANC',
            earliestDate: getEarliestDate(programEnrolment),
            maxDate: imports.moment(getEarliestDate(programEnrolment)).add(maxDateOffset, 'days').toDate()
        });
     } 
     
        scheduleBuilder.add({
            name: 'ANC - Saheli 1',
            encounterType: 'ANC - Saheli',
            earliestDate: getEarliestDate(programEnrolment),
            maxDate: imports.moment(getEarliestDate(programEnrolment)).add(7, 'days').toDate()
        });

  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}