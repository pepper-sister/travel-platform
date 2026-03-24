"use client";

import { withLogin } from "@/commons/hocs/withLogin";
import CreateBoardUI from "../../new/_components";

function BoardsEdit() {
  return <CreateBoardUI />;
}

export default withLogin(BoardsEdit);
