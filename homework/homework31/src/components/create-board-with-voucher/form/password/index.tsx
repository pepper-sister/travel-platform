import { useCreateBoardWithVoucherStore } from "@/commons/stores/create-board-with-voucher";
import styles from "../../styles.module.css";
import { IChangeFormProps } from "../types";

export default function PasswordUI({ onChangeForm }: IChangeFormProps) {
  const { isBoardEdit } = useCreateBoardWithVoucherStore();

  return (
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
  );
}
