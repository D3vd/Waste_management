let Bin = require('../models/bins');

async function write(id, name, lat, lng) {
  let binJSON = {};

  let err = await Bin.count({ id }, (err, cnt) => {
    // Check if the bin with id exists
    if (cnt > 0 || err) {
      return false;
    } else {
      binJSON = {
        id,
        name,
        lat,
        lng,
        level: 0,
      };
      return true;
    }
  });

  if (err) return false;

  let binDoc = new Bin(binJSON);
  await binDoc.save();
  return true;
}

module.exports = { write };
