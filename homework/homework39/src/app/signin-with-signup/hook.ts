import { useRouter } from "next/navigation";

export const useSigninTitle = () => {
  const router = useRouter();

  const onClickCancel = () => {
    router.push("/boards");
  };

  return { onClickCancel };
};
