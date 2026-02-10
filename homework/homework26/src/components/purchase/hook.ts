import { FetchTravelproductsDocument } from "@/commons/graphql/graphql";
import { usePurchaseStore } from "@/commons/stores/purchase";
import { useQuery } from "@apollo/client/react";

export const usePurchase = () => {
  const { isActive } = usePurchaseStore();
  const { data } = useQuery(FetchTravelproductsDocument, {
    variables: {
      isSoldout: !isActive,
    },
  });

  return { data };
};
