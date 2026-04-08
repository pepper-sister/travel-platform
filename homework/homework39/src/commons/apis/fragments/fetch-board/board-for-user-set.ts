import { gql } from "@apollo/client";

export const BoardForUserSet = gql`
  fragment BoardForUserSet on Board {
    user {
      _id
      email
      name
      picture
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
