"use client";

import { useMutation, useQuery } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { DeleteBoardDocument, FetchBoardsDocument } from "@/commons/graphql/graphql";
import { MouseEvent } from "react";

export const useBoardsList = () => {
  const { data } = useQuery(FetchBoardsDocument);
  const [deleteBoard] = useMutation(DeleteBoardDocument);

  const router = useRouter();

  const onClickDetail = (boardId: string) => {
    router.push(`/boards/${boardId}`);
  };

  const onClickDelete = (event: MouseEvent<HTMLImageElement>, boardId: string) => {
    event.stopPropagation();
    deleteBoard({
      variables: {
        userBoardId: boardId,
      },
      refetchQueries: [{ query: FetchBoardsDocument }],
    });
  };

  return { data, onClickDetail, onClickDelete };
};
