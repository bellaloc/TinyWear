const { Schema, model } = require('mongoose');

const shirtSchema = new Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  size: {
    type: Number,
  },
  gender: {
    type: String
  },
  color: {
    type: String
  },
  price: {
    type: Number
  },
  itemDescription: {
    type: String
  },
});

const Shirt = model('Shirt', shirtSchema);

module.exports = Shirt;