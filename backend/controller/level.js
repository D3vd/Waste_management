let Bin = require('../models/bins');

async function read(id) {
  let { level } = await Bin.findOne({ id });

  return level;
}

module.exports = { read };
