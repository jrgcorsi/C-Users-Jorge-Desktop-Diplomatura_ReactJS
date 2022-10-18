var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Router
var indexRouter = require('./routes/index');
var nosotrosRouter = require('./routes/nosotros');
var contactoRouter = require('./routes/contacto');
var noticiasRouter = require('./routes/noticias');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/noticias', noticiasRouter);
app.use('/contacto', contactoRouter);
// app.use('/users', usersRouter);

// rutas
app.get('/noticias', function(req,res){
  res.send('Hola soy la pagina de las noticias')
})
app.get('/nosotros', function(req,res){
  res.send('Hola soy la pagina de quienes somos')
})
app.get('/contacto', function(req,res){
  res.send('Hola soy la pagina para escribirnos')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
