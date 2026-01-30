"use client";

import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CreateBoardCommentDocument, UpdateBoardCommentDocument } from "@/commons/graphql/graphql";
import { IFetchCommentData } from "./types";

export const useCommentWrite = (props: IFetchCommentData) => {
  const [rate, setRate] = useState(props.isCommentEdit ? props.el.rating : 3);
  const [form, setForm] = useState({
    writer: props.isCommentEdit ? props.el.writer : "",
    password: "",
    contents: props.isCommentEdit ? props.el.contents : "",
  });
  const isActive = form.writer && form.password && form.contents;

  const [createBoardComment] = useMutation(CreateBoardCommentDocument);
  const [updateBoardComment] = useMutation(UpdateBoardCommentDocument);

  const onChangeForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const onClickSubmit = async () => {
    await createBoardComment({
      variables: {
        createBoardCommentInput: {
          ...form,
          rating: rate,
        },
        boardId: String(props.params.boardId),
      },
      refetchQueries: ["fetchBoardComments"],
    });

    setForm({
      writer: "",
      password: "",
      contents: "",
    });
  };

  const onClickUpdateComment = async () => {
    await updateBoardComment({
      variables: {
        updateBoardCommentInput: {
          ...form,
          rating: rate,
        },
        password: String(form.password),
        boardCommentId: props.boardCommentId ?? "",
      },
    });

    props.setIsCommentEdit(false);
  };

  return {
    rate,
    setRate,
    form,
    isActive,
    onChangeForm,
    onClickSubmit,
    onClickUpdateComment,
  };
};
