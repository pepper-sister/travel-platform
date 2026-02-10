"use client";

import CommentListUI from "@/components/boards-detail/comment-list";
import CommentWriteUI from "@/components/boards-detail/comment-write";
import BoardsDetailUI from "@/components/boards-detail/detail";

export default function BoardsDetail() {
  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20">
        <BoardsDetailUI />
        <CommentWriteUI />
        <CommentListUI />
      </div>
    </div>
  );
}
