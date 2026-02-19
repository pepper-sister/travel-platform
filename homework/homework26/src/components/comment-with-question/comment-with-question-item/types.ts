import { FetchBoardCommentsQuery, FetchTravelproductQuestionsQuery } from "@/commons/graphql/graphql";

export interface IFetchItemData {
  el:
    | FetchBoardCommentsQuery["fetchBoardComments"][0]
    | FetchTravelproductQuestionsQuery["fetchTravelproductQuestions"][0];
  index?: number;
}
