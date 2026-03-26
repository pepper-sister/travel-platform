import { useMutation } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAccessTokenStore } from "@/commons/stores/access-token";
import { CreateUserDocument, LoginUserDocument } from "@/commons/graphql/graphql";
import { useSigninWithSignupStore } from "@/commons/stores/signin-with-signup";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, IForm } from "./schema";

export const useSigninWithSignup = () => {
  const methods = useForm<IForm>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const router = useRouter();
  const { setAccessToken } = useAccessTokenStore();
  const { setIsLoggedIn } = useSigninWithSignupStore();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginUser] = useMutation(LoginUserDocument);
  const [createUserInput] = useMutation(CreateUserDocument);

  const onClickSignIn: SubmitHandler<IForm> = async (data) => {
    if (!isSignUp) {
      try {
        const result = await loginUser({
          variables: {
            email: data.email,
            password: data.password,
          },
        });
        const accessToken = result.data?.loginUser.accessToken;
        if (!accessToken) {
          alert("로그인에 실패했습니다!");
          return;
        }
        setAccessToken(accessToken);
        setIsLoggedIn(true);
        router.push("/boards");
      } catch (error) {
        alert(error);
        return;
      }
      return;
    }
    try {
      await createUserInput({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name ?? "",
          },
        },
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
      alert("회원가입에 실패했습니다.");
    }
  };

  const onClickSignUp = () => {
    setIsSignUp((prev) => !prev);
    setIsModalOpen(false);
  };

  return { methods, isSignUp, isModalOpen, onClickSignIn, onClickSignUp };
};
