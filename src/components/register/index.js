import styled from "styled-components"
import Themes from "../../theme/index"

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
    font-weight: bold;
`

export {
    BannerSection,
    FormSection,
    TitleH2,
    ContainerForm,
    InputForm
}