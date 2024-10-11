import './TicketCard.css'
import React from 'react'

const TicketCard = (props) => {
  return (
    <div className="Ticket_Card">
      <div className="detail_container">
        <ul>
          <li className="dtl_lbl">First Name:</li>
          <li className="dtl_val">{props.f_name}</li>
        </ul>
        <ul>
          <li className="dtl_lbl">Last Name:</li>
          <li className="dtl_val">{props.l_name}</li>
        </ul>
        <ul>
          <li className="dtl_lbl">Email:</li>
          <li className="dtl_val">{props.email}</li>
        </ul>
        <ul>
          <li className="dtl_lbl">Journey From:</li>
          <li className="dtl_val">{props.jrny_from}</li>
        </ul>
        <ul>
          <li className="dtl_lbl">Journey To:</li>
          <li className="dtl_val">{props.jrny_to}</li>
        </ul>
        <ul>
          <li className="dtl_lbl">Journey Date:</li>
          <li className="dtl_val">{props.jrny_date}</li>
        </ul>
        <ul>
          <li className="dtl_lbl">Bus Name:</li>
          <li className="dtl_val">{props.bus_name}</li>
        </ul>
        <ul>
          <li className="dtl_lbl">Bus Number:</li>
          <li className="dtl_val">{props.bus_number}</li>
        </ul>
        <ul>
          <li className="dtl_lbl">Bus Contact:</li>
          <li className="dtl_val">{props.bus_cont_no}</li>
        </ul>
        <ul>
          <li className="dtl_lbl">Ticket Number:</li>
          <li className="dtl_val">{props.tck_number}</li>
        </ul>
        <ul>
          <li className="dtl_lbl">PNR Number:</li>
          <li className="dtl_val">{props.pnr_number}</li>
        </ul>
      </div>
    </div>
  )
}

export default TicketCard
