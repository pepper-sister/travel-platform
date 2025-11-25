"use client";

import { useMutation } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./queries";
import { IChangeInput, IResult } from "./types";

export const useBoardsWrite = () => {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // const [writerError, setWriterError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [titleError, setTitleError] = useState("");
  // const [contentsError, setContentsError] = useState("");

  const [isActive, setIsActive] = useState(true);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

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

  const onClickSubmit = async () => {
    try {
      const result: IResult = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
          },
        },
      });

      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {
      alert("에러가 발생하였습니다. 다시 시도해 주세요.");
    }
  };

  const onClickUpdate = async (boardId: string) => {
    try {
      const inputPassword = prompt("글을 입력할때 입력하셨던 비밀번호를 입력해주세요");

      const changeInput: IChangeInput = {};
      if (title) changeInput.title = title;
      if (contents) changeInput.contents = contents;

      const result: IResult = await updateBoard({
        variables: {
          updateBoardInput: changeInput,
          password: inputPassword,
          boardId: boardId,
        },
      });

      alert("수정 완료!");
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error);
    }
  };

  return {
    onChangeWriter,
    onChangePassword,
    onChangeTitle,
    onChangeContents,
    isActive,
    onClickUpdate,
    onClickSubmit,
  };
};
