"use client";

import BoardsListUI from "@/components/boards-list/list";
import PaginationUI from "@/components/boards-list/pagination";
import SearchUI from "@/components/boards-list/search";

export default function BoardsList() {
  return (
    <div className="body__sort">
      <div className="body column__sort gap__24">
        <div className="f__28 w__700 l__36">트립토크 게시판</div>
        <SearchUI isBoard={true} />
        <div className="column__sort gap__8 list__section">
          <BoardsListUI />
          <PaginationUI />
        </div>
      </div>
    </div>
  );
}
