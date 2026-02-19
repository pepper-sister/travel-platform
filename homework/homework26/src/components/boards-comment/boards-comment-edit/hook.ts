import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client/react";
import { UpdateBoardCommentDocument } from "@/commons/graphql/graphql";
import { ICommentEditProps } from "./types";

export const useBoardsCommentEdit = (props: ICommentEditProps) => {
  const [rate, setRate] = useState(props.el.rating);
  const [form, setForm] = useState({
    writer: props.el.writer,
    password: "",
    contents: props.el.contents,
  });
  const isActive = form.password && form.contents;

  const [updateBoardComment] = useMutation(UpdateBoardCommentDocument);

  const onChangeForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const onClickUpdateComment = async () => {
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: form.contents,
            rating: rate,
          },
          password: String(form.password),
          boardCommentId: props.el?._id ?? "",
        },
      });
      props.setIsEdit(!props.isEdit);
    } catch (error) {
      alert(error);
    }
  };

  return {
    rate,
    setRate,
    form,
    isActive,
    onChangeForm,
    onClickUpdateComment,
  };
};
