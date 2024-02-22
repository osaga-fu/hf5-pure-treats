import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CaritoApp } from './CaritoApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     <BrowserRouter>
    <React.StrictMode>
      <CaritoApp />
    </React.StrictMode>,
  </BrowserRouter>

    <App />
  </React.StrictMode>,
)
