"use client";

import { useMutation, useQuery } from "@apollo/client/react";
import Image from "next/image";
import styles from "./styles.module.css";
import { gql } from "@apollo/client";
import { useRouter } from "next/navigation";
import { IData } from "@/components/boards-write/types";

const FETCH_BOARDS = gql`
  query {
    fetchBoards(page: 1) {
      _id
      title
      writer
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($userBoardId: ID!) {
    deleteBoard(boardId: $userBoardId)
  }
`;

export default function BoardsList() {
  const { data } = useQuery<IData>(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const router = useRouter();

  const onClickDetail = (boardId: string) => {
    router.push(`/boards/${boardId}`);
  };

  const onClickDelete = (boardId: string) => {
    deleteBoard({
      variables: {
        userBoardId: boardId,
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <div className={styles.list__section}>
      <div className="column__sort gap__8">
        <div className={`${styles.list__title} row__sort row__between`}>
          <div className="row__sort gap__8">
            <p className={`${styles.list__subtitle__64} l__20 c__1C1C1C`}>번호</p>
            <p className="l__20 c__1C1C1C">제목</p>
          </div>

          <div className="row__sort gap__8">
            <p className={`${styles.list__subtitle__100} l__20 c__1C1C1C`}>작성자</p>
            <p className={`${styles.list__subtitle__100} l__20 c__1C1C1C`}>날짜</p>
          </div>
        </div>

        <div className="column__sort gap__12">
          {data?.fetchBoards.map((el: any, index: number) => (
            <div key={el._id} className={`${styles.list__list} row__sort row__between`}>
              <div onClick={() => onClickDetail(el._id)} className="click row__sort gap__8">
                <p className={`${styles.list__subtitle__64} f__14 w__300 l__20 c__919191`}>{index}</p>
                <p className="f__14 l__20 c__1C1C1C">{el.title}</p>
              </div>

              <div className="row__sort gap__8">
                <p className={`${styles.list__subtitle__100} f__14 w__300 l__20 c__333333`}>{el.writer}</p>
                <p className={`${styles.list__subtitle__100} f__14 w__300 l__20 c__919191`}>
                  {el.createdAt.slice(0, 10)}
                </p>
                <Image
                  onClick={() => onClickDelete(el._id)}
                  className={`${styles.img__delete} click`}
                  src="/images/delete.png"
                  alt="삭제"
                  width={24}
                  height={0}
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
