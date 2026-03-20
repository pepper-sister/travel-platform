"use client";

import { ApolloClient, ApolloLink, InMemoryCache, Observable } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ErrorLink } from "@apollo/client/link/error";
import UploadHttpLink from "apollo-upload-client/UploadHttpLink.mjs";
import { useEffect } from "react";
import { useAccessTokenStore } from "../stores/access-token";
import { useSigninWithSignupStore } from "../stores/signin-with-signup";
import { useLoadStore } from "../stores/load";
import { getAccessToken } from "../libraries/get-access-token";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloSetting(props: IApolloSetting) {
  const { accessToken, setAccessToken } = useAccessTokenStore();
  const { setIsLoggedIn } = useSigninWithSignupStore();
  const { setIsLoaded } = useLoadStore();

  useEffect(() => {
    getAccessToken()
      .then((newAccessToken) => {
        if (newAccessToken) {
          setAccessToken(newAccessToken);
          setIsLoggedIn(true);
        }
      })
      .finally(setIsLoaded);
  }, []);

  const errorLink = new ErrorLink(({ error, operation, forward }) => {
    if (error instanceof Error) {
      if ("bodyText" in error && typeof error.bodyText === "string") {
        const body = JSON.parse(error.bodyText);
        const code = body.errors?.[0].extensions.code;
        if (code === "UNAUTHENTICATED") {
          return new Observable((observer) => {
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });

              forward(operation).subscribe({
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer),
              });
            });
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
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
