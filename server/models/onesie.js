const { Schema, model } = require('mongoose');

const onesieSchema = new Schema({
  name: {
    type: String,
    
    minlength: 1,
  },
  description: {
    type: String,
   
    minlength: 1,
  },
  gender: {
    type: String,
    
  },
  price: {
    type: Number,
   
  },
  size: {
    type: Number,
 
  },
  image: {
    type: String,
 
  },
  color: {
    type: String,
   
  },
});

const Onesie = model('Onesie', onesieSchema);

module.exports = Onesie;