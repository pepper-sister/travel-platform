import { useVoucherStore } from "@/commons/stores/voucher";
import { ISetFormProps } from "@/components/create-board-with-voucher/types";
import { ChangeEvent } from "react";

export const useDetail = ({ setForm }: ISetFormProps) => {
  const { isVoucher } = useVoucherStore();

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isVoucher) {
      setForm((prev) => ({
        ...prev,
        boardAddress: { ...prev.boardAddress, addressDetail: event.target.value },
      }));
      return;
    }
    setForm((prev) => ({
      ...prev,
      travelproductAddress: { ...prev.travelproductAddress, addressDetail: event.target.value },
    }));
  };

  return {
    isVoucher,
    onChangeAddress,
  };
};
