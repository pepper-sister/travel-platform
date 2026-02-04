import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function BookMarkUI() {
  const [bookmark, setBookmark] = useState(false);
  const arr = new Array(10).fill("상품");

  return (
    <div className="column__sort gap__24">
      <div className="row__sort gap__16">
        <button
          onClick={() => {
            setBookmark(false);
          }}
          className={`${bookmark === false ? "mypage__btn__active" : ""} mypage__btn click`}
        >
          나의 상품
        </button>
        <button
          onClick={() => {
            setBookmark(true);
          }}
          className={`${bookmark === true ? "mypage__btn__active" : ""} mypage__btn click`}
        >
          북마크
        </button>
      </div>

      <div className="row__sort row__end gap__16">
        <div className={`${styles.search__section} row__sort gap__8`}>
          <Image src="/images/mypage/search.png" alt="검색" width={24} height={24} />
          <input className={styles.search__bar} type="text" placeholder="필요한 내용을 검색해 주세요." />
        </div>
        <button className={`${styles.search__btn} click`}>검색</button>
      </div>

      <div className="column__sort gap__8 list__section detail__section">
        <div className="row__sort row__between detail__title__section">
          <div className="row__sort gap__8">
            <p className={styles.detail__num}>번호</p>
            <p className="l__20 c__1C1C1C">상품 명</p>
          </div>

          <div className="row__sort gap__8">
            <p className="detail__title">판매가격</p>
            {bookmark ? <p className="detail__title">판매자</p> : ""}
            <p className="detail__title">날짜</p>
          </div>
        </div>

        <InfiniteScroll
          className="column__sort gap__12"
          // next={onNext}
          // hasMore={hasMore}
          loader={<div>로딩중입니다.</div>}
          dataLength={arr.length ?? 0}
        >
          {arr.map((el, index) => {
            return (
              <div key={el} className="row__sort row__between column__center item__section">
                <div className="row__sort gap__8">
                  <p className={`${styles.item__num} f__14 w__300 l__20 c__919191`}>243</p>
                  <p
                    className={`${bookmark === false && (index === 0 || index === 2 || index === 3) ? "c__ABABAB" : "c__1C1C1C"} f__14 l__20`}
                  >
                    파르나스 호텔 제주
                  </p>
                  {bookmark === false && (index === 0 || index === 2 || index === 3) ? (
                    <p className="f__14 w__700 l__20 c__2974E5">판매 완료</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="row__sort gap__8">
                  <p className="f__14 w__300 l__20 c__333333 item__title">326,000원</p>
                  {bookmark ? <p className="f__14 w__300 l__20 c__333333 item__title">홍길동</p> : ""}
                  <p className="f__14 w__300 l__20 c__919191 item__title">2024.12.16</p>
                </div>
                <Image
                  className={styles.delete__icon}
                  src="/images/mypage/delete.png"
                  alt="삭제"
                  width={24}
                  height={24}
                />
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}
