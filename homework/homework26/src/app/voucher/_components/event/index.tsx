import Image from "next/image";
import styles from "./styles.module.css";

export default function EventUI() {
  return (
    <div className={`${styles.event__section} relative br__16 row__sort row__between bg__CCCBB4`}>
      <div className={`${styles.event__img} relative`}>
        <Image src="/images/voucher/event.jpg" alt="특가숙소" fill style={{ objectFit: "cover" }} />
        <div className={styles.event__cover}></div>
      </div>
      <div className="padding__48 column__sort column__right row__center gap__18">
        <div className="row__sort gap__16">
          <p className="btn__border bg__ABAA8C f__18 w__700 l__130 c__ffffff">‘솔로트립&apos; 독점 숙소</p>
          <p className="btn__border bg__ABAA8C f__18 w__700 l__130 c__ffffff">9.24 얼리버드 오픈 예약</p>
        </div>
        <div className="column__sort column__right">
          <h2 className="f__34 w__700 l__130">천만 관객이 사랑한</h2>
          <h2 className="f__34 w__700 l__130">빌 페소 르꼬 전시회 근처 숙소 특가 예약</h2>
        </div>
      </div>
    </div>
  );
}
