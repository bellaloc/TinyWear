const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  img: {
    type: String
  },
  gender: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  price: {
    type: Number,
    
  },
  description: {
    type: String
  },
  payBtn: {
    type: String
  }
  
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
