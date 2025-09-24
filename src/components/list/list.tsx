import React from 'react'
import { GuideButton, GuideButtonTd, GuideSection, GuideTable, GuideTd, GuideTh, GuideThead } from '.'

export interface Guide {
  guide: string;
  origin: string;
  destiny: string;
  addressee: string;
  date: string;
  state: string;
}

 export interface Props {
        guides: Guide[];       
        onUpdate: (index: number) => void;
        onDelete: (index: number) => void;
    }

const List: React.FC<Props> = ({guides, onUpdate, onDelete}) => {

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