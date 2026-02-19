import { FetchTravelproductDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";

export const useVoucherDetail = () => {
  const params = useParams();
  const { data } = useQuery(FetchTravelproductDocument, {
    variables: {
      travelproductId: String(params.travelproductId),
    },
  });

  return { data };
};
