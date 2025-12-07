"use client";

import { useMutation } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { DeleteBoardDocument, FetchBoardsDocument } from "@/commons/graphql/graphql";
import { MouseEvent } from "react";

export const useBoardsList = () => {
  const [deleteBoard] = useMutation(DeleteBoardDocument);

  const router = useRouter();

  const onClickDetail = (boardId: string) => {
    router.push(`/boards/${boardId}`);
  };

  const onClickDelete = (event: MouseEvent<HTMLImageElement>, boardId: string) => {
    event.stopPropagation();
    deleteBoard({
      variables: {
        boardId: boardId,
      },
      refetchQueries: [{ query: FetchBoardsDocument }],
    });
  };

  return { onClickDetail, onClickDelete };
};
