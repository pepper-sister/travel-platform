import { useMutation, useQuery } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { DeleteBoardDocument, FetchBoardsDocument } from "@/commons/graphql/graphql";
import { MouseEvent } from "react";
import { useBoardsListStore } from "@/commons/stores/boards-list";

export const useList = () => {
  const router = useRouter();

  const { endDate, startDate, search, page } = useBoardsListStore();
  const { data } = useQuery(FetchBoardsDocument, {
    variables: { endDate, startDate, search, page },
  });

  const [deleteBoard] = useMutation(DeleteBoardDocument);

  const onClickDetail = (boardId: string) => {
    router.push(`/boards/${boardId}`);
  };

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>, boardId: string) => {
    event.stopPropagation();

    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data?.deleteBoard;
              const filteredPrev = prev.filter((el: any) => readField("_id", el) !== deletedId);
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  return { data, onClickDetail, onClickDelete };
};
