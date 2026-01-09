import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int!) {
    fetchBoards(search: $search, page: $page) {
      _id
      title
      writer
      createdAt
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
