"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

export default function MenuUI() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className={`${styles.mobile__navigation} row__sort padding__8__20 bg__FFFFFF`}>
      <Link href="/boards" className={`${styles.mobile__navigation__menu} column__sort gap__4 click`}>
        <Image
          className={`${isActive("/boards") ? "" : "filter"}`}
          src="/images/navigation/triptalk.png"
          alt="triptalk"
          width={24}
          height={24}
        />
        <p className={`${isActive("/boards") ? "w__500 c__000000" : "c__777777"}`}>트립토크</p>
      </Link>
      <Link href="/voucher" className={`${styles.mobile__navigation__menu} column__sort gap__4 click`}>
        <Image
          className={`${isActive("/voucher") ? "" : "filter"}`}
          src="/images/navigation/store.png"
          alt="store"
          width={24}
          height={24}
        />
        <p className={`${isActive("/voucher") ? "w__500 c__000000" : "c__777777"}`}>숙박권 구매</p>
      </Link>
      <Link href="/mypage" className={`${styles.mobile__navigation__menu} column__sort gap__4 click`}>
        <Image
          className={`${isActive("/mypage") ? "" : "filter"}`}
          src="/images/navigation/mypage.png"
          alt="mypage"
          width={24}
          height={24}
        />
        <p className={`${isActive("/mypage") ? "w__500 c__000000" : "c__777777"}`}>마이페이지</p>
      </Link>
    </div>
  );
}
