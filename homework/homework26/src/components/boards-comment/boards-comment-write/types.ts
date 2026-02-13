import { FetchBoardCommentsQuery } from "@/commons/graphql/graphql";

export interface ICommentEditProps {
  el?: FetchBoardCommentsQuery["fetchBoardComments"][0];
  boardCommentId?: string;
}
