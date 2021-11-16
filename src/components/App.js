import { Navbar } from "./Navbar/Navbar"
import { Display } from "./Display/Display"
import { useTheme } from "../context/ThemeProvider"
import styled from  "styled-components"
import { useState } from 'react'
const Wrapper = styled.div`
    background-color: ${props => props.theme === 'light' ? "#E5E7EB" : "#213040"} ;
    height: 100vh;
    width: 100vw ;
    display: flex ;
    @media (max-width: 700px){
        flex-direction: column ;
    }
`

const DispWrapper = styled.div`
    height: 100% ;
    width : ${props => props.isOpen ? "75%" : "85%"} ;
    @media (max-width: 700px){
        width: 100% ;
        height: 92% ;
    }
`
const App = () => {

    const [theme , ] = useTheme()
    const [isOpen , setIsOpen] = useState(true)
    return (
        <Wrapper theme = {theme} >
            <Navbar setIsOpen = {setIsOpen} isOpen = {isOpen} />
            <DispWrapper isOpen = {isOpen} >
                <Display />
            </DispWrapper>
        </Wrapper>
    )
}

export default App