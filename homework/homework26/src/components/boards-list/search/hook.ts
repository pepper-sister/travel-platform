import _ from "lodash";
import { ChangeEvent, useEffect } from "react";
import { Dayjs } from "dayjs";
import { useBoardsListStore } from "@/commons/stores/boards-list";
import { ISearchProps } from "./types";
import { usePurchaseStore } from "@/commons/stores/purchase";

export const useSearch = (props: ISearchProps) => {
  const { setEndDate, setStartDate, search, setSearch, setKeyword } = useBoardsListStore();
  const { setIsPurchase } = usePurchaseStore();

  useEffect(() => {
    setIsPurchase(!!props.isPurchase);
  }, [props.isPurchase, setIsPurchase]);

  const onChangedate = (event: [Dayjs | null, Dayjs | null] | null) => {
    if (!event || !event[0] || !event[1]) {
      setStartDate(undefined);
      setEndDate(undefined);
      return;
    }

    setStartDate(event[0].format("YYYY-MM-DD"));
    setEndDate(event[1].format("YYYY-MM-DD"));
  };

  const searchDeboune = _.debounce((value) => {
    setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    searchDeboune(event.target.value);
  };

  const onClickSearch = () => {
    setSearch(search);
  };

  return { onChangedate, onChangeSearch, onClickSearch };
};
