import { Dispatch, SetStateAction } from "react";

export interface ISearchProps {
  refetch?: ({}) => void;
  setKeyword?: Dispatch<SetStateAction<string>>;
  isBoard: boolean;
}
