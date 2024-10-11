const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cont_no:{
    type:String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  Username: {
    type: String,
    unique: true,

  },
  UserId: {
    type: String,
    unique: true
  },
  Country: {
    type: String,
    default:"India"

  },
  UserRole: {
    type: String
  },
  // Institution: {
  //   type: String
  // }
  
  Branch: {
    type: String,
    default:"Branch"
  },

  Section: {
    type: String,
    default:"Section"
  },
  Mentor: {
    type: String,
    default:"Mentor"
  },
  SGPA:{
    type:String,
    default:"SGPA" 

  },
  Internship:{
    type:String
    ,default:"NA"
  },



  bufferCommands: false,
  autoCreate: false // disable `autoCreate` since `bufferCommands` is false

});
const User = mongoose.model("users", UserSchema);

module.exports = User;