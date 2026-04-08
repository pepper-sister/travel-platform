import { create } from "zustand";

interface AccessTokenStoreState {
  accessToken: string;
  setAccessToken: (value: string) => void;
}

export const useAccessTokenStore = create<AccessTokenStoreState>((set) => ({
  accessToken: "",
  setAccessToken: (newAccessToken: string) => set(() => ({ accessToken: newAccessToken })),
}));
