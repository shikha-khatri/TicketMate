const ConnectToMongo = require("./db");
 ConnectToMongo();
const express = require("express");
const cors = require("cors");

const mongoose=require('mongoose');
mongoose.set('strictQuery', false);

const app = express();
const port = 5000;

 


app.use(cors());
//using middleware
app.use(express.json())
//Available Routes


 app.use("/api/auth",require('./routes/auth.js'));
  app.use("/api/notes",require('./routes/notes.js'));
  app.use("/api/tickets",require('./routes/tickets.js'));

  app.use("/api/sellbusticket",require('./routes/tickets.js'));

  app.use("/api/fetchalltickets", require('./routes/tickets.js'))
  app.use("/api/fetchalluserstickets",require('./routes/tickets.js'))

  app.use("/api/sellMovieTicket",require('./routes/tickets.js'))
  app.use('/api/sellSportsTicket', require('./routes/tickets.js'))
  app.use('/api/sellConcertTicket', require('./routes/tickets.js'))

  app.use('/api/buySportsTicket', require('./routes/tickets.js'))
  app.use('/api/buyConcertTicket', require('./routes/tickets.js'))
  app.use('/api/buyMovieTicket', require('./routes/tickets.js')) 

  
    app.use('/api/getB_Movies', require('./routes/tickets.js')) 
        app.use('/api/getS_Movies', require('./routes/tickets.js')) 
     app.use('/api/getB_Sports', require('./routes/tickets.js')) 
      app.use('/api/getS_Sports', require('./routes/tickets.js')) 
       app.use('/api/getS_Concert', require('./routes/tickets.js')) 
        app.use('/api/getB_Concert', require('./routes/tickets.js')) 

      // app.get("/api/auth/buyticket", (req, res) => {

      //   res.send("request made to buy ticket");
      // });

      mongoose.set('strictQuery', false)

app.listen(port, () => {
  console.log(`Ticket-Mate listening on port http://localhost:${port}`);
});
// 'http://localhost:5000/api/tickets/fetchalltickets'
