import { FetchBoardCommentsDocument, FetchTravelproductQuestionsDocument } from "@/commons/graphql/graphql";
import { useVoucherStore } from "@/commons/stores/voucher";
import { useQuery } from "@apollo/client/react";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useCommentWithQuestionList = () => {
  const [hasMore, setHasMore] = useState(true);
  const params = useParams();
  const pathname = usePathname();
  const isVoucher = pathname.includes("voucher");
  const { setIsVoucher } = useVoucherStore();

  useEffect(() => {
    setIsVoucher(isVoucher);
  }, [isVoucher, setIsVoucher]);

  const commentQuery = useQuery(FetchBoardCommentsDocument, {
    variables: { boardId: String(params.boardId) },
    skip: isVoucher,
  });
  const questionQuery = useQuery(FetchTravelproductQuestionsDocument, {
    variables: { travelproductId: String(params.travelproductId) },
    skip: !isVoucher,
  });
  const data = isVoucher ? questionQuery.data?.fetchTravelproductQuestions : commentQuery.data?.fetchBoardComments;

  const onNext = () => {
    if (!data) return;

    if (isVoucher) {
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
