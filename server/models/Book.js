const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  availableTimes: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: String, required: true },
});

module.exports = mongoose.model('Book', bookSchema);
