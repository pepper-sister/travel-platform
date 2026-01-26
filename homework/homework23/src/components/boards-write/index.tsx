"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useBoardsWrite } from "./hook";
import { IBoardWriteData } from "./types";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Modal } from "antd";

export default function BoardsWriteUI(props: IBoardWriteData) {
  const {
    data,
    zonecode,
    address,
    detailAddress,
    youtubeUrl,
    imageUrl,
    onChangeInputs,
    onChangePassword,
    isActive,
    onToggleModal,
    handleComplete,
    isModalOpen,
    onChangeDetailAddress,
    onChangeYoutubeUrl,
    onClickUpload,
    onChangeFile,
    onClickDelete,
    onClickSubmit,
    onClickUpdate,
    fileRef,
  } = useBoardsWrite();

  return (
    <div className="body__sort">
      <div className="body column__sort gap__40">
        <header className="f__20 w__700 l__28">게시물 {props.isEdit ? "수정" : "등록"}</header>

        <main className="column__sort gap__40">
          <div className="row__sort gap__40">
            <div className="column__sort gap__8 flex">
              <div className="row__sort gap__4">
                <p className="c__333333">작성자</p>
                <p className="c__F66A6A">*</p>
              </div>
              <input
                className={`${styles.input__text} ${props.isEdit ? "bg__F2F2F2" : ""}`}
                id="writer"
                type="text"
                placeholder="작성자 명을 입력해 주세요."
                onChange={onChangeInputs}
                defaultValue={data?.fetchBoard.writer ?? ""}
                disabled={props.isEdit ? true : false}
              />
            </div>

            <div className="column__sort gap__8 flex">
              <div className="row__sort gap__4">
                <p className="c__333333">비밀번호</p>
                <p className="c__F66A6A">*</p>
              </div>
              <input
                className={`${styles.input__text} ${props.isEdit ? "bg__F2F2F2" : ""}`}
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                onChange={onChangePassword}
                disabled={props.isEdit ? true : false}
              />
            </div>
          </div>
          <div className="div"></div>

          <div className="column__sort gap__8">
            <div className="row__sort gap__4">
              <p className="c__333333">제목</p>
              <p className="c__F66A6A">*</p>
            </div>
            <input
              className={styles.input__text}
              id="title"
              type="text"
              placeholder="제목을 입력해 주세요."
              onChange={onChangeInputs}
              defaultValue={data?.fetchBoard.title}
            />
          </div>
          <div className="div"></div>

          <div className="column__sort gap__8">
            <div className="row__sort gap__4">
              <p className="c__333333">내용</p>
              <p className="c__F66A6A">*</p>
            </div>
            <textarea
              className={styles.textarea__text}
              id="contents"
              placeholder="내용을 입력해 주세요."
              onChange={onChangeInputs}
              defaultValue={data?.fetchBoard.contents}
            />
          </div>

          <div className="column__sort gap__8">
            <p className="c__333333">주소</p>
            <div className="row__sort gap__8">
              <input
                className={styles.input__number}
                type="text"
                placeholder="01234"
                maxLength={5}
                disabled={true}
                value={zonecode}
              />
              <button className={`${styles.white__btn} white__btn`} onClick={onToggleModal}>
                우편번호 검색
              </button>
              {isModalOpen && (
                <Modal
                  open={isModalOpen}
                  okButtonProps={{ style: { display: "none" } }}
                  cancelButtonProps={{ style: { display: "none" } }}
                >
                  <DaumPostcodeEmbed onComplete={handleComplete} />
                </Modal>
              )}
            </div>

            <input
              className={styles.input__text}
              type="text"
              placeholder="주소를 입력해 주세요."
              disabled={true}
              value={address}
            />
            <input
              className={styles.input__text}
              type="text"
              placeholder="상세주소"
              onChange={onChangeDetailAddress}
              value={detailAddress}
            />
          </div>
          <div className="div"></div>

          <div className="column__sort gap__8">
            <p className="c__333333">유튜브 링크</p>
            <input
              className={styles.input__text}
              type="text"
              placeholder="링크를 입력해 주세요."
              onChange={onChangeYoutubeUrl}
              value={youtubeUrl}
            />
          </div>
          <div className="div"></div>

          <div className="column__sort gap__8">
            <p className="c__333333">사진 첨부</p>
            <div className="row__sort gap__16">
              <div className={styles.img__section}>
                <div className={styles.img}></div>
                <div className={`${styles.img__upload} column__sort column__center gap__8`}>
                  <Image
                    src="/images/boards-write/add.png"
                    className={styles.img__plus}
                    alt="사진업로드"
                    width={0}
                    height={0}
                  />
                  <p className="w__400 c__777777">클릭해서 사진 업로드</p>
                </div>
              </div>

              <div className={`${styles.img__section} click`} onClick={onClickUpload}>
                <div className={styles.img}></div>
                <div className={`${styles.img__upload} column__sort column__center gap__8`}>
                  {imageUrl ? (
                    <>
                      <Image
                        src={`https://storage.googleapis.com/${imageUrl}`}
                        className={styles.img}
                        alt="사진업로드"
                        width={160}
                        height={160}
                      />
                      <div className={styles.img__delete__section} onClick={onClickDelete}>
                        <Image
                          src="/images/boards-write/close.png"
                          className={styles.img__delete}
                          alt="close"
                          width={20}
                          height={20}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <Image
                        src="/images/boards-write/add.png"
                        className={styles.img__plus}
                        alt="사진업로드"
                        width={0}
                        height={0}
                      />
                      <p className="w__400 c__777777">클릭해서 사진 업로드</p>
                    </>
                  )}
                </div>
              </div>
              <input
                type="file"
                onChange={onChangeFile}
                style={{ display: "none" }}
                ref={fileRef}
                accept="image/jpeg,image/png"
              />

              <div className={styles.img__section}>
                <div className={styles.img}></div>
                <div className={`${styles.img__upload} column__sort column__center gap__8`}>
                  <Image
                    src="/images/boards-write/add.png"
                    className={styles.img__plus}
                    alt="사진업로드"
                    width={0}
                    height={0}
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
              onClick={props.isEdit ? () => onClickUpdate(data?.fetchBoard._id ?? "") : onClickSubmit}
            >
              {props.isEdit ? "수정" : "등록"}하기
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
