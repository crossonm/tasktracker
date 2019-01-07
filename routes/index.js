var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Task-Tracker 1.1' });
});


// This is where I am adding routes to other pages for the nav buttons to use

//GET adduser page
router.get('/adduser', function(req, res, next) {
  res.render('adduser', { title: 'Adduser page title' });
});

//GET index page
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Some catchy title' });
});

//GET contactform page
router.get('/contactform', function(req, res, next) {
  res.render('contactform', { title: 'Contact Mary' });
});

//GET userlist page
router.get('/userlist', function(req, res, next) {
  res.render('userlist', { title: 'Userlist page title' });
});

//GET devops page
router.get('/devops', function(req, res, next) {
  res.render('devops', { title: 'DevOps Page' });
});

//GET learn_more page
router.get('/learn_more', function(req, res, next) {
  res.render('learn_more', { title: 'About me' });
});


module.exports = router;
