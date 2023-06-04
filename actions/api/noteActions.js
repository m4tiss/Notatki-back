const Note = require("../../db/models/note");

class NoteActions {
  saveNote(req, res) {
    // const newNote = new Note({
    //   title: "ztestować",
    //   body: "dzisiaj",
    // });
    // newNote.save().then(() => {
    //   console.log("zapisana");
    // });
    const title = req.body.title;
    const body = req.body.body;
    res.send("tytuł: " + title+"body: "+ body);
  }
  getAllNotes(req, res) {
    res.send("api działa!");
  }
  getNote(req, res) {
    res.send("info o notatce");
  }
  updateNote(req, res) {
    res.send("update się udał");
  }
  deleteNote(req, res) {
    const id = req.params.id;
    res.send("usunięcie sie udało ID: " + id);
  }
}

module.exports = new NoteActions();
