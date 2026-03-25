import InfiniteScroll from "react-infinite-scroll-component";
import { useList } from "./hook";
import { useVoucherStore } from "@/commons/stores/voucher";
import ItemUI from "../item";

export default function ListUI() {
  const { data, onNext, hasMore } = useList();
  const { isVoucher } = useVoucherStore();

  return (
    <InfiniteScroll
      className="column__sort column__center"
      next={onNext}
      hasMore={hasMore}
      loader={<div></div>}
      dataLength={data?.length ?? 0}
    >
      {data && data.length > 0 ? (
        data?.map((el, index) => <ItemUI key={el._id} el={el} index={index} />)
      ) : (
        <p className="f__14 w__400 l__20 c__777777">
          {isVoucher ? "등록된 문의사항이 없습니다." : "등록된 댓글이 없습니다."}
        </p>
      )}
    </InfiniteScroll>
  );
}
