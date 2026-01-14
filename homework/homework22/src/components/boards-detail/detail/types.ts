import { FetchBoardQuery } from "@/commons/graphql/graphql";

export interface IBoardDetailData {
  data?: FetchBoardQuery;
  params: {
    boardId?: string;
  };
}
