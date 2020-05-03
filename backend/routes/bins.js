const express = require('express');
const router = express.Router();

let Bins = require('../controller/bins');

router.get('/', async (req, res) => {
  let bins = await Bins.getAll();

  if (bins === null) {
    res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
    });
  } else {
    res.status(200).json({ bins });
  }
});

module.exports = router;
