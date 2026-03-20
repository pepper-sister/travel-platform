import styles from "../../styles.module.css";
import { IFormProps } from "../../types";
import { IChangeFormProps } from "../types";

type Props = IFormProps & IChangeFormProps;

export default function TagUI({ form, onChangeForm }: Props) {
  return (
    <div className="column__sort gap__8">
      <p className="c__333333">태그 입력</p>
      <input
        className={`${styles.input__text} input__border`}
        id="tags"
        type="text"
        placeholder="태그를 입력해 주세요."
        onChange={onChangeForm}
        defaultValue={form.tags}
      />
    </div>
  );
}
