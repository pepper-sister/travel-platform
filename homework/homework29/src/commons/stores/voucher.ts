import { create } from "zustand";

interface VoucherStoreState {
  isVoucher: boolean;
  setIsVoucher: (value: boolean) => void;

  isReservable: boolean;
  setIsReservable: (value: boolean) => void;
}

export const useVoucherStore = create<VoucherStoreState>((set) => ({
  isVoucher: false,
  setIsVoucher: (newIsVoucher: boolean) => set(() => ({ isVoucher: newIsVoucher })),

  isReservable: true,
  setIsReservable: (newIsReservable: boolean) => set(() => ({ isReservable: newIsReservable })),
}));
