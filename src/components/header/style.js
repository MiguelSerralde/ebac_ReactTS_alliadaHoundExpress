import styled from "styled-components"
import Theme from "../../theme/index"

const HeaderContainer = styled.header `
    display: flex;    
    justify-content: space-between;
    align-items: center;
    background-color: ${props => Theme.colors.colorDark};    
    color: ${props => Theme.colors.colorLight};
    padding: 1rem 2rem;
`

const HeaderLogoContainer = styled.div `
    display: flex;
`

const Logo = styled.img `
    width: 40px;
    height: 40px;
    margin: 5px;
`

const HeaderTittle = styled.h1 `
    padding: 0;
    margin: 0;
`

const NavList = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
`

const NavItem = styled.li `
    margin-left: 20px;
`

const NavLink = styled.a `
    color: $color-light;
            text-decoration: none;

            &:hover {                
                text-decoration: underline;
                cursor: pointer;               
            }
`

export {
    HeaderContainer,
    HeaderLogoContainer,
    Logo,
    HeaderTittle,
    NavList,
    NavItem,
    NavLink
}