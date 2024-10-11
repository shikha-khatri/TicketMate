import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const onClickExplore = () => {
    navigate('/Ticket')
  }

 

  return (
    <div className="home-container">
      <div className="slider-overlay">
        <div className="home-content">
          <h1 className="home-heading">TicketMate</h1>
          <p className="home-subheading">
            Unlock the journey, sell your memories
          </p>
          <button className="explore-btn" onClick={onClickExplore}>
            Explore
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Home
