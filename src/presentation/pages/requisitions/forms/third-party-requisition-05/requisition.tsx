import React from "react";

const RequisitionEco: React.FC = () =>{
    return(
        <>
        <h1>Requisição criada pelo time Eco</h1>
        <label>Campo de seleção:</label> <br/> 
        <select name="page-select">
            <option value="1">Opção 1</option>
            <option value="2">Opção 2</option>
        </select>  <br/> <br/>
        <label>Campo de data:</label><br/>
        <input type="date"/><br/> <br/>
        <label>Campo de texto:</label> <br/>
        <input type="text" placeholder="Digite seu texto"/><br/> <br/>
        <label>Campo de texto:</label> <br/>
        <input type="text" placeholder="Digite seu texto"/><br/> <br/>            
        <label>Campo de texto:</label> <br/>
        <input type="text" placeholder="Digite seu texto"/><br/> <br/>
        <label>Campo de texto:</label> <br/>
        <input type="text" placeholder="Digite seu texto"/><br/> <br/>        
        <label>Campo de área de texto:</label> <br/> 
        <textarea></textarea>              
    </>
    )
}

export default RequisitionEco