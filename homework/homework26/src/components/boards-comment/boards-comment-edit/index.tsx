import { Rate } from "antd";
import styles from "./styles.module.css";
import { useBoardsCommentEdit } from "./hook";
import { ICommentEditProps } from "./types";

export default function BoardsCommentEditUI({ el, isEdit, setIsEdit }: ICommentEditProps) {
  const { rate, setRate, form, isActive, onChangeForm, onClickUpdateComment } = useBoardsCommentEdit({
    el,
    isEdit,
    setIsEdit,
  });

  return (
    <div className="column__sort gap__24">
      <Rate className={`${styles.comment__star} row__sort gap__8`} value={rate} onChange={setRate} />
      <div className="width__100 column__sort gap__16">
        <div className={`${styles.comment__input__section} row__sort gap__16`}>
          <div className="width__100 column__sort gap__8">
            <div className="row__sort gap__4">
              <p className="c__333333">작성자</p>
              <p className="c__F66A6A">*</p>
            </div>
            <input disabled={true} className={`${styles.comment__input} input__border`} value={form.writer ?? ""} />
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
          <div className="row__sort gap__16">
            <button onClick={() => setIsEdit(!isEdit)} className="white__btn br__8 padding__12__16">
              취소
            </button>
            <button
              disabled={!isActive}
              onClick={onClickUpdateComment}
              className={`${styles.edit__btn} bg__000000 br__8 padding__12__16 click f__18 w__600 c__ffffff`}
            >
              수정 하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
