"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CatPicture() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const dogApi = async () => {
      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await result.json();
      setImageUrl(data.message);
    };
    dogApi();
  }, []);

  return (
    <>
      <Image src={imageUrl} alt="강아지" width={0} height={0} sizes="100vw" />
    </>
  );
}
