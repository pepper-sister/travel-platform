"use client";

import { useOpenAPI } from "@/components/openapis-list/hook";
import Image from "next/image";

export default function CatPicture() {
  const { imageUrl } = useOpenAPI();

  return (
    <>
      <Image src={imageUrl} alt="강아지" width={0} height={0} sizes="100vw" />
    </>
  );
}
