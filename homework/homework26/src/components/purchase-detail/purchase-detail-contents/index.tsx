import { usePurchaseDetail } from "../hook";
import styles from "./styles.module.css";

export default function PurchaseDetailContentsUI() {
  const { data } = usePurchaseDetail();

  return (
    <div className="column__sort gap__24">
      <div className="div"></div>
      <div className="column__sort gap__16">
        <h3 className="f__20 w__700 l__28 c__333333">상세 설명</h3>
        <p className="w__400 c__333333">{data?.fetchTravelproduct.contents}</p>
      </div>
      <div className="div"></div>
      <div className="column__sort gap__16">
        <h3 className="f__20 w__700 l__28 c__333333">상세 위치</h3>
        <div className={styles.product__location}></div>
      </div>
    </div>
  );
}
