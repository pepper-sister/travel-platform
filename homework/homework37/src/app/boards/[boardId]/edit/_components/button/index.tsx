import { useButton } from "./hook";
import styles from "./styles.module.css";
import { useFormContext } from "react-hook-form";

export default function ButtonUI() {
  const { isActive, onClickUpdate } = useButton();
  const { handleSubmit } = useFormContext();

  return (
    <div className="row__sort row__end">
      <div className="row__sort gap__16">
        <button className="white__btn br__8 padding__12__16 f__18 w__600">취소</button>
        <button
          className={`${styles.submit__btn} bg__2974E5 br__8 padding__12__16 click f__18 w__600 c__ffffff`}
          disabled={!isActive}
          onClick={handleSubmit(onClickUpdate)}
        >
          수정하기
        </button>
      </div>
    </div>
  );
}
