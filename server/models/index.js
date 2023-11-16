// models/index.js
const User = require('./User');
const Pant = require('./Pant');
const Shirt = require('./shirt')
const Onesie = require('./onesie')
const ClothingSet = require('./ClothingSet');

module.exports = {
  Shirt,
  Pant,
  ClothingSet,
  User,
  Onesie
};
