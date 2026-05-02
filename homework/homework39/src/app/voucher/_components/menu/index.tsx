"use client";

import Image from "next/image";
import { useMenu } from "./hook";
import styles from "./styels.module.css";

export default function MenuUI() {
  const { reserveIcon } = useMenu();

  return (
    <div className={styles.menu__section}>
      {reserveIcon.map(([key, value]) => (
        <div key={key} className="click column__sort column__center gap__8">
          <Image src={`/images/voucher/voucher-menu/${key}.png`} alt={value} width={40} height={40} />
          <p className="c__333333" style={{ whiteSpace: "nowrap" }}>
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}
