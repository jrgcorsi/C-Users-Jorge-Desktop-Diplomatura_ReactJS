var express = require('express');
const router = express.Router();
const Note = require('../public/models/noticia');
const Image = require('../public/models/image')
const NoticiasControl = require('../controllers/notes.controller');
const isAuthenticated = require('./index')

router.get("/notes", NoticiasControl.renderNotesJson);

module.exports = router;
