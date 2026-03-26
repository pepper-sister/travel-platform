"use client";

import styles from "./styles.module.css";
import { useVoucher } from "../hook";
import ItemUI from "../item";

export default function ListUI() {
  const { data } = useVoucher();

  return (
    <div className={styles.reserve__section}>
      {data?.fetchTravelproducts.map((el) => (
        <ItemUI key={el._id} el={el} />
      ))}
    </div>
  );
}
