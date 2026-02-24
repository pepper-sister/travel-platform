import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IChangeFormProps {
  onChangeForm: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export interface IModalProps {
  isModalOpen?: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
