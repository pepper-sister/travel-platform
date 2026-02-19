import Image from "next/image";
import { Rate } from "antd";
import styles from "./styles.module.css";
import { IFetchCommentItemData } from "./types";
import BoardsCommentEditUI from "../boards-comment-edit";
import { useBoardsCommentItem } from "./hook";
import { usePurchaseStore } from "@/commons/stores/purchase";

export default function BoardsCommentItemUI({ el, index }: IFetchCommentItemData) {
  const { isEdit, setIsEdit } = useBoardsCommentItem();
  const { isPurchase } = usePurchaseStore();

  return (
    <div className="width__100 column__sort gap__40">
      {index !== 0 && <div className={`${styles.div__line} div`}></div>}
      {isEdit && !isPurchase ? (
        <BoardsCommentEditUI el={el} isEdit={isEdit} setIsEdit={setIsEdit} />
      ) : (
        <div className="column__sort gap__40">
          <div className="column__sort gap__8">
            <div className="row__sort row__between column__center">
              <div className="row__sort gap__8">
                <div className="row__sort gap__4">
                  <Image
                    src="/images/boards-detail/profile.png"
                    className="br__100 bg__E4E4E4"
                    alt="프로필"
                    width={24}
                    height={24}
                  />
                  <p className="f__14 w__300 c__5F5F5F">{"writer" in el ? el.writer : el.user?.name}</p>
                </div>
                {"rating" in el && (
                  <Rate className={`${styles.comment__star} row__sort gap__8`} value={el.rating} disabled />
                )}
              </div>
              <div className="row__sort gap__8">
                <Image
                  onClick={() => setIsEdit(!isEdit)}
                  src="/images/boards-detail/edit.png"
                  className="click"
                  alt="edit"
                  width={20}
                  height={20}
                />
                <Image src="/images/boards-detail/close.png" className="click" alt="close" width={20} height={20} />
              </div>
            </div>
            <p className="w__400 c__333333">{el.contents}</p>
            <p className="f__14 w__400 c__818181">{el.createdAt.slice(0, 10)}</p>
          </div>
          {isEdit && isPurchase ? <BoardsCommentEditUI el={el} isEdit={isEdit} setIsEdit={setIsEdit} /> : ""}
        </div>
      )}
    </div>
  );
}
