import { useState } from "react";

export const useCommentListItem = () => {
  const [isCommentEdit, setIsCommentEdit] = useState(false);

  const onClickEditComment = () => {
    setIsCommentEdit(!isCommentEdit);
  };

  return { isCommentEdit, setIsCommentEdit, onClickEditComment };
};
