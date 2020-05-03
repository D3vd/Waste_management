let Bins = require('../models/bins');

async function getAll() {
  let bins = Bins.find({});
  return bins;
}

module.exports = { getAll };
