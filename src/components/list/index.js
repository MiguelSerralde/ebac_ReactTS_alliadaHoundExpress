import styled, { css } from "styled-components"
import Themes from "../../theme/index"

const GuideElementes = css `
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    text-align: center;
`


const GuideSection = styled.section`
    padding: 1rem;
`

const GuideTable = styled.table `
    width: 100%;
    border-collapse: collapse;
    background: white;   
    border-radius: 10px;          
    overflow: hidden;   
`

const GuideThead = styled.thead `
    background-color: ${props => Themes.colors.colorPrimary};
    color: ${props => Themes.colors.colorBody};
`

const GuideTh = styled.th `
    ${GuideElementes};
`

const GuideTd = styled.td`
    ${GuideElementes}
`

const GuideButtonTd = styled.td `
    ${GuideElementes};
    gap: 10px;
    display: flex;
    justify-content: center;    
    
`

const GuideButton = styled.button`
    background: ${props => Themes.colors.colorPrimary};
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
    GuideSection,
    GuideTable,
    GuideThead,
    GuideTh,
    GuideTd,
    GuideButton,
    GuideButtonTd
}