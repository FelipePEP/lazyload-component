import React from "react";

const RequisitionAlpha: React.FC = () =>{
    return(
        <>
            <h1>Requisição criada pelo time Alpha</h1>
            <label>Campo de texto:</label> <br/>
            <input type="text" placeholder="Digite seu texto"/><br/> <br/>
            <label>Campo numérico:</label><br/>
            <input type="number" value='5'/>            
        </>
    )
}

export default RequisitionAlpha