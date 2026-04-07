import styles from "../styles.module.css";
import { UseFormWatch } from "react-hook-form";
import Link from "next/link";
import { useParams } from "next/navigation";

type ZipcodeProps = {
  watch: UseFormWatch<any>;
};

export default function ZipcodeUI({ watch }: ZipcodeProps) {
  const zipcode = watch("boardAddress.zipcode");
  const { boardId } = useParams();

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
      <Link href={`/boards/${boardId}/edit/zipcode-modal`} className="white__btn br__8 padding__12__16 c__000000">
        우편번호 검색
      </Link>
    </div>
  );
}
