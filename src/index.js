import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components'
import { ThemeProvider } from './context/ThemeProvider';
import { CurrentSelectionProvider } from './context/CurrentSelectionProvider';
import { UserInfoProvider } from "./context/UserInfoProvider"
import { ChakraProvider } from '@chakra-ui/react';
import "./style.css"
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <UserInfoProvider>
        <ThemeProvider>
          <CurrentSelectionProvider>
            <App />
          </CurrentSelectionProvider>
        </ThemeProvider>
      </UserInfoProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

