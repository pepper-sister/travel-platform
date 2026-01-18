import PaginationUI from "@/components/boards-list/pagination";
import { useState } from "react";

export default function PointUI() {
  const [active, setActive] = useState("total");
  const arr = new Array(10).fill("상품");

  return (
    <div className="column__sort gap__24">
      <div className="row__sort gap__16">
        <button
          onClick={() => {
            setActive("total");
          }}
          className={`${active === "total" ? "mypage__btn__active" : ""} mypage__btn click`}
        >
          전체
        </button>
        <button
          onClick={() => {
            setActive("charge");
          }}
          className={`${active === "charge" ? "mypage__btn__active" : ""} mypage__btn click`}
        >
          충전내역
        </button>
        <button
          onClick={() => {
            setActive("purchase");
          }}
          className={`${active === "purchase" ? "mypage__btn__active" : ""} mypage__btn click`}
        >
          구매내역
        </button>
        <button
          onClick={() => {
            setActive("sale");
          }}
          className={`${active === "sale" ? "mypage__btn__active" : ""} mypage__btn click`}
        >
          판매내역
        </button>
      </div>

      <div className="column__sort gap__24 list__section">
        <div className="column__sort gap__8">
          <div className="row__sort detail__title__section">
            <div className={`${active !== "total" ? "row__between" : ""} width__100 row__sort gap__8`}>
              <div className="row__sort gap__8">
                <p className="detail__title">
                  {active === "total" ? "날짜" : active === "charge" ? "충전일" : "거래일"}
                </p>
                <p className={active === "total" ? "detail__title" : "l__20 c__1C1C1C"}>
                  {active === "total" ? "내용" : active === "charge" ? "결제 ID" : "상품 명"}
                </p>
              </div>

              <div className={`${active === "total" ? "flex__grow" : ""} row__sort gap__8`}>
                <p className={`${active === "total" ? "flex__grow" : "detail__title"} l__20 c__1C1C1C text__center`}>
                  {active === "total" ? "거래 및 충전 내역" : active === "charge" ? "충전내역" : "거래내역"}
                </p>
                <p className="detail__title">{active === "total" ? "잔액" : "거래 후 잔액"}</p>
                {active === "purchase" ? <p className="detail__title">판매자</p> : ""}
              </div>
            </div>
          </div>

          <div className="column__sort gap__12">
            {arr.map((el, index) => {
              return (
                <div key={el} className="row__sort row__between column__center item__section">
                  <div className={`${active !== "total" ? "row__between" : ""} width__100 row__sort gap__8`}>
                    <div className="row__sort gap__8">
                      <p className="f__14 w__300 l__20 c__919191 item__title">2024.12.16</p>

                      {active === "charge" ? (
                        <p className="f__14 l__20 c__1C1C1C">abcd1243</p>
                      ) : active !== "total" ? (
                        <p className="f__14 l__20 c__1C1C1C">파르나스 호텔 제주</p>
                      ) : index === 0 || index === 3 || index === 4 ? (
                        <p className="f__14 w__700 l__20 c__2974E5 item__title">충전</p>
                      ) : index === 1 || index === 5 || index === 6 || index === 9 ? (
                        <p className="f__14 w__700 l__20 c__F66A6A item__title">구매</p>
                      ) : (
                        <p className="f__14 w__700 l__20 c__2974E5 item__title">판매</p>
                      )}
                    </div>

                    <div className={`${active === "total" ? "flex__grow" : ""} row__sort gap__8`}>
                      {active === "purchase" ? (
                        <p className="f__14 w__700 l__20 c__F66A6A item__title">-1,000,000</p>
                      ) : active !== "total" ? (
                        <p className="f__14 w__700 l__20 c__2974E5 item__title">+1,000,000</p>
                      ) : index === 1 || index === 5 || index === 6 || index === 9 ? (
                        <p
                          className={`${active === "total" ? "flex__grow text__center" : ""} f__14 w__700 l__20 c__F66A6A`}
                        >
                          -50,000
                        </p>
                      ) : (
                        <p
                          className={`${active === "total" ? "flex__grow text__center" : ""} f__14 w__700 l__20 c__2974E5`}
                        >
                          +1,000,000
                        </p>
                      )}

                      <p className="f__14 l__20 item__title">1,222,000</p>
                      {active === "purchase" ? <p className="f__14 w__300 l__20 c__333333 item__title">홍길동</p> : ""}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <PaginationUI />
      </div>
    </div>
  );
}
