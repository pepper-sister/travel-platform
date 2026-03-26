"use client";

import { FetchTravelproductDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

export default function OpengraphProviderLayout({ children }: { children: ReactNode }) {
  const params = useParams();

  const { data } = useQuery(FetchTravelproductDocument, {
    variables: { travelproductId: String(params.travelproductId) },
  });

  return (
    <>
      <meta property="og:title" content={data?.fetchTravelproduct?.name} />
      <meta property="og:description" content={data?.fetchTravelproduct?.remarks} />
      <meta property="og:image" content={data?.fetchTravelproduct?.images?.[0]} />
      <>{children}</>
    </>
  );
}
