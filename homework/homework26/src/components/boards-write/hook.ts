"use client";

import { useMutation, useQuery } from "@apollo/client/react";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  CreateBoardDocument,
  FetchBoardDocument,
  UpdateBoardDocument,
  UplaodFileDocument,
} from "@/commons/graphql/graphql";
import { Modal } from "antd";
import { Address } from "react-daum-postcode";
import { IBoardWriteData } from "./types";

export const useBoardsWrite = (props: IBoardWriteData) => {
  const [form, setForm] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
    address: {
      zipcode: "",
      address: "",
      addressDetail: "",
    },
    youtubeUrl: "",
    images: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isActive = props.isEdit
    ? !form.title || !form.contents
    : !form.writer || !form.password || !form.title || !form.contents;

  const router = useRouter();
  const params = useParams();
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UplaodFileDocument);
  const [createBoard] = useMutation(CreateBoardDocument);
  const [updateBoard] = useMutation(UpdateBoardDocument);

  const { data } = useQuery(FetchBoardDocument, {
    variables: {
      boardId: String(params.boardId),
    },
  });

  useEffect(() => {
    if (!data?.fetchBoard) return;

    const board = data.fetchBoard;
    setForm({
      writer: board.writer ?? "",
      password: "",
      title: board.title ?? "",
      contents: board.contents ?? "",
      address: {
        zipcode: board.boardAddress?.zipcode ?? "",
        address: board.boardAddress?.address ?? "",
        addressDetail: board.boardAddress?.addressDetail ?? "",
      },
      youtubeUrl: board.youtubeUrl ?? "",
      images: board.images?.[0] ?? "",
    });
  }, [data]);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

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

  const onChangeForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, address: { ...prev.address, addressDetail: event.target.value } }));
  };

  const handleComplete = (data: Address) => {
    setForm((prev) => ({ ...prev, address: { ...prev.address, zipcode: data.zonecode, address: data.address } }));
    onToggleModal();
  };

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("파일 크기는 최대 5MB입니다.");
      return;
    }

    const result = await uploadFile({ variables: { file } });
    setForm((prev) => ({ ...prev, images: result.data?.uploadFile?.url ?? "" }));
  };

  const onClickDelete = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setForm((prev) => ({ ...prev, images: "" }));
  };

  const inputs = {
    title: form.title,
    contents: form.contents,
    youtubeUrl: form.youtubeUrl,
    images: [form.images],
    boardAddress: {
      zipcode: form.address.zipcode,
      address: form.address.address,
      addressDetail: form.address.addressDetail,
    },
  };

  const onClickSubmit = async () => {
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

  return {
    form,
    isModalOpen,
    isActive,
    fileRef,
    data,
    onToggleModal,
    handleComplete,
    onChangeForm,
    onChangeAddress,
    onClickUpload,
    onChangeFile,
    onClickDelete,
    onClickSubmit,
    onClickUpdate,
  };
};
