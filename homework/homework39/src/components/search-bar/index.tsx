"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { useSearchBar } from "./hook";
import { DatePicker } from "antd";
import { useVoucherStore } from "@/commons/stores/voucher";

export default function SearchBarUI() {
  const { isVoucher } = useVoucherStore();
  const { onChangedate, onChangeSearch, onClickSearch } = useSearchBar();
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM/DD";

  return (
    <div
      className="width__100 row__sort row__between gap__8"
      style={{
        flexWrap: "wrap-reverse",
        rowGap: "16px",
      }}
    >
      <div
        className="row__sort gap__16 flex__grow"
        style={{
          flexWrap: "wrap",
          rowGap: "12px",
        }}
      >
        <div className={`${styles.search__input__section} br__8 padding__12 row__sort gap__8 bg__F2F2F2`}>
          <Image src="/images/search-bar/search.png" alt="검색" width={24} height={24} />
          <input
            type="text"
            className={`${styles.search__input} bg__transparent`}
            onChange={onChangeSearch}
            placeholder="제목을 검색해 주세요."
          />
        </div>
        {isVoucher ? (
          ""
        ) : (
          <RangePicker
            className={`${styles.search__date} click bg__F2F2F2`}
            style={{ maxWidth: "289px" }}
            format={dateFormat}
            onChange={onChangedate}
          />
        )}

        <button
          className={`${styles.search__btn} bg__000000 br__8 padding__12__16 click f__18 w__600 c__ffffff`}
          onClick={onClickSearch}
        >
          검색
        </button>
      </div>
      <Link
        href={isVoucher ? "/voucher/new" : "/boards/new"}
        className={`${styles.submit__btn} bg__2974E5 br__8 padding__12__16 click row__sort gap__8 f__18 w__600 c__ffffff`}
        style={{
          marginLeft: "auto",
        }}
      >
        <Image src="/images/search-bar/write.png" className="filter" alt="작성" width={24} height={24} />
        {isVoucher ? "숙박권 판매하기" : "트립토크 등록"}
      </Link>
    </div>
  );
}
