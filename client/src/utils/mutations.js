// utils/mutations.js
import { gql } from '@apollo/client';

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
