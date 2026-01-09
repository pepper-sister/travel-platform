import _ from "lodash";
import { ChangeEvent, useState } from "react";
import { ISearchProps } from "./types";
import { Dayjs } from "dayjs";

export const useSearch = (props: ISearchProps) => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();

  const onChangedate = (event: [Dayjs | null, Dayjs | null] | null) => {
    if (!event || !event[0] || !event[1]) {
      setStartDate(undefined);
      setEndDate(undefined);
      props.refetch({ endDate: undefined, startDate: undefined, page: 1 });
      return;
    }

    setStartDate(event[0].format("YYYY-MM-DD"));
    setEndDate(event[1].format("YYYY-MM-DD"));
    props.refetch({ endDate: event[1].format("YYYY-MM-DD"), startDate: event[0].format("YYYY-MM-DD"), page: 1 });
  };

  const searchDeboune = _.debounce((value) => {
    props.refetch({ endDate, startDate, search: value, page: 1 });
    props.setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    searchDeboune(event.target.value);
  };

  const onClickSearch = () => {
    props.refetch({ endDate, startDate, search: search, page: 1 });
  };

  return { onChangedate, onChangeSearch, onClickSearch };
};
