import { useVoucherStore } from "@/commons/stores/voucher";
import { ISetFormProps } from "@/components/create-board-with-voucher/types";
import { Address } from "react-daum-postcode";
import { IModalProps } from "../../types";

type Props = ISetFormProps & IModalProps;

export const useZipcode = ({ setForm, setIsModalOpen }: Props) => {
  const { isVoucher } = useVoucherStore();

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    if (!isVoucher) {
      setForm((prev) => ({
        ...prev,
        boardAddress: { ...prev.boardAddress, zipcode: data.zonecode, address: data.address },
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        travelproductAddress: { ...prev.travelproductAddress, zipcode: data.zonecode },
      }));
    }
    onToggleModal();
  };

  return { isVoucher, onToggleModal, handleComplete };
};
