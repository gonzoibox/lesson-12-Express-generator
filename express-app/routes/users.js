const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { users: 'Users page!', enter:'Enter your name' });
  res.send('respond with a resource');
});

module.exports = router;
