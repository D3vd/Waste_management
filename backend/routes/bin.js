const express = require('express');
const router = express.Router();

const Bin = require('../controller/bin');

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  let bin = await Bin.read(id);

  if (bin === null) {
    res.status(400).json({
      code: 400,
      message: `Unable to find Bin with id ${id}`,
    });
    return;
  }

  res.status(200).json({
    id: bin.id,
    name: bin.name,
    lat: bin.lat,
    lng: bin.lng,
    createdAt: bin.createdAt,
    updatedAt: bin.updatedAt,
  });

  return;
});

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

router.get('/', (req, res) => {
  res.status(404).send('Invalid Route');
});

module.exports = router;
