import { useState } from "react";

export const useBoardsCommentItem = () => {
  const [isEdit, setIsEdit] = useState(false);

  return { isEdit, setIsEdit };
};
