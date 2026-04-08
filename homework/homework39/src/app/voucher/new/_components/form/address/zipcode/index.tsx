import styles from "./styles.module.css";
import { UseFormWatch } from "react-hook-form";
import Link from "next/link";

type ZipcodeProps = {
  watch: UseFormWatch<any>;
};

export default function ZipcodeUI({ watch }: ZipcodeProps) {
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
      <Link href="/voucher/new/zipcode-modal" type="button" className="white__btn br__8 padding__12__16 c__000000">
        우편번호 검색
      </Link>
    </div>
  );
}
