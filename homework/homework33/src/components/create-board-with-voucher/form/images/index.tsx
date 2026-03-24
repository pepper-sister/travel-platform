import { IFormProps, ISetFormProps } from "../../types";
import { useImages } from "./hook";
import ImageAddUI from "./image-add";
import ImageUploadUI from "./image-upload";

type Props = IFormProps & ISetFormProps;

export default function ImagesUI({ form, setForm }: Props) {
  const { isVoucher, fileRef, onClickUpload, onChangeFile, onClickDelete } = useImages({ setForm });

  return (
    <div className="column__sort gap__8">
      <div className="row__sort gap__4">
        <p className="c__333333">사진 첨부</p>
        {isVoucher ? <p className="c__F66A6A">*</p> : ""}
      </div>
      <div className="row__sort gap__16">
        {isVoucher ? "" : <ImageAddUI />}
        <ImageUploadUI form={form} onClickUpload={onClickUpload} onClickDelete={onClickDelete} />
        <input
          type="file"
          onChange={onChangeFile}
          style={{ display: "none" }}
          ref={fileRef}
          accept="image/jpeg,image/png"
        />
        {isVoucher ? "" : <ImageAddUI />}
      </div>
    </div>
  );
}
