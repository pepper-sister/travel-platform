"use client";

import BoardsDetailUI from "@/components/boards-detail";
import useBoardsDetail from "@/components/boards-detail/hook";

export default function BoardsDetail() {
  const { params, data } = useBoardsDetail();

  return <BoardsDetailUI params={params} data={data} />;
}
