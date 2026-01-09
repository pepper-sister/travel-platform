import { FetchBoardsQuery } from "@/commons/graphql/graphql";

export interface IBoardListProps {
  data?: FetchBoardsQuery;
  keyword: string;
}
