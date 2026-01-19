"use client";

import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const UPDATE_BOARD = gql`
  mutation {
    updateBoard(
      updateBoardInput: { title: "제목변경됨", contents: "내용변경됨" }
      password: "1234"
      boardId: "696e3f77d4299d0029cd3be2"
    ) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickUpdate = () => {
    updateBoard();
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      <button onClick={onClickUpdate}>수정할래요</button>
    </>
  );
}
