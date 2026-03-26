import styles from "../styles.module.css";
import { useTag } from "./hook";
import { TagProps } from "./types";

export default function TagUI({ setValue, watch }: TagProps) {
  const { input, onChangeInput, onKeyDown } = useTag({ setValue, watch });

  return (
    <div className="column__sort gap__8">
      <p className="c__333333">태그 입력</p>
      <input
        className={`${styles.input__text} input__border`}
        type="text"
        placeholder="태그를 입력해 주세요."
        value={input}
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
