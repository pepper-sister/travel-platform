import { useParams } from "next/navigation";

export const useButton = () => {
  const params = useParams();

  return { params };
};
