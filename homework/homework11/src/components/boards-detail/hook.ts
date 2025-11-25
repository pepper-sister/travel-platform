"use client";

import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { FETCH_BOARD } from "./queries";

export default function useBoardsDetail() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { userboardId: params.boardId },
  });

  return { params, data };
}
