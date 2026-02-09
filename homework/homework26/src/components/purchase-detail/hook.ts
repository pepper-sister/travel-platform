import { FetchTravelproductDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";

export const usePurchaseDetail = () => {
  const params = useParams();
  const { data } = useQuery(FetchTravelproductDocument, {
    variables: {
      travelproductId: String(params.productId),
    },
  });

  const images = data?.fetchTravelproduct.images ?? [];
  const productImages = images.length >= 4 ? images : [...images, ...Array(4 - images.length).fill("")];

  return { data, productImages };
};
