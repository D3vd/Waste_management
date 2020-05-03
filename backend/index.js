const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(logger('tiny'));
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
