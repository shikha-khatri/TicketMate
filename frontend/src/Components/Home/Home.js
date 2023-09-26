import React from 'react'
import './Home.css';
import tck_logo from '../Img/tck_logo.png';
// import Imgslider from '../mini_comp/Imgslider/Imgslider';
import Imgslider from '../mini_comp/Imgslider/Imgslider';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const Navigate=useNavigate();
  const Onclck_btnexp=()=>{
    Navigate('/Ticket');
  }

  const btn_logout=()=>{
    localStorage.removeItem('token');
    window.location.reload(false);
    // Navigate('/Cred');
  }
  return (
    <div id="Home">

        <div className='Home'>
             {/* <h2>Home</h2> */}
              
             <div className='container_1'>
               <h1 className='header_tck'>
                TicketMate
              </h1>

              <Imgslider/>
              
              <div className='btn_exp' onClick={Onclck_btnexp}>
                Explore
              </div>
             </div>
             <button className='btn_logout' onClick={btn_logout}>
              logout 
             </button>
        </div>

    </div>
  )
}

export default Home