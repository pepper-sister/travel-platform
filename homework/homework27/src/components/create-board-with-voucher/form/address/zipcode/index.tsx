import { Modal } from "antd";
import styles from "./styles.module.css";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useZipcode } from "./hook";
import { IFormProps, ISetFormProps } from "@/components/create-board-with-voucher/types";
import { IModalProps } from "../../types";

type Props = IFormProps & ISetFormProps & IModalProps;

export default function ZipcodeUI({ form, setForm, isModalOpen, setIsModalOpen }: Props) {
  const { isVoucher, onToggleModal, handleComplete } = useZipcode({ setForm, setIsModalOpen });

  return (
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
  );
}
