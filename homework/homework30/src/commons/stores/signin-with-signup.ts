import { create } from "zustand";

interface SigninWithSignupStoreState {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export const useSigninWithSignupStore = create<SigninWithSignupStoreState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (newIsLoggedIn: boolean) => set(() => ({ isLoggedIn: newIsLoggedIn })),
}));
