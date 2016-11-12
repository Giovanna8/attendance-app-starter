const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/?????');
app.use('/*', function(req, res, next) {
  res.redirect('/???');
});
