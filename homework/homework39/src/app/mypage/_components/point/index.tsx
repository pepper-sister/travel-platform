import { useState } from "react";
import { usePoint } from "./hook";

export default function PointUI() {
  const [active, setActive] = useState("total");
  const { totalData, chargeData, voucherData, saleData } = usePoint();
  const currentData =
    active === "total"
      ? totalData?.fetchPointTransactions
      : active === "charge"
        ? chargeData?.fetchPointTransactionsOfLoading
        : active === "voucher"
          ? voucherData?.fetchPointTransactionsOfBuying
          : saleData?.fetchPointTransactionsOfSelling;

  return (
    <div className="column__sort gap__24">
      <div className="row__sort gap__16">
        <button
          onClick={() => {
            setActive("total");
          }}
          className={`${active === "total" ? "bg__000000 w__600 c__ffffff" : "bg__ffffff c__525252"} btn__border click`}
        >
          전체
        </button>
        <button
          onClick={() => {
            setActive("charge");
          }}
          className={`${active === "charge" ? "bg__000000 w__600 c__ffffff" : "bg__ffffff c__525252"} btn__border click`}
        >
          충전내역
        </button>
        <button
          onClick={() => {
            setActive("voucher");
          }}
          className={`${active === "voucher" ? "bg__000000 w__600 c__ffffff" : "bg__ffffff c__525252"} btn__border click`}
        >
          구매내역
        </button>
        <button
          onClick={() => {
            setActive("sale");
          }}
          className={`${active === "sale" ? "bg__000000 w__600 c__ffffff" : "bg__ffffff c__525252"} btn__border click`}
        >
          판매내역
        </button>
      </div>
      <div className="column__sort gap__24 list__section">
        {currentData?.length === 0 ? (
          <div className="row__sort row__center w__400 l__20 c__777777">포인트 거래내역이 없습니다.</div>
        ) : (
          <div className="column__sort gap__8">
            <div className="padding__16__24 row__sort">
              <div className={`${active !== "total" ? "row__between" : ""} width__100 row__sort gap__8`}>
                <div className="row__sort gap__8">
                  <p className="width__100px l__20 c__1C1C1C text__center">
                    {active === "total" ? "날짜" : active === "charge" ? "충전일" : "거래일"}
                  </p>
                  <p className={`${active === "total" ? "width__100px text__center" : ""} l__20 c__1C1C1C`}>
                    {active === "total" ? "내용" : active === "charge" ? "결제 ID" : "상품 명"}
                  </p>
                </div>
                <div className={`${active === "total" ? "flex__grow" : ""} row__sort gap__8`}>
                  <p className={`${active === "total" ? "flex__grow" : "width__100px"} l__20 c__1C1C1C text__center`}>
                    {active === "total" ? "거래 및 충전 내역" : active === "charge" ? "충전내역" : "거래내역"}
                  </p>
                  <p className="width__100px l__20 c__1C1C1C text__center">
                    {active === "total" ? "잔액" : "거래 후 잔액"}
                  </p>
                  {active === "voucher" ? <p className="width__100px l__20 c__1C1C1C text__center">판매자</p> : ""}
                </div>
              </div>
            </div>
            <div className="column__sort gap__12">
              {currentData?.map((el) => (
                <div
                  key={`${el._id}`}
                  className="relative br__8 padding__11__24 border__F2F2F2 row__sort row__between column__center"
                >
                  <div className={`${active !== "total" ? "row__between" : ""} width__100 row__sort gap__8`}>
                    <div className="row__sort gap__8">
                      <p className="width__100px f__14 w__300 l__20 c__919191 text__center">
                        {el.createdAt.slice(0, 10)}
                      </p>
                      {active === "charge" ? (
                        <p className="f__14 l__20 c__1C1C1C">홍길동</p>
                      ) : active !== "total" ? (
                        <p className="f__14 l__20 c__1C1C1C">{el.travelproduct?.name}</p>
                      ) : el.status === "충전" ? (
                        <p className="width__100px f__14 w__700 l__20 c__2974E5 text__center">충전</p>
                      ) : el.status === "구매" ? (
                        <p className="width__100px f__14 w__700 l__20 c__F66A6A text__center">구매</p>
                      ) : (
                        <p className="width__100px f__14 w__700 l__20 c__2974E5 text__center">판매</p>
                      )}
                    </div>
                    <div className={`${active === "total" ? "flex__grow" : ""} row__sort gap__8`}>
                      {active === "voucher" ? (
                        <p className="width__100px f__14 w__700 l__20 c__F66A6A text__center">
                          {el.amount.toLocaleString()}
                        </p>
                      ) : active !== "total" ? (
                        <p className="width__100px f__14 w__700 l__20 c__2974E5 text__center">{`+${el.amount.toLocaleString()}`}</p>
                      ) : el.status === "구매" ? (
                        <p
                          className={`${active === "total" ? "flex__grow text__center" : ""} f__14 w__700 l__20 c__F66A6A`}
                        >
                          {el.amount.toLocaleString()}
                        </p>
                      ) : (
                        <p
                          className={`${active === "total" ? "flex__grow text__center" : ""} f__14 w__700 l__20 c__2974E5`}
                        >
                          {`+${el.amount.toLocaleString()}`}
                        </p>
                      )}
                      <p className="width__100px f__14 l__20 text__center">{el.balance.toLocaleString()}</p>
                      {active === "voucher" ? (
                        <p className="width__100px f__14 w__300 l__20 c__333333 text__center">홍길동</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
