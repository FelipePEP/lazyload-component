import React from "react";

const RequisitionCharlie: React.FC = () =>{
    return(
        <>
        <h1>Requisição criada pelo time Charlie</h1>
        <label>Campo de texto:</label> <br/>
            <input type="text" placeholder="Digite seu texto"/><br/> <br/>
            <label>Campo numérico:</label><br/>
            <input type="number" value='5'/><br/><br/>
        <label>Campo de seleção:</label> <br/> 
        <select name="page-select">
            <option value="1">Opção 1</option>
            <option value="2">Opção 2</option>
        </select>  <br/> <br/>
        <label>Campo de data:</label><br/>
        <input type="date"/>            
    </>
    )
}

export default RequisitionCharlie