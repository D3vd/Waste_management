const Stats = require('../models/stats');

async function getAll(id) {
  let stats = await Stats.find({ id });

  return stats;
}

module.exports = { getAll };
