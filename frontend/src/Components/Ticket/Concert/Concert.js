import React, { useState, useEffect } from 'react'
import TicketHolder from '../../mini_comp/TicketHolder/TicketHolder'

const Concert = () => {
  const [data, setData] = useState([])
  const formFields = [
    { name: 'first_name', label: 'First Name', type: 'text' },
    { name: 'last_name', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'Artist_Name', label: 'Artist Name', type: 'text' },
    { name: 'Venue', label: 'Venue', type: 'text' },
    { name: 'Duration', label: 'Duration', type: 'text' },
    { name: 'Price', label: 'Price', type: 'number' },
    { name: 'Date', label: 'Date', type: 'date' },
    { name: 'Sponsor_Name', label: 'Sponsor Name', type: 'text' },
    { name: 'Permission', label: 'Permission', type: 'text' },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/tickets/getS_Concert',
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
      'http://localhost:5000/api/tickets/sellConcertTicket',
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
      'http://localhost:5000/api/tickets/buyConcertTicket',
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

export default Concert
