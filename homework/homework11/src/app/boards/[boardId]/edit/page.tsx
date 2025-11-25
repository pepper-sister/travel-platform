"use client";

import BoardsWrite from "@/components/boards-write";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoard($userboardId: ID!) {
    fetchBoard(boardId: $userboardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardsEdit() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      userboardId: params.boardId,
    },
  });

  return <BoardsWrite isEdit={true} data={data} />;
}
