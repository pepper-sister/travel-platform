import styles from "./styles.module.css";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { IFetchBoardData } from "../types";

export default function LikeDislikeUI({ data }: IFetchBoardData) {
  return (
    <div className="row__sort row__center gap__24">
      <div className="column__sort column__center gap__4">
        <HeartBrokenOutlinedIcon className={styles.detail__bad__icon} />
        <p className="f__14 w__400 l__20 c__5F5F5F">{data?.likeCount}</p>
      </div>
      <div className="column__sort column__center gap__4">
        <FavoriteBorderOutlinedIcon className={styles.detail__good__icon} />
        <p className="f__14 w__400 l__20 c__F66A6A">{data?.dislikeCount}</p>
      </div>
    </div>
  );
}
