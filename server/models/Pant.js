const { Schema, model } = require('mongoose');

const pantSchema = new Schema({
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
  description: {
    type: String
  },
});

const Pant = model('Pant', pantSchema);

module.exports = Pant;
