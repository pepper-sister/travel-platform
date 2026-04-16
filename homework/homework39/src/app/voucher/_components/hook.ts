import { FetchTravelproductsDocument } from "@/commons/graphql/graphql";
import { useVoucherStore } from "@/commons/stores/voucher";
import { useQuery } from "@apollo/client/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useVoucher = () => {
  const { isReservable } = useVoucherStore();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.has("startDate") || params.has("endDate")) {
      params.delete("startDate");
      params.delete("endDate");
      window.history.replaceState(null, "", `?${params.toString()}`);
    }
  }, []);

  const search = searchParams.get("search");
  const page = searchParams.get("page") ?? 1;
  const { data } = useQuery(FetchTravelproductsDocument, {
    variables: {
      isSoldout: !isReservable,
      search,
      page: Number(page),
    },
  });

  return { data };
};
