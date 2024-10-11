const mongoose = require('mongoose')
const { Schema } = mongoose
mongoose.set('strictQuery', false)

const TicketsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  journey_from: {
    type: String,
    required: true,
  },

  journey_to: {
    type: String,
    required: true,
  },
  boarding_point: {
    type: Stirng,
    required: true,
  },
  dropping_point: {
    type: Stirng,
    required: true,
  },
  journey_date: {
   time : { type : Date, default: Date.now },
    required: true,
  },
  bus_name: {
    type: String,
    required: true,
  },
  bus_number: {
    type: String,
    required: true,
  },
  bus_cont_no: {
    type: String,
    required: true,
  },
  ticket_number: {
    type: String,
    required: true,
  },
  pnr_number: {
    type: String,
    required: true,
  },
  bufferCommands: false,
  autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
})
const B_BusTicket = mongoose.model('b_busticket', TicketsSchema)
module.exports = B_BusTicket
