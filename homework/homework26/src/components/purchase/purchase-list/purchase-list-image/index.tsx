import Image from "next/image";
import styles from "./styles.module.css";
import { IPurchaseListProps } from "../types";

export default function PurchaseListImageUI({ el }: IPurchaseListProps) {
  return (
    <div className={`${styles.lodging__img} width__100 relative br__16`}>
      <Image
        src={
          el.images?.[0] && el.images[0].trim() !== ""
            ? `https://storage.googleapis.com/${el.images[0]}`
            : "/images/purchase/purchase-list/lodging1.jpg"
        }
        alt="숙소"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className={`${styles.reserve__bookmark__section} br__8 padding__4__8 row__sort column__center bg__00000066`}>
        <Image
          src="/images/purchase/purchase-list/bookmark.png"
          className="filter"
          alt="북마크"
          width={24}
          height={24}
        />
        <p className="f__14 l__20 c__ffffff">{el.pickedCount}</p>
      </div>
    </div>
  );
}
