import { ChangeEvent } from "react";

export interface IFormProps {
  isSignUp: boolean;
  input: { email: string; name: string; password: string; passwordCheck: string };
  error: boolean;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}
