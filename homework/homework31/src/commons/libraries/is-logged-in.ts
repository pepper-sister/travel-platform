import { useEffect } from "react";
import { useAccessTokenStore } from "../stores/access-token";
import { useQuery } from "@apollo/client/react";
import { FetchUserLoggedInDocument } from "../graphql/graphql";

export const useLoggedIn = () => {
  const { accessToken } = useAccessTokenStore();
  const { data } = useQuery(FetchUserLoggedInDocument, { skip: !accessToken });

  useEffect(() => {
    if (!data?.fetchUserLoggedIn) return;
  }, [accessToken, data]);

  return { data };
};
