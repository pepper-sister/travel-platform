"use client";

import SearchUI from "@/components/boards-list/search";
import PurchaseButtonUI from "@/components/purchase/purchase-button";
import PurchaseEventUI from "@/components/purchase/purchase-event";
import PurchaseListUI from "@/components/purchase/purchase-list";
import PurchaseMenuUI from "@/components/purchase/purchase-menu";
import PurchaseRecommendUI from "@/components/purchase/purchase-recommend";

export default function Purchase() {
  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__64">
        <PurchaseRecommendUI />
        <PurchaseEventUI />
        <div className="column__sort gap__24">
          <h2 className="f__28 w__700 l__36">여기에서만 예약할 수 있는 숙소</h2>
          <PurchaseButtonUI />
          <SearchUI isBoard={false} isPurchase={true} />
          <div className="column__sort gap__32">
            <PurchaseMenuUI />
            <PurchaseListUI />
          </div>
        </div>
      </div>
    </div>
  );
}
