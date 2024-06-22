import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { VariablesDictionaryContextProvider } from './context/VariablesDictionary.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <VariablesDictionaryContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </VariablesDictionaryContextProvider>

)
