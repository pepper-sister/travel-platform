import styles from "./styles.module.css";
import Link from "next/link";
import { useVoucher } from "../hook";
import Image from "next/image";

export default function ListUI() {
  const { data } = useVoucher();

  return (
    <div className={styles.reserve__section}>
      {data?.fetchTravelproducts.map((el) => (
        <Link key={el._id} href={`/voucher/${el._id}`}>
          <div className="column__sort gap__12">
            <div className={`${styles.lodging__img} width__100 relative br__16`}>
              <Image
                src={
                  el.images?.[0] && el.images[0].trim() !== ""
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/images/voucher/lodging1.jpg"
                }
                alt="숙소"
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                className={`${styles.reserve__bookmark__section} br__8 padding__4__8 row__sort column__center bg__00000066`}
              >
                <Image src="/images/voucher/bookmark.png" className="filter" alt="북마크" width={24} height={24} />
                <p className="f__14 l__20 c__ffffff">{el.pickedCount}</p>
              </div>
            </div>
            <div className="column__sort gap__4">
              <h3 className={`${styles.lodging__txt} c__333333`}>{el.name}</h3>
              <p className={`${styles.lodging__txt} f__14 w__400 l__20 c__5F5F5F`}>{el.remarks}</p>
              <div className="column__sort gap__12">
                <p className="f__14 w__400 l__20 c__2974E5">
                  {el.tags?.length ? el.tags.map((tag) => `#${tag}`).join(" ") : "\u00A0"}
                </p>
                <div className="row__sort row__between column__center">
                  <div className="row__sort column__center gap__4">
                    <Image
                      src={el.seller?.picture ?? "/images/voucher/profile.jpg"}
                      className="br__100"
                      alt="프로필"
                      width={24}
                      height={24}
                    />
                    <p className="f__14 w__300 l__20 c__5F5F5F">{el.seller?.name}</p>
                  </div>
                  <div className="row__sort gap__4">
                    <p className="w__600 c__1C1C1C">{el.price?.toLocaleString()}</p>
                    <p className="w__600 c__1C1C1C">원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
