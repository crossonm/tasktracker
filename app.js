// This lists requirements for the app. Should need no additional edits.

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://admin:1Dandelion@ds131903.mlab.com:31903/crossonm_data');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.engine('html', require('ejs').renderFile)
// old stuff 
app.set('views', path.join(__dirname, ''));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.static('public')) //allows links to static content in the public directory ..msc
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
  req.db = db;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
