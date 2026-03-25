import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CreateBoardCommentDocument, CreateTravelproductQuestionDocument } from "@/commons/graphql/graphql";
import { useParams } from "next/navigation";
import { useVoucherStore } from "@/commons/stores/voucher";

export const useWrite = () => {
  const params = useParams();
  const [rate, setRate] = useState(3);
  const [form, setForm] = useState({
    writer: "",
    password: "",
    contents: "",
  });
  const { isVoucher } = useVoucherStore();
  const isActive = isVoucher ? form.contents : form.writer && form.password && form.contents;

  const [createBoardComment] = useMutation(CreateBoardCommentDocument);
  const [createTravelproductQuestion] = useMutation(CreateTravelproductQuestionDocument);

  const onChangeForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const onClickSubmit = async () => {
    try {
      if (isVoucher) {
        await createTravelproductQuestion({
          variables: {
            createTravelproductQuestionInput: {
              contents: form.contents,
            },
            travelproductId: String(params.travelproductId),
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchTravelproductQuestions: (prev) => {
                  return [data?.createTravelproductQuestion, ...prev];
                },
              },
            });
          },
        });
      } else {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              ...form,
              rating: rate,
            },
            boardId: String(params.boardId),
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchBoardComments: (prev) => {
                  return [data?.createBoardComment, ...prev];
                },
              },
            });
          },
        });
      }
    } catch (error) {
      alert(error);
    }

    setForm({
      writer: "",
      password: "",
      contents: "",
    });
  };

  return {
    rate,
    setRate,
    form,
    isActive,
    onChangeForm,
    onClickSubmit,
  };
};
