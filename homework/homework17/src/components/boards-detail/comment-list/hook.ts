"use client";

import { FetchBoardCommentsDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { IFetchCommentData } from "./types";

export const useCommentList = (props: IFetchCommentData) => {
  const { data, fetchMore } = useQuery(FetchBoardCommentsDocument, {
    variables: { boardId: String(props.params.boardId) },
  });

  return { data, fetchMore };
};
