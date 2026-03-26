"use client";

import { ReactNode } from "react";

export default function OpengraphProviderLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <meta property="og:title" content="트립토크 숙박권 구매" />
      <meta property="og:description" content="트립토크에서 숙박권을 구매할 수 있습니다." />
      <>{children}</>
    </>
  );
}
