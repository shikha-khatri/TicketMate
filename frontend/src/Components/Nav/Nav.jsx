import React from 'react'
import './Nav.css';
import tck_logo from '../Img/tck_logo.png';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <div id='Nav'>
      {/* <div classNameName='Nav'>
            <ul>
                <li>
                 <NavLink to="/"> Home</NavLink>
                </li>
                <li>
                <NavLink to="/Tickets"> Tickets</NavLink>
                </li>
                <li>
                <NavLink to="/Profile"> Profile</NavLink>
                </li>
                <li>
                <NavLink to="/About"> About</NavLink>
                </li>
            </ul>
        </div> */}

      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
          {/* <img src={tck_logo} /> */}
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/Ticket" >Tickets</NavLink>
          <NavLink to="/Profile" >Profile</NavLink>
          <NavLink to="/About" >About</NavLink>
          {/* <a href="https://codepen.io/jo_Geek/" target="_blank">Profile</a> */}
          {/* <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a> */}
        </div>
      </div>

    </div>
  )
}

export default Nav