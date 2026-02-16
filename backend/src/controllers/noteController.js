const Note = require("../models/Note")
exports.createNote = async (req, res) => {
 
  try {
    const note = await Note.create({ ...req.body, user: req.user._id })
    res.status(201).json(note)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id }).sort({ createdAt: -1 })
    res.json(notes)
  }
   catch (err) {
    res.status(500).json({ message: err.message })
  }
}
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    )
    if (!note) return res.status(404).json({ message: "Note not found" })
    res.json(note)
  }
   catch (err) {
  res.status(400).json({ message: err.message })
  }
}
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user._id })

    if (!note) return res.status(404).json({ message: "Note not found" })
    res.json({ message: "Note deleted" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}