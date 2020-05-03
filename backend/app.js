const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Database = require('./controller/database');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(cors());

// Routes
app.use('/', require('./routes/index'));
app.use('/bin', require('./routes/bin'));
app.use('/bins', require('./routes/bins'));
app.use('/level', require('./routes/level'));
app.use('/stats', require('./routes/stats'));

// Initialize MongoDB
db = new Database();

const PORT = process.env.PORT || 5000;

mongoose.connection.once('open', () => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});
