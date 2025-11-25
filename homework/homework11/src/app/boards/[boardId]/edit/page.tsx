"use client";

import BoardsWrite from "@/components/boards-write";
import { FETCH_BOARD } from "@/components/boards-write/queries";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";

export default function BoardsEdit() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      userboardId: params.boardId,
    },
  });

  return <BoardsWrite isEdit={true} data={data} />;
}
