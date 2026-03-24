"use client";

import { withLogin } from "@/commons/hocs/withLogin";
import CreateBoardWithVoucherUI from "@/components/create-board-with-voucher";

function BoardsNew() {
  return <CreateBoardWithVoucherUI />;
}

export default withLogin(BoardsNew);
