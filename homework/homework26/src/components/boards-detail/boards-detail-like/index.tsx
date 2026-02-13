import styles from "./styles.module.css";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function BoardsDetailLikeUI() {
  return (
    <div className="row__sort row__center gap__24">
      <div className="column__sort column__center gap__4">
        <HeartBrokenOutlinedIcon className={styles.detail__bad__icon} />
        <p className="f__14 w__400 l__20 c__5F5F5F">24</p>
      </div>
      <div className="column__sort column__center gap__4">
        <FavoriteBorderOutlinedIcon className={styles.detail__good__icon} />
        <p className="f__14 w__400 l__20 c__F66A6A">12</p>
      </div>
    </div>
  );
}
