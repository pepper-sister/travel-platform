import Image from "next/image";
import { IFetchCommentData } from "./types";
import { useCommentList } from "./hook";

export default function CommentListUI(props: IFetchCommentData) {
  const { data } = useCommentList(props);

  return (
    <div className="column__sort column__center">
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

                  <Image src="/images/star.png" alt="star" width={24} height={24} />
                  <Image src="/images/star.png" alt="star" width={24} height={24} />
                  <Image src="/images/star.png" alt="star" width={24} height={24} />
                  <Image src="/images/star.png" alt="star" width={24} height={24} />
                  <Image src="/images/star.png" alt="star" width={24} height={24} />
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
    </div>
  );
}
