import React from 'react'
import { HeaderContainer, HeaderLogoContainer, HeaderTittle, Logo, NavItem, NavLink, NavList } from './style.js'
import planetExpress from "../../img/planetExpress.jpg"

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderLogoContainer>
          <Logo src={planetExpress} alt=''/>   
          <HeaderTittle><strong>Aliada: </strong>Hound Express</HeaderTittle>                 
        </HeaderLogoContainer>        
        <nav className="header__nav nav">
          <NavList>
            <NavItem><NavLink>Inicio</NavLink></NavItem>
            <NavItem><NavLink>Registro</NavLink></NavItem>
            <NavItem><NavLink>Lista de Guias</NavLink></NavItem>
            <NavItem><NavLink>Buscar Guia</NavLink></NavItem>            
          </NavList>
          
        </nav>
    </HeaderContainer>    
  )
}

export default Header