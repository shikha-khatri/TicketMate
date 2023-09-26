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
  // app.get("/api/auth/buyticket", (req, res) => {
    
  //   res.send("request made to buy ticket");
  // });
  
  mongoose.set('strictQuery', false);

app.listen(port, () => {
  console.log(`Brogramming listening on port http://localhost:${port}`);
});

