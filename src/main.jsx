import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  ApiProvider  from "./context/ApiContext";
import {BrowserRouter} from "react-router-dom"
import  CarritoProvider  from "./context/CarritoContext.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarritoProvider>
        <ApiProvider> 
          <App/>
        </ApiProvider>
      </CarritoProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
