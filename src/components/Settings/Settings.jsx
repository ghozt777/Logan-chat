import { useSelect } from "../../context/CurrentSelectionProvider"
import { useTheme } from "../../context/ThemeProvider"
import styled from "styled-components"

const Wrapper = styled.div`
    height: 100% ;
    width: 100% ;
`

export const Settings = () => {
    const [curr , ] = useSelect() 
    return(
        <Wrapper>
            
        </Wrapper>
    )
}

