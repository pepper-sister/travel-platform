import Image from "next/image";
import { IFetchCommentData } from "./types";
import { useCommentList } from "./hook";
import { Rate } from "antd";
import styles from "./styles.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

export default function CommentListUI(props: IFetchCommentData) {
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useCommentList(props);

  const onNext = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments.length) {
          setHasMore(false);
          return prev;
        }

        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
        };
      },
    });
  };

  return (
    <InfiniteScroll
      className="column__sort column__center"
      next={onNext}
      hasMore={hasMore}
      loader={<div>로딩중입니다.</div>}
      dataLength={data?.fetchBoardComments.length ?? 0}
    >
      {data?.fetchBoardComments && data.fetchBoardComments.length > 0 ? (
        data?.fetchBoardComments.map((el, index) => (
          <div key={el._id} className="width__100 column__sort gap__40">
            {index !== 0 && <div className="div margin__top__40"></div>}
            <div className="column__sort gap__8">
              <div className="row__sort row__between column__center">
                <div className="row__sort gap__8">
                  <div className="row__sort gap__4">
                    <Image src="/images/person.png" className="person__img" alt="person" width={24} height={24} />
                    <p className="f__14 w__300 c__5F5F5F">{el.writer}</p>
                  </div>

                  <Rate className={styles.comment__star} value={el.rating} disabled={true} />
                </div>

                <div className="row__sort gap__8">
                  <Image src="/images/edit.png" className="height__20 click" alt="edit" width={20} height={20} />
                  <Image src="/images/close.png" className="height__20 click" alt="close" width={20} height={20} />
                </div>
              </div>

              <p className="w__400 c__333333">{el.contents}</p>

              <p className="f__14 w__400 c__818181">{el.createdAt.slice(0, 10)}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="f__14 w__400 l__20 c__777777">등록된 댓글이 없습니다.</p>
      )}
    </InfiniteScroll>
  );
}
