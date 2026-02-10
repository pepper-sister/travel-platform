import { FetchTravelproductsDocument } from "@/commons/graphql/graphql";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";

export const usePurchase = () => {
  const [active, setActive] = useState(true);
  const reserveIcon = [
    ["single", "1인 전용"],
    ["planterior", "플랜테리어"],
    ["apartment", "아파트"],
    ["hotel", "호텔"],
    ["camp", "캠핑"],
    ["service", "룸 서비스 가능"],
    ["fire", "불멍"],
    ["spa", "반신욕&스파"],
    ["house", "바다 위 숙소"],
  ];
  const { data } = useQuery(FetchTravelproductsDocument, {
    variables: {
      isSoldout: !active,
    },
  });

  const onClickActive = () => {
    setActive((prev) => !prev);
  };

  return { active, onClickActive, reserveIcon, data };
};
