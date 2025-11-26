"use client";

import { useMutation, useQuery } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { IBoardListData } from "./types";
import { FetchBoardDocument, DeleteBoardDocument } from "@/commons/graphql/graphql";

export const useBoardsList = () => {
  const { data } = useQuery<IBoardListData>(FetchBoardDocument);
  const [deleteBoard] = useMutation(DeleteBoardDocument);

  const router = useRouter();

  const onClickDetail = (boardId: string) => {
    router.push(`/boards/${boardId}`);
  };

  const onClickDelete = (boardId: string) => {
    deleteBoard({
      variables: {
        userBoardId: boardId,
      },
      refetchQueries: [{ query: FetchBoardDocument }],
    });
  };

  return { data, onClickDetail, onClickDelete };
};
