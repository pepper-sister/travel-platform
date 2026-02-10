import Image from "next/image";
import styles from "./styles.module.css";
import SearchUI from "../boards-list/search";
import { usePurchase } from "./hook";
import Link from "next/link";

export default function PurchaseUI() {
  const { active, onClickActive, reserveIcon, data } = usePurchase();

  return (
    <div className="body__sort">
      <div className="body column__sort gap__64">
        <div className="column__sort gap__24">
          <h1 className="f__28 w__700 l__36">2026 끝여름 낭만있게 마무리 하고 싶다면?</h1>
          <div className="width__100 row__sort gap__24">
            <div className={styles.lodging__img}>
              <Image src="/images/purchase/lodging1.jpg" alt="숙소" fill style={{ objectFit: "cover" }} />
              <div className={styles.lodging__img__cover}></div>
              <div className={`${styles.bookmark__section} row__sort column__center`}>
                <Image
                  src="/images/purchase/bookmark.png"
                  className={styles.bookmark__img}
                  alt="북마크"
                  width={24}
                  height={24}
                />
                <p className="f__14 l__20 c__ffffff">24</p>
              </div>
              <div className={`${styles.lodging__txt__section} column__sort gap__8`}>
                <div className="column__sort gap__4">
                  <h3 className="f__24 w__700 l__32 c__ffffff">포항 : 당장 가고 싶은 숙소</h3>
                  <p className={`${styles.lodging__txt} f__20 c__ffffff`}>
                    살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩
                    얄라리 얄라 우러라 우러라 새여 자고 니러 우러라 새여 널라와 시름 한 나도 자고 니러 우니로라 얄리얄리
                    얄라셩 얄라리 얄라
                  </p>
                </div>
                <div className="row__sort row__end gap__4">
                  <p className="f__24 w__700 l__32 c__ffffff">32,900</p>
                  <p className="f__24 w__700 l__32 c__ffffff">원</p>
                </div>
              </div>
            </div>
            <div className={styles.lodging__img}>
              <Image src="/images/purchase/lodging2.jpg" alt="숙소" fill style={{ objectFit: "cover" }} />
              <div className={styles.lodging__img__cover}></div>
              <div className={`${styles.bookmark__section} row__sort column__center`}>
                <Image
                  src="/images/purchase/bookmark.png"
                  className={styles.bookmark__img}
                  alt="북마크"
                  width={24}
                  height={24}
                />
                <p className="f__14 l__20 c__ffffff">24</p>
              </div>
              <div className={`${styles.lodging__txt__section} column__sort gap__8`}>
                <div className="column__sort gap__4">
                  <h3 className="f__24 w__700 l__32 c__ffffff">강릉 : 마음까지 깨끗해지는 하얀 숙소</h3>
                  <p className={`${styles.lodging__txt} f__20 c__ffffff`}>살어리 살어리랏다 강릉에 평생 살어리랏다</p>
                </div>
                <div className="row__sort row__end gap__4">
                  <p className="f__24 w__700 l__32 c__ffffff">32,900</p>
                  <p className="f__24 w__700 l__32 c__ffffff">원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.event__section} row__sort row__between`}>
          <div className={styles.event__img}>
            <Image src="/images/purchase/event.jpg" alt="특가숙소" fill style={{ objectFit: "cover" }} />
            <div className={styles.event__cover}></div>
          </div>
          <div className={`${styles.event__txt__section} column__sort column__right row__center gap__18`}>
            <div className="row__sort gap__16">
              <p className={`${styles.event__txt} f__18 w__700 l__130 c__ffffff`}>‘솔로트립&apos; 독점 숙소</p>
              <p className={`${styles.event__txt} f__18 w__700 l__130 c__ffffff`}>9.24 얼리버드 오픈 예약</p>
            </div>
            <div className="column__sort column__right">
              <h2 className="f__34 w__700 l__130">천만 관객이 사랑한</h2>
              <h2 className="f__34 w__700 l__130">빌 페소 르꼬 전시회 근처 숙소 특가 예약</h2>
            </div>
          </div>
        </div>
        <div className="column__sort gap__24">
          <h2 className="f__28 w__700 l__36">여기에서만 예약할 수 있는 숙소</h2>
          <div className="row__sort gap__16">
            <button
              className={`${styles.lodging__btn} ${
                active ? "black__btn c__ffffff" : "bg__transparent c__525252"
              } w__600`}
              onClick={onClickActive}
            >
              예약 가능 숙소
            </button>
            <button
              className={`${styles.lodging__btn} ${
                !active ? "black__btn c__ffffff" : "bg__transparent c__525252"
              } w__600`}
              onClick={onClickActive}
            >
              예약 마감 숙소
            </button>
          </div>
          <SearchUI isBoard={false} isPurchase={true} />
          <div className="column__sort gap__32">
            <div className={`${styles.reserve__icon__section} row__sort row__between`}>
              {reserveIcon.map(([key, value]) => (
                <div key={key} className={`${styles.reserve__icon} column__sort column__center gap__8 click`}>
                  <Image src={`/images/purchase/${key}.png`} alt={value} width={40} height={40} />
                  <p className="c__333333">{value}</p>
                </div>
              ))}
            </div>
            <div className={styles.reserve__section}>
              {data?.fetchTravelproducts.map((el) => {
                return (
                  <Link key={el._id} href={`/purchase/${el._id}`}>
                    <div className="column__sort gap__12">
                      <div className={`${styles.lodging__img}`}>
                        <Image
                          src={
                            el.images?.[0] && el.images[0].trim() !== ""
                              ? `https://storage.googleapis.com/${el.images[0]}`
                              : "/images/purchase/lodging1.jpg"
                          }
                          alt="숙소"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                        <div className={`${styles.reserve__bookmark__section} row__sort column__center`}>
                          <Image
                            src="/images/purchase/bookmark.png"
                            className={styles.bookmark__img}
                            alt="북마크"
                            width={24}
                            height={24}
                          />
                          <p className="f__14 l__20 c__ffffff">{el.pickedCount}</p>
                        </div>
                      </div>
                      <div className="column__sort gap__4">
                        <h3 className={`${styles.lodging__txt} c__333333`}>{el.name}</h3>
                        <p className={`${styles.lodging__txt} f__14 w__400 l__20 c__5F5F5F`}>{el.remarks}</p>
                        <div className="column__sort gap__12">
                          <p className="f__14 w__400 l__20 c__2974E5">
                            {el.tags?.length ? el.tags.map((tag) => `#${tag}`).join(" ") : "\u00A0"}
                          </p>
                          <div className="row__sort row__between column__center">
                            <div className="row__sort column__center gap__4">
                              <Image
                                src="/images/purchase/profile.jpg"
                                className={styles.profile__img}
                                alt="프로필"
                                width={24}
                                height={24}
                              />
                              <p className="f__14 w__300 l__20 c__5F5F5F">빈얀트리</p>
                            </div>
                            <div className="row__sort gap__4">
                              <p className="w__600 c__1C1C1C">{el.price?.toLocaleString()}</p>
                              <p className="w__600 c__1C1C1C">원</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
