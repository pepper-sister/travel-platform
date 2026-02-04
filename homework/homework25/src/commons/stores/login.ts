import { create } from "zustand";

export const useLoginStore = create((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (newisLoggedIn: boolean) => set(() => ({ isLoggedIn: newisLoggedIn })),
}));
