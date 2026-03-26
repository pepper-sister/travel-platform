"use client";

import { withLogin } from "@/commons/hocs/withLogin";
import EditBoardUI from "./_components";

function BoardsEdit() {
  return <EditBoardUI />;
}

export default withLogin(BoardsEdit);
