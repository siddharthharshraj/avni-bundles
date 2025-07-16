{
  "uuid": "0d75bf7f-8296-4e28-84ab-4d629eb6462f",
  "settings": {
    "languages": [
      "gu_IN",
      "en"
    ],
    "customRegistrationLocations": [],
    "saveDrafts": false,
    "searchFilters": [
      {
        "type": "Name",
        "widget": "Default",
        "titleKey": "Name",
        "subjectTypeUUID": "2eaf9457-4cb5-4027-a9dc-6027948a30ba"
      },
      {
        "type": "Age",
        "widget": "Default",
        "titleKey": "Age",
        "subjectTypeUUID": "2eaf9457-4cb5-4027-a9dc-6027948a30ba"
      },
      {
        "type": "Address",
        "widget": "Default",
        "titleKey": "Address",
        "subjectTypeUUID": "2eaf9457-4cb5-4027-a9dc-6027948a30ba"
      },
      {
        "type": "SearchAll",
        "widget": "Default",
        "titleKey": "SearchAll",
        "subjectTypeUUID": "2eaf9457-4cb5-4027-a9dc-6027948a30ba"
      }
    ],
    "hideTotalForProgram": false,
    "myDashboardFilters": [
      {
        "type": "Address",
        "widget": "Default",
        "titleKey": "Address",
        "subjectTypeUUID": "9f2af1f9-e150-4f8e-aad3-40bb7eb05aa3"
      }
    ]
  },
  "worklistUpdationRule": "({params, imports}) => {
    const workLists = params.workLists;
    const context = params.context;
    const RuleCondition = imports.rulesConfig.RuleCondition;
    const WorkItem = imports.models.WorkItem;
    
    //Move mother PNC encounter to the end, and insert registration and enrolment of child.
    const delivery = (workLists) => {
        const currentWorkList = workLists.currentWorkList;
        //console.log('workLists delivery',workLists);
         //console.log('currentWorkList delivery',currentWorkList);
         
        //Remove ANC scheduled visits if any
        const positionOfANC = _.findIndex(currentWorkList.workItems,
            (workItem) => workItem.type === WorkItem.type.PROGRAM_ENCOUNTER && workItem.parameters.encounterType === "ANC" ); 
           
          // console.log('positionOfANC',positionOfANC);
        if (positionOfANC !== -1) {
            currentWorkList.workItems.splice(positionOfANC, 1);
        }
        
        //ANC Cluster Incharge
        const positionOfANCCluster = _.findIndex(currentWorkList.workItems,
            (workItem) => workItem.type === WorkItem.type.PROGRAM_ENCOUNTER &&  workItem.parameters.encounterType === "ANC Cluster Incharge" ); 
           //console.log('positionOfANCCluster',positionOfANCCluster);
        if (positionOfANCCluster !== -1) {
            currentWorkList.workItems.splice(positionOfANCCluster, 1);
        }

let splicePosition = currentWorkList.findWorkItemIndex(currentWorkList.currentWorkItem.id) + 1;

 const programEncounter = context.entity;
const ruleCondition = new RuleCondition({programEncounter}).when
.valueInEncounter("Delivery outcome").containsAnswerConceptName('Live Birth');

console.log('ruleCondition',ruleCondition.matches());
     if(ruleCondition.matches())
        currentWorkList.workItems.splice(
            splicePosition,
            0,
            new WorkItem("27b873ad-063e-4f18-a534-f8367de917b5", WorkItem.type.REGISTRATION, {
                subjectTypeName: "Individual",
                saveAndProceedLabel: "registerAChild"
            }),
            new WorkItem("95796c7b-cb70-48f5-893f-c0c8afbc3785", WorkItem.type.PROGRAM_ENROLMENT, {
                programName: "Child"
            })
        );
        console.log('return workLists',workLists);
        //console.log('currentWorkList',currentWorkList);
        return workLists;
    };

    const programEncounter = (workLists) => {
        const currentWorkItem = workLists.getCurrentWorkItem();       
        switch (currentWorkItem.parameters.encounterType) {
            case "Delivery Form": {
                return delivery(workLists);
            }
            default: {
                return workLists;
            }
        }
    };

    const main = () => {
        const currentWorkItem = workLists.getCurrentWorkItem();
        if (currentWorkItem.type === WorkItem.type.PROGRAM_ENCOUNTER) {
           // console.log('workLists',workLists);
           programEncounter(workLists);
        }
        return workLists;
    };

    return main();

};"
}