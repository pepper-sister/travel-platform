import styles from "./styles.module.css";
import Link from "next/link";
import PurchaseListImageUI from "./purchase-list-image";
import PurchaseListInfoUI from "./purchase-list-info";
import { usePurchase } from "../hook";

export default function PurchaseListUI() {
  const { data } = usePurchase();

  return (
    <div className={styles.reserve__section}>
      {data?.fetchTravelproducts.map((el) => (
        <Link key={el._id} href={`/purchase/${el._id}`}>
          <div className="column__sort gap__12">
            <PurchaseListImageUI el={el} />
            <PurchaseListInfoUI el={el} />
          </div>
        </Link>
      ))}
    </div>
  );
}
