"use client";

import { useMutation, useQuery } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { IBoardWriteInputChange } from "./types";
import {
  CreateBoardDocument,
  FetchBoardDocument,
  FetchBoardQuery,
  UpdateBoardDocument,
} from "@/commons/graphql/graphql";
import { Modal } from "antd";
import { Address } from "react-daum-postcode";

export const useBoardsWrite = (data?: FetchBoardQuery) => {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [zonecode, setZonecode] = useState(data?.fetchBoard.boardAddress?.zipcode ?? "");
  const [address, setAddress] = useState(data?.fetchBoard.boardAddress?.address ?? "");
  const [detailAddress, setDetailAddress] = useState(data?.fetchBoard.boardAddress?.addressDetail ?? "");

  // const [writerError, setWriterError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [titleError, setTitleError] = useState("");
  // const [contentsError, setContentsError] = useState("");

  const [isActive, setIsActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createBoard] = useMutation(CreateBoardDocument);
  const [updateBoard] = useMutation(UpdateBoardDocument);

  const { refetch } = useQuery(FetchBoardDocument, {
    variables: { boardId: data?.fetchBoard._id ?? "" },
  });

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

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value && password && title && contents) return setIsActive(false);
    setIsActive(true);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (writer && event.target.value && title && contents) return setIsActive(false);
    setIsActive(true);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);

    if (writer && password && event.target.value && contents) return setIsActive(false);
    setIsActive(true);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);

    if (writer && password && title && event.target.value) return setIsActive(false);
    setIsActive(true);
  };

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    setZonecode(data.zonecode);
    setAddress(data.address);
    onToggleModal();
  };

  const onChangeDetailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            boardAddress: {
              zipcode: zonecode,
              address: address,
              addressDetail: detailAddress,
            },
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
      const inputPassword = prompt("글을 입력할때 입력하셨던 비밀번호를 입력해주세요");

      const inputChange: IBoardWriteInputChange = {};
      if (title) inputChange.title = title;
      if (contents) inputChange.contents = contents;

      if (zonecode || address || detailAddress) {
        inputChange.boardAddress = {};

        inputChange.boardAddress.zipcode = zonecode;
        inputChange.boardAddress.address = address;
        inputChange.boardAddress.addressDetail = detailAddress;
      }

      const result = await updateBoard({
        variables: {
          updateBoardInput: inputChange,
          password: inputPassword,
          boardId: boardId,
        },
      });

      await refetch({ boardId: result.data?.updateBoard._id });

      successModal();
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      warningModal(error);
    }
  };

  return {
    zonecode,
    address,
    detailAddress,
    onChangeWriter,
    onChangePassword,
    onChangeTitle,
    onChangeContents,
    isActive,
    onToggleModal,
    handleComplete,
    isModalOpen,
    onChangeDetailAddress,
    onClickUpdate,
    onClickSubmit,
  };
};
