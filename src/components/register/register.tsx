import React from 'react'
import { BannerSection, ContainerForm, FormSection, TitleH2 } from './index.js'

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
            <input className="form__input" type="text" id="numero" name="numero" required></input>          
        </ContainerForm>
      </FormSection>      
    </>
  )
}

export default Register