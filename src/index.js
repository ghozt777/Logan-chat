import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components'
import { ThemeProvider } from './context/ThemeProvider';
import { CurrentSelectionProvider } from './context/CurrentSelectionProvider';
import "./style.css"
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CurrentSelectionProvider>
        <App />
      </CurrentSelectionProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

