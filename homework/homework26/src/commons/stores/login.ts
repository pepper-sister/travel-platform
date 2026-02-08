import { create } from "zustand";

export const useLoginStore = create((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (newIsLoggedIn: boolean) => set(() => ({ isLoggedIn: newIsLoggedIn })),
}));
