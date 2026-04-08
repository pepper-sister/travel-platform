import { create } from "zustand";

interface KeywordStoreState {
  keyword: string;
  setKeyword: (value: string) => void;
}

export const useKeywordStore = create<KeywordStoreState>((set) => ({
  keyword: "",
  setKeyword: (newKeyword: string) => set(() => ({ keyword: newKeyword })),
}));
