"use client";

import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import UploadHttpLink from "apollo-upload-client/UploadHttpLink.mjs";
import { useEffect } from "react";
import { useAccessTokenStore } from "../stores/access-token";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloSetting(props: IApolloSetting) {
  const { accessToken, setAccessToken } = useAccessTokenStore();

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken") ?? "");
  }, []);

  const uploadLink = new UploadHttpLink({
    uri: "http://main-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
