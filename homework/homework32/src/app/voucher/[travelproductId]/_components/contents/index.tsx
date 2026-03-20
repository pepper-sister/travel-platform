import { useVoucherDetail } from "../hook";
import styles from "./styles.module.css";
import Dompurify from "dompurify";

export default function ContentsUI() {
  const { data } = useVoucherDetail();

  return (
    <div className="column__sort gap__24">
      <div className="div"></div>
      <div className="column__sort gap__16">
        <h3 className="f__20 w__700 l__28 c__333333">상세 설명</h3>
        {typeof window !== "undefined" ? (
          <div
            className="w__400 c__333333"
            dangerouslySetInnerHTML={{ __html: Dompurify.sanitize(data?.fetchTravelproduct.contents ?? "") }}
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className="div"></div>
      <div className="column__sort gap__16">
        <h3 className="f__20 w__700 l__28 c__333333">상세 위치</h3>
        <div className={`${styles.product__location} br__16 border__E4E4E4 bg__E4E4E4`}></div>
      </div>
    </div>
  );
}
