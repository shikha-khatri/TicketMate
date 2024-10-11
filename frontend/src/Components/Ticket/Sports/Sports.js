import React, { useState, useEffect } from 'react'
import TicketHolder from '../../mini_comp/TicketHolder/TicketHolder'
import './Sports.css'

const Sports = () => {
  const [data, setData] = useState([])
  const formFields = [
    { name: 'first_name', label: 'First Name', type: 'text' },
    { name: 'last_name', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'SportType', label: 'Sport Type', type: 'text' },
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
          'http://localhost:5000/api/tickets/getS_Sports',
          {
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token'),
            },
          }
        )
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`)
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async (formValues) => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/tickets/sellSportsTicket',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
          },
          body: JSON.stringify(formValues),
        }
      )
      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.message || 'Failed to submit')
      }
      const result = await response.json()
      return result
    } catch (error) {
      console.error('Error submitting form:', error)
      throw error
    }
  }

  const handleBuyTicket = async (item) => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/tickets//buySportsTicket',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
          },
          body: JSON.stringify(item),
        }
      )
      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.message || 'Failed to buy ticket')
      }
      const result = await response.json()
      return result
    } catch (error) {
      console.error('Error buying ticket:', error)
      throw error
    }
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

export default Sports
