import { FetchBoardCommentsQuery, FetchTravelproductQuestionsQuery } from "@/commons/graphql/graphql";

export interface IFetchCommentItemData {
  el:
    | FetchBoardCommentsQuery["fetchBoardComments"][0]
    | FetchTravelproductQuestionsQuery["fetchTravelproductQuestions"][0];
  index: number;
}
