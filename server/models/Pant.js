const { Schema, model } = require('mongoose');

const pantSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
  },
  gender: {
    type: String,
    enum: ['Boy', 'Girl'], 
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const Pant = model('Pant', pantSchema);

module.exports = Pant;
