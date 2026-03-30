   import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Books from './pages/Books.jsx'
import Longues from './pages/Longues.jsx'
import Seat from './pages/Seat.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/books" element={<Books />} />
      <Route path="/longues" element={<Longues />} />
      <Route path="/seat" element={<Seat />} />
    </Routes>
  </BrowserRouter>
)
