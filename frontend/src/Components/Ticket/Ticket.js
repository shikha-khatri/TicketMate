import React from 'react'
import { NavLink } from 'react-router-dom'
import t1 from '../Img/t1.jpg'
import m2 from '../Img/m2.jpg'
import s1 from '../Img/s1.jpg'
import c1 from '../Img/c1.jpg'
import './Ticket.css'

const Ticket = () => {
  return (
    <div id="Ticket">
      <div className="tck_type">
        <div className="tck_ind">
          <NavLink to="/Ticket/Travel">
            <img src={t1} alt="Travel" />
            <p className="img_txt">Travel</p>
          </NavLink>
        </div>
        <div className="tck_ind">
          <NavLink to="/Ticket/Concert">
            <img src={c1} alt="Concert" />
            <p className="img_txt">Concert</p>
          </NavLink>
        </div>
        <div className="tck_ind">
          <NavLink to="/Ticket/Movie">
            <img src={m2} alt="Movie" />
            <p className="img_txt">Movies</p>
          </NavLink>
        </div>
        <div className="tck_ind">
          <NavLink to="/Ticket/Sport">
            <img src={s1} alt="Sport" />
            <p className="img_txt">Sports</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Ticket
