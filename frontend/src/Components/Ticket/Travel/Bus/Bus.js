import React, { useState } from 'react'
import './Bus.css';
import Buyorsell from '../../../mini_comp/Buyrorsell/Buyorsell';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import TicketContext from '../../../../TicketContext/TicketContext';




const Bus = (props) => {
    const navigate=useNavigate();
    const tickets_initial=[];
    const [total_tckts, settotal_tckts] = useState(tickets_initial);
    const [ticket_details,setticket_details] = useState({first_name:" a",last_name:" a",email:"a ",journey_from:"a ",journey_to:"a",bus_name:" a",bus_number:" a",bus_cont_no:" a",ticket_number:" a",pnr_number:"a "  })
    const [Isbuy, setIsbuy] = useState(false);

    const OnclickBuy = () => {
        setIsbuy(true);

    }
    const OnclickSell = () => {
        setIsbuy(false);
    }
  
    const onChange = (e) => {
        setticket_details({ ...ticket_details, [e.target.name]: e.target.value })
    }

    
  const save_handlesell = async (e) => {
    // SetEditable(false);
    e.preventDefault();
    const {first_name,last_name,email,journey_from,journey_to,bus_name,bus_number,bus_cont_no,ticket_number,pnr_number } = ticket_details;
    const response = await fetch(`http://localhost:5000/api/tickets/sellbusticket`, {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')

      } // body data type must match "Content-Type" header
      , body: JSON.stringify({ first_name:ticket_details.first_name,last_name:ticket_details.last_name,email:ticket_details.email,journey_from:ticket_details.journey_from,
        journey_to:ticket_details.journey_to,bus_name:ticket_details.bus_name,bus_number:ticket_details.bus_number,bus_cont_no:ticket_details.bus_cont_no,ticket_number:ticket_number,pnr_number :ticket_details.pnr_number})
    });
    const json = await response.json();
    // console.log(json);
    console.log(json)
    console.log(ticket_details);
    settotal_tckts(total_tckts.concat(ticket_details));
    navigate('/Profile');
   
   
  }
    return (
  <TicketContext.Provider value={{total_tckts ,settotal_tckts}}>
    {props.children}
          <div id='Bus'>
            <div className='Bus'>

                <div id='buyorsell'>
                    <div className='buyorsell'>
                        <ul>
                            <li className={Isbuy ? 'active' : 'notactive'} onClick={OnclickBuy}>
                                Buy
                            </li>
                            <li className={Isbuy ? 'notactive' : 'active'} onClick={OnclickSell}>
                                Sell
                            </li>
                        </ul>
                    </div>

                    <div className={Isbuy ? 'buy_data' : 'hide'}>
                        <h1>Buy</h1>
                    </div>
                    <div className={Isbuy ? 'hide' : 'sell_data'}>
                        <p className='tagline_sell'>
                            Dont't let your ticket go waste.
                        </p>

                        <div className='sell_htmlform'>
                            <div className="container">
                                <form onSubmit={save_handlesell} >
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="fname">First Name</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="fname" onChange={onChange} name="first_name" placeholder="Your name.." />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="lname">Last Name</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="lname" onChange={onChange} name="last_name" placeholder="Your last name.." />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="email" onChange={onChange} name="email" placeholder="Your email.." />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="jrny_date">Journey From</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="date" id="jrny_date" onChange={onChange} name="journey_date" placeholder="jounery date.." />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="jrny_from">Journey From</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="jrny_from" onChange={onChange} name="journey_from" placeholder="Source.." />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="jrny_to">Journey To</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="jrny_to" onChange={onChange} name="journey_to" placeholder="Destination.." />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="bus_name">Bus Name</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="bus_name" onChange={onChange} name="bus_name" placeholder="Bus Name.." />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="bus_no">Bus Number</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="bus_number" onChange={onChange} name="bus_number" placeholder="Bus Number.." />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="bus_cont">Bus Contact No.</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="bus_cont" onChange={onChange} name="bus_cont_no" placeholder="Driver/Conductor" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="tck_no">Ticket Number</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="tck_no" onChange={onChange} name="ticket_number" placeholder="Ticket No..." />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="pnr_no">PNR Number</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="pnr_no" onChange={onChange} name="pnr_number" placeholder="PNR No.." />
                                        </div>
                                    </div>
                                    <div className="row termsandconditions">
                                       
                                       <ul>
                                        <li>
                                        <div className="col-75">
                                            <input type="checkbox" id="terms" name="terms"/>
                                        </div>
                                        </li>
                                        <li>
                                        
                                        <div className="col-25">
                                        <NavLink to='/termsandconditions'>Terms & Conditions</NavLink>
                                        </div>
                                        </li>
                                       </ul>
                                    </div>
                   
                  
                                    <div className="row " style={{margin:" 20px 95px"}}>
                                        <input className='btn_sell' type="submit" value="Sell" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  </TicketContext.Provider>
    )
}

export default Bus

