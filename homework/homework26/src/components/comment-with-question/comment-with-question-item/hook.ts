import { useState } from "react";

export const useCommentWithQuestionItem = () => {
  const [isEdit, setIsEdit] = useState(false);

  return { isEdit, setIsEdit };
};
