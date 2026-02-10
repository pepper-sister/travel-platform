import { useState } from "react";
import { usePurchaseDetail } from "../hook";

export const usePurchaseDetailImage = () => {
  const [active, setActive] = useState(0);
  const { data } = usePurchaseDetail();

  const images = data?.fetchTravelproduct.images ?? [];
  const productImages = images.length >= 4 ? images : [...images, ...Array(4 - images.length).fill("")];

  return { active, setActive, productImages };
};
