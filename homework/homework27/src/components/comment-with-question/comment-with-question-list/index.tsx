import InfiniteScroll from "react-infinite-scroll-component";
import { useCommentWithQuestionList } from "./hook";
import CommentWithQuestionItemUI from "../comment-with-question-item";
import { useVoucherStore } from "@/commons/stores/voucher";

export default function CommentWithQuestionListUI() {
  const { data, onNext, hasMore } = useCommentWithQuestionList();
  const { isVoucher } = useVoucherStore();

  return (
    <InfiniteScroll
      className="column__sort column__center"
      next={onNext}
      hasMore={hasMore}
      loader={<div>로딩중입니다.</div>}
      dataLength={data?.length ?? 0}
    >
      {data && data.length > 0 ? (
        data?.map((el, index) => <CommentWithQuestionItemUI key={el._id} el={el} index={index} />)
      ) : (
        <p className="f__14 w__400 l__20 c__777777">
          {isVoucher ? "등록된 문의사항이 없습니다." : "등록된 댓글이 없습니다."}
        </p>
      )}
    </InfiniteScroll>
  );
}
