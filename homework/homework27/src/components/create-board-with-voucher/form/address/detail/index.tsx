import { IFormProps, ISetFormProps } from "@/components/create-board-with-voucher/types";
import styles from "../../../styles.module.css";
import { useDetail } from "./hook";

type Props = IFormProps & ISetFormProps;

export default function DetailUI({ form, setForm }: Props) {
  const { isVoucher, onChangeAddress } = useDetail({ setForm });
  return (
    <>
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
    </>
  );
}
