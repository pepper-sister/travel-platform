"use client";

import { useQuery } from "@apollo/client/react";
import { MouseEvent, useState } from "react";
import { useBoardsListStore } from "@/commons/stores/boards-list";
import { FetchBoardsCountDocument } from "@/commons/graphql/graphql";

export const usePagination = () => {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const { endDate, startDate, search, setPage } = useBoardsListStore();

  const { data } = useQuery(FetchBoardsCountDocument, {
    variables: {
      endDate: endDate,
      startDate: startDate,
      search: search,
    },
  });

  const lastPage = Math.ceil((data?.fetchBoardsCount ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    setPage(Number(event.currentTarget.id));
    setActivePage(Number(event.currentTarget.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    setActivePage(startPage - 5);
    setPage(startPage - 5);
  };

  const onClickNextPage = () => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      setActivePage(startPage + 5);
      setPage(startPage + 5);
    }
  };

  return { startPage, activePage, lastPage, onClickPage, onClickPrevPage, onClickNextPage };
};
