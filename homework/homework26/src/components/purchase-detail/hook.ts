import { DeleteTravelproductDocument, FetchTravelproductDocument } from "@/commons/graphql/graphql";
import { useMutation, useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { useState } from "react";

export const usePurchaseDetail = () => {
  const params = useParams();
  const [active, setActive] = useState(0);
  const { data } = useQuery(FetchTravelproductDocument, {
    variables: {
      travelproductId: String(params.productId),
    },
  });
  const [deleteTravelproduct] = useMutation(DeleteTravelproductDocument);
  const images = data?.fetchTravelproduct.images ?? [];
  const productImages = images.length >= 4 ? images : [...images, ...Array(4 - images.length).fill("")];

  const onClickDeleteProduct = () => {
    deleteTravelproduct({
      variables: {
        travelproductId: String(params.productId),
      },
    });
  };

  return { onClickDeleteProduct, active, setActive, data, productImages };
};
