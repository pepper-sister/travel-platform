"use client";

import { with로그인체크 } from "@/commons/hocs/23-07-with로그인체크";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}

export default with로그인체크(LoginSuccessPage);
