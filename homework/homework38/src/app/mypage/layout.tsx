"use client";

import { ReactNode } from "react";

export default function OpengraphProviderLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <meta property="og:title" content="트립토크 마이페이지" />
      <meta property="og:description" content="트립토크에 로그인하여 마이페이지를 확인하세요." />
      <>{children}</>
    </>
  );
}
