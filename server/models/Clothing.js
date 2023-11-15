// models/Clothing.js
const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['shirt', 'pants', 'sets'],
    required: true,
    index: true,
  },
  age: {
    type: Number,
    required: true,
    index: true,
  },
  gender: {
    type: String,
    enum: ['boy', 'girl'],
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Clothing = mongoose.model('Clothing', clothingSchema);

module.exports = Clothing;
