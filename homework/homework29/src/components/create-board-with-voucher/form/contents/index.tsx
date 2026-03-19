import { useVoucherStore } from "@/commons/stores/voucher";
import styles from "./styles.module.css";
import { IFormProps } from "../../types";
import { IChangeFormProps } from "../types";

type Props = IFormProps & IChangeFormProps;

export default function ContentsUI({ form, onChangeForm }: Props) {
  const { isVoucher } = useVoucherStore();

  return (
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
  );
}
