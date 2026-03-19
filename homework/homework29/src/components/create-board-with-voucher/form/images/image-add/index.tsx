import Image from "next/image";
import styles from "./styles.module.css";

export default function ImageAddUI() {
  return (
    <div className="relative">
      <div className={`${styles.img} br__8 bg__F2F2F2`}></div>
      <div className={`${styles.img__upload} width__100 column__sort column__center gap__8`}>
        <Image src="/images/create-board-with-voucher/add.png" alt="사진업로드" width={40} height={40} />
        <p className="w__400 c__777777">클릭해서 사진 업로드</p>
      </div>
    </div>
  );
}
