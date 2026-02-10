import { DeleteTravelproductDocument } from "@/commons/graphql/graphql";
import { useMutation } from "@apollo/client/react";
import { useParams } from "next/navigation";

export const usePurchaseDetailTitle = () => {
  const params = useParams();
  const titleIcon = ["delete", "link", "location"];
  const [deleteTravelproduct] = useMutation(DeleteTravelproductDocument);

  const onClickDeleteProduct = () => {
    deleteTravelproduct({
      variables: {
        travelproductId: String(params.productId),
      },
    });
  };

  return { titleIcon, onClickDeleteProduct };
};
