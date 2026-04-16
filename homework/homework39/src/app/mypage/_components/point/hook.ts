import {
  FetchPointTransactionsDocument,
  FetchPointTransactionsOfBuyingDocument,
  FetchPointTransactionsOfLoadingDocument,
  FetchPointTransactionsOfSellingDocument,
} from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";

export const usePoint = () => {
  const { data: totalData } = useQuery(FetchPointTransactionsDocument, {
    variables: {
      search: "",
      page: 1,
    },
  });

  const { data: chargeData } = useQuery(FetchPointTransactionsOfLoadingDocument, {
    variables: {
      search: "",
      page: 1,
    },
  });

  const { data: voucherData } = useQuery(FetchPointTransactionsOfBuyingDocument, {
    variables: {
      search: "",
      page: 1,
    },
  });

  const { data: saleData } = useQuery(FetchPointTransactionsOfSellingDocument, {
    variables: {
      search: "",
      page: 1,
    },
  });

  return { totalData, chargeData, voucherData, saleData };
};
