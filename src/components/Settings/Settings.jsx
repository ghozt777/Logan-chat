import { useSelect } from "../../context/CurrentSelectionProvider"
import { useTheme } from "../../context/ThemeProvider"
import styled from "styled-components"
import { Toggle } from "./Toggle"

const Wrapper = styled.div`
    height: 100% ;
    width: 100% ;
`

export const Settings = () => {
    const [curr , ] = useSelect() 
    return(
        <Wrapper>
            {
                !curr.sub ? (
                    <small>NT</small>
                ) : (
                    <div style={{height: "100%" , width : "100%"}}>
                        {
                            curr.sub === "appearence" && <Theme />
                        }
                    </div>
                )
            }
        </Wrapper>
    )
}

function Theme(props){
    const [theme , setTheme] = useTheme()
    return(
        <div style={{height: "100%" , width: "100%"}}>
	        <Toggle cb = {e => {
                if(e.target.checked) setTheme("dark")
                else setTheme("light")
            }} value={theme === "dark" }/>
        </div>
    )
}