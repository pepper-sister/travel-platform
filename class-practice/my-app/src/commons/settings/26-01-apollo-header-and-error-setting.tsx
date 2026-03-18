"use client";

import { ApolloLink, Observable } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import UploadHttpLink from "apollo-upload-client/UploadHttpLink.mjs";
import { useAccessTokenStore } from "../stores/22-01-access-token-store";
import { useEffect } from "react";
import { ErrorLink } from "@apollo/client/link/error";
import { getAccessToken } from "../libraries/26-01.get-access-token";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloHeaderAndErrorSetting(props: IApolloSetting) {
  const { accessToken, setAccessToken } = useAccessTokenStore();

  // 1. 프리렌더링 예제 - process.browser 방법
  // if (process.browser) {
  //   console.log("나는 지금 브라우저다!!!");
  // } else {
  //   console.log("나는 지금 프론트엔드 서버다!!!(즉, yarn dev 프로그램 내부이다!!)");
  // }

  // 2. 프리렌더링 예제 - typeof window 방법
  // if (typeof window !== "undefined") {
  //   console.log("나는 지금 브라우저다!!!");
  // } else {
  //   console.log("나는 지금 프론트엔드 서버다!!!(즉, yarn dev 프로그램 내부이다!!)");
  // }

  // 3. 프리렌더링 무시 - useEffect 방법
  // useEffect(() => {
  //   setAccessToken(localStorage.getItem("accessToken") ?? "");
  // }, []);

  const errorLink = new ErrorLink(({ error, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof error !== "undefined") {
      for (const err of error) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크
        if (err.extensions?.code === "UNAUTHENTICATED") {
          return new Observable((observer) => {
            // 2. refreshToken으로 accessToken 재발급 받기
            getAccessToken().then((newAccessToken) => {
              // 3. 재발급 받은 accessToken을 저장하고, 방금 실패한 쿼리의 정보 수정하고 재시도하기
              setAccessToken(newAccessToken);
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization: Bearer 만료된토큰
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                },
              });
            });

            return forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            }); // 3-3. 바꿔치기된 API 재전송하기
          });
        }
      }
    }
  });

  const uploadLink = new UploadHttpLink({
    uri: "https://main-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),

    // cache: new InMemoryCache(), // => accessToken이 변경돼서 리렌더될 때 새로만들어짐
    cache: GLOBAL_STATE, // => 컴포넌트는 새로 만들어져도, globalState는 유지됨
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
