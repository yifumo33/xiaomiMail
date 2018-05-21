var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  res.send('test');
});
router.get('/haha', function(req, res, next) {
  res.render('yif', { title: 'Express' });
});

module.exports = router;
