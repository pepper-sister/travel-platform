import { create } from "zustand";

interface PurchaseStoreState {
  isPurchase: boolean;
  setIsPurchase: (value: boolean) => void;
}

export const usePurchaseStore = create<PurchaseStoreState>((set) => ({
  isPurchase: false,
  setIsPurchase: (newIsPurchase: boolean) => set(() => ({ isPurchase: newIsPurchase })),
}));
