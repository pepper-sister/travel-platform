import { useBoardEditStore } from "@/commons/stores/board-edit";
import { useParams } from "next/navigation";

export const useButton = () => {
  const params = useParams();
  const { setIsBoardEdit } = useBoardEditStore();

  const onClickEdit = () => {
    setIsBoardEdit(true);
  };

  return { params, onClickEdit };
};
