import { gql } from "@apollo/client";
import { TravelproductForAddressSet } from "../fragments/fetch-travelproduct/travelproduct-for-address-set";
import { TravelproductForSellerSet } from "../fragments/fetch-travelproduct/travelproduct-for-seller-set copy";

export const FETCH_TRAVEL_PRODUCT = gql`
  ${TravelproductForAddressSet}
  ${TravelproductForSellerSet}

  query fetchTravelproduct(
    $travelproductId: ID!
    $isTravelProductForAddressSet: Boolean = false
    $isTravelProductForSellerSet: Boolean = false
  ) {
    fetchTravelproduct(travelproductId: $travelproductId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount

      ...TravelproductForAddressSet @include(if: $isTravelProductForAddressSet)
      ...TravelproductForSellerSet @include(if: $isTravelProductForSellerSet)
    }
  }
`;
