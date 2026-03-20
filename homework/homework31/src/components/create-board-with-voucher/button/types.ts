import { FetchBoardQuery } from "@/commons/graphql/graphql";

export interface IActiveProps {
  isActive: boolean;
}

export interface IFetchBoardData {
  data: FetchBoardQuery["fetchBoard"] | undefined;
}
