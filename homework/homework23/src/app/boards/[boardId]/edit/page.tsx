"use client";

import { FetchBoardDocument } from "@/commons/graphql/graphql";
import BoardsWriteUI from "@/components/boards-write";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";

export default function BoardsEdit() {
  const params = useParams();

  const { data } = useQuery(FetchBoardDocument, {
    variables: {
      boardId: String(params.boardId),
    },
  });

  return <BoardsWriteUI isEdit={true} data={data} />;
}
