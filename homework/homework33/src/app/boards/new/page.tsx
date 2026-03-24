"use client";

import { withLogin } from "@/commons/hocs/withLogin";
import CreateBoardUI from "./_components";

function BoardsNew() {
  return <CreateBoardUI />;
}

export default withLogin(BoardsNew);
