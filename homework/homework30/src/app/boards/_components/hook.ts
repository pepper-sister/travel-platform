import { useMutation, useQuery } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { DeleteBoardDocument, FetchBoardsDocument } from "@/commons/graphql/graphql";
import { MouseEvent } from "react";
import { useBoardsListStore } from "@/commons/stores/boards-list";

export const useList = () => {
  const router = useRouter();

  const { endDate, startDate, search, page } = useBoardsListStore();
  const { data } = useQuery(FetchBoardsDocument, {
    variables: {
      endDate: endDate,
      startDate: startDate,
      search: search,
      page: page,
    },
  });

  const [deleteBoard] = useMutation(DeleteBoardDocument);

  const onClickDetail = (boardId: string) => {
    router.push(`/boards/${boardId}`);
  };

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>, boardId: string) => {
    event.stopPropagation();
    await deleteBoard({
      variables: {
        boardId: boardId,
      },
      refetchQueries: [
        {
          query: FetchBoardsDocument,
          variables: {
            endDate: endDate,
            startDate: startDate,
            search: search,
            page: page,
          },
        },
      ],
    });
  };

  return { data, onClickDetail, onClickDelete };
};
