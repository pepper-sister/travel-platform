"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { IBoardDetailData } from "./types";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function BoardsDetailUI(props: IBoardDetailData) {
  return (
    <div className="column__sort gap__24">
      <header className="f__28 w__700 l__36">{props.data?.fetchBoard.title}</header>

      <main className="column__sort gap__24">
        <div className="column__sort gap__16">
          <div className="row__sort row__between column__center">
            <div className="row__sort gap__4 column__center">
              <Image className="person__img" src="/images/person.png" alt="person" width={24} height={24} />
              <p className="f__14 w__300 l__20 c__5F5F5F">{props.data?.fetchBoard.writer}</p>
            </div>
            <p className="f__14 w__300 l__20 c__818181">2024.11.11</p>
          </div>
          <div className="div"></div>
          <div className="row__sort row__end gap__8">
            <Image src="/images/link.png" alt="link" width={24} height={24} />
            <Image src="/images/location.png" alt="location" width={24} height={24} />
          </div>
        </div>

        <Image src="/images/beach.jpg" alt="beach" width={400} height={531} />

        <p className="w__400">{props.data?.fetchBoard.contents}</p>

        <div className={`${styles.houseplants} row__sort row__center`}>
          <Image
            className={styles.houseplants__img}
            src="/images/houseplants.jpg"
            alt="houseplants"
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image className={`${styles.play} click`} src="/images/play.png" alt="play" width={24} height={24} />
        </div>

        <div className="row__sort row__center gap__24">
          <div className="column__sort column__center gap__4">
            <HeartBrokenOutlinedIcon className={styles.detail__bad__icon} />
            <p className="f__14 w__400 l__20 c__5F5F5F">24</p>
          </div>
          <div className="column__sort column__center gap__4">
            <FavoriteBorderOutlinedIcon className={styles.detail__good__icon} />
            <p className="f__14 w__400 l__20 c__f66a6a">12</p>
          </div>
        </div>
      </main>

      <footer className="row__sort row__center gap__24">
        <button className={`${styles.white__btn} white__btn row__sort column__center gap__8`}>
          <Image src="/images/menu.png" alt="menu" width={24} height={24} />
          <p className="f__14 w__600 l__20">목록으로</p>
        </button>
        <button className={`${styles.white__btn} white__btn row__sort column__center gap__8`}>
          <Image src="/images/edit.png" alt="edit" width={24} height={24} />
          <Link href={`/boards/${props.params.boardId}/edit`} className="f__14 w__600 l__20">
            수정하기
          </Link>
        </button>
      </footer>

      <div className="div"></div>
    </div>
  );
}
