"use client";

import PurchaseDetailContentsUI from "@/components/purchase-detail/purchase-detail-contents";
import PurchaseDetailImageUI from "@/components/purchase-detail/purchase-detail-image";
import PurchaseDetailQuestionUI from "@/components/purchase-detail/purchase-detail-question";
import PurchaseDetailSellerUI from "@/components/purchase-detail/purchase-detail-seller";
import PurchaseDetailTitleUI from "@/components/purchase-detail/purchase-detail-title";

export default function PurchaseDetail() {
  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__40">
        <div className="column__sort gap__24">
          <PurchaseDetailTitleUI />
          <div className="row__sort gap__24">
            <PurchaseDetailImageUI />
            <PurchaseDetailSellerUI />
          </div>
        </div>
        <PurchaseDetailContentsUI />
        <PurchaseDetailQuestionUI />
      </div>
    </div>
  );
}
