var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Task-Tracker 1.1' });
});


// This is where I am adding routes to other pages for the nav buttons to use

router.get('/adduser', function(req, res, next) {
  res.render('adduser', { title: 'Task-Tracker 1.1' });
});

router.get('/userlist', function(req, res, next) {
  res.render('userlist', { title: 'Task-Tracker 1.1' });
});


module.exports = router;
