import React from 'react'
import { BannerSection, ContainerForm, FormButton, FormSection, InputForm, StateSelect, TitleH2 } from './index.js'

const Register = () => {
  return (
    <>
      <BannerSection>
        <div className="banner__content">
            <h2 className="banner__title">Registro de Guías</h2>
            <p className="banner__slogan">"Tu envío, siempre bajo control"</p>      
        </div>
      </BannerSection>      
      <FormSection id='Register'> 
        <TitleH2>Registro de Nueva Guía</TitleH2>        
        <ContainerForm id='frmRegister'>
            <label><b>Número de Guía</b></label>
            <InputForm required type='text'/>            

            <label><b>Origen</b></label>
            <InputForm required type='text'/>            

            <label><b>Destino</b></label>
            <InputForm required type='text'/>            

            <label><b>Destinatario</b></label>
            <InputForm required type='text'/>            

            <label><b>Fecha de registro</b></label>
            <InputForm required type='date'/>            

            <label><b>Estado</b></label>            
            <StateSelect required>
                <option value="Pendiente">Pendiente</option>
                <option value="Transito">En tránsito</option>
                <option value="Entregado">Entregado</option>       
            </StateSelect>    
            <FormButton>Registrar Guia</FormButton>                                
        </ContainerForm>
      </FormSection>      
    </>
  )
}
export default Register