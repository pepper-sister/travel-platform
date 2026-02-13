import BoardsDetailButtonUI from "./boards-detail-button";
import BoardsDetailContentsUI from "./boards-detail-contents";
import BoardsDetailLikeUI from "./boards-detail-like";
import BoardsDetailLocationUI from "./boards-detail-location";
import BoardsDetailTitleUI from "./boards-detail-title";
import { useBoardsDetail } from "./hook";

export default function BoardsDetailUI() {
  const { data } = useBoardsDetail();

  return (
    <div className="column__sort gap__24">
      <div className="f__28 w__700 l__36">{data?.fetchBoard.title}</div>
      <div className="column__sort gap__24">
        <div className="column__sort gap__16">
          <BoardsDetailTitleUI data={data?.fetchBoard} />
          <div className="div"></div>
          <BoardsDetailLocationUI data={data?.fetchBoard} />
        </div>
        <BoardsDetailContentsUI data={data?.fetchBoard} />
        <BoardsDetailLikeUI />
      </div>
      <BoardsDetailButtonUI />
      <div className="div"></div>
    </div>
  );
}
