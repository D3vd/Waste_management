const mongoose = require('mongoose');

let statsJSON = {
  id: String,
  level: Number,
};

let StatsSchema = new mongoose.Schema(statsJSON, {
  timestamps: true,
});

module.exports = mongoose.model('Stats', StatsSchema);
