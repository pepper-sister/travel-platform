import Image from "next/image";
import styles from "./styles.module.css";
import { usePurchaseDetailTitle } from "./hook";
import { usePurchaseDetail } from "../hook";

export default function PurchaseDetailTitleUI() {
  const { data } = usePurchaseDetail();
  const { titleIcon, onClickDeleteProduct } = usePurchaseDetailTitle();

  return (
    <div className="column__sort gap__8">
      <div className="row__sort row__between column__center">
        <h1 className="f__28 w__700 l__36">{data?.fetchTravelproduct.name}</h1>
        <div className="row__sort column__center gap__16">
          {titleIcon.map((el) => (
            <Image
              key={el}
              style={{ filter: el === "delete" ? "invert(1)" : "", cursor: "pointer" }}
              alt={el}
              src={`/images/purchase-detail/purchase-detail-title/${el}.png`}
              width={24}
              height={24}
              onClick={el === "delete" ? onClickDeleteProduct : () => {}}
            />
          ))}
          <div className={`${styles.bookmark__icon} row__sort column__center`}>
            <Image
              style={{ filter: "invert(1)" }}
              alt="bookmark"
              src="/images/purchase-detail/purchase-detail-title/bookmark.png"
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
