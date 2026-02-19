import { FetchBoardCommentsQuery, FetchTravelproductQuestionsQuery } from "@/commons/graphql/graphql";

export interface ICommentEditProps {
  el:
    | FetchBoardCommentsQuery["fetchBoardComments"][0]
    | FetchTravelproductQuestionsQuery["fetchTravelproductQuestions"][0];
  isEdit: boolean;
  setIsEdit: (value: boolean) => void;
}
