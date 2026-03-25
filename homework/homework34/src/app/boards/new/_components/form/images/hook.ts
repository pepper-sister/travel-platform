import { useMutation } from "@apollo/client/react";
import { ChangeEvent, useRef, useState } from "react";
import { UplaodFileDocument } from "@/commons/graphql/graphql";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";

type ImagesProps = {
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
};

export const useImages = ({ setValue, getValues }: ImagesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UplaodFileDocument);

  const onClickUpload = (index: number) => {
    setCurrentIndex(index);
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("파일 크기는 최대 5MB입니다.");
      return;
    }

    const result = await uploadFile({ variables: { file } });
    const url = result.data?.uploadFile?.url;
    if (!url) return;

    const images = getValues("images") || [];
    const newImages = [...images];
    newImages[currentIndex] = url;

    setValue("images", newImages);
  };

  const onClickDelete = (index: number) => {
    const images = getValues("images") || [];
    const newImages = [...images];
    newImages[index] = "";

    setValue("images", newImages);
  };

  return {
    fileRef,
    onClickUpload,
    onChangeFile,
    onClickDelete,
  };
};
