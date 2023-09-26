import './Travel.css';
import React from 'react'
import Buyorsell from '../../mini_comp/Buyrorsell/Buyorsell';
import { NavLink } from 'react-router-dom';
// import tvl_bus from '../../Img/travel_bus.jfif';
// import tvl_train from '../../Img/travel_train.jpg'
// import tvl_taxi from '../../Img/travel_taxi.png';
import tvl_bus from '../../Img/travel_bus.jfif';
import tvl_train from '../../Img/travel_train.jpg';
import tvl_taxi from '../../Img/travel_taxi.png';

const Travel = () => {
  return (
    <div>
  <div className='buy_tck'>
           <ul className='buy_tck_source'>
            <li>
            <NavLink to='/Ticket/Travel/Bus'>
            <img src={tvl_bus} />
            </NavLink>
            </li>
            <li>
            <NavLink to='/Ticket/Travel/Train'>
            <img src={tvl_train} />

            </NavLink>
            </li>
            <li>
            <NavLink to='/Ticket/Travel/Taxi'>
            <img src={tvl_taxi} />

            </NavLink>
            </li>
           </ul>
        </div>
    </div>
  )
}

export default Travel