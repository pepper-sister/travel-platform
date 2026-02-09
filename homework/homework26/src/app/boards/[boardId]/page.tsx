"use client";

import CommentListUI from "@/components/boards-detail/comment-list";
import CommentWriteUI from "@/components/boards-detail/comment-write";
import BoardsDetailUI from "@/components/boards-detail/detail";
import { useBoardsDetail } from "@/components/boards-detail/detail/hook";

export default function BoardsDetail() {
  const { params } = useBoardsDetail();

  return (
    <div className="body__sort">
      <div className="body">
        <BoardsDetailUI />
        <CommentWriteUI params={params} />
        <CommentListUI params={params} />
      </div>
    </div>
  );
}
