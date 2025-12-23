"use client";

import { useEffect, useState } from "react";

export const useOpenAPI = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const dogApi = async () => {
      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await result.json();
      setImageUrl(data.message);
    };
    dogApi();
  }, []);

  return { imageUrl };
};
