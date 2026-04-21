import styles from "./styles.module.css";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { IFetchBoardData } from "../types";
import { useLikeDislike } from "./hook";

export default function LikeDislikeUI({ data }: IFetchBoardData) {
  const { onClickDislike, onClickLike } = useLikeDislike();

  return (
    <div className="row__sort row__center gap__24">
      <div onClick={onClickDislike} className="column__sort column__center gap__4 click">
        <HeartBrokenOutlinedIcon className={styles.detail__bad__icon} />
        <p className="f__14 w__400 l__20 c__5F5F5F">{data?.dislikeCount}</p>
      </div>
      <div onClick={onClickLike} className="column__sort column__center gap__4 click">
        <FavoriteBorderOutlinedIcon className={styles.detail__good__icon} />
        <p className="f__14 w__400 l__20 c__F66A6A">{data?.likeCount}</p>
      </div>
    </div>
  );
}
