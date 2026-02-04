import { create } from "zustand";

export const useLoginStore = create((set) => ({
  accessToken: "",
  setAccessToken: (newAccessToken: string) => set(() => ({ accessToken: newAccessToken })),
}));
