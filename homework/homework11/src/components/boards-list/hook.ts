"use client";

import { useMutation, useQuery } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { DELETE_BOARD, FETCH_BOARDS } from "./queries";
import { IFetchBoardData } from "./types";

export const useBoardsList = () => {
  const { data } = useQuery<IFetchBoardData>(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const router = useRouter();

  const onClickDetail = (boardId: string) => {
    router.push(`/boards/${boardId}`);
  };

  const onClickDelete = (boardId: string) => {
    deleteBoard({
      variables: {
        userBoardId: boardId,
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return { data, onClickDetail, onClickDelete };
};
