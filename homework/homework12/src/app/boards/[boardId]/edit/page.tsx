"use client";

import { FetchBoardDocument } from "@/commons/graphql/graphql";
import BoardsWrite from "@/components/boards-write";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";

export default function BoardsEdit() {
  const params = useParams();

  const { data } = useQuery(FetchBoardDocument, {
    variables: {
      userboardId: String(params.boardId),
    },
  });

  return <BoardsWrite isEdit={true} data={data} />;
}
