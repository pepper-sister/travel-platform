import { create } from "zustand";

export const useBoardsListStore = create((set) => ({
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
