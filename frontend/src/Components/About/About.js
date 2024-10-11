import React from 'react'
import './About.css'
import githubLogo from '../Img/GithubLogo.png'
import linkedinLogo from '../Img/LinkedinLogo.png'
import twitterLogo from '../Img/XLogo.png'

const About = () => {
  return (
    <div id="About" className="about-container">
      <div className="about-header">
        <h1>Welcome to TicketMate</h1>
        <p>
          Your one-stop destination for buying and selling tickets effortlessly.
        </p>
      </div>
      <div className="about-content">
        <div className="about-section about-mission">
          <h2>Our Mission</h2>
          <p>
            At TicketMate, we believe in the power of shared experiences. Our
            platform ensures that no ticket goes to waste, providing a seamless
            way for users to sell tickets they can't use and for others to find
            tickets for concerts, movies, sports events, and travel, even during
            shortages or price hikes.
          </p>
        </div>
        <div className="about-section about-services">
          <h2>Our Services</h2>
          <ul>
            <li>Buy and sell concert tickets</li>
            <li>Purchase movie tickets at your convenience</li>
            <li>Get access to sports events tickets</li>
            <li>Find travel tickets without hassle</li>
          </ul>
        </div>
        <div className="about-section about-future">
          <h2>Our Future Plans</h2>
          <p>
            Though we are yet to enter the real-time market, we are gearing up
            to expand our services further. Stay tuned for more updates as we
            bring more exciting features and offerings to TicketMate.
          </p>
        </div>
      </div>
      <div className="about-footer">
        <a
          href="https://Github.com/pseudoSOURABH/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/sourabh209/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a
          href="https://x.com/Sourabh_209"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterLogo} alt="Twitter" />
        </a>
      </div>
    </div>
  )
}

export default About
