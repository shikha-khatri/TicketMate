const mongoose = require('mongoose')
const { Schema } = mongoose
mongoose.set('strictQuery', false)

const SportsSchema = new Schema({
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
  SportType: {
    type: String,
    required: true,
  },
  Duration:{
    type:String,
    required:true
  },
  Venue: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
  },
  Permission:{
    type:String,
    required:true
  }

  ,
  bufferCommands: false,
  autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
})
const S_Sports = mongoose.model('s_sports', SportsSchema)
module.exports = S_Sports
