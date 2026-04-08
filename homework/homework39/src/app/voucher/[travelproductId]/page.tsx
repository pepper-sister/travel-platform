"use client";

import TitleUI from "./_components/title";
import ImageUI from "./_components/image";
import SellerUI from "./_components/seller";
import ContentsUI from "./_components/contents";
import ListUI from "@/components/comment-with-question/list";
import WriteUI from "@/components/comment-with-question/write";
import { useVoucherStore } from "@/commons/stores/voucher";
import { useEffect } from "react";

export default function VoucherDetail() {
  const { setIsVoucher } = useVoucherStore();
  useEffect(() => {
    setIsVoucher(true);
  }, []);

  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__40">
        <div className="column__sort gap__24">
          <TitleUI />
          <div className="row__sort gap__24">
            <ImageUI />
            <SellerUI />
          </div>
        </div>
        <ContentsUI />
        <WriteUI />
        <ListUI />
      </div>
    </div>
  );
}
