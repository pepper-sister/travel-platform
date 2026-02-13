import { useParams } from "next/navigation";

export const useBoardsDetailButton = () => {
  const params = useParams();

  return { params };
};
