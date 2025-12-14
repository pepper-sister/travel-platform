"use client";

import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import BoardsListUI from "@/components/boards-list/list";
import PaginationUI from "@/components/boards-list/pagination";
import { useQuery } from "@apollo/client/react";

export default function BoardsList() {
  const { data, refetch } = useQuery(FetchBoardsDocument, {
    variables: {
      clickPage: 1,
    },
  });

  const onRefetch = (clickPage: number) => {
    refetch({ clickPage: clickPage });
  };

  return (
    <div className="body__padding">
      <div className="column__sort gap__8 list__section">
        <BoardsListUI data={data} />
        <PaginationUI onRefetch={onRefetch} />
      </div>
    </div>
  );
}
