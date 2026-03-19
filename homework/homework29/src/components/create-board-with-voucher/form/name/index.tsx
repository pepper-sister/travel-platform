import { useVoucherStore } from "@/commons/stores/voucher";
import styles from "../../styles.module.css";
import { useCreateBoardWithVoucherStore } from "@/commons/stores/create-board-with-voucher";
import { IFormProps } from "../../types";
import { IChangeFormProps } from "../types";

type Props = IFormProps & IChangeFormProps;

export default function NameUI({ form, onChangeForm }: Props) {
  const { isVoucher } = useVoucherStore();
  const { isBoardEdit } = useCreateBoardWithVoucherStore();

  return (
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
  );
}
