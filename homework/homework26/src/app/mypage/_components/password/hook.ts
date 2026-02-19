import { ChangeEvent, useState } from "react";

export const usePassword = () => {
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordInputCheck, setPasswordInputCheck] = useState("");
  const [password, setPassword] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChangePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);

    if (event.target.value && passwordInputCheck) setPassword(false);
    else setPassword(true);
  };

  const onChangePasswordInputCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInputCheck(event.target.value);

    if (passwordInput && event.target.value) setPassword(false);
    else setPassword(true);
  };

  const showPasswordModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return { password, isModalOpen, onChangePasswordInput, onChangePasswordInputCheck, showPasswordModal, handleOk };
};
