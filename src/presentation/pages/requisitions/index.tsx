import React, { Suspense, useState } from "react";
import requisitionsList from '@/presentation/pages/requisitions/requisitionsList'
import Styles from './home-styles.scss'

const RequisitionIndex: React.FC = () => {    
    const [ComponentSelected, setComponentSelected]  = useState(null)
    const renderPage = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        const form = requisitionsList.find((item) => item.id == event.target.value).component
        setComponentSelected(form)                
    }
    return (
        <>
            <div className={Styles.home}>                
                Aqui entra o conteudo fixo da pagina principal de requisições                
            </div>
            <select name="page-select" onChange={renderPage}>                
                <option value="">Selecione</option>
                {
                    requisitionsList.map(item =>(
                        <option value={item.id}>{item.text}</option>
                    ))
                }                
            </select> 
            {ComponentSelected &&
                <Suspense fallback={<div>Loading</div>}>
                    <ComponentSelected/>
                </Suspense>
            }
        </>
    )
}

export default RequisitionIndex