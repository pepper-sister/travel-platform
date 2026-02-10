import Image from "next/image";
import styles from "./styles.module.css";

export default function PurchaseEventUI() {
  return (
    <div className={`${styles.event__section} row__sort row__between`}>
      <div className={styles.event__img}>
        <Image src="/images/purchase/purchase-event/event.jpg" alt="특가숙소" fill style={{ objectFit: "cover" }} />
        <div className={styles.event__cover}></div>
      </div>
      <div className={`${styles.event__txt__section} column__sort column__right row__center gap__18`}>
        <div className="row__sort gap__16">
          <p className={`${styles.event__txt} f__18 w__700 l__130 c__ffffff`}>‘솔로트립&apos; 독점 숙소</p>
          <p className={`${styles.event__txt} f__18 w__700 l__130 c__ffffff`}>9.24 얼리버드 오픈 예약</p>
        </div>
        <div className="column__sort column__right">
          <h2 className="f__34 w__700 l__130">천만 관객이 사랑한</h2>
          <h2 className="f__34 w__700 l__130">빌 페소 르꼬 전시회 근처 숙소 특가 예약</h2>
        </div>
      </div>
    </div>
  );
}
