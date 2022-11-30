var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var methodOverride = require ('method-override');
const multer = require('multer');

// mongoose.connect('mongodb+srv://admin:admin@cluster0.xq7lmvy.mongodb.net/auth?retryWrites=true&w=majority')

// LIBRERIAS >>>>>>>
// npm i bcrypt-nodejs
// npm i jsonwebtoken
// npm i mongoose
// npm i express-jwt

// Inicializaciones
var app = express();
require('./database');
require('./public/passport/local-auth');

// const storage = multer.diskStorage({
//   destination: path.join(__dirname, '../upload'),
//   filename: (req, file, cb, filename) => {
//       console.log(file);
//       cb(null, v4() + path.extname(file.originalname));
//   }
// }) 
// app.use(multer({storage}).single('image'));

// configuraciones
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs' );

// app.set('port', process.env.PORT || 3000);

// middlewares >> Antes de las rutas
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'misecreto',
  resave: false,
  saveUninitialized: false
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


// mensajes de alerta
app.use((req, res, next) => {
  app.locals.signupMessage = req.flash('signupMessage');
  app.locals.signinMessage = req.flash('signinMessage');
  app.locals.user = req.user;
  console.log(app.locals)

  next();
});

// Rutas
app.use('/', require('./routes/index')) ;

// Iniciando el servidor
app.listen(app.get('port'), () => {
  console.log('server en puerto', app.get('port'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


















// // Router sin validacion
// var indexRouter = require('./routes/index');
// var nosotrosRouter = require('./routes/nosotros');
// var contactoRouter = require('./routes/contacto');
// var noticiasRouter = require('./routes/noticias');
// var loginRouter = require('./routes/admin/login');
// var RegistrarRouter = require('./routes/admin/registrar');
