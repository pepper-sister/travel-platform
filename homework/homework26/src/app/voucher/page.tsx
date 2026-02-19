"use client";

import SearchBarUI from "@/components/search-bar";
import RecommendUI from "./_components/recommend";
import EventUI from "./_components/event";
import ToggleUI from "./_components/toggle";
import MenuUI from "./_components/menu";
import ListUI from "./_components/list";

export default function Voucher() {
  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__64">
        <RecommendUI />
        <EventUI />
        <div className="column__sort gap__24">
          <h2 className="f__28 w__700 l__36">여기에서만 예약할 수 있는 숙소</h2>
          <ToggleUI />
          <SearchBarUI />
          <div className="column__sort gap__32">
            <MenuUI />
            <ListUI />
          </div>
        </div>
      </div>
    </div>
  );
}
