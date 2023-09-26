const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../Models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE: get all the notes: GET 'api/notes/fetchallnotes' login req.
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
});

//ROUTE: add a new note using :post'api/notes/addnote'  login req.
router.post(
  "/addnote",
  fetchuser,
  [body("title", "title cannot be blank").exists()],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      //if there are errors,return Bad request and the erros
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const notes = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savednotes = await notes.save();
      res.json(savednotes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
);

//ROUTE3:update an existing note using: put'/api/notes/updatenote' login req.
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;

  //create a new note object
  const newNote = {};
  if (title) {
    newNote.title = title;
  }

  if (description) {
    newNote.description = description;
  }

  if (tag) {
    newNote.tag = tag;
  }

  //find the note to be updated
  let note = await Notes.findById(req.params.id);

  if (!note) {
    return res.status(404).send("Not Found");
  }

  if (note.user.toString() != req.user.id) {
    return res.status(401).send("not allowed");
  }

  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
});

//ROUTE3:deleting existing note using: DELETE'/api/notes/deletenote' login req.
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  //create a new note object

  //find the note to be deleted and delete it
  let note = await Notes.findById(req.params.id);

  if (!note) {
    return res.status(404).send("Not Found");
  }

  //allow deletion only if user owns this Note
  if (note.user.toString() != req.user.id) {
    return res.status(401).send("not allowed");
  }

  note = await Notes.findByIdAndDelete(req.params.id);
  res.json({ success: "note has been deleted", note: note });
});

module.exports = router;
