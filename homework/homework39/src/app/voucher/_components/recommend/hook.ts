import { FetchTravelproductsOfTheBestDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";

export const useRecommend = () => {
  const { data } = useQuery(FetchTravelproductsOfTheBestDocument);

  return { data };
};
