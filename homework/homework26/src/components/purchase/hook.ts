import { FetchTravelproductsDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";

export const usePurchase = () => {
  const [active, setActive] = useState(true);
  const { data } = useQuery(FetchTravelproductsDocument, {
    variables: {
      isSoldout: !active,
    },
  });

  return { active, setActive, data };
};
