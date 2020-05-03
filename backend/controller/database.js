let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/waste';

    mongoose
      .connect(`${uri}`, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error', err);
      });
  }
}

module.exports = Database;
