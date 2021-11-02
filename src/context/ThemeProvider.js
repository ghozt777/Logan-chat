import { createContext , useContext , useState } from "react"

const ThemeData = createContext() 

export const useTheme = () => useContext(ThemeData)

export const ThemeProvider = props => {
    const [theme , setTheme] = useState('dark')
    return(
        <ThemeData.Provider value={[theme , setTheme]}>
            {props.children}
        </ThemeData.Provider>
    )
}