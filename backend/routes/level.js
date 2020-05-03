const express = require('express');
const router = express.Router();

const Level = require('../controller/level');

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  let level = await Level.read(id);

  if (level === null) {
    res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
    });
    return;
  }

  res.status(200).json({
    code: 200,
    id,
    level,
  });
});

router.get('/', (req, res) => {
  res.status(404).send('Invalid Route. Please check your request');
});

module.exports = router;
