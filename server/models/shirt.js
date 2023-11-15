// models/Shirt.js
const mongoose = require('mongoose');

const shirtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Boy', 'Girl'], required: true },
  price: { type: Number, required: true },
});

const Shirt = mongoose.model('Shirt', shirtSchema);

module.exports = Shirt;
