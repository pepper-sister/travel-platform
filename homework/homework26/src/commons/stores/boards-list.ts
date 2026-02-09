import { create } from "zustand";

interface BoardsListStoreState {
  keyword: string;
  setKeyword: (value: string) => void;

  endDate: string | undefined;
  setEndDate: (value: string | undefined) => void;

  startDate: string | undefined;
  setStartDate: (value: string | undefined) => void;

  search: string;
  setSearch: (value: string) => void;

  page: number;
  setPage: (value: number) => void;
}

export const useBoardsListStore = create<BoardsListStoreState>((set) => ({
  keyword: "",
  setKeyword: (newKeyword: string) => set(() => ({ keyword: newKeyword })),

  endDate: undefined,
  setEndDate: (newEndDate: string | undefined) => set(() => ({ endDate: newEndDate })),

  startDate: undefined,
  setStartDate: (newStartDate: string | undefined) => set(() => ({ startDate: newStartDate })),

  search: "",
  setSearch: (newSearch: string) => set(() => ({ search: newSearch })),

  page: 1,
  setPage: (newPage: number) => set(() => ({ page: newPage })),
}));
