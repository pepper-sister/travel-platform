"use client";

import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import UploadHttpLink from "apollo-upload-client/UploadHttpLink.mjs";
import { useEffect } from "react";
import { useAccessTokenStore } from "../stores/access-token";
import { useLoginStore } from "../stores/login";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloSetting(props: IApolloSetting) {
  const { accessToken, setAccessToken } = useAccessTokenStore();
  const { setIsLoggedIn } = useLoginStore();

  useEffect(() => {
    const localStorageAccessToken = localStorage.getItem("accessToken") ?? "";
    setAccessToken(localStorageAccessToken);
    if (localStorageAccessToken) setIsLoggedIn(true);
  }, [setAccessToken, setIsLoggedIn]);

  const uploadLink = new UploadHttpLink({
    uri: "https://main-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
