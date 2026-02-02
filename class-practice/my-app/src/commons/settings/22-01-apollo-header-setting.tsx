"use client";

import { ApolloLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import UploadHttpLink from "apollo-upload-client/UploadHttpLink.mjs";
import { useAccessTokenStore } from "../stores/22-01-access-token-store";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloHeaderSetting(props: IApolloSetting) {
  const { accessToken } = useAccessTokenStore();

  const uploadLink = new UploadHttpLink({
    uri: "http://main-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),

    // cache: new InMemoryCache(), // => accessToken이 변경돼서 리렌더될 때 새로만들어짐
    cache: GLOBAL_STATE, // => 컴포넌트는 새로 만들어져도, globalState는 유지됨
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
