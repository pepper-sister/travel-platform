import { IFormProps } from "../../types";
import { IChangeFormProps } from "../types";
import styles from "./styles.module.css";

type Props = IFormProps & IChangeFormProps;

export default function YoutubeUI({ form, onChangeForm }: Props) {
  return (
    <>
      <div className="column__sort gap__8">
        <p className="c__333333">유튜브 링크</p>
        <input
          className={`${styles.input__text} input__border`}
          id="youtubeUrl"
          type="text"
          placeholder="링크를 입력해 주세요."
          onChange={onChangeForm}
          value={form.youtubeUrl}
        />
      </div>
      <div className="div"></div>
    </>
  );
}
