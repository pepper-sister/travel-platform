import Image from "next/image";
import { usePurchaseMenu } from "./hook";
import styles from "./styles.module.css";

export default function PurchaseMenuUI() {
  const { reserveIcon } = usePurchaseMenu();

  return (
    <div className={`${styles.reserve__icon__section} row__sort row__between`}>
      {reserveIcon.map(([key, value]) => (
        <div key={key} className={`${styles.reserve__icon} column__sort column__center gap__8 click`}>
          <Image src={`/images/purchase/purchase-menu/${key}.png`} alt={value} width={40} height={40} />
          <p className="c__333333">{value}</p>
        </div>
      ))}
    </div>
  );
}
