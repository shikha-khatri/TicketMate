import logo from './logo.svg'
import './App.css'
import Nav from './Components/Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Ticket from './Components/Ticket/Ticket'
import About from './Components/About/About'
import Bus from './Components/Ticket/Travel/Bus/Bus'
import Travel from './Components/Ticket/Travel/Travel'
import Movee from './Components/movee/Movee.js'

import Profile from './Components/Profile/Profile'
import Cred from './Components/Cred/Cred'
import Grid from './Components/mini_comp/Grid/Grid'
import Concert from './Components/Ticket/Concert/Concert'
import Movies from './Components/Ticket/Movies/Movies'
import Sports from './Components/Ticket/Sports/Sports'
import TicketContext from './TicketContext/TicketContext'
import React from 'react'
import Creant from './Components/Creant/Creant'
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
function App() {
  return (
    <TicketContext.Provider>
      <>
        {/* {localStorage.getItem('token') && <Nav />} */}

        <Routes>
          <Route
            path="/"
            element={localStorage.getItem('token') ? <Home /> : <Cred />}
          ></Route>

          {localStorage.getItem('token') && (
            <Route path="/about" element={<About />} />
          )}
          {localStorage.getItem('token') && (
            <Route path="/task" element={<Movee/>} />
          )}
          <Route path="/cred" element={<Cred />} />
          {localStorage.getItem('token') && (
            <Route path="/Ticket" element={<Ticket />} />
          )}
          {localStorage.getItem('token') && (
            <Route path="/Ticket/Travel" element={<Travel />} />
          )}
          {localStorage.getItem('token') && (
            <Route path="/Ticket/Travel/Bus" element={<Bus />} />
          )}
          {localStorage.getItem('token') && (
            <Route path="Profile" element={<Profile />} />
          )}
          {localStorage.getItem('token') && (
            <Route path="/Ticket/Concert" element={<Concert />} />
          )}
          {localStorage.getItem('token') && (
            <Route path="/Ticket/Sport" element={<Sports />} />
          )}
          {localStorage.getItem('token') && (
            <Route path="/Ticket/Movie" element={<Movies />} />
          )}
          {localStorage.getItem('token') && (
            <Route path="Creant" element={<Creant />} />
          )}
        </Routes>
      </>
    </TicketContext.Provider>
  )
}

export default App
