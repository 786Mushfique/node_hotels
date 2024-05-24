const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hotels')
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

const db = mongoose.connection;

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = db;

