import { FetchBoardQuery } from "@/commons/graphql/graphql";

export interface IBoardWriteInputChange {
  title?: string;
  contents?: string;
}

export interface IBoardWriteData {
  isEdit: boolean;
  data?: FetchBoardQuery;
}
