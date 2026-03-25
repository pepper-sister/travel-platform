import { UseFormGetValues, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { useImages } from "./hook";
import ImageUploadUI from "./image-upload";
import { memo } from "react";

type ImagesProps = {
  index: number;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  watch: UseFormWatch<any>;
};

function ImagesUI({ index, setValue, getValues, watch }: ImagesProps) {
  const { fileRef, onClickUpload, onChangeFile, onClickDelete } = useImages({ setValue, getValues });
  const images = watch("images") || [];

  return (
    <>
      <ImageUploadUI images={images} index={index} onClickUpload={onClickUpload} onClickDelete={onClickDelete} />
      <input
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
        ref={fileRef}
        accept="image/jpeg,image/png"
      />
    </>
  );
}

export default memo(ImagesUI);
