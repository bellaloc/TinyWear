// utils/queries.js
import { gql } from '@apollo/client';

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
