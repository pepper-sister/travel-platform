import { MouseEvent } from "react";

export interface IImageProps {
  images: [];
  onClickUpload: () => void;
  onClickDelete: (event: MouseEvent<HTMLDivElement>) => void;
}
