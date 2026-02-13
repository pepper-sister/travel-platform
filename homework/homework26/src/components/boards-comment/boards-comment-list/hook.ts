"use client";

import { FetchBoardCommentsDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { useState } from "react";

export const useCommentList = () => {
  const params = useParams();
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FetchBoardCommentsDocument, {
    variables: { boardId: String(params.boardId) },
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
