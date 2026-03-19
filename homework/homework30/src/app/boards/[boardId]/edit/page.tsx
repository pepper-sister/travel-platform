"use client";

import { withLogin } from "@/commons/hocs/withLogin";
import CreateBoardWithVoucherUI from "@/components/create-board-with-voucher";

function BoardsEdit() {
  return <CreateBoardWithVoucherUI />;
}

export default withLogin(BoardsEdit);
