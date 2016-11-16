const express = require('express');
const router = express.Router();
const names = ['1', '2', '3'];

router.get('/', function(req, res, next) {
  res.render('names.ejs', { names: names });
});

router.post('/', function(req, res, next) {
  const name = req.body.name;
  names.push(name);
  res.redirect('/names');
});

module.exports = router;
