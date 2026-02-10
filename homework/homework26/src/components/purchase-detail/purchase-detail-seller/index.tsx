import Image from "next/image";
import styles from "./styles.module.css";
import { usePurchaseDetail } from "../hook";

export default function PurchaseDetailSellerUI() {
  const { data } = usePurchaseDetail();

  return (
    <div className="flex column__sort gap__24">
      <div className={`${styles.price__section} column__sort gap__20`}>
        <div className="column__sort gap__8">
          <h4 className="f__24 w__700 l__32">{data?.fetchTravelproduct.price?.toLocaleString()}원</h4>
          <ul className="column__sort gap__4">
            <li className={`${styles.price__txt} f__14 w__400 l__20 c__5F5F5F`}>
              숙박권은 트립트립에서 포인트 충전 후 구매하실 수 있습니다.
            </li>
            <li className={`${styles.price__txt} f__14 w__300 l__20 c__5F5F5F`}>
              상세 설명에 숙박권 사용기한을 꼭 확인해 주세요.
            </li>
          </ul>
        </div>
        <button className="blue__btn c__ffffff">구매하기</button>
      </div>
      <div className={`${styles.seller__section} column__sort gap__12`}>
        <h4 className="f__20 w__700 l__28">판매자</h4>
        <div className="row__sort column__center gap__4">
          <Image
            className={styles.purchase__profile}
            src="/images/purchase-detail/purchase-detail-seller/profile.jpg"
            alt="profile"
            width={40}
            height={40}
          />
          <p className="l__20 c__333333">김상훈</p>
        </div>
      </div>
    </div>
  );
}
