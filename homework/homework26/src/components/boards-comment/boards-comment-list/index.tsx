import BoardsCommentItemUI from "../boards-comment-item";
import InfiniteScroll from "react-infinite-scroll-component";
import { useBoardsCommentList } from "./hook";
import { usePurchaseStore } from "@/commons/stores/purchase";

export default function BoardsCommentListUI() {
  const { data, onNext, hasMore } = useBoardsCommentList();
  const { isPurchase } = usePurchaseStore();

  return (
    <InfiniteScroll
      className="column__sort column__center"
      next={onNext}
      hasMore={hasMore}
      loader={<div>로딩중입니다.</div>}
      dataLength={data?.length ?? 0}
    >
      {data && data.length > 0 ? (
        data?.map((el, index) => <BoardsCommentItemUI key={el._id} el={el} index={index} />)
      ) : (
        <p className="f__14 w__400 l__20 c__777777">
          {isPurchase ? "등록된 문의사항이 없습니다." : "등록된 댓글이 없습니다."}
        </p>
      )}
    </InfiniteScroll>
  );
}
