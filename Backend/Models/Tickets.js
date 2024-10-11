const mongoose = require("mongoose");
const { Schema } = mongoose;mongoose.set('strictQuery', false);

const TicketsSchema = new Schema({
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    first_name:{
        type:String,
    required:true,
    },
    last_name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
    },
    journey_from:{

    }
,
      ticket_type:{
           type:String,
            Default:"NA"
         },

    ticket_id:{
        type:String,

        
    },
    ticket_price:{
        type:String
    },
    event_venue:{
        type:String 
    },
    event_name:{
        type:String 
    }
    ,
    date_of_event:{
        type:String
    },
    event_time:{
        type:String
    },

    






















   
    date: {
        type: Date,
        default: Date.now,
      },


    bufferCommands: false,
    autoCreate: false, // disable `autoCreate` since `bufferCommands` is false


});
const Tickets = mongoose.model('tickets', TicketsSchema)
module.exports = Tickets;
