"use client";

import { FetchBoardCommentsDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { IFetchCommentData } from "./types";
import { useState } from "react";

export const useCommentList = (props: IFetchCommentData) => {
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FetchBoardCommentsDocument, {
    variables: { boardId: String(props.params.boardId) },
  });

  const onNext = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments.length) {
          setHasMore(false);
          return prev;
        }

        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
        };
      },
    });
  };

  return { data, onNext, hasMore };
};
