"use client";

import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { FetchBoardCommentsDocument, FetchBoardDocument } from "@/commons/graphql/graphql";

export const useBoardsDetail = () => {
  const params = useParams();

  const { data } = useQuery(FetchBoardDocument, {
    variables: { boardId: String(params.boardId) },
  });

  const { refetch } = useQuery(FetchBoardCommentsDocument, {
    variables: { boardId: String(params.boardId) },
  });

  return { params, data, refetch };
};
