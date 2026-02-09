import { create } from "zustand";

interface LoginStoreState {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export const useLoginStore = create<LoginStoreState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (newIsLoggedIn: boolean) => set(() => ({ isLoggedIn: newIsLoggedIn })),
}));
