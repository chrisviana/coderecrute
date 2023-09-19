import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ExemploUseMemo from './ExemploUseMemo';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExemploUseMemo />
    <ToastContainer autoClose={3000} />
  </React.StrictMode>,
)
