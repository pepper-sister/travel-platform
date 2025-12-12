"use client";

import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import CommentItem from "@/components/15-05-comment-edit3-typescript";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const FETCH_BOARDS = gql`
  query fetchBoards($mypage: Int) {
    fetchBoards(page: $mypage) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const { data } = useQuery(FetchBoardsDocument);

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <CommentItem key={el._id} el={el} />
      ))}
    </>
  );
}
