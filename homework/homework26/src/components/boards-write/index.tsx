"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useBoardsWrite } from "./hook";
import { IBoardWriteData } from "./types";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Modal } from "antd";
import Link from "next/link";
import { useLoginStore } from "@/commons/stores/login";
import { usePurchaseStore } from "@/commons/stores/purchase";

export default function BoardsWriteUI(props: IBoardWriteData) {
  const {
    form,
    isModalOpen,
    isActive,
    fileRef,
    data,
    onToggleModal,
    handleComplete,
    onChangeForm,
    onChangeAddress,
    onClickUpload,
    onChangeFile,
    onClickDelete,
    onClickSubmit,
    onClickUpdate,
  } = useBoardsWrite(props);
  const { isLoggedIn } = useLoginStore();
  const { isPurchase } = usePurchaseStore();

  return (
    <div className="body__sort">
      <div className="body column__sort gap__40">
        <header className="f__20 w__700 l__28">
          {isPurchase ? "숙박권 판매하기" : `게시물 ${props.isEdit ? "수정" : "등록"}`}
        </header>

        <main className="column__sort gap__40">
          <div className="row__sort gap__40">
            <div className="column__sort gap__8 flex">
              <div className="row__sort gap__4">
                <p className="c__333333">{isPurchase ? "상품명" : "작성자"}</p>
                <p className="c__F66A6A">*</p>
              </div>
              <input
                className={`${styles.input__text} ${props.isEdit ? "bg__F2F2F2" : ""}`}
                id="writer"
                type="text"
                placeholder={isPurchase ? "상품명을 입력해 주세요." : "작성자 명을 입력해 주세요."}
                onChange={onChangeForm}
                defaultValue={form.writer ?? ""}
                disabled={props.isEdit}
              />
            </div>
            {isPurchase ? (
              ""
            ) : (
              <div className="column__sort gap__8 flex">
                <div className="row__sort gap__4">
                  <p className="c__333333">비밀번호</p>
                  <p className="c__F66A6A">*</p>
                </div>
                <input
                  className={`${styles.input__text} ${props.isEdit ? "bg__F2F2F2" : ""}`}
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                  onChange={onChangeForm}
                  disabled={props.isEdit}
                />
              </div>
            )}
          </div>
          <div className="div"></div>

          <div className="column__sort gap__8">
            <div className="row__sort gap__4">
              <p className="c__333333">{isPurchase ? "한줄 요약" : "제목"}</p>
              <p className="c__F66A6A">*</p>
            </div>
            <input
              className={styles.input__text}
              id="title"
              type="text"
              placeholder={isPurchase ? "상품을 한줄로 요약해 주세요." : "제목을 입력해 주세요."}
              onChange={onChangeForm}
              defaultValue={form.title}
            />
          </div>
          <div className="div"></div>

          <div className="column__sort gap__8">
            <div className="row__sort gap__4">
              <p className="c__333333">{isPurchase ? "상품 설명" : "내용"}</p>
              <p className="c__F66A6A">*</p>
            </div>
            <textarea
              className={styles.textarea__text}
              id="contents"
              placeholder="내용을 입력해 주세요."
              onChange={onChangeForm}
              defaultValue={form.contents}
            />
          </div>
          {isPurchase ? (
            <>
              <div className="div"></div>
              <div className="column__sort gap__8">
                <div className="row__sort gap__4">
                  <p className="c__333333">판매 가격</p>
                  <p className="c__F66A6A">*</p>
                </div>
                <input
                  className={styles.input__text}
                  id="won"
                  type="number"
                  placeholder="판매 가격을 입력해 주세요.(원 단위)"
                  onChange={onChangeForm}
                  defaultValue={form.title}
                />
              </div>

              <div className="div"></div>
              <div className="column__sort gap__8">
                <p className="c__333333">태그 입력</p>
                <input
                  className={styles.input__text}
                  id="tag"
                  type="text"
                  placeholder="태그를 입력해 주세요."
                  onChange={onChangeForm}
                  defaultValue={form.title}
                />
              </div>
              <div className="div"></div>
            </>
          ) : (
            ""
          )}

          <div className="row__sort gap__40">
            <div className="column__sort gap__40">
              <div className={`${isPurchase ? styles.purchase__address : ""} column__sort gap__8`}>
                <p className="c__333333">주소</p>
                <div className="row__sort gap__8">
                  <input
                    className={styles.input__number}
                    type="text"
                    placeholder="01234"
                    maxLength={5}
                    disabled={true}
                    value={form.address.zipcode}
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
                  placeholder={isPurchase ? "상세주소를 입력해 주세요." : "주소를 입력해 주세요."}
                  disabled={true}
                  value={form.address.address}
                />
                {isPurchase ? (
                  ""
                ) : (
                  <input
                    className={styles.input__text}
                    type="text"
                    placeholder="상세주소"
                    onChange={onChangeAddress}
                    value={form.address.addressDetail}
                  />
                )}
              </div>
              {isPurchase ? (
                <div className="column__sort gap__16">
                  <div className="column__sort gap__8">
                    <p>위도(LAT)</p>
                    <input
                      className={styles.input__purchase__text}
                      type="text"
                      placeholder="주소를 먼저 입력해 주세요."
                      disabled={true}
                    />
                  </div>
                  <div className="column__sort gap__8">
                    <p>경도(LNG)</p>
                    <input
                      className={styles.input__purchase__text}
                      type="text"
                      placeholder="주소를 먼저 입력해 주세요."
                      disabled={true}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {isPurchase ? (
              <div className="width__100 column__sort gap__16">
                <p>상세 위치</p>
                <div className={`${styles.purchase__location} row__sort row__center column__center bg__E4E4E4`}>
                  <p className="f__14 l__20 c__777777">주소를 먼저 입력해 주세요.</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="div"></div>

          {isPurchase ? (
            ""
          ) : (
            <>
              <div className="column__sort gap__8">
                <p className="c__333333">유튜브 링크</p>
                <input
                  className={styles.input__text}
                  id="youtubeUrl"
                  type="text"
                  placeholder="링크를 입력해 주세요."
                  onChange={onChangeForm}
                  value={form.youtubeUrl}
                />
              </div>
              <div className="div"></div>
            </>
          )}

          <div className="column__sort gap__8">
            <p className="c__333333">사진 첨부</p>
            <div className="row__sort gap__16">
              {isPurchase ? (
                ""
              ) : (
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
              )}

              <div className={`${styles.img__section} click`} onClick={onClickUpload}>
                <div className={styles.img}></div>
                <div className={`${styles.img__upload} column__sort column__center gap__8`}>
                  {form.images ? (
                    <>
                      <Image
                        src={`https://storage.googleapis.com/${form.images}`}
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

              {isPurchase ? (
                ""
              ) : (
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
              )}
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className="row__sort gap__16">
            <button className={`${styles.white__btn} white__btn f__18 w__600`}>취소</button>
            <button
              className={`${styles.blue__btn} click f__18 w__600 c__ffffff`}
              disabled={isActive}
              onClick={props.isEdit ? () => onClickUpdate(data?.fetchBoard._id ?? "") : onClickSubmit}
            >
              {props.isEdit ? "수정" : "등록"}하기
            </button>
          </div>
        </footer>
      </div>

      <Modal open={!isLoggedIn} closable={false} footer={null}>
        <div className="column__sort column__center gap__24">
          <div className="column__sort column__center gap__12">
            <h1 className="f__18 w__600">로그인이 필요한 기능입니다.</h1>
            <Image src="/images/sign/logo.png" alt="logo" width={78} height={48} />
          </div>

          <Link href="/sign" className="blue__btn f__14 w__600 l__20 c__ffffff">
            로그인 하러가기
          </Link>
        </div>
      </Modal>
    </div>
  );
}
