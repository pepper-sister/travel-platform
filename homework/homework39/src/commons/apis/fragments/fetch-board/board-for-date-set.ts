import { gql } from "@apollo/client";

export const BoardForDateSet = gql`
  fragment BoardForDateSet on Board {
    createdAt
    updatedAt
    deletedAt
  }
`;
