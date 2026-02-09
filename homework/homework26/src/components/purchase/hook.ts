import { FetchTravelproductsDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";

export const usePurchase = () => {
  const [active, setActive] = useState(true);
  const { data } = useQuery(FetchTravelproductsDocument);

  const onClickActive = () => {
    setActive((prev) => !prev);
    console.log(data?.fetchTravelproducts[2].images);
  };

  return { data, active, onClickActive };
};
