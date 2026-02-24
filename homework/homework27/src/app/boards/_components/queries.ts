import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($endDate: DateTime, $startDate: DateTime, $search: String, $page: Int!) {
    fetchBoards(endDate: $endDate, startDate: $startDate, search: $search, page: $page) {
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
