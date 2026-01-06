"use client";

import { useMutation, useQuery } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef, useState } from "react";
import { IBoardWriteInputChange } from "./types";
import {
  CreateBoardDocument,
  FetchBoardDocument,
  FetchBoardQuery,
  UpdateBoardDocument,
  UplaodFileDocument,
} from "@/commons/graphql/graphql";
import { Modal } from "antd";
import { Address } from "react-daum-postcode";

export const useBoardsWrite = (data?: FetchBoardQuery) => {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const [password, setPassword] = useState("");
  const [zonecode, setZonecode] = useState(data?.fetchBoard.boardAddress?.zipcode ?? "");
  const [address, setAddress] = useState(data?.fetchBoard.boardAddress?.address ?? "");
  const [detailAddress, setDetailAddress] = useState(data?.fetchBoard.boardAddress?.addressDetail ?? "");
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UplaodFileDocument);
  const [youtubeUrl, setYoutubeUrl] = useState(data?.fetchBoard.youtubeUrl ?? "");

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

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const userInputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };

    setInputs(userInputs);

    if (userInputs.writer && password && userInputs.title && userInputs.contents) return setIsActive(false);
    setIsActive(true);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (inputs.writer && event.target.value && inputs.title && inputs.contents) return setIsActive(false);
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

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
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

    setImageUrl(result.data?.uploadFile?.url ?? "");
  };

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: inputs.writer,
            password: password,
            title: inputs.title,
            contents: inputs.contents,
            youtubeUrl: youtubeUrl,
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
      if (inputs.title) inputChange.title = inputs.title;
      if (inputs.contents) inputChange.contents = inputs.contents;

      if (zonecode || address || detailAddress) {
        inputChange.boardAddress = {};

        inputChange.boardAddress.zipcode = zonecode;
        inputChange.boardAddress.address = address;
        inputChange.boardAddress.addressDetail = detailAddress;
      }

      if (youtubeUrl !== data?.fetchBoard.youtubeUrl) inputChange.youtubeUrl = youtubeUrl;

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
    youtubeUrl,
    imageUrl,
    onChangeInputs,
    onChangePassword,
    isActive,
    onToggleModal,
    handleComplete,
    isModalOpen,
    onChangeDetailAddress,
    onChangeYoutubeUrl,
    onClickUpload,
    onChangeFile,
    onClickUpdate,
    onClickSubmit,
    fileRef,
  };
};
