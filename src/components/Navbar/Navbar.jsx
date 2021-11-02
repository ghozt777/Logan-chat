import { useState } from "react"
import { Fade } from "react-reveal" 
import Logo from "../../assets/logo.svg"
import SettingsLogo from "../../assets/settings.png"
import NotificationLogo from "../../assets/notification.png"
import DataLogo from "../../assets/data.png"
import ThemeLogo from "../../assets/theme.png"
import PrivacyLogo from "../../assets/privacy.png"
import { useSelect } from "../../context/CurrentSelectionProvider"
import "./style.css"
import { useTheme } from "../../context/ThemeProvider"
import { RiArrowDropDownLine } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"
import { FiSettings } from "react-icons/fi"
import { BsPersonFill } from "react-icons/bs" 
import { BsFillChatLeftQuoteFill } from "react-icons/bs"


export const Navbar = () => {
    const [isOpen , setIsOpen] = useState(true)
    const [selected , setSelected] = useState('chats')
    const [theme, ] = useTheme()
    const [ , setSelect] = useSelect() 
    return(
        <nav className={isOpen ? `nav__container ${theme}` : `nav__container ${theme} close`}>
            <div className={`header nav-item ${theme}`}>
                <RiArrowDropDownLine onClick={() => setIsOpen(p => !p)} className={isOpen ? `nav-icon open ${theme}` : `nav-icon ${theme}`}/>
                <Fade>
                    <h1 className = "header-text">{isOpen ? "Telegram" : "TG"}</h1>
                </Fade>
                <img src={Logo} alt="telegram-clone" className="logo"/>
            </div>
            {
                selected === 'chats' && <Chat isOpen = {isOpen} theme = {theme}/>
            }
            {
                selected === "account" && <Account theme={theme}/>
            }
            {
                selected === "settings" && <Settings setSelect = {setSelect} theme = {theme} />
            }
            <div className={`controls nav-item ${theme}`}>
                <FiSettings size="1x" className="ctrl-icon" onClick={() => {setSelected("settings")
                setSelect({curr: "settings" , sub: null})
            }} /> 
                <BsPersonFill size='1x' className = 'ctrl-icon' onClick={() => {setSelected("account")
                setSelect({curr: "account" , sub: null})
            }} />
                <BsFillChatLeftQuoteFill size = '1x' className = 'ctrl-icon' onClick={() => {
                    setSelected("chats")
                    setSelect({curr: "chats" , sub: null})
                }} />
            </div>
        </nav>
    )
}

function Chat(props) {
    return(
        <section className = 'chat-section'>
            <div className={`search-box nav-item ${props.theme}`}>
                <input 
                    type="text" 
                    className={props.isOpen ? `search ${props.theme}` : `search closed ${props.theme}`}
                    placeholder = "search"
                />
                <FiSearch className={`search-icon ${props.theme}`} />
                {
                    !props.isOpen && <small className={`nav-text ${props.theme}`}>search</small>
                }
            </div>
        </section>
    )
}


function Account(props) {
    return(
        <section className="account-section">
            <h1>Test</h1>
        </section>
    )
}


function Settings(props) {
    return(
        <section className={`settings-section ${props.theme}`}>
            <div className="general nav-item" onClick={() => {
                props.setSelect({curr: "settings" , sub: "general"})
            }}>
                <img className="settings-logo" src={SettingsLogo} alt="gs" />
                <small className={`set-text ${props.theme}`}>General</small>
            </div>
            <div className="general nav-item" onClick={() => {
                props.setSelect({curr: "settings" , sub: "notifications"})
            }}>
                <img className="settings-logo" src={NotificationLogo} alt="gs" />
                <small className={`set-text ${props.theme}`}>Notifications</small>
            </div>
            <div className="general nav-item" onClick={() => {
                props.setSelect({curr: "settings" , sub: "data"})
            }}>
                <img className="settings-logo" src={DataLogo} alt="gs" />
                <small className={`set-text ${props.theme}`}>Data and Storage</small>
            </div>
            <div className="general nav-item" onClick={() => {
                props.setSelect({curr: "settings" , sub: "appearence"})
            }}>
                <img className="settings-logo" src={ThemeLogo} alt="gs" />
                <small className={`set-text ${props.theme}`}>Appearence</small>
            </div>
            <div className="general nav-item" onClick={() => {
                props.setSelect({curr: "settings" , sub: "privacy"})
            }}>
                <img className="settings-logo" src={PrivacyLogo} alt="gs" />
                <small className={`set-text ${props.theme}`}>Privacy and Security</small>
            </div>
        </section>
    )
}