import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const useSign = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [input, setInput] = useState({ email: "", name: "", password: "", passwordCheck: "" });
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const onClickSignIn = () => {
    if (!isSignUp && (!input.email || !input.password)) {
      setError(true);
      return;
    }

    if (isSignUp && (!input.email || !input.name || !input.password || !input.passwordCheck)) {
      setError(true);
      return;
    }
    setError(false);

    if (!isSignUp) {
      router.push("/boards");
      return;
    }
    showModal();
  };

  const onClickSignUp = () => {
    setIsSignUp((prev) => !prev);
    setError(false);
    setInput({ email: "", name: "", password: "", passwordCheck: "" });
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return { isSignUp, input, error, isModalOpen, onChangeInput, onClickSignIn, onClickSignUp };
};
