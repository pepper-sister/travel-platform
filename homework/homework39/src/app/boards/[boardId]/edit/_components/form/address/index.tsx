import ZipcodeUI from "./zipcode";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import styles from "./styles.module.css";
import { memo } from "react";

type AddressProps = {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
};

function AddressUI({ register, watch }: AddressProps) {
  return (
    <div className="row__sort gap__40">
      <div className="flex column__sort gap__40">
        <div className="column__sort gap__8">
          <div className="row__sort gap__4">
            <p className="c__333333">주소</p>
          </div>
          <ZipcodeUI watch={watch} />
          <>
            <input
              {...register("boardAddress.address")}
              className={`${styles.input__text} input__border`}
              type="text"
              placeholder="주소를 입력해 주세요."
              disabled={true}
            />
            <input
              {...register("boardAddress.addressDetail")}
              className={`${styles.input__text} input__border`}
              placeholder="상세주소"
            />
          </>
        </div>
      </div>
    </div>
  );
}

export default memo(AddressUI);
