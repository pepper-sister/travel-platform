import { UseFormSetValue, UseFormWatch } from "react-hook-form";

export interface TagProps {
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
}
