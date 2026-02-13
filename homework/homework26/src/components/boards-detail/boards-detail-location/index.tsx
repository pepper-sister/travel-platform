import { Tooltip } from "@mui/material";
import Image from "next/image";
import { IFetchBoardData } from "../types";

export default function BoardsDetailLocationUI({ data }: IFetchBoardData) {
  return (
    <div className="row__sort row__end gap__8">
      <Image src="/images/boards-detail/link.png" alt="link" width={24} height={24} />
      <Tooltip
        title={data?.boardAddress?.address}
        slotProps={{
          tooltip: {
            sx: {
              mt: 0,
              backgroundColor: "#FFFFFF",
              color: "#000000",
              fontFamily: "pretendard",
              fontSize: "14px",
              lineHeight: "20px",
              border: "1px solid #E4E4E4",
              boxShadow: "0px 2px 6px 2px #00000026",
              margin: "0 !important",
              padding: "8px 12px",
            },
          },
        }}
      >
        <Image src="/images/boards-detail/location.png" alt="location" width={24} height={24} />
      </Tooltip>
    </div>
  );
}
