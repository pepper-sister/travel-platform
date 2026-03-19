import { useVoucherStore } from "@/commons/stores/voucher";
import styles from "../../styles.module.css";
import { IFormProps } from "../../types";
import { IChangeFormProps } from "../types";

type Props = IFormProps & IChangeFormProps;

export default function TitleUI({ form, onChangeForm }: Props) {
  const { isVoucher } = useVoucherStore();

  return (
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
  );
}
