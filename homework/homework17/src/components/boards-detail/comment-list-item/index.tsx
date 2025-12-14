import Image from "next/image";
import { Rate } from "antd";
import styles from "./styles.module.css";
import { IFetchCommentItemData } from "./types";

export default function CommentListItemUI({ el, index }: IFetchCommentItemData) {
  return (
    <div className="width__100 column__sort gap__40">
      {index !== 0 && <div className="div margin__top__40"></div>}
      <div className="column__sort gap__8">
        <div className="row__sort row__between column__center">
          <div className="row__sort gap__8">
            <div className="row__sort gap__4">
              <Image src="/images/person.png" className="person__img" alt="person" width={24} height={24} />
              <p className="f__14 w__300 c__5F5F5F">{el.writer}</p>
            </div>

            <Rate className={styles.comment__star} value={el.rating} disabled={true} />
          </div>

          <div className="row__sort gap__8">
            <Image src="/images/edit.png" className="height__20 click" alt="edit" width={20} height={20} />
            <Image src="/images/close.png" className="height__20 click" alt="close" width={20} height={20} />
          </div>
        </div>

        <p className="w__400 c__333333">{el.contents}</p>

        <p className="f__14 w__400 c__818181">{el.createdAt.slice(0, 10)}</p>
      </div>
    </div>
  );
}
