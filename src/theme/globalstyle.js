import { createGlobalStyle } from "styled-components"
import  Themes  from "../theme/index.js"

export const GlobalStyle = createGlobalStyle `
   body {
        font-family: "Segoe UI", sans-serif;        
        line-height: 1.6;
        background-color: ${props => Themes.colors.colorBody};
        color: ${props => Themes.colors.colorText };
        
    }
`