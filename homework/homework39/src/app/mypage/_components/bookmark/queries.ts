import { gql } from "@apollo/client";

export const FETCH_TRAVELPRODUCTS_ISOLD = gql`
  query fetchTravelproductsISold($search: String, $page: Int) {
    fetchTravelproductsISold(search: $search, page: $page) {
      _id
      name
      price
      soldAt
      createdAt
    }
  }
`;

export const FETCH_TRAVELPRODUCTS_IPICKED = gql`
  query fetchTravelproductsIPicked($search: String, $page: Int) {
    fetchTravelproductsIPicked(search: $search, page: $page) {
      _id
      name
      price
      seller {
        name
      }
      createdAt
    }
  }
`;
