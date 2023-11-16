const { Schema, model } = require('mongoose');

const onesieSchema = new Schema({
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

const Onesie = model('Onesie', onesieSchema);

module.exports = Onesie;