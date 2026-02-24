"use client";

import CommentWithQuestionListUI from "@/components/comment-with-question/comment-with-question-list";
import CommentWithQuestionWriteUI from "@/components/comment-with-question/comment-with-question-write";
import { useBoardsDetail } from "./_components/hook";
import TitleUI from "./_components/title";
import LocationUI from "./_components/location";
import ContentsUI from "./_components/contents";
import LikeDislikeUI from "./_components/like-dislike";
import ButtonUI from "./_components/button";

export default function BoardsDetail() {
  const { data } = useBoardsDetail();

  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20">
        <div className="column__sort gap__24">
          <div className="f__28 w__700 l__36">{data?.fetchBoard.title}</div>
          <div className="column__sort gap__24">
            <div className="column__sort gap__16">
              <TitleUI data={data?.fetchBoard} />
              <div className="div"></div>
              <LocationUI data={data?.fetchBoard} />
            </div>
            <ContentsUI data={data?.fetchBoard} />
            <LikeDislikeUI data={data?.fetchBoard} />
          </div>
          <ButtonUI />
          <div className="div"></div>
        </div>
        <CommentWithQuestionWriteUI />
        <CommentWithQuestionListUI />
      </div>
    </div>
  );
}
