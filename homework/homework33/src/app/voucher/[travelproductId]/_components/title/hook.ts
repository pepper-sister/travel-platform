import { DeleteTravelproductDocument } from "@/commons/graphql/graphql";
import { useMutation } from "@apollo/client/react";
import { useParams } from "next/navigation";

export const useTitle = () => {
  const params = useParams();
  const titleIcon = ["delete", "link", "location"];
  const [deleteTravelproduct] = useMutation(DeleteTravelproductDocument);

  const onClickDeleteProduct = () => {
    deleteTravelproduct({
      variables: {
        travelproductId: String(params.travelproductId),
      },
    });
  };

  return { titleIcon, onClickDeleteProduct };
};
