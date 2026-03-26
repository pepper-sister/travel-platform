import { useState } from "react";
import { useVoucherDetail } from "../hook";
import { useLoggedIn } from "@/commons/libraries/is-logged-in";
import { useMutation } from "@apollo/client/react";
import { CreatePointTransactionOfBuyingAndSellingDocument } from "@/commons/graphql/graphql";

export const useSeller = () => {
  const { data } = useVoucherDetail();
  const { data: userData } = useLoggedIn();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShortageModal, setIsShortageModal] = useState(false);
  const [isChargeModal, setIsChargeModal] = useState(false);
  const [buyProduct] = useMutation(CreatePointTransactionOfBuyingAndSellingDocument);

  const handleOk = async () => {
    setIsModalOpen(false);
    if (!data?.fetchTravelproduct || !userData) return;
    const price = data.fetchTravelproduct.price ?? 0;
    const point = userData.fetchUserLoggedIn.userPoint?.amount ?? 0;
    console.log(price, point);
    if (price > point) {
      setIsShortageModal(true);
    } else {
      await buyProduct({
        variables: {
          useritemId: data.fetchTravelproduct._id,
        },
      });
    }
  };

  const handleCharge = () => {
    setIsModalOpen(false);
    setIsShortageModal(false);
    setIsChargeModal(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsShortageModal(false);
    setIsChargeModal(false);
  };

  const onClickPurchase = () => {
    setIsModalOpen(true);
  };

  return {
    isModalOpen,
    isShortageModal,
    isChargeModal,
    setIsChargeModal,
    handleOk,
    handleCharge,
    handleCancel,
    onClickPurchase,
  };
};
