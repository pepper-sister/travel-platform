"use client";

import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CreateBoardCommentDocument, UpdateBoardCommentDocument } from "@/commons/graphql/graphql";
import { useParams } from "next/navigation";
import { ICommentEditProps } from "./types";
import { useBoardsDetailStore } from "@/commons/stores/boards-detail";

export const useCommentWrite = (props: ICommentEditProps) => {
  const params = useParams();
  const { isCommentEdit, setIsCommentEdit } = useBoardsDetailStore();
  const [rate, setRate] = useState(isCommentEdit ? (props.el?.rating ?? 3) : 3);
  const [form, setForm] = useState({
    writer: isCommentEdit ? (props.el?.writer ?? "") : "",
    password: "",
    contents: isCommentEdit ? (props.el?.contents ?? "") : "",
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
        boardId: String(params.boardId),
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
    if (!isCommentEdit) return;

    await updateBoardComment({
      variables: {
        updateBoardCommentInput: {
          contents: form.contents,
          rating: rate,
        },
        password: String(form.password),
        boardCommentId: props.boardCommentId ?? "",
      },
    });
    setIsCommentEdit(!isCommentEdit);
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
