import { useState , createContext , useContext } from "react"

const Select = createContext()

export const useSelect = () => useContext(Select)

export const CurrentSelectionProvider = props => {
    const [curr , setCurr] = useState(null)
    return(
        <Select.Provider value={[curr , setCurr]}>
            {props.children}
        </Select.Provider>
    )
}