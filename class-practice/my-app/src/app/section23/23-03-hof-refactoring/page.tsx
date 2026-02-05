"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  console.log(data);

  // 1. 리팩토링 전
  // const onClickPage = (event: ChangeEvent<HTMLSpanElement>) => {
  //   refetch({ mypage: Number(event.currentTarget.id) });
  // };

  // 1. 리팩토링 후
  const onClickPage = (page: number) => () => {
    refetch({ page });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} onClick={onClickPage(index + 1)}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
