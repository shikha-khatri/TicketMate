const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
  user:{
type:mongoose.Schema.Types.ObjectId,
ref:'users'
  },
  title: {
    type: String,
    required: true,
  },

  description: {
    type:String,
  },
  tag:{
      type:String,
      required:false,
      default:'General'
  },
  
    
    bufferCommands: false,
    autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
  
 
});
const Notes=mongoose.model('notes',NotesSchema)
module.exports=Notes;
