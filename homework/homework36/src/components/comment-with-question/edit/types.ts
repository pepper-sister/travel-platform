import { FetchBoardCommentsQuery, FetchTravelproductQuestionsQuery } from "@/commons/graphql/graphql";

export interface IEditProps {
  el:
    | FetchBoardCommentsQuery["fetchBoardComments"][0]
    | FetchTravelproductQuestionsQuery["fetchTravelproductQuestions"][0];
  isEdit: boolean;
  setIsEdit: (value: boolean) => void;
}
