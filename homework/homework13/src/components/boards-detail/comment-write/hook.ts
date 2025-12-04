"use client";

import { ChangeEvent, useState } from "react";
import { useMutation, useQuery } from "@apollo/client/react";
import { CreateBoardCommentDocument, FetchBoardCommentsDocument } from "@/commons/graphql/graphql";
import { IFetchCommentData } from "./types";

export const useCommentWrite = (props: IFetchCommentData) => {
  const [rate, setRate] = useState(3);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");
  const [isActive, setIsActive] = useState(true);

  const [createBoardComment] = useMutation(CreateBoardCommentDocument);
  const { refetch } = useQuery(FetchBoardCommentsDocument, {
    variables: { boardId: String(props.params.boardId) },
  });

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value && password && comment) return setIsActive(false);
    setIsActive(true);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (writer && event.target.value && comment) return setIsActive(false);
    setIsActive(true);
  };

  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);

    if (writer && password && event.target.value) return setIsActive(false);
    setIsActive(true);
  };

  const onClickSubmit = () => {
    createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer: writer,
          password: password,
          contents: comment,
          rating: rate,
        },
        boardId: String(props.params.boardId),
      },
    });

    refetch();

    setWriter("");
    setPassword("");
    setComment("");
  };

  return {
    rate,
    setRate,
    onChangeWriter,
    onChangePassword,
    onChangeComment,
    onClickSubmit,
    writer,
    password,
    comment,
    isActive,
  };
};
