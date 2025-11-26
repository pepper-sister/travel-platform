import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards(page: 1) {
      _id
      title
      writer
      createdAt
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($userBoardId: ID!) {
    deleteBoard(boardId: $userBoardId)
  }
`;
