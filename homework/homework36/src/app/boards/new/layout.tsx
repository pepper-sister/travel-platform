"use client";

import { ReactNode } from "react";

export default function OpengraphProviderLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <meta property="og:title" content="트립토크 게시글 등록" />
      <meta property="og:description" content="트립토크에 게시글을 작성해보세요." />
      <>{children}</>
    </>
  );
}
