import React from "react";

// List to create combo box for select Requisition form components
function lazyLoad(path: string){
    return React.lazy(()=> import (`${path}`))
}
const RequisitionsList = [
    { component: lazyLoad('./forms/third-party-requisition-01/requisition'), id: "form01", text: "Requisition Alpha"},
    { component: lazyLoad('./forms/third-party-requisition-02/requisition'), id: "form02", text: "Requisition Bravo"},    
    { component: lazyLoad('./forms/third-party-requisition-03/requisition'), id: "form03", text: "Requisition Charlie"},    
    { component: lazyLoad('./forms/third-party-requisition-04/requisition'), id: "form04", text: "Requisition Delta"},    
    { component: lazyLoad('./forms/third-party-requisition-05/requisition'), id: "form05", text: "Requisition Eco"},    
    { component: lazyLoad('./forms/third-party-requisition-06/requisition'), id: "form06", text: "Requisition Foxtrot"},    
    { component: lazyLoad('./forms/third-party-requisition-07/requisition'), id: "form07", text: "Requisition Golf"},    
    { component: lazyLoad('./forms/third-party-requisition-08/requisition'), id: "form08", text: "Requisition Hotel"},    
    { component: lazyLoad('./forms/third-party-requisition-09/requisition'), id: "form09", text: "Requisition India"},    
    { component: lazyLoad('./forms/third-party-requisition-10/requisition'), id: "form10", text: "Requisition Juliet"},    
]

export default RequisitionsList
