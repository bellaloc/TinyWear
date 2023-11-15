// seeds/seed.js
const faker = require('faker');
const Clothing = require('../models/Clothing');

const generateClothingData = () => {
  const categories = ['shirt', 'pants', 'sets'];
  const ages = [2, 3, 4];
  const genders = ['boy', 'girl'];
  const clothingData = [];

  for (let i = 0; i < 20; i++) {
    const category = faker.random.arrayElement(categories);
    const age = faker.random.arrayElement(ages);
    const gender = faker.random.arrayElement(genders);
    const name = faker.commerce.productName();
    const price = faker.random.number({ min: 10, max: 50 });

    clothingData.push({
      category,
      age,
      gender,
      name,
      price,
    });
  }

  return clothingData;
};

const seedDatabase = async () => {
  try {
    await Clothing.deleteMany({});
    const clothingData = generateClothingData();
    await Clothing.insertMany(clothingData);
    console.log('Seed data successfully added!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit();
  }
};

seedDatabase();
