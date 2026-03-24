import Image from "next/image";
import styles from "./styles.module.css";
import { IImageProps } from "./types";

export default function ImageUploadUI({ images, onClickUpload, onClickDelete }: IImageProps) {
  return (
    <div className="relative click" onClick={onClickUpload}>
      <div className={`${styles.img} br__8 bg__F2F2F2`}></div>
      <div className={`${styles.img__upload} width__100 column__sort column__center gap__8`}>
        {images.length ? (
          <>
            <Image
              src={`https://storage.googleapis.com/${images}`}
              className={`${styles.img} br__8 bg__F2F2F2`}
              alt="사진업로드"
              width={160}
              height={160}
            />
            <div className={`${styles.img__delete__section} br__100 padding__2 bg__00000066`} onClick={onClickDelete}>
              <Image
                src="/images/create-board-with-voucher/close.png"
                className="filter"
                alt="close"
                width={20}
                height={20}
              />
            </div>
          </>
        ) : (
          <>
            <Image src="/images/create-board-with-voucher/add.png" alt="사진업로드" width={40} height={40} />
            <p className="w__400 c__777777">클릭해서 사진 업로드</p>
          </>
        )}
      </div>
    </div>
  );
}
