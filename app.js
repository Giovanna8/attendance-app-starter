const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const names = require('./routes/names');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/names', names);

app.get('*', function(req, res, next) {
  res.redirect('/names');
});

const port = 4000;
app.listen(port, function(){
  console.log(`Listening on Port #${port}`);
});
