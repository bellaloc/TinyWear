// utils/queries.js
import { gql } from '@apollo/client';



export const QUERY_PROFILES = gql`
  query users {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query user($userId: ID!) {
    profile(userId: $userId) {
      _id
      email
    }
}
      `

export const GET_CLOTHING_ITEMS = gql`
  query GetClothingItems {
    clothingItems {
      id
      name
      category
      age
      gender
      price
    }
  }
`;

export const GET_FILTERED_CLOTHING_ITEMS = gql`
  query GetFilteredClothingItems($category: String!, $age: Int!, $gender: String!) {
    filteredClothingItems(category: $category, age: $age, gender: $gender) {
      id
      name
      category
      age
      gender
      price

    }
  }
`;
