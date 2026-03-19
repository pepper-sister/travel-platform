import Image from "next/image";
import styles from "./styles.module.css";
import { useList } from "./hook";
import { useBoardsListStore } from "@/commons/stores/boards-list";

export default function ListUI() {
  const { data, onClickDetail, onClickDelete } = useList();
  const { keyword } = useBoardsListStore();

  return (
    <div className="column__sort gap__8">
      <div className="padding__16__24 row__sort row__between">
        <div className="row__sort gap__8">
          <p className="width__64px l__20 c__1C1C1C text__center">번호</p>
          <p className="l__20 c__1C1C1C">제목</p>
        </div>
        <div className="row__sort gap__8">
          <p className="width__100px l__20 c__1C1C1C text__center">작성자</p>
          <p className="width__100px l__20 c__1C1C1C text__center">날짜</p>
        </div>
      </div>
      <div className="column__sort gap__12">
        {data?.fetchBoards.map((el, index) => (
          <div
            key={el._id}
            onClick={() => onClickDetail(el._id)}
            className={`${styles.list__list} relative br__8 padding__12__24 click border__F2F2F2 row__sort row__between`}
          >
            <div className="row__sort gap__8">
              <p className="width__64px f__14 w__300 l__20 c__919191 text__center">{index + 1}</p>
              <p className="f__14 l__20">
                {el.title
                  .replaceAll(keyword, `@#$${keyword}@#$`)
                  .split("@#$")
                  .map((el, index) => (
                    <span key={`${el}_${index}`} style={{ color: el === keyword ? "red" : "#1c1c1c" }}>
                      {el}
                    </span>
                  ))}
              </p>
            </div>
            <div className="row__sort gap__8">
              <p className="width__100px f__14 w__300 l__20 c__333333 text__center">{el.writer}</p>
              <p className="width__100px f__14 w__300 l__20 c__919191 text__center">{el.createdAt.slice(0, 10)}</p>
              <Image
                src="/images/boards/delete.png"
                onClick={(event) => onClickDelete(event, el._id)}
                className={`${styles.img__delete} click`}
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
