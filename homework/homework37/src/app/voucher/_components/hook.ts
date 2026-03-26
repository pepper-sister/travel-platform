import { FetchTravelproductsDocument } from "@/commons/graphql/graphql";
import { useVoucherStore } from "@/commons/stores/voucher";
import { useQuery } from "@apollo/client/react";
import { useEffect } from "react";

export const useVoucher = () => {
  const { setIsVoucher, isReservable } = useVoucherStore();

  const { data } = useQuery(FetchTravelproductsDocument, {
    variables: {
      isSoldout: !isReservable,
    },
  });

  useEffect(() => {
    setIsVoucher(true);
  }, []);

  return { data };
};
