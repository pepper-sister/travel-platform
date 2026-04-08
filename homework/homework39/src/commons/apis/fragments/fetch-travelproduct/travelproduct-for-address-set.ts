import { gql } from "@apollo/client";

export const TravelproductForAddressSet = gql`
  fragment TravelproductForAddressSet on Travelproduct {
    travelproductAddress {
      lat
      lng
    }
  }
`;
