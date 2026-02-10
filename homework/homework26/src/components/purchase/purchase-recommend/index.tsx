import Image from "next/image";
import styles from "./styles.module.css";
import { usePurchaseRecommend } from "./hook";

export default function PurchaseRecommendUI() {
  const { recommendLodging } = usePurchaseRecommend();

  return (
    <div className="column__sort gap__24">
      <h1 className="f__28 w__700 l__36">2026 끝여름 낭만있게 마무리 하고 싶다면?</h1>
      <div className="width__100 row__sort gap__24">
        {recommendLodging.map(([key, value], index) => (
          <div key={key} className={styles.lodging__img}>
            <Image
              src={`/images/purchase/purchase-recommend/lodging${index + 1}.jpg`}
              alt="숙소"
              width={628}
              height={628}
              style={{ objectFit: "cover" }}
            />
            <div className={styles.lodging__img__cover}></div>
            <div className={`${styles.bookmark__section} row__sort column__center`}>
              <Image
                src="/images/purchase/purchase-recommend/bookmark.png"
                className={styles.bookmark__img}
                alt="북마크"
                width={24}
                height={24}
              />
              <p className="f__14 l__20 c__ffffff">24</p>
            </div>
            <div className={`${styles.lodging__txt__section} column__sort gap__8`}>
              <div className="column__sort gap__4">
                <h3 className="f__24 w__700 l__32 c__ffffff">{key}</h3>
                <p className={`${styles.lodging__txt} f__20 c__ffffff`}>{value}</p>
              </div>
              <div className="row__sort row__end gap__4">
                <p className="f__24 w__700 l__32 c__ffffff">32,900</p>
                <p className="f__24 w__700 l__32 c__ffffff">원</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
