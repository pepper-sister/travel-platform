"use client";

import CommentListUI from "@/components/boards-detail/comment-list";
import CommentWriteUI from "@/components/boards-detail/comment-write";
import BoardsDetailUI from "@/components/boards-detail/detail";

export default function BoardsDetail() {
  return (
    <div className="body__sort">
      <div className="body">
        <BoardsDetailUI />
        <CommentWriteUI />
        <CommentListUI />
      </div>
    </div>
  );
}
