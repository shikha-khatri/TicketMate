import React from 'react'
import { NavLink } from 'react-router-dom'
import t1 from '../Img/t1.jpg';
import m2 from '../Img/m2.jpg';
import s1 from '../Img/s1.jpg';
import c1 from '../Img/c1.jpg';
import './Ticket.css';

const Ticket = () => {
  return (
    <div id="Ticket">
      <div>Ticket</div>
      <div className='tck_type'>
        <ul>
          <li>
            <div className='tck_ind'>
            <NavLink to='/Ticket/Travel'>
             <img src= {t1}/>
             <p className='img_txt'>
              Travel
            </p>
            </NavLink>
            </div>
           
          </li>
          <li>
           <div className='tck_ind'>
           <NavLink to='/Ticket/Concert'> <img src= {c1}
            />
                 <p className='img_txt'>
              Concert
            </p>
            </NavLink>
           </div>
       
          </li>
          <li>
            <div className='tck_ind'>
            <NavLink to='/Ticket/Movie'> <img src= {m2}/>
            <p className='img_txt'>
              Movies
            </p></NavLink>
            </div>
          </li>
          <li>
           <div className='tck_ind'>
           <NavLink to='/Ticket/Sport'> <img src= {s1}/>
            <p className='img_txt'>
              Sports
            </p></NavLink>
           </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Ticket