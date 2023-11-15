// utils/mutations.js
import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation addUser($email: String!, $password: String!) {
  addUser(email: $email, password: $password) {
    token user {
      _id
      email
    }
  }
}
`
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
        }
      }
      }
      `

export const CREATE_CLOTHING_ITEM = gql`
  mutation CreateClothingItem($input: ClothingItemInput!) {
    createClothingItem(input: $input) {
      id
      name
      category
      age
      gender
      price
    }
  }
`;

export const UPDATE_CLOTHING_ITEM = gql`
  mutation UpdateClothingItem($id: ID!, $input: ClothingItemInput!) {
    updateClothingItem(id: $id, input: $input) {
      id
      name
      category
      age
      gender
      price
    }
  }
`;

export const DELETE_CLOTHING_ITEM = gql`
  mutation DeleteClothingItem($id: ID!) {
    deleteClothingItem(id: $id) {
      id
      name
      category
      age
      gender
      price

    }
  }
`;