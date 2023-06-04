
const express = require('express');
const router = express.Router();

const noteActions = require('../actions/api/noteActions')


//pobieranie notatek
router.get('/notes',noteActions.getAllNotes)
//pobieranie notatki
router.get('/notes/:id',noteActions.getNote)
//zapisywanie notatek
router.post('/notes',noteActions.saveNote)
//edytowanie noatatek
router.put('/notes/:id',noteActions.updateNote)
//usuwanie noatatek
router.delete('/notes/:id', noteActions.deleteNote);

module.exports = router;