const typeDefs = `
 
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
    
  }
`;

module.exports = typeDefs;
