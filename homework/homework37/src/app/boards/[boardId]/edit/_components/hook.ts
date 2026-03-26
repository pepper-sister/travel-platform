import { FetchBoardDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";

export const useCreateBoard = () => {
  const params = useParams();
  const { data } = useQuery(FetchBoardDocument, {
    variables: {
      boardId: String(params.boardId),
    },
  });
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      writer: "",
      password: "",
      title: "",
      contents: "",
      youtubeUrl: "",
      boardAddress: {
        zipcode: "",
        address: "",
        addressDetail: "",
      },
      images: [],
      ...data?.fetchBoard,
    },
  });

  return { methods };
};
