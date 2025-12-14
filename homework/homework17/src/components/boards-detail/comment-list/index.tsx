import { IFetchCommentData } from "./types";
import { useCommentList } from "./hook";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentListItemUI from "../comment-list-item";

export default function CommentListUI(props: IFetchCommentData) {
  const { data, onNext, hasMore } = useCommentList(props);

  return (
    <InfiniteScroll
      className="column__sort column__center"
      next={onNext}
      hasMore={hasMore}
      loader={<div>로딩중입니다.</div>}
      dataLength={data?.fetchBoardComments.length ?? 0}
    >
      {data?.fetchBoardComments && data.fetchBoardComments.length > 0 ? (
        data?.fetchBoardComments.map((el, index) => <CommentListItemUI key={el._id} el={el} index={index} />)
      ) : (
        <p className="f__14 w__400 l__20 c__777777">등록된 댓글이 없습니다.</p>
      )}
    </InfiniteScroll>
  );
}
