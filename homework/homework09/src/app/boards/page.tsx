"use client";

import { useQuery } from "@apollo/client/react";
import styles from "./styles.module.css";
import { gql } from "@apollo/client";
import { useRouter } from "next/navigation";

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

export default function BoardsList() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickDetail = (boradId: string) => {
    router.push(`/boards/${boradId}`);
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
          {data?.fetchBoards.map((el, index) => (
            <div
              key={el._id}
              onClick={() => onClickDetail(el._id)}
              className={`${styles.list__list} row__sort row__between`}
            >
              <div className="row__sort gap__8">
                <p className={`${styles.list__subtitle__64} f__14 w__300 l__20 c__919191`}>{index}</p>
                <p className="f__14 l__20 c__1C1C1C">{el.title}</p>
              </div>

              <div className="row__sort gap__8">
                <p className={`${styles.list__subtitle__100} f__14 w__300 l__20 c__333333`}>{el.writer}</p>
                <p className={`${styles.list__subtitle__100} f__14 w__300 l__20 c__919191`}>
                  {el.createdAt.slice(0, 10)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
