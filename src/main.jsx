import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { VariablesDictionaryContextProvider } from './context/VariablesDictionary.jsx'
import { FilterProjectsProvider} from './context/FilterProjects.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <VariablesDictionaryContextProvider>
    <FilterProjectsProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
    </FilterProjectsProvider>
  </VariablesDictionaryContextProvider>

)
