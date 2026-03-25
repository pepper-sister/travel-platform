import { useMutation } from "@apollo/client/react";
import { CreatePointTransactionOfLoadingDocument } from "@/commons/graphql/graphql";
import PortOne from "@portone/browser-sdk/v2";
import { v4 as v4uuid } from "uuid";
import { useState } from "react";
import { useVoucherDetail } from "../hook";
import { IUsePointProps } from "./types";

export const usePoint = ({ setIsChargeModal }: IUsePointProps) => {
  const { data } = useVoucherDetail();
  const [open, setOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<number | null>(null);
  const [selectedLabel, setSelectedLabel] = useState("내용입력");
  const [createPointTransactionOfLoading] = useMutation(CreatePointTransactionOfLoadingDocument);

  const onClickPayment = async () => {
    setIsChargeModal(false);
    setSelectedLabel("내용입력");
    const result = await PortOne.requestPayment({
      storeId: "store-abc39db7-8ee1-4898-919e-0af603a68317",
      channelKey: "channel-key-1dc10cea-ec89-471d-aedf-f4bd68993f33",
      paymentId: v4uuid(),
      orderName: data?.fetchTravelproduct.name ?? "",
      totalAmount: Number(selectedKey),
      currency: "CURRENCY_KRW",
      payMethod: "EASY_PAY",
    });

    createPointTransactionOfLoading({
      variables: {
        paymentId: result?.paymentId ?? "",
      },
    });
  };

  return { open, setOpen, setSelectedKey, selectedLabel, setSelectedLabel, onClickPayment };
};
