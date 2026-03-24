"use client";

import { withLogin } from "@/commons/hocs/withLogin";
import CreateVoucherUI from "./_components";

function VoucherNew() {
  return <CreateVoucherUI />;
}

export default withLogin(VoucherNew);
