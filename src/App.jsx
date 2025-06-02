// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './fonts/basic/boxicons.css'
import Main from './modules/Main.jsx'
import Info from './modules/Info.jsx'
import Login from './modules/LogUser.jsx'
import Registration from './modules/RegUser.jsx'
import Profile from './modules/Profile.jsx'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Main />}></Route>
          <Route path='info' element={<Info />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='registration' element={<Registration />}></Route>
          <Route path='Profile' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
  )
}
