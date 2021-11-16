import { useState , useEffect , useContext , createContext } from 'react'

const UserData = createContext()

export const useUser = () => useContext(UserData)

export const UserInfoProvider = (props) => {
    const [user , setUser] = useState({
        isLoggedIn : false ,

    })

    return (
        <UserData.Provider value={[user,setUser]}>
            {props.children}
        </UserData.Provider>
    )
}