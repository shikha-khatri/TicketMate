const express = require("express");
const router = express.Router();

const fetchuser = require("../middleware/fetchuser")
const Tickets = require("../Models/Tickets");
const BusTicket=require("../Models/S_BusTicket");
const B_Movies = require('../Models/B_Movies')
const S_Movies = require('../Models/S_Movies')
const B_Sports= require('../Models/B_Sports');
const S_Sports = require('../Models/S_Sports')
const S_Concert = require('../Models/S_Concert');
const B_Concert = require('../Models/B_Concert');
const Users = require('../Models/User');

const { body, validationResult } = require("express-validator");
const mongoose=require('mongoose');




mongoose.set('strictQuery', false);

//Route: get all tickets of all users: 'api/tickets/fetchalluserstickets'
router.get('/fetchalluserstickets', async (req, res) => {
  try {
    const tickets = await BusTicket.find() // Remove the filter to fetch all tickets
    res.json(tickets)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Internal server error')
  }
})


//Route: get all tickets: GET 'api/tickets/fetchalltickets' login req.

router.get("/fetchalltickets", fetchuser, async (req, res) => {
  try {
    const tickets = await BusTicket.find({ user: req.user.id })
    res.json(tickets)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Internal server error')
  }
})

// Route: Get all B_Movies tickets
router.get('/getB_Movies', async (req, res) => {
  try {
    const tickets = await B_Movies.find();
    res.json(tickets);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});

// Route: Get all S_Movies tickets
router.get('/getS_Movies', async (req, res) => {
  try {
    const tickets = await S_Movies.find();
    res.json(tickets);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});

// Route: Get all B_Sports tickets
router.get('/getB_Sports', async (req, res) => {
  try {
    const tickets = await B_Sports.find();
    res.json(tickets);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});

// Route: Get all S_Sports tickets
router.get('/getS_Sports', async (req, res) => {
  try {
    const tickets = await S_Sports.find();
    res.json(tickets);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});

// Route: Get all S_Concert tickets
router.get('/getS_Concert', async (req, res) => {
  try {
    const tickets = await S_Concert.find();
    res.json(tickets);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});

// Route: Get all B_Concert tickets
router.get('/getB_Concert', async (req, res) => {
  try {
    const tickets = await B_Concert.find();
    res.json(tickets);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
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



router.post(
  '/sellSportsTicket',
  fetchuser,
  [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('SportType').notEmpty().withMessage('Sport type is required'),
    body('Duration').notEmpty().withMessage('Sport type is required'),
    body('Venue').notEmpty().withMessage('Venue is required'),
    body('Price').isNumeric().withMessage('Price should be a number'),
    body('Date').isISO8601().withMessage('Valid date is required'),
    body('Permission').notEmpty().withMessage('Permission is required'),
  ],
  async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        email,
        SportType,
        Duration,
        Venue,
        Price,
        Date,
        Permission,
      } = req.body

      // If there are errors, return bad request and the errors
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      // Create a new sports ticket
      const sportsTicket = new S_Sports({
        user: req.user.id,
        first_name,
        last_name,
        email,
        SportType,
        Duration,
        Venue,
        Price,
        Date,
        Permission,
      })

      // Save the sports ticket to the database
      const savedSportsTicket = await sportsTicket.save()
      res.json(savedSportsTicket)
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Internal server error')
    }
  }
)

module.exports = router






router.post(
  '/buyMovieTicket',
  fetchuser,
  [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('MovieName').notEmpty().withMessage('Movie name is required'),
    body('Duration').notEmpty().withMessage('Duration is required'),
    body('Venue').notEmpty().withMessage('Venue is required'),
    body('Price').isNumeric().withMessage('Price should be a number'),
    body('Date').isISO8601().withMessage('Valid date is required'),
    body('Permission').notEmpty().withMessage('Permission is required'),
  ],
  async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        email,
        MovieName,
        Duration,
        Venue,
        Price,
        Date,
        Permission,
      } = req.body

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const movieTicket = new B_Movies({
        user: req.user.id,
        first_name,
        last_name,
        email,
        MovieName,
        Duration,
        Venue,
        Price,
        Date,
        Permission,
      })

      const savedMovieTicket = await movieTicket.save()
      res.json(savedMovieTicket)
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Internal server error')
    }
  }
)

module.exports = router






router.post(
  '/sellMovieTicket',
  fetchuser,
  [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('MovieName').notEmpty().withMessage('Movie name is required'),
    body('Duration').notEmpty().withMessage('Duration is required'),
    body('Venue').notEmpty().withMessage('Venue is required'),
    body('Price').isNumeric().withMessage('Price should be a number'),
    body('Date').isISO8601().withMessage('Valid date is required'),
    body('Permission').notEmpty().withMessage('Permission is required'),
  ],
  async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        email,
        MovieName,
        Duration,
        Venue,
        Price,
        Date,
        Permission,
      } = req.body

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const movieTicket = new S_Movies({
        user: req.user.id,
        first_name,
        last_name,
        email,
        MovieName,
        Duration,
        Venue,
        Price,
        Date,
        Permission,
      })

      const savedMovieTicket = await movieTicket.save()
      res.json(savedMovieTicket)
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Internal server error')
    }
  }
)

module.exports = router



router.post(
  '/buySportsTicket',
  fetchuser,
  [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('SportType').notEmpty().withMessage('Sport type is required'),
    body('Duration').notEmpty().withMessage('Duration is required'),
    body('Venue').notEmpty().withMessage('Venue is required'),
    body('Price').isNumeric().withMessage('Price should be a number'),
    body('Date').isISO8601().withMessage('Valid date is required'),
    body('Permission').notEmpty().withMessage('Permission is required'),
  ],
  async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        email,
        SportType,
        Duration,
        Venue,
        Price,
        Date,
        Permission,
      } = req.body

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const sportsTicket = new B_Sports({
        user: req.user.id,
        first_name,
        last_name,
        email,
        SportType,
        Duration,
        Venue,
        Price,
        Date,
        Permission,
      })

      const savedSportsTicket = await sportsTicket.save()
      res.json(savedSportsTicket)
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Internal server error')
    }
  }
)

module.exports = router



router.post(
  '/sellConcertTicket',
  fetchuser,
  [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('Artist_Name').notEmpty().withMessage('Artist name is required'),
    body('Venue').notEmpty().withMessage('Venue is required'),
    body('Duration').notEmpty().withMessage('Duration is required'),
    body('Price').isNumeric().withMessage('Price should be a number'),
    body('Date').isDate().withMessage('Date should be in valid format'),
    body('Sponsor_Name').notEmpty().withMessage('Sponsor name is required'),
    body('Permission').notEmpty().withMessage('Permission is required'),
  ],
  async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        email,
        Artist_Name,
        Venue,
        Duration,
        Price,
        Date,
        Sponsor_Name,
        Permission,
      } = req.body

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const concertTicket = new S_Concert({
        user: req.user.id,
        first_name,
        last_name,
        email,
        Artist_Name,
        Venue,
        Duration,
        Price,
        Date,
        Sponsor_Name,
        Permission,
      })

      const savedConcertTicket = await concertTicket.save()
      res.json(savedConcertTicket)
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Internal server error')
    }
  }
)

module.exports = router

router.post(
  '/buyConcertTicket',
  fetchuser,
  [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('Artist_Name').notEmpty().withMessage('Artist name is required'),
    body('Venue').notEmpty().withMessage('Venue is required'),
    body('Duration').notEmpty().withMessage('Duration is required'),
    body('Price').isNumeric().withMessage('Price should be a number'),
    // body('Date').isDate().withMessage('Date should be in valid format'),
    body('Sponsor_Name').notEmpty().withMessage('Sponsor name is required'),
    body('Permission').notEmpty().withMessage('Permission is required'),
  ],
  async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        email,
        Artist_Name,
        Venue,
        Duration,
        Price,
        Date,
        Sponsor_Name,
        Permission,
      } = req.body

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const concertTicket = new B_Concert({
        user: req.user.id,
        first_name,
        last_name,
        email,
        Artist_Name,
        Venue,
        Duration,
        Price,
        Date,
        Sponsor_Name,
        Permission,
      })

      const savedConcertTicket = await concertTicket.save()
      res.json(savedConcertTicket)
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Internal server error')
    }
  }
)

module.exports = router
