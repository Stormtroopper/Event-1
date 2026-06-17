import  {gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      
      id
    name
    email
    isEmailVerified
    createdAt
    updatedAt
      }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        isEmailVerified
        
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String, $email: String) {
    updateUser(id: $id, name: $name, email: $email) {
      id
      name
      email
      isEmailVerified
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      email

    }
  }
`;

export const DELETE_EXTRACTION = gql`
  mutation DeleteExtraction($id: ID!) {
    deleteExtraction(id: $id) {
      id
      userId
      filePath
      extractedText
    }
  }
`;