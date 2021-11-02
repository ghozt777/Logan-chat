import { Navbar } from "./Navbar/Navbar"
import { Display } from "./Display/Display"
import { useTheme } from "../context/ThemeProvider"
import styled from  "styled-components"
const Wrapper = styled.div`
    background-color: ${props => props.theme === 'light' ? "#E5E7EB" : "#213040"} ;
    height: 100vh;
    width: 100vw ;
    display: flex ;
`
const App = () => {
    const [theme , setTheme] = useTheme()

    return (
        <Wrapper theme = {theme} >
            <Navbar />
            <Display />
        </Wrapper>
    )
}

export default App