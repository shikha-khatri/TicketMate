const mongoose = require('mongoose')
const { Schema } = mongoose
mongoose.set('strictQuery', false)

const ConcertSchema = new Schema({
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
  Artist_Name: {
    type: String,
    required: true,
  },
  Venue: {
    type: String,
    required: true,
  },
  Duration: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Date:{
    type:Date,
    require:true,
  },
  Sponsor_Name: {
    type: String,
    required: true,
  },
  Permission:{
    type:String,
    required:true,
  },

  bufferCommands: false,
  autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
})
const S_Concert = mongoose.model('s_concert', ConcertSchema)
module.exports = S_Concert
