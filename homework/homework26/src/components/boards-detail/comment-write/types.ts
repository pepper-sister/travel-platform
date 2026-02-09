import { FetchBoardCommentsQuery } from "@/commons/graphql/graphql";
import { Dispatch, SetStateAction } from "react";

interface ICommentWriteProps {
  params: {
    page?: number;
    boardId?: string;
  };
}

interface ICommentEditProps extends ICommentWriteProps {
  isCommentEdit: true;
  setIsCommentEdit: Dispatch<SetStateAction<boolean>>;
  el: FetchBoardCommentsQuery["fetchBoardComments"][0];
  boardCommentId: string;
}

export type CommentWriteProps = ICommentWriteProps | ICommentEditProps;
