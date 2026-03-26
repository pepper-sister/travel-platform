import { Address } from "react-daum-postcode";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";

type ZipcodeProps = {
  setValue: UseFormSetValue<any>;
};

export const useZipcode = ({ setValue }: ZipcodeProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    setValue("boardAddress.zipcode", data.zonecode);
    setValue("boardAddress.address", data.address);

    setIsModalOpen(false);
  };

  return { isModalOpen, onToggleModal, handleComplete };
};
