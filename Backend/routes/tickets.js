const express = require("express");
const router = express.Router();

const fetchuser = require("../middleware/fetchuser")
const Tickets = require("../Models/Tickets");
const BusTicket=require("../Models/S_BusTicket");
const { body, validationResult } = require("express-validator");
const mongoose=require('mongoose');
mongoose.set('strictQuery', false);

//Route: get all tickets: GET 'api/tickets/fetchalltickets' login req.

router.get("fetchalltickets", fetchuser, async (req, res) => {
    try {
        const tickets = await Tickets.find({ user: req.user.id });
        res.json(tickets);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

//Route: Add a tickets using :post 'api/tickets/addticket' login req.

router.post(
    "/addticket",
    fetchuser,
    [body()],
    async (req, res) => {
        try {
            const {ticket_id,ticket_price,ticket_type,event_name,event_venue,date_of_event,event_time } = req.body;

            //if there are errors ,return bad request and the errors

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const tickets=new Tickets({
                ticket_id,ticket_price,ticket_type,event_name,event_venue,date_of_event,event_time,
                user:req.user.id
            });

            const savedtickets=await tickets.save();
            res.json(savedtickets);
        } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
        }
    }
)


router.post(
    "/sellbusticket",
    fetchuser,
    [body()],
    async (req, res) => {
        try {
            const {first_name,last_name,email,journey_from,journey_to,bus_name,bus_number,bus_cont_no,ticket_number,pnr_number } = req.body;

            //if there are errors ,return bad request and the errors

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const busticket=new BusTicket({
                first_name,last_name,email,journey_from,journey_to,bus_name,bus_number,bus_cont_no,ticket_number,pnr_number ,
                user:req.user.id
            });

            const savedbustickets=await busticket.save();
            res.json(savedbustickets);
        } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
        }
    }
)
module.exports = router;