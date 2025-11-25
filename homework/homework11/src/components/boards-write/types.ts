export interface ICreateBoardResult {
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
