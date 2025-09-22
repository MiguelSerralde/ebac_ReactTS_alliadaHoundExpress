import styled from "styled-components"
import Themes from "../../theme/index"
import { css } from "styled-components"

const formElementStyles = css`
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;

    &:hover {
        border: 1px solid black;
  } 
`

const BannerSection = styled.section `    
    background: ${props => Themes.colors.colorPrimary};
    color: white;
    text-align: center;
    padding: 1rem; 
`

const FormSection = styled.section`
    background: white;
    padding: 2rem;
    margin: auto;
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`

const TitleH2 = styled.h2`
    text-align: center;
`

const ContainerForm = styled.form`
    display: grid;
    gap: 1rem;
`

const InputForm = styled.input `
    ${formElementStyles};
`

const StateSelect = styled.select`
    ${formElementStyles};   
`

const FormButton = styled.button `
    background: ${props => Themes.colors.colorDark};
    color: ${props => Themes.colors.colorBody};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;        
    }
`

export {
    BannerSection,
    FormSection,
    TitleH2,
    ContainerForm,
    InputForm, 
    StateSelect,
    FormButton
}