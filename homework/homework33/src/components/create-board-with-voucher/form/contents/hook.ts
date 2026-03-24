import { ISetFormProps } from "../../types";

export const useContents = ({ setForm }: ISetFormProps) => {
  const onChangeContents = (value: string) => {
    setForm((prev) => ({ ...prev, contents: value }));
  };

  return { onChangeContents };
};
