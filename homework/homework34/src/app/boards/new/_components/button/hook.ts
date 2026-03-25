import { CreateBoardDocument, UpdateBoardDocument, UpdateBoardMutationVariables } from "@/commons/graphql/graphql";
import { useBoardEditStore } from "@/commons/stores/board-edit";
import { useMutation } from "@apollo/client/react";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

export const useButton = () => {
  const { isBoardEdit } = useBoardEditStore();
  const { watch } = useFormContext();
  const writer = watch("writer");
  const password = watch("password");
  const title = watch("title");
  const contents = watch("contents");
  const isActive = isBoardEdit ? title && contents : writer && password && title && contents;

  const router = useRouter();
  const [createBoard] = useMutation(CreateBoardDocument);
  const [updateBoard] = useMutation(UpdateBoardDocument);

  const successModal = () => {
    Modal.success({
      content: "수정 완료!",
    });
  };

  const errorModal = (error: unknown) => {
    Modal.error({
      title: "에러가 발생하였습니다. 다시 시도해 주세요.",
      content: String(error),
    });
  };

  const warningModal = (error: unknown) => {
    Modal.warning({
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

  const onClickUpdate = async (data: any) => {
    const password = prompt("글을 입력할때 입력하셨던 비밀번호를 입력해주세요");
    const variables: UpdateBoardMutationVariables = {
      updateBoardInput: { title: data.title, contents: data.contents },
      password: password,
      boardId: data._id,
    };

    if (data.youtubeUrl) variables.updateBoardInput.youtubeUrl = data.youtubeUrl;
    if (data.boardAddress) {
      const { zipcode, address, addressDetail } = data.boardAddress;
      if (zipcode || address || addressDetail) {
        variables.updateBoardInput.boardAddress = {};
        if (zipcode) variables.updateBoardInput.boardAddress.zipcode = zipcode;
        if (address) variables.updateBoardInput.boardAddress.address = address;
        if (addressDetail) variables.updateBoardInput.boardAddress.addressDetail = addressDetail;
      }
    }
    if (data.images) variables.updateBoardInput.images = data.images;
    try {
      await updateBoard({
        variables,
      });
      successModal();
      router.push(`/boards/${data._id}`);
    } catch (error) {
      warningModal(error);
    }
  };

  return { isBoardEdit, isActive, onClickSubmit, onClickUpdate };
};
