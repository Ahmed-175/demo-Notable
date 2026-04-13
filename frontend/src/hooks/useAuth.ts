import { useContext } from "react";
import { UserContext } from "../context/userContext";

const useAuth = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Unauthorized: useAuth must be used within UserContextProvider");
  }

  return context;
};

export default useAuth;