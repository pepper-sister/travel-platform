import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { useImages } from "./hook";
import ImageUploadUI from "./image-upload";

type ImagesProps = {
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
};

export default function ImagesUI({ setValue, watch }: ImagesProps) {
  const { fileRef, onClickUpload, onChangeFile, onClickDelete } = useImages({ setValue });
  const images = watch("images") || [];

  return (
    <div className="column__sort gap__8">
      <div className="row__sort gap__4">
        <p className="c__333333">사진 첨부</p>
        <p className="c__F66A6A">*</p>
      </div>
      <div className="row__sort gap__16">
        <ImageUploadUI images={images} onClickUpload={onClickUpload} onClickDelete={onClickDelete} />
        <input
          type="file"
          onChange={onChangeFile}
          style={{ display: "none" }}
          ref={fileRef}
          accept="image/jpeg,image/png"
        />
      </div>
    </div>
  );
}
