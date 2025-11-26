export interface IBoardList {
  _id: string;
  writer: string;
  title: string;
  contents: string;
  createdAt: string;
}

export interface IBoardListData {
  fetchBoards: IBoardList[];
}
