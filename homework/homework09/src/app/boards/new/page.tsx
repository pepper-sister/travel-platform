"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { useRouter } from "next/navigation";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const BoardsNew = () => {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // const [writerError, setWriterError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [titleError, setTitleError] = useState("");
  // const [contentsError, setContentsError] = useState("");

  const [isActive, setIsActive] = useState(true);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value && password && title && contents) return setIsActive(false);
    setIsActive(true);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (writer && event.target.value && title && contents) return setIsActive(false);
    setIsActive(true);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);

    if (writer && password && event.target.value && contents) return setIsActive(false);
    setIsActive(true);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);

    if (writer && password && title && event.target.value) return setIsActive(false);
    setIsActive(true);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
          },
        },
      });

      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {
      alert("에러가 발생하였습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="column__sort gap__40">
      <header className="f__20 w__700 l__28">게시물 등록</header>

      <main className="column__sort gap__40">
        <div className="row__sort gap__40">
          {/* 작성자 */}
          <div className="column__sort gap__8 flex">
            <div className="row__sort gap__4">
              <p className="c__333333">작성자</p>
              <p className="c__f66a6a">*</p>
            </div>
            <input
              className={styles.input__text}
              type="text"
              placeholder="작성자 명을 입력해 주세요."
              onChange={onChangeWriter}
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
              className={styles.input__text}
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              onChange={onChangePassword}
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
          <textarea className={styles.textarea__text} placeholder="내용을 입력해 주세요." onChange={onChangeContents} />
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
            disabled={isActive}
            onClick={onClickSubmit}
          >
            등록하기
          </button>
        </div>
      </footer>
    </div>
  );
};

export default BoardsNew;
