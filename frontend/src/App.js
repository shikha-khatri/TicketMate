import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Ticket from './Components/Ticket/Ticket';
import About from './Components/About/About';
import Bus from './Components/Ticket/Travel/Bus/Bus';
import Travel from './Components/Ticket/Travel/Travel';

import Profile from './Components/Profile/Profile';
import Cred from './Components/Cred/Cred'

// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
function App() {

  return (
    <Bus>
     <>
     {localStorage.getItem('token') && <Nav />}
      <Routes>
        <Route path="/" element={localStorage.getItem('token') ? <Home /> : <Cred />}></Route>

        {localStorage.getItem('token') && <Route path="/about" element={<About />} />}
        <Route path="/cred" element={<Cred />} />
        {localStorage.getItem('token') && <Route path="/Ticket" element={<Ticket />} />}
        {localStorage.getItem('token') && <Route path='/Ticket/Travel' element={<Travel />} />}
        {localStorage.getItem('token') && <Route path='/Ticket/Travel/Bus' element={<Bus />} />}
        {localStorage.getItem('token') && <Route path='Profile' element={<Profile />} />}

      </Routes></>
    </Bus>
  );
}

export default App;
