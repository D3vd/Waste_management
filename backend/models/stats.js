const mongoose = require('mongoose');

let statsJSON = {
  id: Number,
  level: Number,
};

let StatsSchema = new mongoose.Schema(statsJSON, {
  timestamps: true,
});

module.exports = mongoose.model('Stat', StatsSchema);
