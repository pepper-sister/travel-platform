import { CreateBoardDocument } from "@/commons/graphql/graphql";
import { useMutation } from "@apollo/client/react";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

export const useButton = () => {
  const { watch } = useFormContext();
  const writer = watch("writer");
  const password = watch("password");
  const title = watch("title");
  const contents = watch("contents");
  const isActive = writer && password && title && contents;

  const router = useRouter();
  const [createBoard] = useMutation(CreateBoardDocument);

  const errorModal = (error: unknown) => {
    Modal.error({
      title: "에러가 발생하였습니다. 다시 시도해 주세요.",
      content: String(error),
    });
  };

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              ...data.boardAddress,
            },
            images: data.images,
          },
        },
      });

      router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      errorModal(error);
    }
  };

  const onClickCancel = () => {
    router.back();
  };

  return { isActive, onClickCancel, onClickSubmit };
};
