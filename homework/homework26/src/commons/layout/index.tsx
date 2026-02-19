"use client";

import { useParams, usePathname } from "next/navigation";
import Banner from "./banner";
import NavigationUI from "./navigation";

interface ILayout {
  children: React.ReactNode;
}
export default function Layout({ children }: ILayout) {
  const params = useParams();
  const HIDDEN_NAVIGATION = ["/sign"];
  const HIDDEN_BANNER = [
    "/boards/new",
    `/boards/${params.boardId}/edit`,
    "/mypage",
    "/sign",
    `/purchase/${params.travelproductId}`,
    `/purchase/${params.travelproductId}/edit`,
  ];

  const pathname = usePathname();
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(pathname);
  const isHiddenBanner = HIDDEN_BANNER.includes(pathname);

  return (
    <>
      {!isHiddenNavigation && <NavigationUI />}
      {!isHiddenBanner && <Banner />}
      {children}
    </>
  );
}
