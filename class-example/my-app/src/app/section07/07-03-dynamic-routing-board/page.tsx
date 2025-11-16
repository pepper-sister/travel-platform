"use client";

import { useRouter } from "next/navigation";

export default function StaticRoutingPage() {
  const 라우터 = useRouter();

  const onClickSubmit1 = () => {
    // 1. 게시글 등록하기
    // ...

    // 2. 등록된 페이지로 이동하기
    라우터.push("/section07/07-03-dynamic-routing-board-moved/80");
  };

  const onClickSubmit2 = () => {
    라우터.push("/section07/07-03-dynamic-routing-board-moved/81");
  };

  const onClickSubmit3 = () => {
    라우터.push("/section07/07-03-dynamic-routing-board-moved/82");
  };

  return (
    <>
      <button onClick={onClickSubmit1}>1번 게시글 등록하기</button>
      <br />
      <button onClick={onClickSubmit2}>2번 게시글 등록하기</button>
      <br />
      <button onClick={onClickSubmit3}>3번 게시글 등록하기</button>
    </>
  );
}
