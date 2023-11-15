// // seeds.js
// const mongoose = require('mongoose');
// const faker = require('faker');
// const Clothing = require('./models/Clothing');

// mongoose.connect('mongodb://localhost:27017/your_database_name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// const generateClothingData = (category, age, gender) => {
//   const numItems = 5; 

//   const clothingData = Array.from({ length: numItems }, () => ({
//     category,
//     age,
//     gender,
//     name: faker.random.word(),
//     price: faker.random.number({ min: 10, max: 50, precision: 0.01 }),
//   }));

//   return Clothing.insertMany(clothingData);
// };

// (async () => {
//   await Clothing.deleteMany(); 

//   await generateClothingData('shirt', 2, 'boy');
//   await generateClothingData('shirt', 2, 'girl');

//   await generateClothingData('pants', 3, 'boy');
//   await generateClothingData('pants', 3, 'girl');

//   await generateClothingData('sets', 4, 'boy');
//   await generateClothingData('sets', 4, 'girl');

//   console.log('Seeds have been planted!');
//   mongoose.connection.close();
// })();


const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    
    await cleanDB('User', 'users');
    
    await User.create(userSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});