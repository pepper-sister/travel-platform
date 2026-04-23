import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAccessTokenStore } from "@/commons/stores/access-token";
import { Dropdown, DropdownProps, MenuProps } from "antd";
import { useLoggedIn } from "@/commons/libraries/is-logged-in";
import { useState } from "react";
import PointUI from "@/app/voucher/[travelproductId]/_components/point";
import { useMutation } from "@apollo/client/react";
import { LogoutUserDocument } from "@/commons/graphql/graphql";

export default function NavigationUI() {
  const { data } = useLoggedIn();
  const { accessToken } = useAccessTokenStore();
  const [isChargeModal, setIsChargeModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [logoutUser] = useMutation(LogoutUserDocument);

  const handleCancel = () => {
    setIsChargeModal(false);
  };

  const handleMenuClick: MenuProps["onClick"] = async (e) => {
    if (e.key === "0" || e.key === "1") {
      router.push("/mypage");
    } else if (e.key === "2") {
      setIsChargeModal(true);
    } else if (e.key === "3") {
      try {
        await logoutUser();

        location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: `${data?.fetchUserLoggedIn.name}`,
      icon: (
        <Image
          className="br__100 bg__E4E4E4"
          src="/images/navigation/profile.png"
          width={40}
          height={40}
          alt="profile"
        />
      ),
      onClick: handleMenuClick,
    },
    {
      type: "divider",
    },
    {
      key: "1",
      label: `${data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString() || 0} P`,
      icon: <Image src="/images/navigation/wallet.png" width={24} height={24} alt="wallet" />,
      onClick: handleMenuClick,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "포인트 충전",
      icon: <Image src="/images/navigation/charge.png" width={16} height={16} alt="charge" />,
      onClick: handleMenuClick,
    },
    {
      key: "3",
      label: "로그아웃",
      icon: <Image src="/images/navigation/logout.png" width={16} height={16} alt="logout" />,
      danger: true,
      onClick: handleMenuClick,
    },
  ];

  const sharedProps: DropdownProps = {
    menu: { items, style: { padding: "16px" } },
    placement: "bottomRight",
    align: {
      offset: [0, -32],
    },
  };

  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__20__20 row__sort row__between column__center">
        <div className="row__sort gap__24 column__center">
          <Image
            src="/images/navigation/logo.png"
            alt="logo"
            width={52}
            height={32}
            priority
            className={styles.navigation__img}
          />
          <h1 className={`${styles.mobile__navigation__title} f__28 l__24 w__600`}>트립토크</h1>
          <div className={`${styles.tablet__navigation} row__sort gap__16`}>
            <Link
              href="/boards"
              className={`${isActive("/boards") ? `${styles.navigation__active} w__700 c__000000` : "c__333333"} padding__8`}
            >
              트립토크
            </Link>
            <Link
              href="/voucher"
              className={`${isActive("/voucher") ? `${styles.navigation__active} w__700 c__000000` : "c__333333"} padding__8`}
            >
              숙박권 구매
            </Link>
            <Link
              href="/mypage"
              className={`${isActive("/mypage") ? `${styles.navigation__active} w__700 c__000000` : "c__333333"} padding__8`}
            >
              마이 페이지
            </Link>
          </div>
        </div>

        {!accessToken ? (
          <>
            <Link
              href="/signin-with-signup"
              className={`${styles.navigation__login} br__100 padding__8__12 row__sort gap__8 column__center bg__000000`}
            >
              <p className="f__14 w__600 l__20 c__ffffff">로그인</p>
              <Image className="filter" src="/images/navigation/right_arrow.png" alt="right" width={24} height={24} />
            </Link>

            <Link
              href="/signin-with-signup"
              className={`${styles.mobile__navigation__login} row__sort gap__4 column__center click`}
            >
              <p className="f__13 w__500 l__20 c__333333">로그인</p>
              <Image src="/images/navigation/login.png" alt="right" width={16} height={16} />
            </Link>
          </>
        ) : (
          <div className="row__sort gap__4 column__center">
            <Image
              src="/images/navigation/profile.png"
              className="br__100 bg__E4E4E4"
              alt="person"
              width={40}
              height={40}
            />
            <Dropdown {...sharedProps}>
              <Image className="click" src="/images/navigation/down_arrow.png" alt="down" width={24} height={24} />
            </Dropdown>
          </div>
        )}
      </div>
      <PointUI isChargeModal={isChargeModal} setIsChargeModal={setIsChargeModal} handleCancel={handleCancel} />
    </div>
  );
}
