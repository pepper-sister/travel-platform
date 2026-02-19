import { create } from "zustand";

interface CreateBoardWithVoucherStoreState {
  isBoardEdit: boolean;
  setIsBoardEdit: (value: boolean) => void;
}

export const useCreateBoardWithVoucherStore = create<CreateBoardWithVoucherStoreState>((set) => ({
  isBoardEdit: false,
  setIsBoardEdit: (newIsBoardEdit: boolean) => set(() => ({ isBoardEdit: newIsBoardEdit })),
}));
