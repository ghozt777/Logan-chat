import { useState , useEffect } from 'react'
import styled from 'styled-components'
import { 
    Input , 
    InputGroup , 
    InputLeftElement , 
    InputRightElement , 
    Button, 
    ButtonGroup,
} from '@chakra-ui/react'
import { Banner } from '../Banner'
import './style.css'
import { useTheme } from '../../context/ThemeProvider'
import { BiUserCircle } from "react-icons/bi"
import { BsUnlock , BsKey } from 'react-icons/bs'
const Wrapper = styled.div` 
    height: 100% ;
    width: 100% ;
`


export const Login = () => {
    const [theme , ] = useTheme()
    const [setupAccount , setSetupAccount] = useState(false)
    const [width , setWidth] = useState(window.innerWidth) 
    useEffect(() => {
        const handleResize = () => {setWidth(window.innerWidth); console.log(width)}
        window.addEventListener('resize' , handleResize)
        return () => window.removeEventListener('resize' , handleResize)   
    })
    return (
        <Wrapper>
            <Banner title = "Login" />
            <section className = 'credentials' >
                {
                    setupAccount ? (<></>) : 
                    (
                        <section className = 'login'>
                            <div className = 'credential-item'>
                                <img className = 'user-avatar' src="https://avatars.dicebear.com/api/micah/:srijan.svg" alt="user-logo" />
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents = "none"
                                        children = {<BiUserCircle />}
                                    />
                                    <Input 
                                        className = {`login-ip ${theme}`}
                                        variant="filled" 
                                        placeholder="username" 
                                    />
                                </InputGroup>
                            </div>
                            <div className="credential-item">
                                <BsKey className = 'icon' size = '1x' style={{color: theme === 'dark' ? 'white' : 'black'}}/>
                                <PasswordInput theme = {theme} width = {width}/>
                            </div>
                            <div className="credential-item">
                            <ButtonGroup spacing = '6' >
                                <Button
                                    size = {width > 700 ? "md" : "sm"}
                                    leftIcon = {<BsUnlock />}
                                    isLoading = {false}
                                    loadingText="Submitting"
                                    colorScheme="blue"
                                    variant="outline"
                                >Login
                                </Button>
                                <Button
                                    size = {width > 700 ? "md" : "sm"}
                                    colorScheme="blue"
                                    variant="solid"
                                    onClick = {() => setSetupAccount(true)}
                                >
                                Create Account
                                </Button>
                            </ButtonGroup>
                            </div>
                        </section>
                    )
                }
            </section>
        </Wrapper>
    )
}

function PasswordInput({theme , width}) {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size="md">
        <Input
          className = {`login-ip ${theme}`}
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button
            size = {width > 700 ? "sm" : "xs"} 
            h="1.75rem" 
            onClick={handleClick} 
            className = {`btn ${theme}`}
            >
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }