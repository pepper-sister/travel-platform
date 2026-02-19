"use client";

import BoardsDetailUI from "@/components/boards-detail";
import CommentWithQuestionListUI from "@/components/comment-with-question/comment-with-question-list";
import CommentWithQuestionWriteUI from "@/components/comment-with-question/comment-with-question-write";

export default function BoardsDetail() {
  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20">
        <BoardsDetailUI />
        <CommentWithQuestionWriteUI />
        <CommentWithQuestionListUI />
      </div>
    </div>
  );
}
