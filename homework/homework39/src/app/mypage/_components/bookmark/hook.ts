import {
  DeleteTravelproductDocument,
  FetchTravelproductsIPickedDocument,
  FetchTravelproductsISoldDocument,
  ToggleTravelproductPickDocument,
} from "@/commons/graphql/graphql";
import { useMutation, useQuery } from "@apollo/client/react";

export const useBookMark = () => {
  const { data: data } = useQuery(FetchTravelproductsISoldDocument, {
    variables: {
      search: "",
      page: 1,
    },
  });
  const { data: result } = useQuery(FetchTravelproductsIPickedDocument, {
    variables: {
      search: "",
      page: 1,
    },
  });

  const [deleteTravelproduct] = useMutation(DeleteTravelproductDocument);
  const [toggleTravelproduct] = useMutation(ToggleTravelproductPickDocument);

  const onClickDeleteProduct = (travelproductId: string) => () => {
    deleteTravelproduct({
      variables: {
        travelproductId: String(travelproductId),
      },
      refetchQueries: [
        {
          query: FetchTravelproductsISoldDocument,
          variables: { search: "", page: 1 },
        },
      ],
    });
  };

  const onClickDeleteBookMark = (travelproductId: string) => () => {
    toggleTravelproduct({
      variables: {
        travelproductId: String(travelproductId),
      },
      refetchQueries: [
        {
          query: FetchTravelproductsIPickedDocument,
          variables: { search: "", page: 1 },
        },
      ],
    });
  };

  return { data, result, onClickDeleteProduct, onClickDeleteBookMark };
};
