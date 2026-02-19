"use client";

import CommentWithQuestionListUI from "@/components/comment-with-question/comment-with-question-list";
import CommentWithQuestionWriteUI from "@/components/comment-with-question/comment-with-question-write";
import TitleUI from "./_components/title";
import ImageUI from "./_components/image";
import SellerUI from "./_components/seller";
import ContentsUI from "./_components/contents";

export default function VoucherDetail() {
  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__40">
        <div className="column__sort gap__24">
          <TitleUI />
          <div className="row__sort gap__24">
            <ImageUI />
            <SellerUI />
          </div>
        </div>
        <ContentsUI />
        <CommentWithQuestionWriteUI />
        <CommentWithQuestionListUI />
      </div>
    </div>
  );
}
