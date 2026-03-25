import { DeleteBoardCommentDocument, DeleteTravelproductQuestionDocument } from "@/commons/graphql/graphql";
import { useVoucherStore } from "@/commons/stores/voucher";
import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import { IFetchItemData } from "./types";

export const useItem = ({ el }: IFetchItemData) => {
  const [isEdit, setIsEdit] = useState(false);
  const { isVoucher } = useVoucherStore();

  const [deleteBoardComment] = useMutation(DeleteBoardCommentDocument);
  const [deleteTravelproductQuestion] = useMutation(DeleteTravelproductQuestionDocument);

  const onClickDelete = async () => {
    try {
      if (!isVoucher) {
        await deleteBoardComment({
          variables: {
            password: prompt("비밀번호를 입력해주세요"),
            boardCommentId: el?._id,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchBoardComments: (prev, { readField }) => {
                  const deletedId = data?.deleteBoardComment;
                  const filteredPrev = prev.filter((el: any) => readField("_id", el) !== deletedId);
                  return [...filteredPrev];
                },
              },
            });
          },
        });
      } else {
        await deleteTravelproductQuestion({
          variables: {
            travelproductQuestionId: el._id,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchTravelproductQuestions: (prev, { readField }) => {
                  const deletedId = data?.deleteTravelproductQuestion;
                  const filteredPrev = prev.filter((el: any) => readField("_id", el) !== deletedId);
                  return [...filteredPrev];
                },
              },
            });
          },
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  return { isEdit, setIsEdit, onClickDelete };
};
