"use client";

import { useOpenAPI } from "@/components/openapis-list/hook";

export default function CatPicture() {
  const { imageUrl } = useOpenAPI();

  return (
    <>
      <img src={imageUrl} />
    </>
  );
}
