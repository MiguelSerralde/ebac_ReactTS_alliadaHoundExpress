import React, { useState } from 'react'
import List, { Guide } from "../../components/list/list.tsx"
import { BannerSection, ContainerForm, FormButton, FormSection, InputForm, StateSelect, TitleH2 } from './index.js'

const Register = () => {

  const [form, setForm] = useState({
    guide: "",
    origin: "",
    destiny: "" , 
    addressee: "",
    date: "", 
    state: "Pendiente"
  })

  const [guides, setGuides] = useState<Guide[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]:value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setGuides([...guides, form])
    setForm({
      guide: "",
      origin: "",
      destiny: "" , 
      addressee: "",
      date: "", 
      state: "Pendiente"
    })
      
  }

  return (
    <>
      <BannerSection>
        <div className="banner__content">
            <h2 className="banner__title">Registro de Guías</h2>
            <p className="banner__slogan">"Tu envío, siempre bajo control"</p>      
        </div>
      </BannerSection>      
      <FormSection id='Register' onSubmit={handleSubmit}> 
        <TitleH2>Registro de Nueva Guía</TitleH2>        
        <ContainerForm id='frmRegister'>
            <label><b>Número de Guía</b></label>
            <InputForm required 
              type='text'
              name='guide'
              onChange={handleChange}
              />            

            <label><b>Origen</b></label>
            <InputForm required 
              type='text'
              name='origin'
              onChange={handleChange}/>            

            <label><b>Destino</b></label>
            <InputForm required 
              type='text'
              name='destiny'
              onChange={handleChange}/>            

            <label><b>Destinatario</b></label>
            <InputForm required 
              type='text'
              name='addressee'
              onChange={handleChange}/>            

            <label><b>Fecha de registro</b></label>
            <InputForm required 
              type='date'
              name='date'
              onChange={handleChange}/>            

            <label><b>Estado</b></label>            
            <StateSelect required
              name='state'
              onChange={handleChange}>
                <option value="Pendiente">Pendiente</option>
                <option value="Transito">En tránsito</option>
                <option value="Entregado">Entregado</option>       
            </StateSelect>    
            <FormButton type='submit'>Registrar Guia</FormButton>                                
        </ContainerForm>
      </FormSection>    
      <List guides={guides}/>
    </>
  )
}
export default Register