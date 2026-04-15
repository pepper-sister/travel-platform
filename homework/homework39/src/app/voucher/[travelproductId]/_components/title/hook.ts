import { DeleteTravelproductDocument, ToggleTravelproductPickDocument } from "@/commons/graphql/graphql";
import { useMutation } from "@apollo/client/react";
import { useParams } from "next/navigation";

export const useTitle = () => {
  const params = useParams();
  const titleIcon = ["delete", "link", "location"];
  const [deleteTravelproduct] = useMutation(DeleteTravelproductDocument);
  const [toggleTravelproduct] = useMutation(ToggleTravelproductPickDocument);

  const onClickDeleteProduct = () => {
    deleteTravelproduct({
      variables: {
        travelproductId: String(params.travelproductId),
      },
    });
  };

  const onClickPick = async () => {
    toggleTravelproduct({
      variables: {
        travelproductId: String(params.travelproductId),
      },
      update(cache, { data }) {
        const newPickedCount = data?.toggleTravelproductPick;

        cache.modify({
          id: cache.identify({
            __typename: "Travelproduct",
            id: params.travelproductId,
          }),
          fields: {
            pickedCount() {
              return newPickedCount;
            },
          },
        });
      },
    });
  };

  return { titleIcon, onClickDeleteProduct, onClickPick };
};
