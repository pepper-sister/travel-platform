import { useState } from "react";
import { TagProps } from "./types";

export const useTag = ({ setValue, watch }: TagProps) => {
  const [input, setInput] = useState("");

  const tags = watch("tags") || [];

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();

      const newTags = [...tags, input.trim()];
      setValue("tags", newTags);

      setInput("");
    }
  };

  return { input, onChangeInput, onKeyDown };
};
