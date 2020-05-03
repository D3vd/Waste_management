const mongoose = require('mongoose');

let binsJSON = {
  id: Number,
  name: String,
  lat: Number,
  lng: Number,
  level: Number,
};

let BinsSchema = new mongoose.Schema(binsJSON, {
  timestamps: true,
});

module.exports = mongoose.model('Bins', BinsSchema);
