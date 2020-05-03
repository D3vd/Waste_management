const express = require('express');
const router = express.Router();

const Level = require('../controller/level');

router.post('/', async (req, res) => {
  const { id, level } = req.body;

  let ok = await Level.update(id, level);

  if (!ok) {
    res.status(400).json({
      code: 400,
      message: `Bin no: ${id} does not exist`,
    });
    return;
  }

  res.status(200).json({
    code: 200,
    message: `Updated level for Bin No: ${id}`,
  });
});

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
