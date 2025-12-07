"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useBoardsList } from "./hook";

export default function BoardsListUI(props) {
  const { onClickDetail, onClickDelete } = useBoardsList();

  return (
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
        {props.data?.fetchBoards.map((el, index) => (
          <div
            key={el._id}
            onClick={() => onClickDetail(el._id)}
            className={`${styles.list__list} click row__sort row__between`}
          >
            <div className="row__sort gap__8">
              <p className={`${styles.list__subtitle__64} f__14 w__300 l__20 c__919191`}>{index + 1}</p>
              <p className="f__14 l__20 c__1C1C1C">{el.title}</p>
            </div>

            <div className="row__sort gap__8">
              <p className={`${styles.list__subtitle__100} f__14 w__300 l__20 c__333333`}>{el.writer}</p>
              <p className={`${styles.list__subtitle__100} f__14 w__300 l__20 c__919191`}>
                {el.createdAt.slice(0, 10)}
              </p>
              <Image
                onClick={(event) => onClickDelete(event, el._id)}
                className={`${styles.img__delete} click`}
                src="/images/delete.png"
                alt="삭제"
                width={24}
                height={24}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
