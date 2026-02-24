import styles from "../../styles.module.css";
import { IFormProps } from "../../types";
import { IChangeFormProps } from "../types";

type Props = IFormProps & IChangeFormProps;

export default function PriceUI({ form, onChangeForm }: Props) {
  return (
    <div className="column__sort gap__8">
      <div className="row__sort gap__4">
        <p className="c__333333">판매 가격</p>
        <p className="c__F66A6A">*</p>
      </div>
      <input
        className={`${styles.input__text} input__border`}
        id="price"
        type="number"
        placeholder="판매 가격을 입력해 주세요.(원 단위)"
        onChange={onChangeForm}
        defaultValue={form.price ?? form.price}
      />
    </div>
  );
}
