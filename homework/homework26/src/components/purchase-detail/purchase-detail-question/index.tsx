import Image from "next/image";
import styles from "./styles.module.css";

export default function PurchaseDetailQuestionUI() {
  return (
    <div className="column__sort gap__24">
      <div className="row__sort gap__8">
        <Image src="/images/purchase-detail/purchase-detail-question/chat.png" alt="chat" width={24} height={24} />
        <p className="w__600">문의하기</p>
      </div>
      <div className="column__sort column__right gap__16">
        <div className="width__100 relative column__sort">
          <textarea
            className={`${styles.textarea} input__border`}
            placeholder="문의사항을 입력해 주세요."
            maxLength={100}
          />
          <p className={`${styles.textarea__count} c__ABABAB`}>/100</p>
        </div>
        <button className="br__8 padding__12__16 bg__000000 c__ffffff">문의 하기</button>
      </div>
    </div>
  );
}
