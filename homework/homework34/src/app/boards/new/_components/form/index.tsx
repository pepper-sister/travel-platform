import { useBoardEditStore } from "@/commons/stores/board-edit";
import AddressUI from "./address";
import ImagesUI from "./images";
import styles from "./styles.module.css";
import { UseFormReturn } from "react-hook-form";

export default function FormUI({ register, setValue, getValues, watch }: UseFormReturn<any>) {
  const { isBoardEdit } = useBoardEditStore();

  return (
    <div className="column__sort gap__40">
      <div className="row__sort gap__40">
        <div className="column__sort gap__8 flex">
          <div className="row__sort gap__4">
            <p className="c__333333">작성자</p>
            <p className="c__F66A6A">*</p>
          </div>
          <input
            {...register("writer")}
            className={`${styles.input__text} ${isBoardEdit ? "bg__F2F2F2" : ""} input__border`}
            placeholder="작성자 명을 입력해 주세요."
            disabled={isBoardEdit}
          />
        </div>
        <div className="column__sort gap__8 flex">
          <div className="row__sort gap__4">
            <p className="c__333333">비밀번호</p>
            <p className="c__F66A6A">*</p>
          </div>
          <input
            {...register("password")}
            className={`${styles.input__text} ${isBoardEdit ? "bg__F2F2F2" : ""} input__border`}
            placeholder="비밀번호를 입력해 주세요."
            disabled={isBoardEdit}
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
          {...register("title")}
          className={`${styles.input__text} input__border`}
          placeholder="제목을 입력해 주세요."
        />
      </div>
      <div className="div"></div>
      <div className="column__sort gap__8">
        <div className="row__sort gap__4">
          <p className="c__333333">내용</p>
          <p className="c__F66A6A">*</p>
        </div>
        <textarea
          {...register("contents")}
          className={`${styles.textarea__text} input__border`}
          placeholder="내용을 입력해 주세요."
        />
      </div>
      <AddressUI register={register} setValue={setValue} watch={watch} />
      <div className="div"></div>
      <>
        <div className="column__sort gap__8">
          <p className="c__333333">유튜브 링크</p>
          <input
            {...(register("youtubeUrl"), { required: false })}
            className={`${styles.input__text} input__border`}
            placeholder="링크를 입력해 주세요."
          />
        </div>
        <div className="div"></div>
      </>
      <div className="column__sort gap__8">
        <p className="c__333333">사진 첨부</p>
        <div className="row__sort gap__16">
          {[0, 1, 2].map((_, index) => (
            <ImagesUI key={index} index={index} setValue={setValue} getValues={getValues} watch={watch} />
          ))}
        </div>
      </div>
    </div>
  );
}
