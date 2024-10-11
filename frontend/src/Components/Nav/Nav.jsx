import React from 'react'
import './Nav.css'
import logout_icon from '../Img/logout.png'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('auth-token')
    navigate('/Cred')
    window.location.reload(false)
  }

  const handleNavLinkClick = () => {
    document.getElementById('nav-check').checked = false
  }

  return (
    <div id="Nav">
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="logout_container">
            {/* <button className="logout_button" onClick={handleLogout}>
              Logout
            </button> */}
            {/* <img
              src={logout_icon}
              alt="Logout"
              className="logout_icon"
              onClick={handleLogout}
            /> */}
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
        <div className="nav-links">
          <NavLink to="/" onClick={handleNavLinkClick}>
            About
          </NavLink>
          <NavLink to="/Ticket" onClick={handleNavLinkClick}>
            Ticket
          </NavLink>
          <NavLink to="/About" onClick={handleNavLinkClick}>
            About
          </NavLink>
          <NavLink to="/Profile" onClick={handleNavLinkClick}>
            Profile
          </NavLink>
          {/* <NavLink to="/Contact" onClick={handleNavLinkClick}>
            Contact
          </NavLink> */}
        </div>
      </div>
    </div>
  )
}

export default Nav
