import { usePagination } from "./hook";

export default function PaginationUI() {
  const { startPage, activePage, lastPage, onClickPage, onClickPrevPage, onClickNextPage } = usePagination();

  return (
    <div className="row__sort row__center column__center gap__8">
      <span className={`${activePage <= 5 ? "c__C7C7C7" : "c__333333 click"}`} onClick={onClickPrevPage}>{`<`}</span>
      <div className="row__sort gap__16">
        {new Array(5).fill(" ").map(
          (_, index) =>
            index + startPage <= lastPage && (
              <span
                className={`${activePage === index + startPage ? "bg__F2F2F2 c__000000" : "c__777777"} l__32 click pagination__number`}
                key={index + startPage}
                id={String(index + startPage)}
                onClick={onClickPage}
              >
                {index + startPage}
              </span>
            ),
        )}
      </div>
      <span
        className={`${startPage + 5 > lastPage ? "c__C7C7C7" : "c__333333 click"}`}
        onClick={onClickNextPage}
      >{`>`}</span>
    </div>
  );
}
