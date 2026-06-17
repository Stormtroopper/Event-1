import{ gql } from "@apollo/client";

export const GET_EXTRACTIONS = gql`
  query GetExtractions {
    getExtraction {
      id
      userId
      filePath
      extractedText
      createdAt
      updatedAt
    }
  }
`;

export const GET_EXTRACTION_BY_ID = gql`
  query GetExtractionById($id: ID!) {
    getExtractionById(id: $id) {
      id
      userId
      filePath
      extractedText
      createdAt
      updatedAt
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      email
      isEmailVerified
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      name
      email
      isEmailVerified
      createdAt
      updatedAt
    }
  }
`;