import { UseFormReturn } from "react-hook-form";
import { Controller } from "react-hook-form";
import AddressUI from "./address";
import ImagesUI from "./images";
import TagUI from "./tag";
import styles from "./styles.module.css";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <div className={styles.editor}>에디터 로딩 중...</div>,
});

export default function FormUI({ register, control, setValue, watch }: UseFormReturn<any>) {
  return (
    <div className="column__sort gap__40">
      <div className="row__sort gap__40">
        <div className="column__sort gap__8 flex">
          <div className="row__sort gap__4">
            <p className="c__333333">상품명</p>
            <p className="c__F66A6A">*</p>
          </div>
          <input
            {...register("name")}
            className={`${styles.input__text} input__border`}
            placeholder="상품명을 입력해 주세요."
          />
        </div>
      </div>
      <div className="div"></div>
      <div className="column__sort gap__8">
        <div className="row__sort gap__4">
          <p className="c__333333">한줄 요약</p>
          <p className="c__F66A6A">*</p>
        </div>
        <input
          {...register("remarks")}
          className={`${styles.input__text} input__border`}
          placeholder="상품을 한줄로 요약해 주세요."
        />
      </div>
      <div className="div"></div>
      <div className="column__sort gap__8">
        <div className="row__sort gap__4">
          <p className="c__333333">상품 설명</p>
          <p className="c__F66A6A">*</p>
        </div>

        <Controller
          name="contents"
          control={control}
          render={({ field }) => (
            <ReactQuill {...field} className={styles.editor} placeholder="내용을 입력해 주세요." theme="snow" />
          )}
        />
      </div>
      <div className="div"></div>
      <div className="column__sort gap__8">
        <div className="row__sort gap__4">
          <p className="c__333333">판매 가격</p>
          <p className="c__F66A6A">*</p>
        </div>
        <input
          {...register("price")}
          className={`${styles.input__text} input__border`}
          placeholder="판매 가격을 입력해 주세요.(원 단위)"
        />
      </div>
      <div className="div"></div>
      <TagUI setValue={setValue} watch={watch} />
      <div className="div"></div>
      <AddressUI register={register} setValue={setValue} watch={watch} />
      <div className="div"></div>
      <ImagesUI setValue={setValue} />
    </div>
  );
}
