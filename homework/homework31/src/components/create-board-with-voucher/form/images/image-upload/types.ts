import { MouseEvent } from "react";

export interface IImageProps {
  onClickUpload: () => void;
  onClickDelete: (event: MouseEvent<HTMLDivElement>) => void;
}
