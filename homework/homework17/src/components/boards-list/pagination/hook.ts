"use client";

import { FetchBoardsCountDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { MouseEvent, useState } from "react";
import { IPaginationProps } from "./types";

export const usePagination = (props: IPaginationProps) => {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  const { data } = useQuery(FetchBoardsCountDocument);

  const lastPage = Math.ceil((data?.fetchBoardsCount ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    props.onRefetch(Number(event.currentTarget.id));
    setActivePage(Number(event.currentTarget.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    setActivePage(startPage - 5);
    props.onRefetch(startPage - 5);
  };

  const onClickNextPage = () => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      setActivePage(startPage + 5);
      props.onRefetch(startPage + 5);
    }
  };

  return { startPage, activePage, lastPage, onClickPage, onClickPrevPage, onClickNextPage };
};
