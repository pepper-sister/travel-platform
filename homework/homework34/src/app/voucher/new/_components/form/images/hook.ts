import { useMutation } from "@apollo/client/react";
import { ChangeEvent, useRef } from "react";
import { UplaodFileDocument } from "@/commons/graphql/graphql";
import { UseFormSetValue } from "react-hook-form";

type ImagesProps = {
  setValue: UseFormSetValue<any>;
};

export const useImages = ({ setValue }: ImagesProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UplaodFileDocument);

  const onClickUpload = () => {
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

    setValue("images", url);
  };

  const onClickDelete = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setValue("images", "");
  };

  return {
    fileRef,
    onClickUpload,
    onChangeFile,
    onClickDelete,
  };
};
