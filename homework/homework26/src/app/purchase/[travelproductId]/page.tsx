"use client";

import CommentWithQuestionListUI from "@/components/comment-with-question/comment-with-question-list";
import CommentWithQuestionWriteUI from "@/components/comment-with-question/comment-with-question-write";
import PurchaseDetailContentsUI from "@/components/purchase-detail/purchase-detail-contents";
import PurchaseDetailImageUI from "@/components/purchase-detail/purchase-detail-image";
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
        <CommentWithQuestionWriteUI />
        <CommentWithQuestionListUI />
      </div>
    </div>
  );
}
