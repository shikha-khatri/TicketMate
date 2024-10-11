import React, { useState, useEffect } from 'react'
import './Profile.css'

const Profile = () => {
  const [userDetails, setUserDetails] = useState({})
  const [editing, setEditing] = useState(false)
  const [isSold, setIsSold] = useState(true)
  const [selectedOption, setSelectedOption] = useState('Concert')
  const [tickets, setTickets] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  // Function to fetch user details
  const fetchUserDetails = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/getuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
      })
      if (response.ok) {
        const data = await response.json()
        setUserDetails(data)
      } else {
        console.error('Failed to fetch user details:', response.statusText)
      }
    } catch (error) {
      console.error('Error fetching user details:', error)
    }
  }

  // Function to update user details
  const updateUserDetails = async (userId, updatedDetails) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/updateUser/${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
          },
          body: JSON.stringify(updatedDetails),
        }
      )
      if (response.ok) {
        const data = await response.json()
        setUserDetails(data.user)
        setEditing(false)
        setShowPopup(true)
        setTimeout(() => setShowPopup(false), 3000)
      } else {
        console.error('Failed to update user details:', response.statusText)
      }
    } catch (error) {
      console.error('Error updating user details:', error)
    }
  }

  useEffect(() => {
    fetchUserDetails()
  }, [])

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  const handleEditClick = () => {
    setEditing(true)
  }

  const handleSaveClick = () => {
    const userId = userDetails._id
    updateUserDetails(userId, userDetails)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  // Function to fetch tickets
  const fetchTickets = async (endpoint) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/tickets/${endpoint}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
          },
        }
      )
      if (response.ok) {
        const data = await response.json()
        setTickets(data)
      } else {
        console.error('Failed to fetch tickets:', response.statusText)
      }
    } catch (error) {
      console.error('Error fetching tickets:', error)
    }
  }

  useEffect(() => {
    const endpoint = isSold
      ? `getS_${selectedOption}`
      : `getB_${selectedOption}`
    fetchTickets(endpoint)
  }, [isSold, selectedOption])

  const toggleHistory = () => {
    setShowHistory(!showHistory)
  }

  return (
    <div id="Profile">
      {showPopup && <div className="popup">User details have been updated</div>}
      <div className="Profile">
        <div className="user-details">
          <h2>Personal Details</h2>
          <div className={editing ? 'editing-mode' : ''}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name || ''}
                onChange={handleInputChange}
                disabled={!editing}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email || ''}
                onChange={handleInputChange}
                disabled={!editing}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Username">Username:</label>
              <input
                type="text"
                id="Username"
                name="Username"
                value={userDetails.Username || ''}
                onChange={handleInputChange}
                disabled={!editing}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Country">Country:</label>
              <input
                type="text"
                id="Country"
                name="Country"
                value={userDetails.Country || ''}
                onChange={handleInputChange}
                disabled={!editing}
              />
            </div>
            <div className="actions">
              {!editing && <button onClick={handleEditClick}>Edit</button>}
              {editing && (
                <>
                  <button onClick={handleSaveClick}>Save</button>
                  <button onClick={() => setEditing(false)}>Cancel</button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="history-button-container">
          <button className="history-button" onClick={toggleHistory}>
            {showHistory ? 'Hide History' : 'Your History'}
          </button>
        </div>
        {showHistory && (
          <div id="buyorsell">
            <div className="buyorsell">
              <ul>
                <li
                  className={isSold ? 'active' : 'notactive'}
                  onClick={() => setIsSold(true)}
                >
                  Sold
                </li>
                <li
                  className={isSold ? 'notactive' : 'active'}
                  onClick={() => setIsSold(false)}
                >
                  Bought
                </li>
              </ul>
            </div>
            <div className="options">
              {['Concert', 'Movies', 'Sports'].map((option) => (
                <div
                  key={option}
                  className={`option ${
                    selectedOption === option ? 'active' : ''
                  }`}
                  onClick={() => handleOptionChange(option)}
                >
                  {option}
                </div>
              ))}
            </div>
            <div className="tickets">
              {tickets.length > 0 ? (
                tickets.map((ticket, index) => (
                  <div key={index} className="ticket-item">
                    <h3>{ticket.title}</h3>
                    <div className="ticket-details">
                      <div className="ticket-left">
                        {Object.keys(ticket).map(
                          (key) =>
                            key !== '_id' &&
                            key !== 'user' &&
                            key !== '__v' && <p key={key}>{key}</p>
                        )}
                      </div>
                      <div className="ticket-right">
                        {Object.keys(ticket).map(
                          (key, idx) =>
                            key !== '_id' &&
                            key !== 'user' &&
                            key !== '__v' && (
                              <p key={`${key}-${idx}`}>{ticket[key]}</p>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No tickets available.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
