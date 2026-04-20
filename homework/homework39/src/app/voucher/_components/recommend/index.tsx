"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useRecommend } from "./hook";
import Dompurify from "dompurify";
import Link from "next/link";

export default function RecommendUI() {
  const { data } = useRecommend();
  console.log(data);

  return (
    <div className="column__sort gap__24">
      <h1 className="f__28 w__700 l__36">2026 끝여름 낭만있게 마무리 하고 싶다면?</h1>
      <div className="width__100 row__sort gap__24">
        {data?.fetchTravelproductsOfTheBest.slice(0, 2).map((el) => (
          <Link
            href={`/voucher/${el._id}`}
            key={el._id}
            className={`${styles.lodging__img} width__100 relative br__16 click`}
          >
            <Image
              src={`https://storage.googleapis.com/${el.images?.[0]}`}
              alt="숙소"
              width={628}
              height={628}
              style={{ objectFit: "cover" }}
            />
            <div className={styles.lodging__img__cover}></div>
            <div className={`${styles.bookmark__section} br__8 padding__4__8 row__sort column__center bg__00000066`}>
              <Image src="/images/voucher/bookmark.png" className="filter" alt="북마크" width={24} height={24} />
              <p className="f__14 l__20 c__ffffff">{el.pickedCount}</p>
            </div>
            <div className={`${styles.lodging__txt__section} width__100 padding__24 column__sort gap__8`}>
              <div className="column__sort gap__4">
                <h3 className="f__24 w__700 l__32 c__ffffff">{el.name}</h3>
                <p
                  className={`${styles.lodging__txt} f__20 c__ffffff`}
                  dangerouslySetInnerHTML={{ __html: Dompurify.sanitize(el.contents ?? "") }}
                />
              </div>
              <div className="row__sort row__end gap__4">
                <p className="f__24 w__700 l__32 c__ffffff">{el.price?.toLocaleString()}</p>
                <p className="f__24 w__700 l__32 c__ffffff">원</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
