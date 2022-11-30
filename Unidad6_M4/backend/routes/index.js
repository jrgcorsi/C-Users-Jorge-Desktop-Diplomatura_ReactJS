var express = require('express');
var router = express.Router();
var passport = require('passport');
const NoticiasControl = require ('../controllers/notes.controller')

// Rutas inicio
router.get('/', (req, res, next) => {
  res.redirect('/login');
  // res.render('index');
});

// REGISTRO
router.get('/registrar', (req, res, next) => {
  res.render('registrar');
});

router.post('/registrar', passport.authenticate('local-signup', {
  successRedirect: '/mi_perfil',
  failureRedirect: '/registrar',
  passReqToCallback: true
}));

// LOGIN
router.get('/login', (req, res, next) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local-signin', {
  successRedirect: '/mi_perfil',
  failureRedirect: '/login',
  failureFlash: true
}));

router.get('/logout', (req, res, next) => {
  req.logout(req.user, err => {
    if (err) return next(err);
    res.redirect('/login');
  });
});

// RUTAS PRIVADAS

router.get('/mi_perfil', isAuthenticated, (req, res, next) => {
  res.render('perfil', { layout: 'layout_auth'});
});

router.get('/noticias', isAuthenticated, (req, res, next) => {
  res.render('notes/noticias', { layout: 'layout_auth'});
});

// New Note
router.get("/notes/add", isAuthenticated, NoticiasControl.renderNoteForm);

router.post("/notes/new-note", isAuthenticated, NoticiasControl.createNewNote);

// Get All Notes
router.get("/notes", isAuthenticated, NoticiasControl.renderNotes);

// Edit Notes
router.get("/notes/edit/:id", isAuthenticated, NoticiasControl.renderEditForm);

router.put("/notes/edit-note/:id", isAuthenticated, NoticiasControl.updateNote);

// Delete Notes
router.delete("/notes/delete/:id", isAuthenticated, NoticiasControl.deleteNote);

router.get('/mySQL', isAuthenticated, (req, res, next) => {
  res.send('base de datos'); //ruta solo para validar la autenticacion
});


function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login')
}

module.exports = router;
