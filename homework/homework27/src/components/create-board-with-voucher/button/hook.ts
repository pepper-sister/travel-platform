import { CreateBoardDocument, CreateTravelproductDocument, UpdateBoardDocument } from "@/commons/graphql/graphql";
import { useVoucherStore } from "@/commons/stores/voucher";
import { useMutation } from "@apollo/client/react";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { IFormProps } from "../types";

export const useButton = ({ form }: IFormProps) => {
  const router = useRouter();
  const { isVoucher } = useVoucherStore();
  const [createBoard] = useMutation(CreateBoardDocument);
  const [updateBoard] = useMutation(UpdateBoardDocument);
  const [createTravelProduct] = useMutation(CreateTravelproductDocument);

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

  const inputs = {
    title: form.title,
    contents: form.contents,
    youtubeUrl: form.youtubeUrl,
    boardAddress: {
      ...form.boardAddress,
    },
    images: [form.images],
  };

  const onClickSubmit = async () => {
    if (!isVoucher) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              writer: form.writer,
              password: form.password,
            },
          },
        });

        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        errorModal(error);
      }
      return;
    }

    try {
      const result = await createTravelProduct({
        variables: {
          createTravelproductInput: {
            name: form.name,
            remarks: form.remarks,
            contents: form.contents,
            price: Number(form.price) ?? 0,
            tags: form.tags,
            travelproductAddress: {
              ...form.travelproductAddress,
              lat: Number(form.travelproductAddress.lat) ?? 0,
              lng: Number(form.travelproductAddress.lng) ?? 0,
            },
            images: [form.images],
          },
        },
      });

      router.push(`/voucher/${result.data?.createTravelproduct._id}`);
    } catch (error) {
      errorModal(error);
    }
  };

  const onClickUpdate = async (boardId: string) => {
    try {
      const password = prompt("글을 입력할때 입력하셨던 비밀번호를 입력해주세요");

      await updateBoard({
        variables: {
          updateBoardInput: inputs,
          password,
          boardId,
        },
      });

      successModal();
      router.push(`/boards/${boardId}`);
    } catch (error) {
      warningModal(error);
    }
  };

  return { onClickSubmit, onClickUpdate };
};
