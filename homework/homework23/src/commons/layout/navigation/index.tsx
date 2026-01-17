import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationUI() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="navi__sort">
      <div className="navi row__sort row__between column__center">
        <div className="row__sort gap__24 column__center">
          <Image src="/images/navigation/logo.png" alt="logo" width={52} height={32} />
          <div className="row__sort gap__16">
            <Link
              href="/boards"
              className={`${isActive("/boards") ? styles.navigation__active : ""} ${styles.navigation__menu} c__333333`}
            >
              트립토크
            </Link>
            <Link
              href="/purchase"
              className={`${isActive("/purchase") ? styles.navigation__active : ""} ${
                styles.navigation__menu
              } c__333333`}
            >
              숙박권 구매
            </Link>
            <Link
              href="/mypage"
              className={`${isActive("/mypage") ? styles.navigation__active : ""} ${styles.navigation__menu} c__333333`}
            >
              마이 페이지
            </Link>
          </div>
        </div>

        <div className="row__sort gap__4 column__center">
          <Image
            src="/images/navigation/profile.png"
            className={styles.profile__img}
            alt="person"
            width={40}
            height={40}
          />
          <Image src="/images/navigation/down_arrow.png" alt="down" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
