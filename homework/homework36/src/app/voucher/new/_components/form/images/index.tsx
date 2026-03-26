import { UseFormSetValue } from "react-hook-form";
import { useImages } from "./hook";
import ImageUploadUI from "./image-upload";
import { memo } from "react";

type ImagesProps = {
  setValue: UseFormSetValue<any>;
};

function ImagesUI({ setValue }: ImagesProps) {
  const { imageUrl, fileRef, onClickUpload, onChangeFile, onClickDelete } = useImages({ setValue });

  return (
    <div className="column__sort gap__8">
      <div className="row__sort gap__4">
        <p className="c__333333">사진 첨부</p>
        <p className="c__F66A6A">*</p>
      </div>
      <div className="row__sort gap__16">
        <ImageUploadUI imageUrl={imageUrl} onClickUpload={onClickUpload} onClickDelete={onClickDelete} />
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

export default memo(ImagesUI);
