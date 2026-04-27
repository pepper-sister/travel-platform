import Image from "next/image";
import styles from "../styles.module.css";

type IImageProps = {
  index: number;
  imageUrl: string;
  onClickUpload: (index: number) => void;
  onClickDelete: (index: number) => void;
};

export default function ImageUploadUI({ index, imageUrl, onClickUpload, onClickDelete }: IImageProps) {
  return (
    <div
      className={`${styles.mobile__img__section} relative click`}
      onClick={() => {
        onClickUpload(index);
      }}
    >
      <div className={`${styles.img} br__8 bg__F2F2F2`}></div>
      <div className={`${styles.img__upload} width__100 column__sort column__center gap__8`}>
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              className={`${styles.img} br__8 bg__F2F2F2`}
              alt="사진업로드"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div
              className={`${styles.img__delete__section} br__100 padding__2 bg__00000066`}
              onClick={(e) => {
                e.stopPropagation();
                onClickDelete(index);
              }}
            >
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
          <div className={`${styles.mobile__img__text__section} column__sort column__center`}>
            <Image
              className={styles.add__img}
              src="/images/create-board-with-voucher/add.png"
              alt="사진업로드"
              width={40}
              height={40}
            />
            <p className={`${styles.img__text} w__400 c__777777`}>클릭해서 사진 업로드</p>
            <p className={`${styles.mobile__img__text} w__400 c__777777`}>사진 업로드</p>
          </div>
        )}
      </div>
    </div>
  );
}
