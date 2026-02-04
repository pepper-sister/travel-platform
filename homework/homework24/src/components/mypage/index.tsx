import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";
import BookMarkUI from "./bookmark";
import PointUI from "./point";
import PasswordUI from "./password";

export default function MyPageUI() {
  const [active, setActive] = useState("bookmark");

  return (
    <div className="body__sort">
      <div className="body column__sort gap__40">
        <h1 className="f__28 w__700 l__36">마이페이지</h1>

        <div className={`${styles.myinfo} column__sort gap__12`}>
          <h2 className="f__18 w__600">내 정보</h2>

          <div className="row__sort column__center gap__4">
            <Image
              src="/images/mypage/profile.jpg"
              className={styles.profile__img}
              alt="프로필"
              width={40}
              height={40}
            />
            <p className="l__20 c__333333">김상훈</p>
          </div>
          <div className="div" />

          <div className="row__sort column__center gap__8">
            <Image src="/images/mypage/wallet.png" alt="지갑" width={24} height={24} />
            <div className="row__sort gap__4">
              <p className="f__20">23,000</p>
              <p className="f__20">P</p>
            </div>
          </div>
          <div className="div" />

          <div className="column__sort gap__8">
            <div
              onClick={() => {
                setActive("bookmark");
              }}
              className={`${styles.myinfo__btn} ${
                active === "bookmark" ? "bg__F2F2F2" : ""
              } row__sort row__between column__center click`}
            >
              <p className={active === "bookmark" ? "w__600" : "w__400"}>거래내역&북마크</p>
              <Image src="/images/mypage/right_arrow.png" alt="right" width={20} height={20} />
            </div>

            <div
              onClick={() => {
                setActive("point");
              }}
              className={`${styles.myinfo__btn} ${
                active === "point" ? "bg__F2F2F2" : ""
              } row__sort row__between column__center click`}
            >
              <p className={active === "point" ? "w__600" : "w__400"}>포인트 사용 내역</p>
              <Image src="/images/mypage/right_arrow.png" alt="right" width={20} height={20} />
            </div>

            <div
              onClick={() => {
                setActive("password");
              }}
              className={`${styles.myinfo__btn} ${
                active === "password" ? "bg__F2F2F2" : ""
              } row__sort row__between column__center click`}
            >
              <p className={active === "password" ? "w__600" : "w__400"}>비밀번호 변경</p>
              <Image src="/images/mypage/right_arrow.png" alt="right" width={20} height={20} />
            </div>
          </div>
        </div>

        {active === "bookmark" ? <BookMarkUI /> : active === "point" ? <PointUI /> : <PasswordUI />}
      </div>
    </div>
  );
}
