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
        <div className={`${styles.search__section} row__sort gap__8 bg__F2F2F2`}>
          <Image src="/images/search.png" alt="검색" width={24} height={24} />
          <input
            type="text"
            className={`${styles.search__input}`}
            onChange={onChangeSearch}
            placeholder="제목을 검색해 주세요."
          />
        </div>

        <RangePicker className={styles.search__date} format={dateFormat} onChange={onChangedate} />

        <button className={styles.black__btn} onClick={onClickSearch}>
          검색
        </button>
      </div>

      <Link href="/boards/new" className={`${styles.blue__btn} row__sort gap__8`}>
        <Image className={styles.write__icon} src="/images/write.png" alt="작성" width={24} height={24} />
        트립토크 등록
      </Link>
    </div>
  );
}
