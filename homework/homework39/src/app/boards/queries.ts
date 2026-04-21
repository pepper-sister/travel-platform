import { gql } from "@apollo/client";

export const FETCH_BOARDS_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      likeCount
      images
      user {
        picture
      }
      createdAt
    }
  }
`;
