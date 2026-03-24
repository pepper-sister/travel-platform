import { create } from "zustand";

interface BoardEditStoreState {
  isBoardEdit: boolean;
  setIsBoardEdit: (value: boolean) => void;
}

export const useBoardEditStore = create<BoardEditStoreState>((set) => ({
  isBoardEdit: false,
  setIsBoardEdit: (newIsBoardEdit: boolean) => set(() => ({ isBoardEdit: newIsBoardEdit })),
}));
