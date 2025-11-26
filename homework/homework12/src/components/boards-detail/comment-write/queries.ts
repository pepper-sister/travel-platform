import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
      _id
    }
  }
`;

export const FETCH_COMMENT = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
    }
  }
`;
