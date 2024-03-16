import React from 'react'

import './App.css'

import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

import RoomPage from './pages/Room'
const App = () => {



  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/room/:roomId" element={<RoomPage/>}/>
    </Routes>
  )
}

export default App

