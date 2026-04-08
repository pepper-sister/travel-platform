"use client";

import { ReactNode } from "react";

export default function OpengraphProviderLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <meta property="og:title" content="트립토크 로그인" />
      <meta property="og:description" content="트립토크에 로그인해보세요." />
      <>{children}</>
    </>
  );
}
