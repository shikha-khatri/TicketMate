const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'SecretTokenForAuthentication';
const jwt = require('jsonwebtoken');




//ROUTE1:  Create a user using :POST '/api/auth/createuser'  no login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 1 }),
    body("password", "password must be atleast 8 characters long ").isLength({
      min: 8,
    }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {

    let success = false;
    //if errors exist,return bad request and erros too
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    //check whether the user with this email exist already
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ success, error: "Sorry,a user with this email already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //create a user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,

        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(authtoken);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);


//ROUTE2:  Authenticate a user using :POST '/api/auth/login'  no login required
router.post('/login', [
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success, error: 'Enter correct credentials' });
    }
    const passwordcompare = await bcrypt.compare(password, user.password);

    if (!passwordcompare) {

      return res.status(400).json({ success, error: 'Enter correct credentials/password' });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
   
    success = true;
    res.send({ success, authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error occured");
  }
}
)
//ROUTE3:update an existing user using: put'/api/auth/updateUser' login req.
router.put("/updateUser/:id", fetchuser, async (req, res) => {
  const { Username,Country,UserRole,Branch,Section,Mentor,SGPA,Internship } = req.body;

  //create a new note object
  const newUser = {};
  if (Username) {
    newUser.Username = Username;
  }

  if (Country) {
  newUser.Country=Country;
  }

  if (UserRole) {
    newUser.UserRole=UserRole;
  }
  if (Branch) {
    newUser.Branch=Branch;
  }
  if (Section) {
    newUser.Section=Section;
  }
  if (Mentor) {
    newUser.Mentor=Mentor;
  }
  if (SGPA) {
    newUser.SGPA=SGPA;
  }
  if (Internship) {
    newUser.Internship=Internship;
  }

  //find the note to be updated
  let userId=req.params.id;
  let user = await User.findById(userId);

  if (!user) {
    return res.status(404).send("Not Found");
  }

  // if (note.user.toString() != req.user.id) {
  //   return res.status(401).send("not allowed");
  // }

  user = await User.findByIdAndUpdate(
    userId,
    { $set: newUser },
    { new: true }
  );
  res.json({ user });
}); 



//ROUTE3:get logged in user details using 'api/auth/getuser'. login required
router.post(
  "/getuser", fetchuser,
  async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occured");
    }
  }
);

router.get(
  "/getAllUsers" ,
  async(req,res) =>{
    try{
      const Allusers = await User.find()
      const Allmails = Allusers.map(user => user.email)
      res.json(Allmails)
    
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("internal serve error"); 

    }
  }
)
module.exports = router;