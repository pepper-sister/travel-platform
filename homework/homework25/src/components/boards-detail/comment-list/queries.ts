import { gql } from "@apollo/client";

export const FETCH_COMMENT = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      rating
      user {
        _id
        email
        name
        picture
        createdAt
        updatedAt
        deletedAt
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
