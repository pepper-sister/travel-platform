"use client";

import styles from "./styles.module.css";
import { HTMLInputTypeAttribute } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";

interface IInputBaseProps<T extends FieldValues> {
  name: Path<T>;
  type: HTMLInputTypeAttribute;
  className: string;
  placeholder: string;
}

function InputBase<T extends FieldValues>(props: IInputBaseProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <input
      {...register(props.name)}
      type={props.type}
      className={`${styles[props.className]} ${errors[props.name] ? "border__F66A6A" : "border__D4D3D3"} btn__border`}
      placeholder={props.placeholder}
    />
  );
}

export function InputForm<T extends FieldValues>(props: IInputBaseProps<T>) {
  return <InputBase<T> {...props} />;
}
