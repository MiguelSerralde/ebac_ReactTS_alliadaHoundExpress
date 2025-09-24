import React, { useState } from 'react'
import List  from "../../components/list/list.tsx"
import { BannerSection, ContainerForm, FormButton, FormSection, InputForm, StateSelect, TitleH2 } from './index.js'
import { MessageGudeRepeatP, MessageP } from '../list/index.js'


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
  const [ message, setMessage] = useState<String>("")
  const [ repeatGuide, setRepeatGuide] = useState<String>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]:value
    })
  }

  const handelUpdate = (index: number) => {
    
    setGuides((prev) =>
        prev.map((g, i) => {          
          if (i !== index) return g

          let newState = g.state          
          let newDate = new Date()
          const day = String(newDate.getDate()).padStart(2, '0');
          const month = String(newDate.getMonth() + 1).padStart(2, '0');
          const year = newDate.getFullYear();
          let currentDate = `${year}-${month}-${day}`
          
          if(newState === "Pendiente") {
            newState = "Transito"            
          } else {
            if(newState === "Transito")  newState = "Entregado"
          }

          return {...g, state: newState, date: currentDate}
      }
    ))
  }

  const handleDelete = (index: number) => {
    setGuides((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const exists = guides.some(g => g.guide === form.guide)
    if(exists) {      
      setRepeatGuide("Guia registrada anteriormente")
      setTimeout(() => setRepeatGuide(""), 2000)
      return
    } 
    
    setMessage("Guia Registrada con exito")
    
    setGuides([...guides, form])
    setForm({
      guide: "",
      origin: "",
      destiny: "" , 
      addressee: "",
      date: "", 
      state: "Pendiente"
    })    

    setTimeout(() => setMessage(""), 2000)
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
              type='number'
              name='guide'
              pattern="[0-9]"
              value={form.guide}
              onChange={handleChange}
              />
              {repeatGuide && <MessageGudeRepeatP>{repeatGuide}</MessageGudeRepeatP>}            

            <label><b>Origen</b></label>
            <InputForm required 
              type='text'
              name='origin'
              value={form.origin}
              onChange={handleChange}/>            

            <label><b>Destino</b></label>
            <InputForm required 
              type='text'
              name='destiny'
              value={form.destiny}
              onChange={handleChange}/>            

            <label><b>Destinatario</b></label>
            <InputForm required 
              type='text'
              name='addressee'
              value={form.addressee}
              onChange={handleChange}/>            

            <label><b>Fecha de registro</b></label>
            <InputForm required 
              type='date'
              name='date'
              value={form.date}
              onChange={handleChange}/>            

            <label><b>Estado</b></label>            
            <StateSelect required
              name='state'
              value={form.state}
              onChange={handleChange}>
                <option value="Pendiente">Pendiente</option>
                <option value="Transito">En tránsito</option>
                <option value="Entregado">Entregado</option>       
            </StateSelect>    
            <FormButton type='submit'>Registrar Guia</FormButton>                                
        </ContainerForm>
      </FormSection>    
      {message && <MessageP>{message}</MessageP>}
      <List guides={guides} onUpdate={handelUpdate} onDelete={handleDelete}/>
    </>
  )
}
export default Register