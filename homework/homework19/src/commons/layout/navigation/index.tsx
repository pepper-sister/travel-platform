import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function NavigationUI() {
  return (
    <div className="navi__padding row__sort row__between column__center">
      <div className="row__sort gap__24 column__center">
        <Image src="/images/logo.png" alt="logo" width={52} height={32} />
        <div className="row__sort gap__16">
          <Link href="/boards" className={`${styles.navigation__menu} ${styles.navigation__active} c__333333`}>
            트립토크
          </Link>
          <div className={`${styles.navigation__menu} c__333333`}>숙박권 구매</div>
          <div className={`${styles.navigation__menu} c__333333`}>마이 페이지</div>
        </div>
      </div>

      <div className="row__sort gap__4 column__center">
        <Image className="person__img" src="/images/person.png" alt="person" width={40} height={40} />
        <Image src="/images/down_arrow.png" alt="down" width={24} height={24} />
      </div>
    </div>
  );
}
