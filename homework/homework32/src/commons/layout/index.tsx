"use client";

import { useParams, usePathname } from "next/navigation";
import Banner from "./banner";
import NavigationUI from "./navigation";

interface ILayout {
  children: React.ReactNode;
}
export default function Layout({ children }: ILayout) {
  const params = useParams();
  const HIDDEN_NAVIGATION = ["/signin-with-signup"];
  const HIDDEN_BANNER = [
    "/boards/new",
    `/boards/${params.boardId}/edit`,
    "/mypage",
    "/signin-with-signup",
    `/voucher/${params.travelproductId}`,
    `/voucher/${params.travelproductId}/edit`,
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
