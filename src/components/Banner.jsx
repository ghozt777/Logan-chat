import styled from 'styled-components'
import { useTheme } from '../context/ThemeProvider'
const Nav = styled.nav`
    height: 7% ;
    width: 98% ;
    margin: 12px auto ;
    display: flex ;
    justify-content: center ;
    align-items: center ; 
    border-radius: 10px ;
    transition: 350ms ;
    background-color: ${props => props.theme === 'dark' ? "#2EA6FF" : "#1F2937"} ;
    box-shadow: ${props => props.theme === 'light' ? '0px 6px 4px 0px #9CA3AF' : '0px 6px 4px 0px #1a2632'} ;
`  

const Text = styled.h1`
    font-size: 0.8rem ;
    font-weight: bold ;
    color: white ;
`

export const Banner = (props) => {
    const [theme , ] = useTheme()
    return(
        <Nav theme = {theme} >
            <Text>{props.title}</Text>
        </Nav>
    )
}