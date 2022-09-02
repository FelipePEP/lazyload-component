import React from "react";

const RequisitionGolf: React.FC = () =>{
    return(
        <>
        <h1>Requisição criada pelo time Golf</h1>
        <label>Campo de data:</label><br/>
        <input type="date"/>            
        <br/> <br/>
        <label>Campo de seleção:</label> <br/> 
        <select name="page-select">
            <option value="1">Opção 1</option>
            <option value="2">Opção 2</option>
        </select>
        <br/> <br/>
        <label>Campo de área de texto:</label> <br/> 
        <textarea></textarea>  
    </>
    )
}

export default RequisitionGolf