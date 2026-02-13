"use client";

import BoardsCommentListUI from "@/components/boards-comment/boards-comment-list";
import BoardsCommentWriteUI from "@/components/boards-comment/boards-comment-write";
import BoardsDetailUI from "@/components/boards-detail";

export default function BoardsDetail() {
  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20">
        <BoardsDetailUI />
        <BoardsCommentWriteUI />
        <BoardsCommentListUI />
      </div>
    </div>
  );
}
