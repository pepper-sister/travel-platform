import styles from "./styles.module.css";
import DetailUI from "./detail";
import ZipcodeUI from "./zipcode";
import CoordinateUI from "./coordinate";
import { useVoucherStore } from "@/commons/stores/voucher";
import { IFormProps, ISetFormProps } from "../../types";
import { IModalProps } from "../types";

type Props = IFormProps & ISetFormProps & IModalProps;

export default function AddressUI({ form, setForm, isModalOpen, setIsModalOpen }: Props) {
  const { isVoucher } = useVoucherStore();

  return (
    <div className="row__sort gap__40">
      <div className={`${isVoucher ? styles.voucher__address : "flex"} column__sort gap__40`}>
        <div className="column__sort gap__8">
          <div className="row__sort gap__4">
            <p className="c__333333">주소</p>
            {isVoucher ? <p className="c__F66A6A">*</p> : ""}
          </div>
          <ZipcodeUI form={form} setForm={setForm} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          <DetailUI form={form} setForm={setForm} />
        </div>
        {isVoucher ? <CoordinateUI form={form} /> : ""}
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
  );
}
