import { IFormProps } from "@/components/create-board-with-voucher/types";
import styles from "./styles.module.css";

export default function CoordinateUI({ form }: IFormProps) {
  return (
    <div className="column__sort gap__16">
      <div className="column__sort gap__8">
        <p>위도(LAT)</p>
        <input
          className={`${styles.input__voucher__text} br__8 padding__12__16 bg__E4E4E4`}
          type="text"
          placeholder="주소를 먼저 입력해 주세요."
          disabled={true}
          value={form.travelproductAddress.lat ?? form.travelproductAddress.lat}
        />
      </div>
      <div className="column__sort gap__8">
        <p>경도(LNG)</p>
        <input
          className={`${styles.input__voucher__text} br__8 padding__12__16 bg__E4E4E4`}
          type="text"
          placeholder="주소를 먼저 입력해 주세요."
          disabled={true}
          value={form.travelproductAddress.lng ?? form.travelproductAddress.lng}
        />
      </div>
    </div>
  );
}
