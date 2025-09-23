import React from 'react'
import { GuideButton, GuideButtonTd, GuideSection, GuideTable, GuideTd, GuideTh, GuideThead } from '.'


 export interface Props {
        guides: Guide[];       
        onUpdate: (index: number) => void;
        onDelete: (index: number) => void;
    }


const handleClick = () => {
    
    alert("Hi")
}

const List: React.FC<Props> = ({guides, onUpdate}) => {
       

  return (
    <>  
        <GuideSection>
            <h2>Lista de Guías</h2>
            <GuideTable>
                <GuideThead>
                    <tr>
                        <GuideTh>Número de Guía</GuideTh>
                        <GuideTh>Origen</GuideTh>
                        <GuideTh>Destino</GuideTh>
                        <GuideTh>Destinatario</GuideTh>
                        <GuideTh>Última Actualización</GuideTh>
                        <GuideTh>Estado Actual</GuideTh>
                        <GuideTh>Acciones</GuideTh>                    
                    </tr>
                </GuideThead>                
                
                <tbody >
                    <tr>
                        <GuideTd>12345</GuideTd>
                        <GuideTd>Ciudad A</GuideTd>
                        <GuideTd>Ciudad B</GuideTd>
                        <GuideTd>Miguel</GuideTd>
                        <GuideTd>2025-08-21</GuideTd>
                        <GuideTd>Pendiente</GuideTd>                        
                        <GuideButtonTd>
                            <GuideButton onClick={handleClick}>Actualizar</GuideButton>
                            <GuideButton>Eliminar</GuideButton>                            
                        </GuideButtonTd>                        
                    </tr>

                    <tr >
                        <GuideTd>54321</GuideTd>
                        <GuideTd>Ciudad C</GuideTd>
                        <GuideTd>Ciudad D</GuideTd>
                        <GuideTd>Leonel</GuideTd>
                        <GuideTd>2025-01-21</GuideTd>
                        <GuideTd>En tránsito</GuideTd>                        
                        <GuideButtonTd>
                            <GuideButton>Actualizar</GuideButton>
                            <GuideButton>Eliminar</GuideButton>
                        </GuideButtonTd>                        
                    </tr> 

                    {
                        guides.map((g, index) => (
                            <tr key={index}>
                                <GuideTd>{g.guide}</GuideTd>
                                <GuideTd>{g.origin}</GuideTd>
                                <GuideTd>{g.destiny}</GuideTd>
                                <GuideTd>{g.addressee}</GuideTd>
                                <GuideTd>{g.date}</GuideTd>
                                <GuideTd>{g.state}</GuideTd>
                                <GuideButtonTd>
                                    {g.state !== "Entregado" ? (
                                        <GuideButton onClick={()=> onUpdate(index)}>Actualizar</GuideButton>
                                    ):<></>
                                    }
                                   <GuideButton onClick={() => onDelete(index)}>Eliminar</GuideButton> 
                                </GuideButtonTd>
                            </tr>
                        ))
                    }
                </tbody>
            </GuideTable>            
        </GuideSection>
        
    </>
  )
}

export default List