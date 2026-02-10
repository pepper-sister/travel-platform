import Image from "next/image";
import styles from "./styles.module.css";
import { IPurchaseListProps } from "../types";

export default function PurchaseListImageUI({ el }: IPurchaseListProps) {
  return (
    <div className={`${styles.lodging__img}`}>
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
      <div className={`${styles.reserve__bookmark__section} row__sort column__center`}>
        <Image
          src="/images/purchase/purchase-list/bookmark.png"
          className={styles.bookmark__img}
          alt="북마크"
          width={24}
          height={24}
        />
        <p className="f__14 l__20 c__ffffff">{el.pickedCount}</p>
      </div>
    </div>
  );
}
