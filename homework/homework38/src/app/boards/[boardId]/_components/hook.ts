import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { FetchBoardDocument } from "@/commons/graphql/graphql";

export const useBoardsDetail = () => {
  const params = useParams();
  const { data } = useQuery(FetchBoardDocument, {
    variables: {
      boardId: String(params.boardId),
      isBoardForLikeSet: true,
      isBoardForAddressSet: true,
      isBoardForUserSet: true,
      isBoardForDateSet: true,
    },
  });

  return { params, data };
};
