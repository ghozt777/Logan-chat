import { Settings } from "../Settings/Settings"
import { useSelect } from "../../context/CurrentSelectionProvider"
import { useUser } from "../../context/UserInfoProvider"
import { Login } from '../Login/Login'
import { Banner } from "../Banner"
import './style.css'
export const Display = () => {
    const [curr , ] = useSelect() 
    const [user , ] = useUser()
    
    return(
        <section className = 'display'>
            {!user.isLoggedIn ? (<Login />) : (<></>)}
        </section>
    )
}

