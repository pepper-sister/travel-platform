import { create } from "zustand";

interface PurchaseStoreState {
  isPurchase: boolean;
  setIsPurchase: (value: boolean) => void;

  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

export const usePurchaseStore = create<PurchaseStoreState>((set) => ({
  isPurchase: false,
  setIsPurchase: (newIsPurchase: boolean) => set(() => ({ isPurchase: newIsPurchase })),

  isActive: true,
  setIsActive: (newIsActive: boolean) => set(() => ({ isActive: newIsActive })),
}));
