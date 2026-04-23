import { useState } from "react";

export const useNavigation = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return { open, showDrawer, onClose };
};
