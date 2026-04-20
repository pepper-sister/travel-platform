import { gql } from "@apollo/client";

export const FETCH_TRAVEL_PRODUCT_BEST = gql`
  query fetchTravelproductsOfTheBest {
    fetchTravelproductsOfTheBest {
      _id
      name
      contents
      price
      images
      pickedCount
    }
  }
`;
