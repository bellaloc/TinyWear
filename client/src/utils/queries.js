// utils/queries.js
import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query profiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query profile($userId: ID!) {
    profile(userId: $userId) {
      _id
      name
      email
      // Add other profile fields as needed
    }
  }
`;

export const QUERY_CURRENT_USER_PROFILE = gql`
  query currentUserProfile {
    currentUserProfile {
      _id
      name
      email
      // Add other profile fields as needed
    }
  }
`;

export const QUERY_SHIRTS = gql`
  query shirts {
    shirts {
      _id
      name
      img
      size
      gender
      color
      price
      description
    }
  }
`;

export const QUERY_PANTS = gql`
  query pants {
    pants {
      _id
      name
      img
      size
      gender
      color
      price
      description
    }
  }
`;

export const QUERY_ONESIES = gql`
  query onesies {
    onesies {
      _id
      name
      img
      size
      gender
      color
      price
      description
    }
  }
`;

export const QUERY_FILTERED_SHIRTS = gql`
  query filteredShirts($size: Int) {
    filteredShirts(size: $size) {
      _id
      name
      img
      size
      gender
      color
      price
      itemDescription
    }
  }
`;

export const GET_CLOTHING_ITEMS = gql`
  query getClothingItems {
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

// export const QUERY_SINGLE_PRODUCT = gql`
//   query getSingleProduct(productId: ID!) {
//     product(productId: $productId) {
//       _id
//       name
//       img
//       size
//       gender
//       color
//       price
//       description
//     }
//   }
// `;