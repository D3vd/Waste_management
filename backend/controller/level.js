const Bin = require('../models/bins');
const Stats = require('../models/stats');

async function update(id, level) {
  let affected = 0;

  await Bin.updateOne({ id }, { level }, (err, a) => (affected = a.n));

  if (affected === 0) return false;

  let statJSON = {
    id,
    level,
  };

  let statsDoc = new Stats(statJSON);
  await statsDoc.save();
  return true;
}

async function read(id) {
  let { level } = await Bin.findOne({ id });

  return level;
}

module.exports = { read, update };
