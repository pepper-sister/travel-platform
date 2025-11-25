export interface IResult {
  data: any;
}

export interface IChangeInput {
  title?: string;
  contents?: string;
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IData {
  fetchBoard?: any;
  fetchBoards?: any;
}
