const db = require('../config/connection');
const { User, Shirt, Pant, Onesie } = require('../models');
const userSeeds = require('./userData.json');
const pantSeeds = require('./pantSeeds.json');
const cleanDB = require('./cleanDB');
const shirtSeeds = require('./shirtSeeds.json');
const onesieSeeds = require('./onesieSeeds.json')
db.once('open', async () => {
  try {
    
    await cleanDB('User', 'users');
    await cleanDB('Pant', 'pants');
    await cleanDB('Shirt', 'shirts');
    await cleanDB('Onesie', 'onesies');
    
    await User.create(userSeeds);
    await Shirt.create(shirtSeeds)
    await Pant.create(pantSeeds)
    await Onesie.create(onesieSeeds)

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});