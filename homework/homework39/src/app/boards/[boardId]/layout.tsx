"use client";

import { FetchBoardDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

export default function OpengraphProviderLayout({ children }: { children: ReactNode }) {
  const params = useParams();

  const { data } = useQuery(FetchBoardDocument, {
    variables: { boardId: String(params.boardId) },
  });

  return (
    <>
      <meta property="og:title" content={data?.fetchBoard?.title} />
      <meta property="og:description" content={data?.fetchBoard?.contents} />
      <meta property="og:image" content={data?.fetchBoard?.images?.[0]} />
      <>{children}</>
    </>
  );
}
