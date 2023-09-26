import React, { useContext, useState } from 'react'
import TicketCard from '../mini_comp/TicketCard/TicketCard'
import TicketContext from '../../TicketContext/TicketContext'
// import {total_tckts,settotal_tckts} from '../Ticket/Travel/Bus/Bus';



const Profile = () => {
  const context = useContext(TicketContext);
  if (context === undefined) {
    throw new Error("The useNotesContext hook must be used inside a NoteContext.Provider!");
    return context;
  }
  const total_tckts = context;
  const [ticket_detail, setticket_detail] = useState({ f_name: "sourabh", l_name: "sivare", email: "sourabhsivare209@gmail.com", jrny_to: "Banglore", jrny_from: "Pune", jrny_date: "20:09:02", bus_name: "Chartered", bus_number: "MP 48 MN 3418", bus_cont_no: "9977799311", tck_number: "37 A", pnr_number: "39049" })
  return (

    <div>
      {total_tckts.map((tck,index) => {
        return <TicketCard key={index} f_name={tck.f_name} l_name={tck.l_name} email={tck.email} jrny_from={tck.jrny_from} jrny_to={tck.jrny_to} jrny_date={tck.jrny_date} bus_name={tck.bus_name} bus_number={tck.bus_number} bus_cont_no={tck.bus_cont_no} tck_number={tck.tck_number} pnr_number={tck.pnr_number} />

      })}
    </div>

  )
}

export default Profile