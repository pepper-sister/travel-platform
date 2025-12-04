"use client";

import CommentListUI from "@/components/boards-detail/comment-list";
import CommentWriteUI from "@/components/boards-detail/comment-write";
import BoardsDetailUI from "@/components/boards-detail/detail";
import { useBoardsDetail } from "@/components/boards-detail/detail/hook";

export default function BoardsDetail() {
  const { params, data } = useBoardsDetail();

  return (
    <div className="body__padding">
      <BoardsDetailUI params={params} data={data} />
      <CommentWriteUI params={params} />
      <CommentListUI params={params} />
    </div>
  );
}
