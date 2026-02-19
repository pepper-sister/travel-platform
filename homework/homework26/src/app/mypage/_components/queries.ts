import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser($email: String!) {
    fetchUser(email: $email) {
      _id
      email
      name
      picture
      userPoint {
        amount
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
