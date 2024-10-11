import React, { useState, useEffect } from 'react'
import TicketHolder from '../../mini_comp/TicketHolder/TicketHolder'
import './Movies.css'

const Movies = () => {
  const [data, setData] = useState([])
  const formFields = [
    { name: 'first_name', label: 'First Name', type: 'text' },
    { name: 'last_name', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'MovieName', label: 'Movie Name', type: 'text' },
    { name: 'Duration', label: 'Duration', type: 'text' },
    { name: 'Venue', label: 'Venue', type: 'text' },
    { name: 'Price', label: 'Price', type: 'number' },
    { name: 'Date', label: 'Date', type: 'date' },
    { name: 'Permission', label: 'Permission', type: 'text' },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/tickets/getS_Movies',
          {
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token'),
            },
          }
        )
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async (formValues) => {
    const response = await fetch(
      'http://localhost:5000/api/tickets/sellMovieTicket',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify(formValues),
      }
    )
    const result = await response.json()
    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit')
    }
    return result
  }

  const handleBuyTicket = async (item) => {
    const response = await fetch(
      'http://localhost:5000/api/tickets/buyMovieTicket',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify(item),
      }
    )
    const result = await response.json()
    if (!response.ok) {
      throw new Error(result.message || 'Failed to buy ticket')
    }
    return result
  }

  return (
    <div>
      <TicketHolder
        formFields={formFields}
        data={data}
        handleSubmit={handleSubmit}
        handleBuyTicket={handleBuyTicket}
      />
    </div>
  )
}

export default Movies
