import React from 'react'
import { GuideButton, GuideButtonTd, GuideSection, GuideTable, GuideTd, GuideTh, GuideThead } from '.'

const List = () => {
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
                            <GuideButton>Actualizar</GuideButton>
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
                </tbody>
            </GuideTable>            
        </GuideSection>
        
    </>
  )
}

export default List