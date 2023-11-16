// schemas/resolvers.js
const { User, Shirt, Onesie, Pant } = require('../models');
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
     pants: async () => {
      return Pant.find();
     },
     onsies: async () => {
      return Onesie.find();
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
      filteredPants: async (parent, { _id, size, gender, color}) => {
        try {
         const filter = {};
         if (_id) filter._id = _id;
         if (size) filter.size = size;
         if (gender) filter.gender = gender;
         if (color) filter.color = color;
 
         const pantsDisplayed = await Pant.find(filter);
         return pantsDisplayed
        } catch ( error ) {
         console.error( error);
        }
       },
       filteredOnesies: async (parent, { _id, size, gender, color}) => {
        try {
         const filter = {};
         if (_id) filter._id = _id;
         if (size) filter.size = size;
         if (gender) filter.gender = gender;
         if (color) filter.color = color;
 
         const onesiesDisplayed = await Onesie.find(filter);
         return onesiesDisplayed
        } catch ( error ) {
         console.error( error);
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
  },
  
}


    
module.exports = resolvers;


