import React, { useState, useEffect } from 'react'
import './Bus.css'
import BuyorSell from '../../../mini_comp/Buyrorsell/Buyorsell'
import TicketCard from '../../../mini_comp/TicketCard/TicketCard'
import { NavLink, useNavigate } from 'react-router-dom'
import TicketContext from '../../../../TicketContext/TicketContext'

const Bus = (props) => {
  const navigate = useNavigate()
  const tickets_initial = []
  const [total_tckts, settotal_tckts] = useState(tickets_initial)
  const [ticket_details, setticket_details] = useState({
    first_name: '',
    last_name: '',
    email: '',
    journey_from: '',
    journey_to: '',
    journey_date: '',
    bus_name: '',
    bus_number: '',
    bus_cont_no: '',
    ticket_number: '',
    pnr_number: '',
  })
  const [Isbuy, setIsbuy] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [tickets, setTickets] = useState([])

  const OnclickBuy = () => {
    setIsbuy(true)
    fetchTickets()
  }

  const OnclickSell = () => {
    setIsbuy(false)
  }

  const fetchTickets = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/tickets/fetchalluserstickets',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'), // Assuming the token is stored in localStorage
          },
        }
      )
      const data = await response.json()
      setTickets(data)
    } catch (error) {
      console.error('Error fetching tickets:', error)
    }
  }

  const onChange = (e) => {
    setticket_details({ ...ticket_details, [e.target.name]: e.target.value })
  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const save_handlesell = async (e) => {
    e.preventDefault()
    const {
      first_name,
      last_name,
      email,
      journey_from,
      journey_to,
      journey_date,
      bus_name,
      bus_number,
      bus_cont_no,
      ticket_number,
      pnr_number,
    } = ticket_details

    if (
      !first_name ||
      !last_name ||
      !email ||
      !journey_from ||
      !journey_to ||
      !journey_date ||
      !bus_name ||
      !bus_number ||
      !bus_cont_no ||
      !ticket_number ||
      !pnr_number
    ) {
      setErrorMessage('All fields are mandatory.')
      return
    }

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format.')
      return
    }

    if (!document.getElementById('terms').checked) {
      setErrorMessage('You must agree to the terms and conditions.')
      return
    }

    setErrorMessage('')

    const response = await fetch(
      'http://localhost:5000/api/tickets/sellbusticket',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify(ticket_details),
      }
    )
    const json = await response.json()
    console.log(json)
    settotal_tckts(total_tckts.concat(ticket_details))
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 3000) // Hide the popup after 3 seconds
  }

  return (
    <TicketContext.Provider value={[total_tckts, settotal_tckts]}>
      {props.children}
      <div id="Bus">
        <div className="Bus">
          <div id="buyorsell">
            <div className="buyorsell">
              <ul>
                <li
                  className={Isbuy ? 'active' : 'notactive'}
                  onClick={OnclickBuy}
                >
                  Buy
                </li>
                <li
                  className={Isbuy ? 'notactive' : 'active'}
                  onClick={OnclickSell}
                >
                  Sell
                </li>
              </ul>
            </div>

            <div className={Isbuy ? 'buy_data' : 'hide'}>
              <h1>Buy</h1>
              {tickets.map((ticket, index) => (
                <TicketCard
                  key={index}
                  f_name={ticket.first_name}
                  l_name={ticket.last_name}
                  email={ticket.email}
                  jrny_from={ticket.journey_from}
                  jrny_to={ticket.journey_to}
                  jrny_date={ticket.journey_date}
                  bus_name={ticket.bus_name}
                  bus_number={ticket.bus_number}
                  bus_cont_no={ticket.bus_cont_no}
                  tck_number={ticket.ticket_number}
                  pnr_number={ticket.pnr_number}
                />
              ))}
            </div>

            <div className={Isbuy ? 'hide' : 'sell_data'}>
              <p className="tagline_sell">Don't let your ticket go waste.</p>

              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}

              <div className="sell_htmlform">
                <div className="container">
                  <form onSubmit={save_handlesell}>
                    {Object.keys(ticket_details).map((key) => (
                      <div className="row" key={key}>
                        <div className="col-25">
                          <label htmlFor={key}>
                            {key.replace('_', ' ').toUpperCase()}
                          </label>
                        </div>
                        <div className="col-75">
                          <input
                            type={key === 'journey_date' ? 'date' : 'text'}
                            id={key}
                            onChange={onChange}
                            name={key}
                            placeholder={`Your ${key.replace('_', ' ')}...`}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="row termsandconditions">
                      <div className="col-75">
                        <input type="checkbox" id="terms" name="terms" />
                        <label htmlFor="terms">
                          I agree to the{' '}
                          <NavLink to="/termsandconditions">
                            Terms & Conditions
                          </NavLink>
                        </label>
                      </div>
                    </div>

                    <div className="row" style={{ margin: '20px 95px' }}>
                      <input className="btn_sell" type="submit" value="Sell" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="popup">
            Your ticket has been registered for selling.
          </div>
        )}
      </div>
    </TicketContext.Provider>
  )
}

export default Bus
