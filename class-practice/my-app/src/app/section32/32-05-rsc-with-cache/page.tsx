// "use client";

export const revalidate = 10; // 몇 초 동안 임시저장(캐시) 할건지 적기 => 기본값 1년(31536000초)

export default async function RscWithCachePage() {
  await fetch("https://koreanjson.com/posts/1");
  console.log("요청이 완료되었습니다.");

  return <button>요청하기</button>;
}

// * 모든컴포넌트를 RCC로 하면 안좋은 이유
// 1. 불필요한 하이드레이션 발생 => "요청이 완료되었습니다." 브라우저에서 재실행됨
// 2. 불필요한 하이드레이션을 위한 코드 다운로드로 인한 용량 증가

// * 모든컴포넌트를 RSC로 할 수 없는 이유
// 1. onClick, onChange, useState, useEffect, useQuery 등은 브라우저에서만 가능하므로
//    => 사실상 과거 리액트17에서는 모든 컴포넌트가 RCC
