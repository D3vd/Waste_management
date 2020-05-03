const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const Database = require('./controller/database');

const app = express();

app.use(logger('tiny'));
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Initialize MongoDB
db = new Database();

const PORT = process.env.PORT || 5000;

mongoose.connection.once('open', () => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});
