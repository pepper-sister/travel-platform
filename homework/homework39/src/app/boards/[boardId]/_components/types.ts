import { BoardForAddressSetFragment, BoardForLikeSetFragment, FetchBoardQuery } from "@/commons/graphql/graphql";

export interface IFetchBoardData {
  data?: FetchBoardQuery["fetchBoard"] & BoardForLikeSetFragment & BoardForAddressSetFragment;
}
