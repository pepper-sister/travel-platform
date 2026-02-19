import Image from "next/image";
import styles from "./styles.module.css";
import { useCreateBoardWithVoucher } from "./hook";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Modal } from "antd";
import { useCreateBoardWithVoucherStore } from "@/commons/stores/create-board-with-voucher";
import { useVoucherStore } from "@/commons/stores/voucher";

export default function CreateBoardWithVoucherUI() {
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
  } = useCreateBoardWithVoucher();
  const { isBoardEdit } = useCreateBoardWithVoucherStore();
  const { isVoucher } = useVoucherStore();

  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__40">
        <header className="f__20 w__700 l__28">
          {isVoucher ? "숙박권 판매하기" : `게시물 ${isBoardEdit ? "수정" : "등록"}`}
        </header>

        <main className="column__sort gap__40">
          <div className="row__sort gap__40">
            <div className="column__sort gap__8 flex">
              <div className="row__sort gap__4">
                <p className="c__333333">{isVoucher ? "상품명" : "작성자"}</p>
                <p className="c__F66A6A">*</p>
              </div>
              <input
                className={`${styles.input__text} ${isBoardEdit ? "bg__F2F2F2" : ""} input__border`}
                id={isVoucher ? "name" : "writer"}
                type="text"
                placeholder={isVoucher ? "상품명을 입력해 주세요." : "작성자 명을 입력해 주세요."}
                onChange={onChangeForm}
                defaultValue={isVoucher ? form.name : form.writer}
                disabled={isBoardEdit}
              />
            </div>
            {isVoucher ? (
              ""
            ) : (
              <div className="column__sort gap__8 flex">
                <div className="row__sort gap__4">
                  <p className="c__333333">비밀번호</p>
                  <p className="c__F66A6A">*</p>
                </div>
                <input
                  className={`${styles.input__text} ${isBoardEdit ? "bg__F2F2F2" : ""} input__border`}
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                  onChange={onChangeForm}
                  disabled={isBoardEdit}
                />
              </div>
            )}
          </div>
          <div className="div"></div>
          <div className="column__sort gap__8">
            <div className="row__sort gap__4">
              <p className="c__333333">{isVoucher ? "한줄 요약" : "제목"}</p>
              <p className="c__F66A6A">*</p>
            </div>
            <input
              className={`${styles.input__text} input__border`}
              id={isVoucher ? "remarks" : "title"}
              type="text"
              placeholder={isVoucher ? "상품을 한줄로 요약해 주세요." : "제목을 입력해 주세요."}
              onChange={onChangeForm}
              defaultValue={isVoucher ? form.remarks : form.title}
            />
          </div>
          <div className="div"></div>
          <div className="column__sort gap__8">
            <div className="row__sort gap__4">
              <p className="c__333333">{isVoucher ? "상품 설명" : "내용"}</p>
              <p className="c__F66A6A">*</p>
            </div>
            <textarea
              className={`${styles.textarea__text} input__border`}
              id="contents"
              placeholder="내용을 입력해 주세요."
              onChange={onChangeForm}
              defaultValue={form.contents}
            />
          </div>
          {isVoucher ? (
            <>
              <div className="div"></div>
              <div className="column__sort gap__8">
                <div className="row__sort gap__4">
                  <p className="c__333333">판매 가격</p>
                  <p className="c__F66A6A">*</p>
                </div>
                <input
                  className={`${styles.input__text} input__border`}
                  id="price"
                  type="number"
                  placeholder="판매 가격을 입력해 주세요.(원 단위)"
                  onChange={onChangeForm}
                  defaultValue={form.price ?? form.price}
                />
              </div>

              <div className="div"></div>
              <div className="column__sort gap__8">
                <p className="c__333333">태그 입력</p>
                <input
                  className={`${styles.input__text} input__border`}
                  id="tags"
                  type="text"
                  placeholder="태그를 입력해 주세요."
                  onChange={onChangeForm}
                  defaultValue={form.tags}
                />
              </div>
              <div className="div"></div>
            </>
          ) : (
            ""
          )}
          <div className="row__sort gap__40">
            <div className={`${isVoucher ? styles.voucher__address : "flex"} column__sort gap__40`}>
              <div className="column__sort gap__8">
                <div className="row__sort gap__4">
                  <p className="c__333333">주소</p>
                  {isVoucher ? <p className="c__F66A6A">*</p> : ""}
                </div>
                <div className="row__sort gap__8">
                  <input
                    className={`${styles.input__number} input__border`}
                    type="text"
                    placeholder="01234"
                    maxLength={5}
                    disabled={true}
                    value={isVoucher ? form.travelproductAddress.zipcode : form.boardAddress.zipcode}
                  />
                  <button className="white__btn br__8 padding__12__16" onClick={onToggleModal}>
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
                  className={`${styles.input__text} input__border`}
                  type="text"
                  placeholder={isVoucher ? "상세주소를 입력해 주세요." : "주소를 입력해 주세요."}
                  onChange={onChangeAddress}
                  disabled={!isVoucher}
                  defaultValue={isVoucher ? form.travelproductAddress.addressDetail : form.boardAddress.address}
                />
                {isVoucher ? (
                  ""
                ) : (
                  <input
                    className={`${styles.input__text} input__border`}
                    type="text"
                    placeholder="상세주소"
                    onChange={onChangeAddress}
                    value={form.boardAddress.addressDetail}
                  />
                )}
              </div>
              {isVoucher ? (
                <div className="column__sort gap__16">
                  <div className="column__sort gap__8">
                    <p>위도(LAT)</p>
                    <input
                      className={`${styles.input__voucher__text} br__8 padding__12__16 bg__E4E4E4`}
                      type="text"
                      placeholder="주소를 먼저 입력해 주세요."
                      disabled={true}
                      value={form.travelproductAddress.lat ?? form.travelproductAddress.lat}
                    />
                  </div>
                  <div className="column__sort gap__8">
                    <p>경도(LNG)</p>
                    <input
                      className={`${styles.input__voucher__text} br__8 padding__12__16 bg__E4E4E4`}
                      type="text"
                      placeholder="주소를 먼저 입력해 주세요."
                      disabled={true}
                      value={form.travelproductAddress.lng ?? form.travelproductAddress.lng}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {isVoucher ? (
              <div className="width__100 column__sort gap__16">
                <p>상세 위치</p>
                <div className="flex br__16 border__E4E4E4 row__sort row__center column__center bg__E4E4E4">
                  <p className="f__14 l__20 c__777777">주소를 먼저 입력해 주세요.</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="div"></div>
          {isVoucher ? (
            ""
          ) : (
            <>
              <div className="column__sort gap__8">
                <p className="c__333333">유튜브 링크</p>
                <input
                  className={`${styles.input__text} input__border`}
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
            <div className="row__sort gap__4">
              <p className="c__333333">사진 첨부</p>
              {isVoucher ? <p className="c__F66A6A">*</p> : ""}
            </div>
            <div className="row__sort gap__16">
              {isVoucher ? (
                ""
              ) : (
                <div className="relative">
                  <div className={`${styles.img} br__8 bg__F2F2F2`}></div>
                  <div className={`${styles.img__upload} width__100 column__sort column__center gap__8`}>
                    <Image src="/images/create-board-with-voucher/add.png" alt="사진업로드" width={40} height={40} />
                    <p className="w__400 c__777777">클릭해서 사진 업로드</p>
                  </div>
                </div>
              )}
              <div className="relative click" onClick={onClickUpload}>
                <div className={`${styles.img} br__8 bg__F2F2F2`}></div>
                <div className={`${styles.img__upload} width__100 column__sort column__center gap__8`}>
                  {form.images ? (
                    <>
                      <Image
                        src={`https://storage.googleapis.com/${form.images}`}
                        className={`${styles.img} br__8 bg__F2F2F2`}
                        alt="사진업로드"
                        width={160}
                        height={160}
                      />
                      <div
                        className={`${styles.img__delete__section} br__100 padding__2 bg__00000066`}
                        onClick={onClickDelete}
                      >
                        <Image
                          src="/images/create-board-with-voucher/close.png"
                          className="filter"
                          alt="close"
                          width={20}
                          height={20}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <Image src="/images/create-board-with-voucher/add.png" alt="사진업로드" width={40} height={40} />
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
              {isVoucher ? (
                ""
              ) : (
                <div className="relative">
                  <div className={`${styles.img} br__8 bg__F2F2F2`}></div>
                  <div className={`${styles.img__upload} width__100 column__sort column__center gap__8`}>
                    <Image src="/images/create-board-with-voucher/add.png" alt="사진업로드" width={40} height={40} />
                    <p className="w__400 c__777777">클릭해서 사진 업로드</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="row__sort row__end">
          <div className="row__sort gap__16">
            <button className="white__btn br__8 padding__12__16 f__18 w__600">취소</button>
            <button
              className={`${styles.submit__btn} bg__2974E5 br__8 padding__12__16 click f__18 w__600 c__ffffff`}
              disabled={isActive}
              onClick={isBoardEdit ? () => onClickUpdate(data?.fetchBoard._id ?? "") : onClickSubmit}
            >
              {isBoardEdit ? "수정" : "등록"}하기
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
