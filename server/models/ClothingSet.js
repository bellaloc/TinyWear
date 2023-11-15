// models/ClothingSet.js
const mongoose = require('mongoose');

const clothingSetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Boy', 'Girl'], required: true },
  price: { type: Number, required: true },
});

const ClothingSet = mongoose.model('ClothingSet', clothingSetSchema);

module.exports = ClothingSet;
