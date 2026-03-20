import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { FetchBoardDocument } from "@/commons/graphql/graphql";
import { useCreateBoardWithVoucherStore } from "@/commons/stores/create-board-with-voucher";
import { useVoucherStore } from "@/commons/stores/voucher";
import { IFormProps } from "./types";

export const useCreateBoardWithVoucher = () => {
  const { isVoucher } = useVoucherStore();
  const { isBoardEdit } = useCreateBoardWithVoucherStore();

  const [form, setForm] = useState<IFormProps["form"]>({
    writer: "",
    password: "",
    title: "",
    contents: "",
    boardAddress: {
      zipcode: "",
      address: "",
      addressDetail: "",
    },
    youtubeUrl: "",
    images: "",

    name: "",
    remarks: "",
    price: undefined,
    tags: [""],
    travelproductAddress: {
      zipcode: "",
      address: "",
      addressDetail: "",
      lat: undefined,
      lng: undefined,
    },
  });
  const isActive = isBoardEdit
    ? !form.title || !form.contents
    : isVoucher
      ? !form.name ||
        !form.remarks ||
        !form.contents ||
        !form.price ||
        !form.travelproductAddress.zipcode ||
        !form.travelproductAddress.addressDetail ||
        !form.images
      : !form.writer || !form.password || !form.title || !form.contents;
  const params = useParams();
  const { data } = useQuery(FetchBoardDocument, {
    variables: {
      boardId: String(params.boardId),
    },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!data?.fetchBoard || isVoucher) return;

    const board = data.fetchBoard;
    if (!isVoucher) {
      setForm((prev) => ({
        ...prev,
        writer: board.writer ?? "",
        password: "",
        title: board.title ?? "",
        contents: board.contents ?? "",
        boardAddress: {
          zipcode: board.boardAddress?.zipcode ?? "",
          address: board.boardAddress?.address ?? "",
          addressDetail: board.boardAddress?.addressDetail ?? "",
        },
        youtubeUrl: board.youtubeUrl ?? "",
        images: board.images?.[0] ?? "",
      }));
    }
  }, [data?.fetchBoard, isVoucher]);

  const onChangeForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  return { form, setForm, isModalOpen, setIsModalOpen, isActive, data, onChangeForm };
};
