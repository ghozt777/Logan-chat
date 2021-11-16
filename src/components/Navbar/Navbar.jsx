import "./style.css"
import { useState , useEffect } from "react"
import { Fade } from "react-reveal" 
import Logo from "../../assets/logo.svg"
import SettingsLogo from "../../assets/settings.png"
import DataLogo from "../../assets/data.png"
import ThemeLogo from "../../assets/theme.png"
import PrivacyLogo from "../../assets/privacy.png"
import { useTheme } from "../../context/ThemeProvider"
import { RiArrowDropDownLine } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"
import { FiSettings } from "react-icons/fi"
import { BsPersonFill } from "react-icons/bs" 
import { BsFillChatLeftQuoteFill } from "react-icons/bs"
import NotificationLogo from "../../assets/notification.png"
import { useSelect } from "../../context/CurrentSelectionProvider"
import { UpDownIcon , SettingsIcon , ChatIcon } from "@chakra-ui/icons"
import { VscPerson } from "react-icons/vsc"


export const Navbar = ({setIsOpen ,isOpen}) => {
    const [width , setWidth] = useState(window.innerWidth) 
    useEffect(() => {
        const handleResize = () => {setWidth(window.innerWidth); console.log(width)}
        window.addEventListener('resize' , handleResize)
        return () => window.removeEventListener('resize' , handleResize)   
    })
    return(
        <>
            {width > 700 ? <DesktopView setIsOpen={setIsOpen}  isOpen = {isOpen} /> : <MobileView />}
        </>
    )
}

function DesktopView({setIsOpen ,isOpen}) {
    const [selected , setSelected] = useState('chats')
    const [theme, ] = useTheme()
    const [ , setSelect] = useSelect()
    return(
        <nav className={isOpen ? `nav__container ${theme} open` : `nav__container ${theme} close`}>
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
                selected === "settings" && <Settings setSelect = {setSelect} theme = {theme} isOpen = {isOpen} />
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
                <small className={`set-text ${props.theme} ${props.isOpen ? "" : "hidden"}`}>General</small>
            </div>
            <div className="general nav-item" onClick={() => {
                props.setSelect({curr: "settings" , sub: "notifications"})
            }}>
                <img className="settings-logo" src={NotificationLogo} alt="gs" />
                <small className={`set-text ${props.theme} ${props.isOpen ? "" : "hidden"}`}>Notifications</small>
            </div>
            <div className="general nav-item" onClick={() => {
                props.setSelect({curr: "settings" , sub: "data"})
            }}>
                <img className="settings-logo" src={DataLogo} alt="gs" />
                <small className={`set-text ${props.theme} ${props.isOpen ? "" : "hidden"}`}>Data and Storage</small>
            </div>
            <div className="general nav-item" onClick={() => {
                props.setSelect({curr: "settings" , sub: "appearence"})
            }}>
                <img className="settings-logo" src={ThemeLogo} alt="gs" />
                <small className={`set-text ${props.theme} ${props.isOpen ? "" : "hidden"}`}>Appearence</small>
            </div>
            <div className="general nav-item" onClick={() => {
                props.setSelect({curr: "settings" , sub: "privacy"})
            }}>
                <img className="settings-logo" src={PrivacyLogo} alt="gs" />
                <small className={`set-text ${props.theme} ${props.isOpen ? "" : "hidden"}`}>Privacy and Security</small>
            </div>
        </section>
    )
}

function MobileView() {
    const [isOpen , setIsOpen] = useState('closed')
    const [theme , ] = useTheme()
    return(
        <div className = {`nav__container-mobile ${isOpen} ${theme}`}>
            <div className={`m-navitem-wrapper ${isOpen}`} >
                <div className="m-nav-item">
                    <UpDownIcon onClick = {() => setIsOpen(s => s === "closed" ? "open" : "closed")} w={4} h={4} color = {theme === 'light' ? 'black' : 'white'} />
                </div>
                <div className="m-nav-item">
                    <ChatIcon onClick = {() => console.log('to be added')} w={4} h={4} color = {theme === 'light' ? 'black' : 'white'} />
                </div>
                <div className="m-nav-item">
                    <VscPerson style={{height: "25px"}} size="1x" onClick = {() => console.log('to be added')} color = {theme === 'light' ? 'black' : 'white'} />
                </div>
                <div className="m-nav-item">
                    <SettingsIcon onClick = {() => console.log('to be added')} w={4} h={4} color = {theme === 'light' ? 'black' : 'white'} />
                </div>
            </div>
        </div>
    )
}