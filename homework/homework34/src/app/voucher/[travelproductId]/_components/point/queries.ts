import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_LOADING = gql`
  mutation createPointTransactionOfLoading($paymentId: ID!) {
    createPointTransactionOfLoading(paymentId: $paymentId) {
      _id
    }
  }
`;
