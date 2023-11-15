<<<<<<< HEAD
const typeDefs = `
 
  type Stripe {
    createCheckoutSession: String [Stripe]
=======
// schemas/typeDefs.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Clothing {
    _id: ID!
    category: String!
    age: Int!
    gender: String!
    name: String!
    price: Float!
  }

  input ClothingInput {
    category: String!
    age: Int!
    gender: String!
    name: String!
    price: Float!
  }

  type Query {
    clothing(category: String, age: Int, gender: String): [Clothing]
  }

  type Mutation {
    addClothing(input: ClothingInput): Clothing
>>>>>>> main
  }
`;

module.exports = typeDefs;
