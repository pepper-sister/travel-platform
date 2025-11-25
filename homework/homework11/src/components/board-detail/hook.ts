import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { IData } from "../boards-write/types";
import { FETCH_BOARD } from "../boards-write/queries";

export default function useBoardsDetail() {
  const params = useParams();

  const { data } = useQuery<IData>(FETCH_BOARD, {
    variables: { userboardId: params.boardId },
  });

  return { params, data };
}
