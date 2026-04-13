// useToast.ts

import { useContext } from "react";
import { toastContext } from "../context/toastContext";

const useToast = () => {
  const context = useContext(toastContext);
  if (!context) {
    throw new Error("no context available");
  }

  return context;
};

export default useToast;
