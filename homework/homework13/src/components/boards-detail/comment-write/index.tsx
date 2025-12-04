import Image from "next/image";
import styles from "./styles.module.css";
import { Rate } from "antd";
import { useCommentWrite } from "./hook";
import { IFetchCommentData } from "./types";

export default function CommentWriteUI(props: IFetchCommentData) {
  const { onChangeWriter, onChangePassword, onChangeComment, onClickSubmit, writer, password, comment, isActive } =
    useCommentWrite(props);

  return (
    <div className={`${styles.comment__write} column__sort gap__24`}>
      <div className="row__sort gap__8">
        <Image src="/images/chat.png" alt="chat" width={24} height={24} />
        <p className="w__600">댓글</p>
      </div>

      <Rate className={styles.comment__star} />

      <div className="column__sort column__right gap__16">
        <div className="column__sort width__100 gap__16">
          <div className={`${styles.comment__input__section} row__sort gap__16`}>
            <div className="column__sort gap__8">
              <div className="row__sort gap__4">
                <p className="c__333333">작성자</p>
                <p className="c__f66a6a">*</p>
              </div>

              <input
                type="text"
                onChange={onChangeWriter}
                className={`${styles.comment__input}`}
                placeholder="작성자 명을 입력해 주세요."
                value={writer}
              />
            </div>

            <div className="column__sort gap__8">
              <div className="row__sort gap__4">
                <p className="c__333333">비밀번호</p>
                <p className="c__f66a6a">*</p>
              </div>

              <input
                type="password"
                onChange={onChangePassword}
                className={`${styles.comment__input}`}
                placeholder="비밀번호를 입력해 주세요."
                value={password}
              />
            </div>
          </div>

          <div className={`${styles.comment__textarea__section}`}>
            <textarea
              onChange={onChangeComment}
              className={`${styles.comment__textarea} width__100 height__100`}
              maxLength={100}
              placeholder="댓글을 입력해 주세요."
              value={comment}
            />
            <p className={`${styles.comment__text__count}`}>{comment.length}/100</p>
          </div>
        </div>

        <button disabled={isActive} onClick={onClickSubmit} className={`${styles.black__btn} f__18 w__600 `}>
          댓글 등록
        </button>
      </div>
    </div>
  );
}
