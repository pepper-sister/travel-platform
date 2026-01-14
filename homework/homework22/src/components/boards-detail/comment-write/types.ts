import { FetchBoardCommentsQuery } from "@/commons/graphql/graphql";
import { Dispatch, SetStateAction } from "react";

export interface IFetchCommentData {
  params: {
    page?: number;
    boardId?: string;
  };
  isCommentEdit?: boolean;
  setIsCommentEdit: Dispatch<SetStateAction<boolean>>;
  el: FetchBoardCommentsQuery["fetchBoardComments"][0];
  boardCommentId: string;
}
