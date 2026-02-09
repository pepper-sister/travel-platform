import Image from "next/image";
import styles from "./styles.module.css";
import { Rate } from "antd";
import { useCommentWrite } from "./hook";
import { CommentWriteProps } from "./types";

export default function CommentWriteUI(props: CommentWriteProps) {
  const isEditMode = "isCommentEdit" in props && props.isCommentEdit;
  const { rate, setRate, form, isActive, onChangeForm, onClickSubmit, onClickUpdateComment } = useCommentWrite(props);

  return (
    <div className={`${!isEditMode && `${styles.comment__write}`} column__sort gap__24`}>
      {!isEditMode && (
        <div className="row__sort gap__8">
          <Image src="/images/boards-detail/chat.png" alt="chat" width={24} height={24} />
          <p className="w__600">댓글</p>
        </div>
      )}

      <Rate className={styles.comment__star} value={rate} onChange={setRate} />

      <div className="column__sort column__right gap__16">
        <div className="column__sort width__100 gap__16">
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
                className={`${styles.comment__input}`}
                placeholder="작성자 명을 입력해 주세요."
                value={form.writer ?? ""}
                disabled={isEditMode}
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
                className={`${styles.comment__input}`}
                placeholder="비밀번호를 입력해 주세요."
                value={form.password}
              />
            </div>
          </div>

          <div className={`${styles.comment__textarea__section}`}>
            <textarea
              id="contents"
              onChange={onChangeForm}
              className={`${styles.comment__textarea} width__100 height__100`}
              maxLength={100}
              placeholder="댓글을 입력해 주세요."
              value={form.contents}
            />
            <p className={`${styles.comment__text__count}`}>
              {form.contents.length}
              /100
            </p>
          </div>
        </div>

        <div className="row__sort gap__16">
          {isEditMode && <button className={`${styles.white__btn} white__btn f__18 w__400`}>취소</button>}

          <button
            disabled={!isActive}
            onClick={!isEditMode ? onClickSubmit : onClickUpdateComment}
            className={`${styles.black__btn} f__18 w__600`}
          >
            {isEditMode ? "수정 하기" : "댓글 등록"}
          </button>
        </div>
      </div>
    </div>
  );
}
