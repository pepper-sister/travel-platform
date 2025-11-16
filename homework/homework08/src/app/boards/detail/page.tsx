"use client";

import Image from "next/image";
import styles from "./styles.module.css";

const BoardsDetail = () => {
  return (
    <div className="column__sort gap__24">
      <header className="f__28 w__700 l__36">
        살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라
      </header>

      <main className="column__sort gap__24">
        <div className="column__sort gap__16">
          <div className="row__sort row__between column__center">
            <div className="row__sort gap__4 column__center">
              <Image
                className={styles.person__img}
                src="/images/person.png"
                alt="person"
                width={24}
                height={24}
                sizes="100vw"
              />
              <p className="f__14 w__300 l__20 c_5F5F5F">홍길동</p>
            </div>
            <p className="f__14 w__300 l__20 c__818181">2024.11.11</p>
          </div>
          <div className="div"></div>
          <div className="row__sort row__end gap__8">
            <Image src="/images/link.png" alt="link" width={24} height={24} sizes="100vw" />
            <Image src="/images/location.png" alt="location" width={24} height={24} sizes="100vw" />
          </div>
        </div>

        <Image src="/images/beach.jpg" alt="beach" width={400} height={531} sizes="100vw" />

        <p className="w__400">
          살겠노라 살겠노라. 청산에 살겠노라. <br />
          머루랑 다래를 먹고 청산에 살겠노라. <br />
          얄리얄리 얄랑셩 얄라리 얄라 <br />
          <br />
          우는구나 우는구나 새야. 자고 일어나 우는구나 새야. <br />
          너보다 시름 많은 나도 자고 일어나 우노라. <br />
          얄리얄리 얄라셩 얄라리 얄라 <br />
          <br />
          갈던 밭(사래) 갈던 밭 보았느냐. 물 아래(근처) 갈던 밭 보았느냐 <br />
          이끼 묻은 쟁기를 가지고 물 아래 갈던 밭 보았느냐. <br />
          얄리얄리 얄라셩 얄라리 얄라 <br />
          <br />
          이럭저럭 하여 낮일랑 지내 왔건만 <br />
          올 이도 갈 이도 없는 밤일랑 또 어찌 할 것인가. <br />
          얄리얄리 얄라셩 얄라리 얄라 <br />
          <br />
          어디다 던지는 돌인가 누구를 맞히려던 돌인가. <br />
          미워할 이도 사랑할 이도 없이 맞아서 우노라. <br />
          얄리얄리 얄라셩 얄라리 얄라 <br />
          <br />
          살겠노라 살겠노라. 바다에 살겠노라. <br />
          나문재, 굴, 조개를 먹고 바다에 살겠노라. <br />
          얄리얄리 얄라셩 얄라리 얄라 <br />
          <br />
          가다가 가다가 듣노라. 에정지(미상) 가다가 듣노라. <br />
          사슴(탈 쓴 광대)이 솟대에 올라서 해금을 켜는 것을 듣노라. <br />
          얄리얄리 얄라셩 얄라리 얄라 <br />
          <br />
          가다 보니 배불룩한 술독에 독한 술을 빚는구나. <br />
          조롱박꽃 모양 누룩이 매워 (나를) 붙잡으니 내 어찌 하리이까.[1] <br />
          얄리얄리 얄라셩 얄라리 얄라
        </p>

        <div className={`${styles.houseplants} row__sort row__center`}>
          <Image
            className={styles.houseplants__img}
            src="/images/houseplants.jpg"
            alt="houseplants"
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image className={styles.play} src="/images/play.png" alt="play" width={24} height={24} sizes="100vw" />
        </div>

        <div className="row__sort row__center gap__24">
          <div className="column__sort column__center gap__4">
            <Image src="/images/bad.png" alt="bad" width={24} height={24} sizes="100vw" />
            <p className="f__14 w__400 l__20 c_5F5F5F">24</p>
          </div>
          <div className="column__sort column__center gap__4">
            <Image src="/images/good.png" alt="god" width={24} height={24} sizes="100vw" />
            <p className="f__14 w__400 l__20 c__f66a6a">12</p>
          </div>
        </div>
      </main>

      <footer className="row__sort row__center gap__24">
        <button className={`${styles.white__btn} white__btn row__sort column__center gap__8`}>
          <Image src="/images/menu.png" alt="menu" width={24} height={24} sizes="100vw" />
          <p className="f__14 w__600 l__20">목록으로</p>
        </button>
        <button className={`${styles.white__btn} white__btn row__sort column__center gap__8`}>
          <Image src="/images/edit.png" alt="edit" width={24} height={24} sizes="100vw" />
          <p className="f__14 w__600 l__20">수정하기</p>
        </button>
      </footer>
    </div>
  );
};

export default BoardsDetail;
