import { FetchBoardCommentsDocument, FetchTravelproductQuestionsDocument } from "@/commons/graphql/graphql";
import { usePurchaseStore } from "@/commons/stores/purchase";
import { useQuery } from "@apollo/client/react";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useBoardsCommentList = () => {
  const [hasMore, setHasMore] = useState(true);
  const params = useParams();
  const pathname = usePathname();
  const isPurchase = pathname.includes("purchase");
  const { setIsPurchase } = usePurchaseStore();

  useEffect(() => {
    setIsPurchase(isPurchase);
  }, [isPurchase, setIsPurchase]);

  const commentQuery = useQuery(FetchBoardCommentsDocument, {
    variables: { boardId: String(params.boardId) },
    skip: isPurchase,
  });
  const questionQuery = useQuery(FetchTravelproductQuestionsDocument, {
    variables: { travelproductId: String(params.travelproductId) },
    skip: !isPurchase,
  });
  const data = isPurchase ? questionQuery.data?.fetchTravelproductQuestions : commentQuery.data?.fetchBoardComments;

  const onNext = () => {
    if (!data) return;

    if (isPurchase) {
      questionQuery.fetchMore({
        variables: {
          page: Math.ceil(data.length / 10) + 1,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult.fetchTravelproductQuestions.length) {
            setHasMore(false);
            return prev;
          }

          return {
            fetchTravelproductQuestions: [
              ...prev.fetchTravelproductQuestions,
              ...fetchMoreResult.fetchTravelproductQuestions,
            ],
          };
        },
      });
    } else {
      commentQuery.fetchMore({
        variables: {
          page: Math.ceil(data.length / 10) + 1,
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
    }
  };

  return { data, onNext, hasMore };
};
