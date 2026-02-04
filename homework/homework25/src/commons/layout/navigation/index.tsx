import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccessTokenStore } from "@/commons/stores/access-token";

export default function NavigationUI() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const { accessToken } = useAccessTokenStore();

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

        {!accessToken ? (
          <Link href="/sign" className={`${styles.login__btn} row__sort gap__8 column__center`}>
            <p className="f__14 w__600 l__20 c__ffffff">로그인</p>
            <Image
              className={styles.login__btn__img}
              src="/images/navigation/right_arrow.png"
              alt="right"
              width={24}
              height={24}
            />
          </Link>
        ) : (
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
        )}
      </div>
    </div>
  );
}
