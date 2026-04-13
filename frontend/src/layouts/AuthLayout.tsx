import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthLayout = () => {
  const { user } = useAuth();
  if (user) return <Navigate to={"/home"} />;
  return <Outlet />;
};

export default AuthLayout;
