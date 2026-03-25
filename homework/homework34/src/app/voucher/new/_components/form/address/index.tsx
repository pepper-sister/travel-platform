import styles from "./styles.module.css";
import ZipcodeUI from "./zipcode";
import { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { useAddress } from "./hook";

type AddressProps = {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
};

export default function AddressUI({ register, setValue, watch }: AddressProps) {
  const { address } = useAddress({ setValue, watch });

  return (
    <div className="row__sort gap__40">
      <div className={`${styles.voucher__address} column__sort gap__40`}>
        <div className="column__sort gap__8">
          <div className="row__sort gap__4">
            <p className="c__333333">주소</p>
            <p className="c__F66A6A">*</p>
          </div>
          <ZipcodeUI setValue={setValue} watch={watch} />
          <input
            {...register("travelproductAddress.addressDetail")}
            className={`${styles.input__text} input__border`}
            placeholder="상세주소를 입력해 주세요."
          />
        </div>
        <div className="column__sort gap__16">
          <div className="column__sort gap__8">
            <p>위도(LAT)</p>
            <input
              {...register("travelproductAddress.lat")}
              className={`${styles.input__number} br__8 padding__12__16 bg__E4E4E4`}
              placeholder="주소를 먼저 입력해 주세요."
              disabled={true}
            />
          </div>
          <div className="column__sort gap__8">
            <p>경도(LNG)</p>
            <input
              {...register("travelproductAddress.lng")}
              className={`${styles.input__number} br__8 padding__12__16 bg__E4E4E4`}
              placeholder="주소를 먼저 입력해 주세요."
              disabled={true}
            />
          </div>
        </div>
      </div>
      <div className="width__100 column__sort gap__16">
        <p>상세 위치</p>
        <div className="flex br__16 border__E4E4E4 row__sort row__center column__center bg__E4E4E4">
          {address ? (
            <div id="map" style={{ width: "100%", height: "100%" }}></div>
          ) : (
            <p className="f__14 l__20 c__777777">주소를 먼저 입력해 주세요.</p>
          )}
        </div>
      </div>
    </div>
  );
}
