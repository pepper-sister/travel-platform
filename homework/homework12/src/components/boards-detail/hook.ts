"use client";

import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { FetchBoardDocument } from "@/commons/graphql/graphql";

export default function useBoardsDetail() {
  const params = useParams();

  const { data } = useQuery(FetchBoardDocument, {
    variables: { userboardId: String(params.boardId) },
  });

  return { params, data };
}
