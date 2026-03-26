import { UpdateBoardDocument, UpdateBoardMutationVariables } from "@/commons/graphql/graphql";
import { useMutation } from "@apollo/client/react";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

export const useButton = () => {
  const { watch } = useFormContext();
  const title = watch("title");
  const contents = watch("contents");
  const isActive = title && contents;

  const router = useRouter();
  const [updateBoard] = useMutation(UpdateBoardDocument);

  const successModal = () => {
    Modal.success({
      content: "수정 완료!",
    });
  };

  const warningModal = (error: unknown) => {
    Modal.warning({
      content: String(error),
    });
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

  return { isActive, onClickUpdate };
};
