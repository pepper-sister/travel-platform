import { FetchBoardCommentsQuery } from "@/commons/graphql/graphql";

export interface IFetchCommentItemData {
  el: FetchBoardCommentsQuery["fetchBoardComments"][0];
  index: number;
  params: {
    page?: number;
    boardId?: string;
  };
}
