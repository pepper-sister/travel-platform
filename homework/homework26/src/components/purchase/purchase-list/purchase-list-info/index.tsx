import Image from "next/image";
import styles from "./styles.module.css";
import { IPurchaseListProps } from "../types";

export default function PurchaseListInfoUI({ el }: IPurchaseListProps) {
  return (
    <div className="column__sort gap__4">
      <h3 className={`${styles.lodging__txt} c__333333`}>{el.name}</h3>
      <p className={`${styles.lodging__txt} f__14 w__400 l__20 c__5F5F5F`}>{el.remarks}</p>
      <div className="column__sort gap__12">
        <p className="f__14 w__400 l__20 c__2974E5">
          {el.tags?.length ? el.tags.map((tag) => `#${tag}`).join(" ") : "\u00A0"}
        </p>
        <div className="row__sort row__between column__center">
          <div className="row__sort column__center gap__4">
            <Image
              src="/images/purchase/purchase-list/profile.jpg"
              className={styles.profile__img}
              alt="프로필"
              width={24}
              height={24}
            />
            <p className="f__14 w__300 l__20 c__5F5F5F">빈얀트리</p>
          </div>
          <div className="row__sort gap__4">
            <p className="w__600 c__1C1C1C">{el.price?.toLocaleString()}</p>
            <p className="w__600 c__1C1C1C">원</p>
          </div>
        </div>
      </div>
    </div>
  );
}
