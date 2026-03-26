"use client";

import { ReactNode } from "react";

export default function OpengraphProviderLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <meta property="og:title" content="트립토크 숙박권 판매" />
      <meta property="og:description" content="트립토크에 숙박권을 판매해보세요." />
      <>{children}</>
    </>
  );
}
