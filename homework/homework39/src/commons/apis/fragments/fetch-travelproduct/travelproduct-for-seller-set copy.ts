import { gql } from "@apollo/client";

export const TravelproductForSellerSet = gql`
  fragment TravelproductForSellerSet on Travelproduct {
    seller {
      _id
      email
      name
      picture
    }
  }
`;
