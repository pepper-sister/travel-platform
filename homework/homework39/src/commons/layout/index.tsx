"use client";

import { useParams, usePathname } from "next/navigation";
import Banner from "./banner";
import NavigationUI from "./navigation";
import MenuUI from "./menu";

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
    "/voucher/new",
    `/voucher/${params.travelproductId}`,
    `/voucher/${params.travelproductId}/edit`,
  ];
  const HIDDEN_MENU = [
    "/boards/new",
    `/boards/${params.boardId}`,
    `/boards/${params.boardId}/edit`,
    "/voucher/new",
    `/voucher/${params.travelproductId}`,
    `/voucher/${params.travelproductId}/edit`,
    "/signin-with-signup",
  ];

  const pathname = usePathname();
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(pathname);
  const isHiddenBanner = HIDDEN_BANNER.includes(pathname);
  const isHiddenMenu = HIDDEN_MENU.includes(pathname);

  return (
    <>
      {!isHiddenNavigation && <NavigationUI />}
      {!isHiddenBanner && <Banner />}
      <main className={!isHiddenMenu ? "padding_bottom__60" : ""}>{children}</main>
      {!isHiddenMenu && <MenuUI />}
    </>
  );
}
