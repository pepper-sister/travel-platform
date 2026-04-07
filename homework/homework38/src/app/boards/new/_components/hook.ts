import { FetchBoardDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
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

  const searchParams = useSearchParams();
  useEffect(() => {
    const zipcode = searchParams.get("zipcode");
    const address = searchParams.get("address");

    if (zipcode) methods.setValue("boardAddress.zipcode", zipcode);
    if (address) methods.setValue("boardAddress.address", address);
  }, [searchParams, methods]);

  return { methods };
};
