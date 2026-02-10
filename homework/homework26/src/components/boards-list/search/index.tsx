import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { useSearch } from "./hook";
import { ISearchProps } from "./types";
import { DatePicker } from "antd";

export default function SearchUI(props: ISearchProps) {
  const { onChangedate, onChangeSearch, onClickSearch } = useSearch(props);
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM/DD";

  return (
    <div className="width__100 row__sort row__between gap__8">
      <div className="row__sort gap__16">
        <div className="br__8 padding__12 row__sort gap__8 bg__F2F2F2">
          <Image src="/images/boards-list/search.png" alt="검색" width={24} height={24} />
          <input
            type="text"
            className={`${styles.search__input} bg__transparent`}
            onChange={onChangeSearch}
            placeholder="제목을 검색해 주세요."
          />
        </div>
        <RangePicker
          className={`${styles.search__date} click bg__F2F2F2`}
          format={dateFormat}
          onChange={onChangedate}
        />
        <button className="bg__000000 br__8 padding__12__16 click f__18 w__600 c__ffffff" onClick={onClickSearch}>
          검색
        </button>
      </div>
      <Link
        href="/boards/new"
        className="bg__2974E5 br__8 padding__12__16 click row__sort gap__8 f__18 w__600 c__ffffff"
      >
        <Image src="/images/boards-list/write.png" className="filter" alt="작성" width={24} height={24} />
        {props.isBoard ? "트립토크 등록" : "숙박권 판매하기"}
      </Link>
    </div>
  );
}
