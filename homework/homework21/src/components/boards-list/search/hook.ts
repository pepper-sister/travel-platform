import _ from "lodash";
import { ChangeEvent, MouseEvent } from "react";
import { ISearchProps } from "./types";

export const useSearch = (props: ISearchProps) => {
  const searchDeboune = _.debounce((value) => {
    props.refetch({ search: value, page: 1 });
    props.setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    searchDeboune(event.target.value);
  };

  const onClickSearch = (event: MouseEvent<HTMLButtonElement>) => {
    props.refetch({ search: event.currentTarget.value, page: 1 });
  };

  return { onChangeSearch, onClickSearch };
};
