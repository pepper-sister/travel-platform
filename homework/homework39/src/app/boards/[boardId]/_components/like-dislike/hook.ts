import { DislikeBoardDocument, FetchBoardDocument, LikeBoardDocument } from "@/commons/graphql/graphql";
import { useMutation, useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";

export const useLikeDislike = () => {
  const params = useParams();
  const boardId = String(params.boardId);
  const { data } = useQuery(FetchBoardDocument, {
    variables: { boardId, isBoardForLikeSet: true },
  });

  const [likeBoard] = useMutation(LikeBoardDocument);
  const [dislikeBoard] = useMutation(DislikeBoardDocument);

  const onClickLike = () => {
    if (!data?.fetchBoard) return;

    likeBoard({
      variables: {
        boardId,
      },
      optimisticResponse: {
        likeBoard: ((data.fetchBoard as any).likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.modify({
          id: cache.identify({ __typename: "Board", _id: boardId }),
          fields: {
            likeCount() {
              return data?.likeBoard;
            },
          },
        });
      },
    });
  };

  const onClickDislike = () => {
    if (!data?.fetchBoard) return;

    dislikeBoard({
      variables: {
        boardId,
      },
      optimisticResponse: {
        dislikeBoard: ((data.fetchBoard as any).dislikeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.modify({
          id: cache.identify({ __typename: "Board", _id: boardId }),
          fields: {
            dislikeCount() {
              return data?.dislikeBoard;
            },
          },
        });
      },
    });
  };

  return { data, onClickLike, onClickDislike };
};
