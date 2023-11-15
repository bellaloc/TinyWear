
const stripe = require('stripe')('sk_test_51OCV4QCQg4jIgzVLmIXR1EHzyC683Sq3PFcYPir1dTubCZa9Gh72p07JztTuNc3RG4cFasNLBTQ9htQmXEXFbkD400VuGlJwX9')
// schemas/resolvers.js
const Clothing = require('../models/Clothing');

const resolvers = {
  Query: {
    
    clothing: async (_, { category, age, gender }) => {
      try {
        const filter = {};
        if (category) filter.category = category;
        if (age) filter.age = age;
        if (gender) filter.gender = gender;

        const clothing = await Clothing.find(filter);
        return clothing;
      } catch (error) {
        console.error('Error retrieving clothing data:', error);
        throw new Error('Internal Server Error');
      }
    },
  Mutation: {
    addClothing: async (_, { input }) => {
      try {
        const clothing = await Clothing.create(input);
        return clothing;
      } catch (error) {
        console.error('Error adding clothing:', error);
        throw new Error('Internal Server Error');
      }
    },
    
  },
  
}
}

    
module.exports = resolvers;


