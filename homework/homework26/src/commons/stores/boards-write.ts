import { create } from "zustand";

interface BoardsWriteStoreState {
  isBoardEdit: boolean;
  setIsBoardEdit: (value: boolean) => void;
}

export const useBoardsWriteStore = create<BoardsWriteStoreState>((set) => ({
  isBoardEdit: false,
  setIsBoardEdit: (newIsBoardEdit: boolean) => set(() => ({ isBoardEdit: newIsBoardEdit })),
}));
