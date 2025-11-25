"use client";

import BoardsDetailUI from "@/components/board-detail";
import useBoardsDetail from "@/components/board-detail/hook";

export default function BoardsDetail() {
  const { params, data } = useBoardsDetail();

  <BoardsDetailUI params={params} data={data} />;
}
