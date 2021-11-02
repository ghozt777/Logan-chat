import { Settings } from "../Settings/Settings"
import { useSelect } from "../../context/CurrentSelectionProvider"
import styled from "styled-components"
const Wrapper = styled.div`
    height: 100% ;
    width: 100% ;
`
export const Display = () => {
    const [curr , ] = useSelect() 
    return(
        <div style={{height: "100%" , width: "70%" , margin: "auto" }}>
            <Wrapper>
                {
                    (!curr && <small> Nothing is selected </small>) 
                }
                {
                    // (curr.curr === "settings" && <Settings />) || (curr.curr === "settings" && <Settings />) 
                    (curr && curr.curr === "settings" && <Settings />) 
                }
            </Wrapper>
        </div>
    )
}

