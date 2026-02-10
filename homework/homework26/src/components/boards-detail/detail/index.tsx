"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Tooltip } from "@mui/material";
import { useBoardsDetail } from "./hook";

export default function BoardsDetailUI() {
  const { params, data } = useBoardsDetail();

  return (
    <div className="column__sort gap__24">
      <header className="f__28 w__700 l__36">{data?.fetchBoard.title}</header>
      <main className="column__sort gap__24">
        <div className="column__sort gap__16">
          <div className="row__sort row__between column__center">
            <div className="row__sort gap__4 column__center">
              <Image
                src="/images/boards-detail/profile.png"
                className={styles.profile__img}
                alt="person"
                width={24}
                height={24}
              />
              <p className="f__14 w__300 l__20 c__5F5F5F">{data?.fetchBoard.writer}</p>
            </div>
            <p className="f__14 w__300 l__20 c__818181">2024.11.11</p>
          </div>
          <div className="div"></div>
          <div className="row__sort row__end gap__8">
            <Image src="/images/boards-detail/link.png" alt="link" width={24} height={24} />
            <Tooltip
              title={data?.fetchBoard.boardAddress?.address}
              slotProps={{
                tooltip: {
                  sx: {
                    mt: 0,
                    backgroundColor: "#FFFFFF",
                    color: "#000000",
                    fontFamily: "pretendard",
                    fontSize: "14px",
                    lineHeight: "20px",
                    border: "1px solid var(--gray-100, #E4E4E4)",
                    boxShadow: "0px 2px 6px 2px #00000026",
                    margin: "0 !important",
                    padding: "8px 12px",
                  },
                },
              }}
            >
              <Image src="/images/boards-detail/location.png" alt="location" width={24} height={24} />
            </Tooltip>
          </div>
        </div>
        {data?.fetchBoard.images
          ?.filter((el) => el)
          .map((el) => (
            <Image key={el} src={`https://storage.googleapis.com/${el}`} alt="image" width={160} height={160} />
          ))}
        <p className="w__400">{data?.fetchBoard.contents}</p>
        {data?.fetchBoard.youtubeUrl && (
          <div className={`${styles.youtube} row__sort row__center`}>
            <iframe width="822px" height="464px" src={data?.fetchBoard.youtubeUrl}></iframe>
          </div>
        )}
        <div className="row__sort row__center gap__24">
          <div className="column__sort column__center gap__4">
            <HeartBrokenOutlinedIcon className={styles.detail__bad__icon} />
            <p className="f__14 w__400 l__20 c__5F5F5F">24</p>
          </div>
          <div className="column__sort column__center gap__4">
            <FavoriteBorderOutlinedIcon className={styles.detail__good__icon} />
            <p className="f__14 w__400 l__20 c__F66A6A">12</p>
          </div>
        </div>
      </main>

      <footer className="row__sort row__center gap__24">
        <Link href={`/boards`} className={`${styles.white__btn} white__btn row__sort column__center gap__8`}>
          <Image src="/images/boards-detail/menu.png" alt="menu" width={24} height={24} />
          <p className="f__14 w__600 l__20 c__000000">목록으로</p>
        </Link>
        <Link
          href={`/boards/${params.boardId}/edit`}
          className={`${styles.white__btn} white__btn row__sort column__center gap__8`}
        >
          <Image src="/images/boards-detail/edit.png" alt="edit" width={24} height={24} />
          <p className="f__14 w__600 l__20 c__000000">수정하기</p>
        </Link>
      </footer>
      <div className="div"></div>
    </div>
  );
}
