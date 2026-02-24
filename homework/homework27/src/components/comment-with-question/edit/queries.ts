import { gql } from "@apollo/client";

export const UPDATE_COMMENT = gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
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

export const UPDATE_QUESTION = gql`
  mutation updateTravelproductQuestion(
    $updateTravelproductQuestionInput: UpdateTravelproductQuestionInput!
    $travelproductQuestionId: ID!
  ) {
    updateTravelproductQuestion(
      updateTravelproductQuestionInput: $updateTravelproductQuestionInput
      travelproductQuestionId: $travelproductQuestionId
    ) {
      _id
      contents
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
