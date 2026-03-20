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
          className={`${bookmark === false ? "bg__000000 w__600 c__ffffff" : "bg__ffffff c__525252"} btn__border click`}
        >
          나의 상품
        </button>
        <button
          onClick={() => {
            setBookmark(true);
          }}
          className={`${bookmark === true ? "bg__000000 w__600 c__ffffff" : "bg__ffffff c__525252"} btn__border click`}
        >
          북마크
        </button>
      </div>
      <div className="row__sort row__end gap__16">
        <div className={`${styles.search__section} br__8 padding__12 row__sort gap__8 bg__F2F2F2`}>
          <Image src="/images/mypage/search.png" alt="검색" width={24} height={24} />
          <input className="width__100 bg__transparent" type="text" placeholder="필요한 내용을 검색해 주세요." />
        </div>
        <button className="br__8 padding__12__16 click bg__000000 f__18 w__600 c__ffffff">검색</button>
      </div>
      <div className={`${styles.detail__section} column__sort gap__8 list__section`}>
        <div className="padding__16__24 row__sort row__between">
          <div className="row__sort gap__8">
            <p className="width__64px l__20 c__1C1C1C text__center">번호</p>
            <p className="l__20 c__1C1C1C">상품 명</p>
          </div>
          <div className="row__sort gap__8">
            <p className="width__100px l__20 c__1C1C1C text__center">판매가격</p>
            {bookmark ? <p className="width__100px l__20 c__1C1C1C text__center">판매자</p> : ""}
            <p className="width__100px l__20 c__1C1C1C text__center">날짜</p>
          </div>
        </div>
        <InfiniteScroll
          className="column__sort gap__12"
          next={() => {}}
          hasMore={false}
          loader={<div>로딩중입니다.</div>}
          dataLength={arr.length ?? 0}
        >
          {arr.map((el, index) => {
            return (
              <div
                key={`${el}+${index}`}
                className={`${styles.item__section} relative br__8 padding__11__24 border__F2F2F2 row__sort row__between column__center`}
              >
                <div className="row__sort gap__8">
                  <p className="width__64px f__14 w__300 l__20 c__919191 text__center">243</p>
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
                  <p className="width__100px f__14 w__300 l__20 c__333333 text__center">326,000원</p>
                  {bookmark ? <p className="width__100px f__14 w__300 l__20 c__333333 text__center">홍길동</p> : ""}
                  <p className="width__100px f__14 w__300 l__20 c__919191 text__center">2024.12.16</p>
                </div>
                <Image
                  className={`${styles.delete__icon} click`}
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
