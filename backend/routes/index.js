const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Invalid Route. Please check your request');
});

module.exports = router;
