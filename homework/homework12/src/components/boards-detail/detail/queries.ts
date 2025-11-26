import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($userboardId: ID!) {
    fetchBoard(boardId: $userboardId) {
      _id
      writer
      title
      contents
    }
  }
`;
