"use client";

import PaginationUI from "@/components/pagination";
import ListUI from "./_components";
import SearchBarUI from "@/components/search-bar";
import { Suspense, useEffect } from "react";
import { useVoucherStore } from "@/commons/stores/voucher";
import { useQuery } from "@apollo/client/react";
import { FetchBoardsOfTheBestDocument } from "@/commons/graphql/graphql";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

function BoardsListContents() {
  const { setIsVoucher } = useVoucherStore();
  useEffect(() => {
    setIsVoucher(false);
  }, []);

  const { data } = useQuery(FetchBoardsOfTheBestDocument);

  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__40">
        <div className="column__sort gap__24">
          <div className="f__28 w__700 l__36">오늘 핫한 트립토크</div>
          <div className={`${styles.best__boards} row__sort row__between gap__32`}>
            {data?.fetchBoardsOfTheBest.slice(0, 4).map((el) => (
              <Link href={`/boards/${el._id}`} key={el._id} className="row__sort gap__8">
                <Image
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  alt="게시글"
                  width={112}
                  height={152}
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <div className="width__100 column__sort row__between">
                  <div className="column__sort gap__8">
                    <h3 className="w__700 c__1C1C1C">{el.title}</h3>
                    <div className="row__sort column__center gap__4">
                      <Image
                        className="br__100 bg__E4E4E4"
                        src={el.user?.picture ?? "/images/boards-detail/profile.png"}
                        alt="profile"
                        width={24}
                        height={24}
                      />
                      <p className="f__14 w__300 l__20 c__5F5F5F">{el.writer}</p>
                    </div>
                  </div>
                  <div className="row__sort row__between column__center">
                    <div className="row__sort column__center gap__4">
                      <FavoriteBorderOutlinedIcon className={styles.detail__good__icon} />
                      <p className="f__14 w__400 l__20 c__F66A6A">{el?.likeCount}</p>
                    </div>
                    <p className="f__14 w__400 l__20 c__777777">{el.createdAt.slice(0, 10)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="column__sort gap__24">
          <div className="f__28 w__700 l__36">트립토크 게시판</div>
          <SearchBarUI />
          <div className="column__sort gap__8 list__section">
            <ListUI />
            <PaginationUI />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BoardsList() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <BoardsListContents />
    </Suspense>
  );
}
