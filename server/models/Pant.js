// models/Pant.js
const mongoose = require('mongoose');

const pantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Boy', 'Girl'], required: true },
  price: { type: Number, required: true },
});

const Pant = mongoose.model('Pant', pantSchema);

module.exports = Pant;
