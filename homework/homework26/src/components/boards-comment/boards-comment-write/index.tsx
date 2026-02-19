import Image from "next/image";
import styles from "./styles.module.css";
import { Rate } from "antd";
import { useBoardsCommentWrite } from "./hook";

export default function BoardsCommentWriteUI() {
  const { rate, setRate, form, isActive, onChangeForm, onClickSubmit } = useBoardsCommentWrite();

  return (
    <div className="padding__40__0 column__sort gap__24">
      <div className="row__sort gap__8">
        <Image src="/images/boards-detail/chat.png" alt="chat" width={24} height={24} />
        <p className="w__600">댓글</p>
      </div>
      <Rate className={`${styles.comment__star} row__sort gap__8`} value={rate} onChange={setRate} />
      <div className="width__100 column__sort gap__16">
        <div className={`${styles.comment__input__section} row__sort gap__16`}>
          <div className="width__100 column__sort gap__8">
            <div className="row__sort gap__4">
              <p className="c__333333">작성자</p>
              <p className="c__F66A6A">*</p>
            </div>
            <input
              id="writer"
              type="text"
              onChange={onChangeForm}
              className={`${styles.comment__input} input__border`}
              placeholder="작성자 명을 입력해 주세요."
              value={form.writer ?? ""}
            />
          </div>
          <div className="width__100 column__sort gap__8">
            <div className="row__sort gap__4">
              <p className="c__333333">비밀번호</p>
              <p className="c__F66A6A">*</p>
            </div>
            <input
              id="password"
              type="password"
              onChange={onChangeForm}
              className={`${styles.comment__input} input__border`}
              placeholder="비밀번호를 입력해 주세요."
              value={form.password}
            />
          </div>
        </div>
        <div className="column__sort column__right gap__16">
          <div className={`${styles.comment__textarea__section} width__100 relative`}>
            <textarea
              id="contents"
              onChange={onChangeForm}
              className={`${styles.comment__textarea} width__100 height__100 input__border`}
              maxLength={100}
              placeholder="댓글을 입력해 주세요."
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
            댓글 등록
          </button>
        </div>
      </div>
    </div>
  );
}
