import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client/react";
import { UpdateBoardCommentDocument, UpdateTravelproductQuestionDocument } from "@/commons/graphql/graphql";
import { IEditProps } from "./types";
import { usePurchaseStore } from "@/commons/stores/purchase";

export const useCommentWithQuestionEdit = (props: IEditProps) => {
  const [rate, setRate] = useState("rating" in props.el ? props.el.rating : 0);
  const [form, setForm] = useState({
    writer: "writer" in props.el ? (props.el.writer ?? "") : "",
    password: "",
    contents: props.el.contents ?? "",
  });
  const { isPurchase } = usePurchaseStore();
  const isActive = isPurchase ? form.contents : form.password && form.contents;

  const [updateBoardComment] = useMutation(UpdateBoardCommentDocument);
  const [updateTravelproductQuestion] = useMutation(UpdateTravelproductQuestionDocument);

  const onChangeForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const onClickUpdateComment = async () => {
    try {
      if (isPurchase) {
        await updateTravelproductQuestion({
          variables: {
            updateTravelproductQuestionInput: {
              contents: form.contents,
            },
            travelproductQuestionId: props.el?._id ?? "",
          },
        });
        props.setIsEdit(!props.isEdit);
      } else {
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
      }
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
