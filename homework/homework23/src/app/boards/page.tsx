"use client";

import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import { useBoardsListStore } from "@/commons/stores/boards-list";
import BoardsListUI from "@/components/boards-list/list";
import PaginationUI from "@/components/boards-list/pagination";
import SearchUI from "@/components/boards-list/search";
import { useQuery } from "@apollo/client/react";

export default function BoardsList() {
  const { page } = useBoardsListStore();

  const { data, refetch } = useQuery(FetchBoardsDocument, {
    variables: {
      page: page,
    },
  });

  return (
    <div className="body__sort">
      <div className="body column__sort gap__24">
        <div className="f__28 w__700 l__36">트립토크 게시판</div>
        <SearchUI refetch={refetch} isBoard={true} />
        <div className="column__sort gap__8 list__section">
          <BoardsListUI data={data} />
          <PaginationUI />
        </div>
      </div>
    </div>
  );
}
