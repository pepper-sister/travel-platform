"use client";

import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CreateBoardCommentDocument, UpdateBoardCommentDocument } from "@/commons/graphql/graphql";
import { CommentWriteProps } from "./types";

export const useCommentWrite = (props: CommentWriteProps) => {
  const isEditMode = "isCommentEdit" in props && props.isCommentEdit;
  const [rate, setRate] = useState(isEditMode ? props.el.rating : 3);
  const [form, setForm] = useState({
    writer: isEditMode ? props.el.writer : "",
    password: "",
    contents: isEditMode ? props.el.contents : "",
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

  const inputs = {
    contents: form.contents,
    rating: rate,
  };

  const onClickUpdateComment = async () => {
    if (!isEditMode) return;

    await updateBoardComment({
      variables: {
        updateBoardCommentInput: {
          ...inputs,
        },
        password: String(form.password),
        boardCommentId: props.boardCommentId,
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
