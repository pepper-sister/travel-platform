import { create } from "zustand";

interface BoardsDetailStoreState {
  isCommentEdit: boolean;
  setIsCommentEdit: (value: boolean) => void;
}

export const useBoardsDetailStore = create<BoardsDetailStoreState>((set) => ({
  isCommentEdit: false,
  setIsCommentEdit: (newIsCommentEdit: boolean) => set(() => ({ isCommentEdit: newIsCommentEdit })),
}));
