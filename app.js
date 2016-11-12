const express = require('express');
const app = express();
const names = require('./routes/names');
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/names', names);
app.use(bodyParser.urlencoded({ extended: false }));
