import Image from "next/image";
import styles from "./styles.module.css";
import { usePurchaseDetailImage } from "./hook";

export default function PurchaseDetailImageUI() {
  const { active, setActive, productImages } = usePurchaseDetailImage();

  return (
    <>
      <Image
        src={
          productImages[active] && productImages[active].trim() !== ""
            ? `https://storage.googleapis.com/${productImages[active]}`
            : `/images/purchase-detail/purchase-detail-image/image${active + 1}.jpg`
        }
        alt="사진"
        width={640}
        height={480}
        style={{ objectFit: "cover", borderRadius: "8px" }}
      />
      <div className={`${styles.product__img__section} column__sort gap__16`}>
        {productImages.map((el, index) => (
          <div
            key={`${el}-${index}`}
            className={`${styles.product__detail__img} click`}
            onClick={() => setActive(index)}
          >
            <Image
              src={
                el && el.trim() !== ""
                  ? `https://storage.googleapis.com/${el}`
                  : `/images/purchase-detail/purchase-detail-image/image${index + 1}.jpg`
              }
              alt="숙소상세사진"
              width={180}
              height={136}
              style={{ opacity: active === index ? 1 : 0.5, objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
