import { FetchBoardQuery } from "@/commons/graphql/graphql";

export interface BoardAddressInput {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

export interface IBoardWriteInputChange {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: BoardAddressInput;
}

export interface IBoardWriteData {
  isEdit: boolean;
  data?: FetchBoardQuery;
}
