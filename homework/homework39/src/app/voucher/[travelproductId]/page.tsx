"use client";

import TitleUI from "./_components/title";
import ImageUI from "./_components/image";
import SellerUI from "./_components/seller";
import ContentsUI from "./_components/contents";
import ListUI from "@/components/comment-with-question/list";
import WriteUI from "@/components/comment-with-question/write";
import styles from "./styles.module.css";
import ButtonUI from "./_components/button";
import MobileUI from "./_components/mobile";

export default function VoucherDetail() {
  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__40">
        <div className={`${styles.desktop} column__sort gap__24`}>
          <TitleUI />
          <div className="row__sort gap__24">
            <ImageUI />
            <SellerUI />
          </div>
        </div>
        <div className={styles.mobile}>
          <MobileUI />
        </div>
        <ContentsUI />
        <WriteUI />
        <ListUI />
        <div className={styles.mobile}>
          <ButtonUI />
        </div>
      </div>
    </div>
  );
}
