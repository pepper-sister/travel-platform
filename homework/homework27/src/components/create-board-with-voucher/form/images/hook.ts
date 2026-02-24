import { useMutation } from "@apollo/client/react";
import { ChangeEvent, useRef } from "react";
import { UplaodFileDocument } from "@/commons/graphql/graphql";
import { useVoucherStore } from "@/commons/stores/voucher";
import { ISetFormProps } from "../../types";

export const useImages = ({ setForm }: ISetFormProps) => {
  const { isVoucher } = useVoucherStore();
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
    setForm((prev) => ({ ...prev, images: result.data?.uploadFile?.url ?? "" }));
  };

  const onClickDelete = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setForm((prev) => ({ ...prev, images: "" }));
  };

  return {
    isVoucher,
    fileRef,
    onClickUpload,
    onChangeFile,
    onClickDelete,
  };
};
