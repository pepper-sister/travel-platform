import Image from "next/image";
import styles from "./styles.module.css";
import { Rate } from "antd";
import { useWrite } from "./hook";
import { useVoucherStore } from "@/commons/stores/voucher";

export default function WriteUI() {
  const { rate, setRate, form, isActive, onChangeForm, onClickSubmit } = useWrite();
  const { isVoucher } = useVoucherStore();

  return (
    <div className="padding__40__0 column__sort gap__24">
      <div className="row__sort gap__8">
        <Image src="/images/comment-with-question/chat.png" alt="chat" width={24} height={24} />
        <p className="w__600">{isVoucher ? "문의하기" : "댓글"}</p>
      </div>
      {isVoucher ? "" : <Rate className={`${styles.comment__star} row__sort gap__8`} value={rate} onChange={setRate} />}
      <div className="width__100 column__sort gap__16">
        <div className="column__sort column__right gap__16">
          <div className={`${styles.comment__textarea__section} width__100 relative`}>
            <textarea
              id="contents"
              onChange={onChangeForm}
              className={`${styles.comment__textarea} width__100 height__100 input__border`}
              maxLength={100}
              placeholder={`${isVoucher ? "문의사항" : "댓글"}을 입력해 주세요.`}
              value={form.contents}
            />
            <p className={`${styles.comment__text__count}`}>
              {form.contents.length}
              /100
            </p>
          </div>
          <button
            disabled={!isActive}
            onClick={onClickSubmit}
            className={`${styles.submit__btn} bg__000000 br__8 padding__12__16 click f__18 w__600 c__ffffff`}
          >
            {isVoucher ? "문의 하기" : "댓글 등록"}
          </button>
        </div>
      </div>
    </div>
  );
}
