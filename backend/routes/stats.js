const express = require('express');
const router = express.Router();

const Stats = require('../controller/stats');

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  const stats = await Stats.getAll(id);

  if (stats === null || stats.length === 0) {
    res.status(400).json({
      code: 400,
      message: `Bin No: ${id} is not a valid bin`,
    });
    return;
  }

  res.status(200).json({
    id,
    stats: stats.reverse(),
  });
});

router.get('/', (req, res) => {
  res.status(404).send('Invalid Route. Please check your request');
});

module.exports = router;
