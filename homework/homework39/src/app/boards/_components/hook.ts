import { useMutation, useQuery } from "@apollo/client/react";
import { useRouter, useSearchParams } from "next/navigation";
import { DeleteBoardDocument, FetchBoardsDocument } from "@/commons/graphql/graphql";
import { MouseEvent } from "react";

export const useList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const endDate = searchParams.get("endDate");
  const startDate = searchParams.get("startDate");
  const search = searchParams.get("search");
  const page = searchParams.get("page") ?? 1;
  const { data } = useQuery(FetchBoardsDocument, {
    variables: { endDate, startDate, search, page: Number(page) },
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
