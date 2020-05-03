const express = require('express');
const router = express.Router();

const Bin = require('../controller/bin');

router.post('/', async (req, res) => {
  const { id, name, lat, lng } = req.body;

  // ERROR HANDLING
  // Check if all the data is present
  if (
    id === undefined ||
    name === undefined ||
    lat === undefined ||
    lng === undefined
  ) {
    res.status(400).json({
      code: 400,
      message: 'Missing data. Please ensure to add all the required data.',
    });
    return;
  }

  let ok = await Bin.write(id, name, lat, lng);

  if (ok) {
    res.status(200).json({
      code: 200,
      message: `Successfully written ${name} to DB!`,
    });
  } else {
    res.status(400).json({
      code: 400,
      message: `Bin with ID ${id} already exists.`,
    });
  }

  return;
});

module.exports = router;
