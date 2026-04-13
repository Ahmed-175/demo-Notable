import { createContext, useState } from "react";
import type { IToast } from "../types/error.type";

interface IToastContext {
  toast: IToast | null;
  showToast: (msg: IToast) => void;
}

export const toastContext = createContext<IToastContext | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<IToast | null>(null);
  const showToast = (msg: IToast) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <toastContext.Provider value={{ toast, showToast }}>
      {children}
    </toastContext.Provider>
  );
};
