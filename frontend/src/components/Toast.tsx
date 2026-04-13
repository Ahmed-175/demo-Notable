import { useContext } from "react";
import { toastContext } from "../context/toastContext";
import { MdErrorOutline } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const Toast = () => {
  const context = useContext(toastContext);

  if (!context || !context.toast) return null;

  return (
    <div
      className={`absolute bottom-15 right-15 z-50 p-2 px-4 flex justify-center items-center text-white  rounded-lg 
        ${context.toast.type == "success" ? " bg-green-600" : "bg-red-600"}  `}
    >
      {context.toast.type == "error" ? (
        <MdErrorOutline className="text-2xl mr-2" />
      ) : (
        <FaCheckCircle className="text-2xl mr-2" />
      )}
      {context.toast.message}
    </div>
  );
};

export default Toast;
