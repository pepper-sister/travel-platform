"use client";

import { Modal } from "antd";
import Link from "next/link";
import { useEffect } from "react";
import { useLoginStore } from "../stores/login";
import Image from "next/image";

// prettier-ignore
export const withLogin =
  <P extends object>(Component: React.ComponentType<P>) => (props: P) => {
  const { isLoggedIn, setIsLoggedIn } = useLoginStore();

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      setIsLoggedIn(true)
    }
  }, [setIsLoggedIn]);

  if (!isLoggedIn) {
    return (
      <Modal open={!isLoggedIn} closable={false} footer={null}>
        <div className="column__sort column__center gap__24">
          <div className="column__sort column__center gap__12">
            <h1 className="f__18 w__600">로그인이 필요한 기능입니다.</h1>
            <Image src="/images/sign/logo.png" alt="logo" width={78} height={48} />
          </div>

          <Link href="/sign" className="bg__2974E5 br__8 padding__12__16 click f__14 w__600 l__20 c__ffffff">
            로그인 하러가기
          </Link>
        </div>
      </Modal>
    )
  }

  return <Component {...props} />;
};
