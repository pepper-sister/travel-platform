import { FetchTravelproductsDocument } from "@/commons/graphql/graphql";
import { useVoucherStore } from "@/commons/stores/voucher";
import { useQuery } from "@apollo/client/react";

export const useVoucher = () => {
  const { isReservable } = useVoucherStore();
  const { data } = useQuery(FetchTravelproductsDocument, {
    variables: {
      isSoldout: !isReservable,
    },
  });

  return { data };
};
