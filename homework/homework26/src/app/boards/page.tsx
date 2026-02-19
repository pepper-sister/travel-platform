"use client";

import PaginationUI from "@/components/pagination";
import ListUI from "./_components";
import SearchBarUI from "@/components/search-bar";

export default function BoardsList() {
  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__24">
        <div className="f__28 w__700 l__36">트립토크 게시판</div>
        <SearchBarUI />
        <div className="column__sort gap__8 list__section">
          <ListUI />
          <PaginationUI />
        </div>
      </div>
    </div>
  );
}
