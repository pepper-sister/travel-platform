import { useVoucherStore } from "@/commons/stores/voucher";
import styles from "./styles.module.css";
import { IFormProps, ISetFormProps } from "../../types";
import { IChangeFormProps } from "../types";
import { useContents } from "./hook";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = IFormProps & ISetFormProps & IChangeFormProps;

export default function ContentsUI({ form, setForm, onChangeForm }: Props) {
  const { isVoucher } = useVoucherStore();
  const { onChangeContents } = useContents({ setForm });

  return (
    <div className="column__sort gap__8">
      <div className="row__sort gap__4">
        <p className="c__333333">{isVoucher ? "상품 설명" : "내용"}</p>
        <p className="c__F66A6A">*</p>
      </div>
      {isVoucher ? (
        <ReactQuill
          className={styles.textarea__text}
          placeholder="내용을 입력해 주세요."
          theme="snow"
          onChange={onChangeContents}
        />
      ) : (
        <textarea
          className={`${styles.textarea__text} input__border`}
          id="contents"
          placeholder="내용을 입력해 주세요."
          onChange={onChangeForm}
          defaultValue={form.contents}
        />
      )}
    </div>
  );
}
