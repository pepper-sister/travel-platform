"use client";

import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { FetchBoardDocument } from "@/commons/graphql/graphql";

export const useBoardsDetail = () => {
  const params = useParams();
  const { data } = useQuery(FetchBoardDocument, {
    variables: { boardId: String(params.boardId) },
  });

  return { params, data };
};
