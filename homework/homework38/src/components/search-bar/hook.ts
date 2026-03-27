import _ from "lodash";
import { ChangeEvent, useCallback, useState } from "react";
import { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useKeywordStore } from "@/commons/stores/keyword";

export const useSearchBar = () => {
  const { setKeyword } = useKeywordStore();
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();

  const updateUrl = (newParams: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    params.set("page", "1");
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const onChangedate = (event: [Dayjs | null, Dayjs | null] | null) => {
    const start = event?.[0] ? event[0].format("YYYY-MM-DD") : "";
    const end = event?.[1] ? event[1].format("YYYY-MM-DD") : "";

    updateUrl({ startDate: start, endDate: end });
  };

  const searchDeboune = useCallback(
    _.debounce((value) => {
      setKeyword(value);
    }, 500),
    [],
  );

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    searchDeboune(event.target.value);
  };

  const onClickSearch = () => {
    updateUrl({ search: search });
  };

  return { onChangedate, onChangeSearch, onClickSearch };
};
