import { gql } from "@apollo/client";
import { BoardForLikeSet } from "../fragments/fetch-board/board-for-like-set";
import { BoardForAddressSet } from "../fragments/fetch-board/board-for-address-set";
import { BoardForUserSet } from "../fragments/fetch-board/board-for-user-set";
import { BoardForDateSet } from "../fragments/fetch-board/board-for-date-set";

export const FETCH_BOARD = gql`
  ${BoardForLikeSet}
  ${BoardForAddressSet}
  ${BoardForUserSet}
  ${BoardForDateSet}

  query fetchBoard(
    $boardId: ID!
    $isBoardForLikeSet: Boolean = false
    $isBoardForAddressSet: Boolean = false
    $isBoardForUserSet: Boolean = false
    $isBoardForDateSet: Boolean = false
  ) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      images

      ...BoardForLikeSet @include(if: $isBoardForLikeSet)
      ...BoardForAddressSet @include(if: $isBoardForAddressSet)
      ...BoardForUserSet @include(if: $isBoardForUserSet)
      ...BoardForDateSet @include(if: $isBoardForDateSet)
    }
  }
`;
