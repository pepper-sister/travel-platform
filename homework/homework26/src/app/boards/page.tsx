"use client";

import BoardsListUI from "@/components/boards-list/list";
import PaginationUI from "@/components/boards-list/pagination";
import SearchUI from "@/components/boards-list/search";

export default function BoardsList() {
  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__24">
        <div className="f__28 w__700 l__36">트립토크 게시판</div>
        <SearchUI />
        <div className="column__sort gap__8 list__section">
          <BoardsListUI />
          <PaginationUI />
        </div>
      </div>
    </div>
  );
}
