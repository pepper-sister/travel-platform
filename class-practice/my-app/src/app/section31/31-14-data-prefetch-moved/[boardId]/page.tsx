"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: params.boardId },
  });

  console.log(data);

  return (
    <>
      {/* <div>{params.qqq}번 게시글 상세페이지 이동이 완료되었습니다.</div> */}
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data ? data.fetchBoard.contents : ""}</div>
    </>
  );
}
