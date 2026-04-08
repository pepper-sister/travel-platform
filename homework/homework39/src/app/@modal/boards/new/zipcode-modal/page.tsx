"use client";

import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ZipcodeModal() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleComplete = (data: Address) => {
    setIsOpen(false);
    router.push(`/boards/new?zipcode=${data.zonecode}&address=${data.address}`);
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </Modal>
  );
}
