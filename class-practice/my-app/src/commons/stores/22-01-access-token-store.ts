import { create } from "zustand";

export const useAccessTokenStore = create((set) => ({
  accessToken: "",
  setaccessToken: (newAccessToken: string) => set(() => ({ accessToken: newAccessToken })),
}));
