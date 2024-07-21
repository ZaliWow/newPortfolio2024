import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { VariablesDictionaryContextProvider } from './context/VariablesDictionary.jsx'
import { FilterProjectsProvider} from './context/FilterProjects.jsx'
import { ApiStatusProvider } from './context/ApiStatus.jsx'
import { FilterToolsProvider } from './context/FilterTools.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <VariablesDictionaryContextProvider>
    <ApiStatusProvider>
      <FilterToolsProvider>
    <FilterProjectsProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
    </FilterProjectsProvider>
    </FilterToolsProvider>
    </ApiStatusProvider>
  </VariablesDictionaryContextProvider>

)
