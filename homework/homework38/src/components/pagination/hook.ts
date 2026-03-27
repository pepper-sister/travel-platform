import { useQuery } from "@apollo/client/react";
import { MouseEvent, useEffect, useState } from "react";
import { FetchBoardsCountDocument } from "@/commons/graphql/graphql";
import { useSearchParams } from "next/navigation";

export const usePagination = () => {
  const searchParams = useSearchParams();

  const activePage = Number(searchParams.get("page") ?? 1);
  const endDate = searchParams.get("endDate");
  const startDate = searchParams.get("startDate");
  const search = searchParams.get("search");
  const { data } = useQuery(FetchBoardsCountDocument, {
    variables: {
      endDate: endDate,
      startDate: startDate,
      search: search,
    },
  });

  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil((data?.fetchBoardsCount ?? 10) / 10);

  useEffect(() => {
    if (activePage === 1) {
      setStartPage(1);
    }
  }, [activePage]);

  const updatePageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));

    if (!params.get("search")) params.delete("search");
    if (!params.get("startDate")) params.delete("startDate");
    if (!params.get("endDate")) params.delete("endDate");

    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    updatePageUrl(Number(event.currentTarget.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    updatePageUrl(startPage - 5);
  };

  const onClickNextPage = () => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      updatePageUrl(startPage + 5);
    }
  };

  return { startPage, activePage, lastPage, onClickPage, onClickPrevPage, onClickNextPage };
};
