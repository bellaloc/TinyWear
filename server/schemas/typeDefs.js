const typeDefs = `
 
type User {
  _id: ID
  email: String
  password: String
}
type Auth {
  token: ID!
  user: User
}

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
    users: [User]
    user(email: String!): User
    clothing(category: String, age: Int, gender: String): [Clothing]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addClothing(input: ClothingInput): Clothing
    
  }
`;

module.exports = typeDefs;
