import { create } from "zustand";

export const usePurchaseStore = create((set) => ({
  isPurchase: false,
  setIsPurchase: (newIsPurchase: boolean) => set(() => ({ isPurchase: newIsPurchase })),
}));
