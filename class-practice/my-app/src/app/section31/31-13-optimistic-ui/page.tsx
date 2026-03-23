"use client";

import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "69c114bad4299d0029cd423b" },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: "69c114bad4299d0029cd423b" },
      // refetchQueries: [{ ... }]
      optimisticResponse: {
        likeBoard: (data.fetchBoard.likeCount ?? 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "69c114bad4299d0029cd423b" },
          data: {
            fetchBoard: {
              _id: "69c114bad4299d0029cd423b",
              __typename: "Board",
              likeCount: data.likeBoard, // 좋아요 갯수(6개 가정)
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>현재카운트(좋아요): {data?.fetchBoard.likeCount ?? 0}</div>
      <button onClick={onClickLike}>좋아요 올리기!!</button>
    </>
  );
}
