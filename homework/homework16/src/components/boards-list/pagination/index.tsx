import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";
import styles from "./styles.module.css";

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationUI(props) {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  const { data } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((data?.fetchBoardsCount ?? 10) / 10);

  const onClickPage = (event) => {
    props.refetch({ clickPage: Number(event.currentTarget.id) });
    setActivePage(Number(event.currentTarget.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    setActivePage(startPage - 5);
    props.refetch({ clickPage: startPage - 5 });
  };

  const onClickNextPage = () => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      setActivePage(startPage + 5);
      props.refetch({ clickPage: startPage + 5 });
    }
  };

  return (
    <div className="row__sort row__center column__center gap__8">
      <span className={`${activePage <= 5 ? "c__C7C7C7" : "c__333333 click"}`} onClick={onClickPrevPage}>{`<`}</span>
      <div className="row__sort gap__16">
        {new Array(5).fill(" ").map(
          (_, index) =>
            index + startPage <= lastPage && (
              <span
                className={`${styles.pagination__number} ${
                  activePage === index + startPage ? "bg__F2F2F2 c__000000" : "c__777777"
                } l__32 click`}
                key={index + startPage}
                id={String(index + startPage)}
                onClick={onClickPage}
              >
                {index + startPage}
              </span>
            )
        )}
      </div>
      <span
        className={`${startPage + 5 > lastPage ? "c__C7C7C7" : "c__333333 click"}`}
        onClick={onClickNextPage}
      >{`>`}</span>
    </div>
  );
}
