import Image from "next/image";
import { useVoucherDetail } from "../hook";
import { Tooltip } from "@mui/material";
import ImageUI from "../image";
import styles from "./styles.module.css";
import { useMobile } from "./hook";

export default function MobileUI() {
  const { data } = useVoucherDetail();
  const { titleIcon, onClickDeleteProduct } = useMobile();

  return (
    <div className="relative column__sort gap__20">
      <ImageUI />
      <div className={`${styles.profile} width__100 row__sort row__between bg__1C1C1C padding__12`}>
        <div className="row__sort column__center gap__4">
          <Image
            className={`${styles.voucher__profile} br__100 bg__E4E4E4`}
            src={(data?.fetchTravelproduct as any)?.seller?.picture ?? "/images/voucher-detail/profile.png"}
            alt="profile"
            width={24}
            height={24}
          />
          <p className="l__20 c__ffffff">{(data?.fetchTravelproduct as any)?.seller?.name}</p>
        </div>
        <div className="row__sort column__center gap__12">
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
                <Image
                  className="click filter"
                  alt={el}
                  src={`/images/voucher-detail/${el}.png`}
                  width={24}
                  height={24}
                />
              </Tooltip>
            ) : (
              <Image
                key={el}
                className="filter click"
                alt={el}
                src={`/images/voucher-detail/${el}.png`}
                width={24}
                height={24}
                onClick={el === "delete" ? onClickDeleteProduct : () => {}}
              />
            ),
          )}
        </div>
      </div>
      <div className="column__sort gap__12">
        <h3 className="l__20 c__2974E5">
          {data?.fetchTravelproduct.tags?.length
            ? data?.fetchTravelproduct.tags?.map((el) => `#${el}`).join(" ")
            : "\u00A0"}
        </h3>
        <h1 className="f__28 w__700 l__36">{data?.fetchTravelproduct.name}</h1>
        <h2 className="c__777777">{data?.fetchTravelproduct.remarks}</h2>
      </div>
      <div className={styles.divLine} />
      <h4 className="row__sort row__end f__24 w__700 l__32">{data?.fetchTravelproduct.price?.toLocaleString()}원</h4>
      <ul className={`${styles.price__section} column__sort gap__4 bg__F2F2F2`}>
        <li className={`${styles.price__txt} f__14 w__400 l__20 c__5F5F5F`}>
          숙박권은 트립트립에서 포인트 충전 후 구매하실 수 있습니다.
        </li>
        <li className={`${styles.price__txt} f__14 w__300 l__20 c__5F5F5F`}>
          상세 설명에 숙박권 사용기한을 꼭 확인해 주세요.
        </li>
      </ul>
    </div>
  );
}
