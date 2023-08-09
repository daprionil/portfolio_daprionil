import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import ContainerApp from './components/ContainerApp.jsx'

import 'react-tooltip/dist/react-tooltip.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <ContainerApp>
        <App />
      </ContainerApp>
    </BrowserRouter>
  </React.StrictMode>,
)
