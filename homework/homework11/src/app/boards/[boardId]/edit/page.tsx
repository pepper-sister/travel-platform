"use client";

import { FETCH_BOARD } from "@/components/boards-detail/queries";
import BoardsWrite from "@/components/boards-write";
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
