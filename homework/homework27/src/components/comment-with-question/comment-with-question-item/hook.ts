import { DeleteBoardCommentDocument, DeleteTravelproductQuestionDocument } from "@/commons/graphql/graphql";
import { useVoucherStore } from "@/commons/stores/voucher";
import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import { IFetchItemData } from "./types";

export const useCommentWithQuestionItem = ({ el }: IFetchItemData) => {
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
          refetchQueries: ["fetchBoardComments"],
        });
      } else {
        await deleteTravelproductQuestion({
          variables: {
            travelproductQuestionId: el._id,
          },
          refetchQueries: ["fetchTravelproductQuestions"],
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  return { isEdit, setIsEdit, onClickDelete };
};
