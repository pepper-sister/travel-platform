import Image from "next/image";
import { useTitle } from "./hook";
import { useVoucherDetail } from "../hook";
import { Tooltip } from "@mui/material";

export default function TitleUI() {
  const { data } = useVoucherDetail();
  const { titleIcon, onClickDeleteProduct, onClickPick } = useTitle();

  return (
    <div className="column__sort gap__8">
      <div className="row__sort row__between column__center">
        <h1 className="f__28 w__700 l__36">{data?.fetchTravelproduct.name}</h1>
        <div className="row__sort column__center gap__16">
          {titleIcon.map((el) =>
            el === "location" ? (
              <Tooltip
                key={el}
                title={(data?.fetchTravelproduct as any)?.travelproductAddress?.address}
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
                <Image className="click" alt={el} src={`/images/voucher-detail/${el}.png`} width={24} height={24} />
              </Tooltip>
            ) : (
              <Image
                key={el}
                className={`${el === "delete" ? "filter" : ""} click`}
                alt={el}
                src={`/images/voucher-detail/${el}.png`}
                width={24}
                height={24}
                onClick={el === "delete" ? onClickDeleteProduct : () => {}}
              />
            ),
          )}
          <div className="br__8 padding__4__8 row__sort column__center bg__00000066 click">
            <Image
              onClick={onClickPick}
              className="filter"
              alt="bookmark"
              src="/images/voucher-detail/bookmark.png"
              width={24}
              height={24}
            />
            <p className="f__14 l__20 c__ffffff">{data?.fetchTravelproduct.pickedCount}</p>
          </div>
        </div>
      </div>
      <h2 className="c__777777">{data?.fetchTravelproduct.remarks}</h2>
      <h3 className="l__20 c__2974E5">
        {data?.fetchTravelproduct.tags?.length
          ? data?.fetchTravelproduct.tags?.map((el) => `#${el}`).join(" ")
          : "\u00A0"}
      </h3>
    </div>
  );
}
