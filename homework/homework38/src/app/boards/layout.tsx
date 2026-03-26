"use client";

import { ReactNode } from "react";

export default function OpengraphProviderLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <meta property="og:title" content="트립토크 게시판" />
      <meta property="og:description" content="트립토크의 모든 게시글을 볼 수 있습니다." />
      <>{children}</>
    </>
  );
}
