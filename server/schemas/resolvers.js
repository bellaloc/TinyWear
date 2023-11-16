// schemas/resolvers.js
const { Clothing, User, Shirt } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { email }) => {
      return User.findOne({ email})
    },
    shirts: async () => {
      return Shirt.find();
     },
     filteredShirts: async (parent, { _id, size, gender, color}) => {
       try {
        const filter = {};
        if (_id) filter._id = _id;
        if (size) filter.size = size;
        if (gender) filter.gender = gender;
        if (color) filter.color = color;

        const shirtsDisplayed = await Shirt.find(filter);
        return shirtsDisplayed
       } catch ( error ) {
        console.error( error);
       }
      },
   
     
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
  },
  Mutation: {
    addUser: async (parent, { email, password }) => {
      // Creates the user 
      const user = await User.create({ email, password })
      // Creates Token
      const token = signToken(user);
      return { token, user};
    },
    login: async (parent, { email, password }) => {
      // look up by email
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError
      }
      const correctPw = await user.isCorrectPassword(password) 
    if (!correctPw) {
      throw AuthenticationError
    }
    const token = signToken(user);  
    return { token, user}; 
  },
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


    
module.exports = resolvers;


