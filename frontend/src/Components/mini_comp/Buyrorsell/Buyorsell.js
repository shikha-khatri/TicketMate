import React, { useState } from 'react'
import './Buyorsell.css';

import { NavLink } from 'react-router-dom';


const Buyorsell = () => {
  const [Isbuy, setIsbuy] = useState(true);

  const OnclickBuy=()=>{
setIsbuy(true);

  }
  const OnclickSell=()=>{
    setIsbuy(false);
  }
  return (
    
    <div id='buyorsell'>
        <div className='buyorsell'>
             <ul>
                <li className={Isbuy?'active':'notactive'} onClick={OnclickBuy}>
                    Buy
                </li>
                <li className={Isbuy?'notactive':'active'} onClick={OnclickSell}>
                    Sell
                </li>
             </ul>
        </div>
       
    </div>
  )
}

export default Buyorsell