import { useState } from "react";
import { useVoucherDetail } from "../hook";

export const useImage = () => {
  const [active, setActive] = useState(0);
  const { data } = useVoucherDetail();

  const images = data?.fetchTravelproduct.images ?? [];
  const productImages = images.length >= 4 ? images : [...images, ...Array(4 - images.length).fill("")];

  return { active, setActive, productImages };
};
