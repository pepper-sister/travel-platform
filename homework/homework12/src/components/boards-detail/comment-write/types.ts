export interface IFetchCommentData {
  params: {
    boardId: string;
  };
  refetch: () => void;
}
