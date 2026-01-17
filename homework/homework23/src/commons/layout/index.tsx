"use client";

import { useParams, usePathname } from "next/navigation";
import Banner from "./banner";
import NavigationUI from "./navigation";

interface ILayout {
  children: React.ReactNode;
}
export default function Layout({ children }: ILayout) {
  const params = useParams();
  const HIDDEN_BANNER = ["/boards/new", `/boards/${params.boardId}/edit`, `/mypage`];

  const pathname = usePathname();
  const isHiddenBanner = HIDDEN_BANNER.includes(pathname);

  return (
    <>
      <NavigationUI />
      {!isHiddenBanner && <Banner />}
      {children}
    </>
  );
}
