var express = require('express');
var router = express.Router();
var passport = require('passport');


// Rutas inicio
router.get('/', (req, res, next) => {
  res.render('index');
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
    res.redirect('/');
  });
});

// RUTAS PRIVADAS

router.get('/mi_perfil', isAuthenticated, (req, res, next) => {
  res.render('perfil');
});

router.get('/mySQL', isAuthenticated, (req, res, next) => {
  res.send('base de datos');
});


function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login')
}

module.exports = router;
