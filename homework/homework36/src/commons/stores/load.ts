import { create } from "zustand";

interface LoadStoreState {
  isLoaded: boolean;
  setIsLoaded: () => void;
}

export const useLoadStore = create<LoadStoreState>((set) => ({
  isLoaded: false,
  setIsLoaded: () =>
    set(() => ({
      isLoaded: true,
    })),
}));
