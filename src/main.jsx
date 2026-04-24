import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './Context/UseContext.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <App />
    </ContextProvider>

)
