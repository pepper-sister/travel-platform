"use client";

import BoardsDetailUI from "@/components/boards-detail/detail";
import useBoardsDetail from "@/components/boards-detail/detail/hook";

export default function BoardsDetail() {
  const { params, data } = useBoardsDetail();

  return <BoardsDetailUI params={params} data={data} />;
}
