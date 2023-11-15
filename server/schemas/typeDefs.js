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

type Shirt {
  _id: ID
  name: String
  img: String
  size: Int
  gender: String
  color: String
  price: Int
  itemDescription: String
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
    allShirts: [Shirt]
    filteredShirts(_id: ID, size: Int, color: String, gender: String ): Shirt
    clothing(category: String, age: Int, gender: String): [Clothing]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addClothing(input: ClothingInput): Clothing
    
  }
`;

module.exports = typeDefs;
