import { Modal } from "antd";
import styles from "./styles.module.css";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useZipcode } from "./hook";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { memo } from "react";

type ZipcodeProps = {
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
};

function ZipcodeUI({ setValue, watch }: ZipcodeProps) {
  const { isModalOpen, onToggleModal, handleComplete } = useZipcode({ setValue });
  const zipcode = watch("travelproductAddress.zipcode");

  return (
    <div className="row__sort gap__8">
      <input
        className={`${styles.input__number} input__border`}
        type="text"
        placeholder="01234"
        maxLength={5}
        disabled={true}
        value={zipcode}
      />
      <button type="button" className="white__btn br__8 padding__12__16" onClick={onToggleModal}>
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

export default memo(ZipcodeUI);
