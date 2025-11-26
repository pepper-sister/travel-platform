"use client";

import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { FetchBoardDocument } from "@/commons/graphql/graphql";
import { FETCH_COMMENT } from "./queries";

export const useBoardsDetail = () => {
  const params = useParams();

  const { data } = useQuery(FetchBoardDocument, {
    variables: { boardId: String(params.boardId) },
  });

  const { refetch } = useQuery(FETCH_COMMENT, {
    variables: { boardId: params.boardId },
  });

  return { params, data, refetch };
};
