import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Picture from "./Picture";

const Header = () => {
  const { user } = useAuth();
  return (
    <div
      className=" fixed h-30 top-0 left-0 right-0 
    px-15 flex justify-between items-center"
    >
      <Link
        to={"/home"}
        className=" bg-black w-15 text-4xl flex rounded-lg
      justify-center items-center text-white h-15"
      >
        N
      </Link>

      <Link to={"/me"} className="flex justify-center items-center gap-2">
        <Picture url="" username={user?.username as string} />
        <div>
          <div className="uppercase ">{user?.username}</div>
          <div className="text-xs text-gray-600 "> {user?.email}</div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
