import { useState } from "react";

export const useMyPage = () => {
  const [active, setActive] = useState("bookmark");

  return { active, setActive };
};
