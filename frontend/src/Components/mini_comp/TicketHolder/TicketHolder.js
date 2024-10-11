import React, { useState } from 'react'
import './TicketHolder.css'

const TicketHolder = ({ formFields, data, handleSubmit, handleBuyTicket }) => {
  const [view, setView] = useState('buy') // Default view to 'buy'
  const [formValues, setFormValues] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleBuyClick = () => {
    setView('buy')
    setSuccessMessage('') // Clear success message on view change
  }

  const handleSellClick = () => {
    setView('sell')
    setSuccessMessage('') // Clear success message on view change
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      await handleSubmit(formValues)
      setSuccessMessage('Your concert ticket has been registered for selling.')
      setFormValues({}) // Clear form values
      setTimeout(() => {
        setSuccessMessage('')
      }, 2000) // Hide message after 2 seconds
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }) // Scroll to top to make sure the message is visible
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleBuyConfirmation = async (item) => {
    const userConfirmed = window.confirm(
      'Are you sure you want to buy this ticket? Please confirm your purchase.'
    )
    if (userConfirmed) {
      try {
        await handleBuyTicket(item)
        alert('Your order for buying the ticket is confirmed!')
      } catch (error) {
        console.error('Error buying ticket:', error)
      }
    }
  }

  return (
    <div id="TicketHolder">
      <div className="TicketHolder-container">
        <div id="buyorsell">
          <div className="TicketHolder-buyorsell">
            <ul>
              <li
                className={
                  view === 'buy'
                    ? 'TicketHolder-active'
                    : 'TicketHolder-notactive'
                }
                onClick={handleBuyClick}
              >
                Buy
              </li>
              <li
                className={
                  view === 'sell'
                    ? 'TicketHolder-active'
                    : 'TicketHolder-notactive'
                }
                onClick={handleSellClick}
              >
                Sell
              </li>
            </ul>
          </div>

          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}

          <div
            className={
              view === 'buy' ? 'TicketHolder-tickets' : 'TicketHolder-hide'
            }
          >
            {data.length > 0 ? (
              <div className="TicketHolder-card-grid">
                {data.map((item, index) => (
                  <div className="TicketHolder-card" key={index}>
                    {Object.entries(item)
                      .filter(
                        ([key]) =>
                          key !== '_id' && key !== 'user' && key !== '__v'
                      )
                      .map(([key, value]) => (
                        <div className="TicketHolder-card-item" key={key}>
                          <strong className="TicketHolder-card-key">
                            {key}:
                          </strong>
                          <span className="TicketHolder-card-value">
                            {value}
                          </span>
                        </div>
                      ))}
                    <button
                      className="btn-buy"
                      onClick={() => handleBuyConfirmation(item)}
                    >
                      Buy Ticket
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>No data available</p>
            )}
          </div>

          <div
            className={
              view === 'sell' ? 'TicketHolder-tickets' : 'TicketHolder-hide'
            }
          >
            <form
              className="TicketHolder-sell-form"
              onSubmit={handleFormSubmit}
            >
              {formFields.map((field, index) => (
                <div key={index} className="TicketHolder-form-field">
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formValues[field.name] || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
              <div className="TicketHolder-form-field">
                <button type="submit" className="btn-sell">
                  Sell Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketHolder
