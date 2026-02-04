import { useMutation } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useAccessTokenStore } from "@/commons/stores/access-token";
import { CreateUserDocument, LoginUserDocument } from "@/commons/graphql/graphql";

export const useSign = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [input, setInput] = useState({ email: "", name: "", password: "", passwordCheck: "" });
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const { setAccessToken } = useAccessTokenStore();
  const [loginUser] = useMutation(LoginUserDocument);
  const [createUserInput] = useMutation(CreateUserDocument);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const onClickSignIn = async () => {
    if (!isSignUp && (!input.email || !input.password)) {
      setError(true);
      return;
    }

    if (isSignUp && (!input.email || !input.name || !input.password || !input.passwordCheck)) {
      setError(true);
      return;
    }
    if (isSignUp && input.password !== input.passwordCheck) {
      setError(true);
      return;
    }
    setError(false);

    if (!isSignUp) {
      try {
        const result = await loginUser({
          variables: {
            email: input.email,
            password: input.password,
          },
        });
        const accessToken = result.data?.loginUser.accessToken;
        if (accessToken === undefined) {
          alert("로그인에 실패했습니다! 다시 시도해 주세요!");
          return;
        }
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
      } catch (error) {
        alert(error);
        return;
      }

      router.push("/boards");
      return;
    }
    createUserInput({
      variables: {
        createUserInput: {
          email: input.email,
          password: input.password,
          name: input.name,
        },
      },
    });
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
