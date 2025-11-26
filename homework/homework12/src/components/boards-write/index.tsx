"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useBoardsWrite } from "./hook";
import { IBoardWriteData } from "./types";

export default function BoardsWrite(props: IBoardWriteData) {
  const { onChangeWriter, onChangePassword, onChangeTitle, onChangeContents, isActive, onClickUpdate, onClickSubmit } =
    useBoardsWrite();

  return (
    <div className="column__sort gap__40">
      <header className="f__20 w__700 l__28">게시물 {props.isEdit ? "수정" : "등록"}</header>

      <main className="column__sort gap__40">
        <div className="row__sort gap__40">
          {/* 작성자 */}
          <div className="column__sort gap__8 flex">
            <div className="row__sort gap__4">
              <p className="c__333333">작성자</p>
              <p className="c__f66a6a">*</p>
            </div>
            <input
              className={`${styles.input__text} ${props.isEdit ? "bg__F2F2F2" : ""}`}
              type="text"
              placeholder="작성자 명을 입력해 주세요."
              onChange={onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              disabled={props.isEdit ? true : false}
            />
            {/* <div className="c__f66a6a">{writerError}</div> */}
          </div>
          {/* 비밀번호 */}
          <div className="column__sort gap__8 flex">
            <div className="row__sort gap__4">
              <p className="c__333333">비밀번호</p>
              <p className="c__f66a6a">*</p>
            </div>
            <input
              className={`${styles.input__text} ${props.isEdit ? "bg__F2F2F2" : ""}`}
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              onChange={onChangePassword}
              disabled={props.isEdit ? true : false}
            />
            {/* <div className="c__f66a6a">{passwordError}</div> */}
          </div>
        </div>
        <div className="div"></div>

        {/* 제목 */}
        <div className="column__sort gap__8">
          <div className="row__sort gap__4">
            <p className="c__333333">제목</p>
            <p className="c__f66a6a">*</p>
          </div>
          <input
            className={styles.input__text}
            type="text"
            placeholder="제목을 입력해 주세요."
            onChange={onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          {/* <div className="c__f66a6a">{titleError}</div> */}
        </div>
        <div className="div"></div>

        {/* 내용 */}
        <div className="column__sort gap__8">
          <div className="row__sort gap__4">
            <p className="c__333333">내용</p>
            <p className="c__f66a6a">*</p>
          </div>
          <textarea
            className={styles.textarea__text}
            placeholder="내용을 입력해 주세요."
            onChange={onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          {/* <div className="c__f66a6a">{contentsError}</div> */}
        </div>

        {/* 주소 */}
        <div className="column__sort gap__8">
          <p className="c__333333">주소</p>
          <div className="row__sort gap__8">
            <input className={styles.input__number} type="text" placeholder="01234" maxLength={5} />
            <button className={`${styles.white__btn} white__btn`}>우편번호 검색</button>
          </div>
          <input className={styles.input__text} type="text" placeholder="주소를 입력해 주세요." />
          <input className={styles.input__text} type="text" placeholder="상세주소" />
        </div>
        <div className="div"></div>

        {/* 유튜브 링크 */}
        <div className="column__sort gap__8">
          <p className="c__333333">유튜브 링크</p>
          <input className={styles.input__text} type="text" placeholder="링크를 입력해 주세요." />
        </div>
        <div className="div"></div>

        {/* 사진 첨부 */}
        <div className="column__sort gap__8">
          <p className="c__333333">사진 첨부</p>
          <div className="row__sort gap__16">
            <div className={styles.img__section}>
              <div className={styles.img}></div>
              <div className={`${styles.img__upload} column__sort column__center gap__8`}>
                <Image
                  className={styles.img__plus}
                  src="/images/add.png"
                  alt="사진업로드"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <p className="w__400 c__777777">클릭해서 사진 업로드</p>
              </div>
            </div>
            <div className={styles.img__section}>
              <div className={styles.img}></div>
              <div className={`${styles.img__upload} column__sort column__center gap__8`}>
                <Image
                  className={styles.img__plus}
                  src="/images/add.png"
                  alt="사진업로드"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <p className="w__400 c__777777">클릭해서 사진 업로드</p>
              </div>
            </div>
            <div className={styles.img__section}>
              <div className={styles.img}></div>
              <div className={`${styles.img__upload} column__sort column__center gap__8`}>
                <Image
                  className={styles.img__plus}
                  src="/images/add.png"
                  alt="사진업로드"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <p className="w__400 c__777777">클릭해서 사진 업로드</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="row__sort gap__16">
          <button className={`${styles.white__btn} white__btn f__18 w__600`}>취소</button>
          <button
            className={`${styles.blue__btn} click f__18 w__600 c__ffffff`}
            disabled={props.isEdit ? false : isActive}
            onClick={props.isEdit ? () => onClickUpdate(props.data?.fetchBoard._id ?? "") : onClickSubmit}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </button>
        </div>
      </footer>
    </div>
  );
}
